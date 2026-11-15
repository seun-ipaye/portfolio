import { useCallback, useEffect, useRef, useState } from "react";

// Background music: loops one section of a track with the Web Audio API
// (gapless, unlike an <audio> tag). Starts only after a click, because
// browsers block sound until the visitor interacts.
const TRACK = "/media/irradiation.mp3";
const LOOP_START = 26;
const LOOP_END = 48.5;
const VOLUME = 0.03;
const FADE = 0.6;
const CROSSFADE = 0.1; // seconds the end of the loop blends into its start

// Builds one loop-sized buffer whose start already contains the blended-in
// tail, so a single native looping source repeats forever with no seam.
function buildLoop(ctx, source) {
  const rate = source.sampleRate;
  const from = Math.floor(LOOP_START * rate);
  const length = Math.floor((LOOP_END - LOOP_START) * rate);
  const fade = Math.floor(CROSSFADE * rate);
  const out = ctx.createBuffer(source.numberOfChannels, length - fade, rate);
  for (let ch = 0; ch < out.numberOfChannels; ch++) {
    const src = source.getChannelData(ch);
    const dst = out.getChannelData(ch);
    for (let i = 0; i < dst.length; i++) dst[i] = src[from + i];
    for (let i = 0; i < fade; i++) {
      const x = (i + 1) / fade;
      dst[i] =
        src[from + i] * Math.sin((x * Math.PI) / 2) +
        src[from + length - fade + i] * Math.cos((x * Math.PI) / 2);
    }
  }
  return out;
}

export function useMusic() {
  const [on, setOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const audio = useRef({
    ctx: null,
    loop: null,
    master: null,
    source: null,
    wanted: false,
    busy: false,
  });

  const play = useCallback(async () => {
    const a = audio.current;
    if (a.busy || a.source) return;
    a.busy = true;
    try {
      if (!a.ctx) {
        a.ctx = new (window.AudioContext || window.webkitAudioContext)();
        a.master = a.ctx.createGain();
        a.master.connect(a.ctx.destination);
      }
      if (a.ctx.state === "suspended") await a.ctx.resume();
      if (!a.loop) {
        setLoading(true);
        const data = await (await fetch(TRACK)).arrayBuffer();
        a.loop = buildLoop(a.ctx, await a.ctx.decodeAudioData(data));
        setLoading(false);
      }
      if (!a.wanted) return; // switched off while it was loading
      const source = a.ctx.createBufferSource();
      source.buffer = a.loop;
      source.loop = true;
      source.connect(a.master);
      const now = a.ctx.currentTime;
      a.master.gain.cancelScheduledValues(now);
      a.master.gain.setValueAtTime(0, now);
      a.master.gain.linearRampToValueAtTime(VOLUME, now + FADE);
      source.start();
      a.source = source;
    } finally {
      a.busy = false;
      setLoading(false);
    }
  }, []);

  const pause = useCallback(() => {
    const a = audio.current;
    if (!a.source) return;
    const now = a.ctx.currentTime;
    a.master.gain.cancelScheduledValues(now);
    a.master.gain.setValueAtTime(a.master.gain.value, now);
    a.master.gain.linearRampToValueAtTime(0, now + FADE);
    a.source.stop(now + FADE);
    a.source = null;
  }, []);

  const toggle = useCallback(async () => {
    const a = audio.current;
    a.wanted = !a.wanted;
    setOn(a.wanted);
    if (!a.wanted) {
      pause();
      return;
    }
    try {
      await play();
      // clicked off and on again while loading: make sure it ends up playing
      if (a.wanted && !a.source) await play();
    } catch {
      a.wanted = false;
      setOn(false);
    }
  }, [play, pause]);

  useEffect(
    () => () => {
      const a = audio.current;
      a.wanted = false;
      try {
        a.source?.stop();
      } catch {
        /* already stopped */
      }
      a.source = null;
      a.ctx?.close();
      a.ctx = null;
      a.loop = null;
    },
    [],
  );

  return { on, loading, toggle };
}
