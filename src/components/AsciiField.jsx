// src/components/AsciiField.jsx
import { useEffect, useRef } from "react";

const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789#$%&*+=<>?/\\|{}[]~^";
const LEVELS = 10;
const WAVE_STEP = 4;

const RIPPLE_LIFE = 3;
const RIPPLE_SPEED = 240;
const RIPPLE_WIDTH = 34;
const DENT_RADIUS = 70;
const HOVER_RADIUS = 80;
const MAX_RIPPLES = 12;

const randomIndex = () => Math.floor(Math.random() * CHARS.length);
const smoothstep = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

export default function AsciiField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let cell = 4;
    let fps = 30;
    let cols = 0;
    let rows = 0;
    let waveCols = 0;
    let waveRows = 0;
    let dpr = 1;
    let glyphs = [];
    let shimmer = [];
    let wave = new Float32Array(0);
    let atlas = null;
    let raf;
    let last = 0;

    let ripples = [];
    const hover = { x: 0, y: 0, tx: 0, ty: 0, strength: 0, target: 0 };
    let dragging = false;
    let lastDrag = { x: 0, y: 0, t: 0 };

    const buildAtlas = () => {
      const size = Math.ceil(cell * dpr);
      atlas = document.createElement("canvas");
      atlas.width = size * CHARS.length;
      atlas.height = size * LEVELS;
      const a = atlas.getContext("2d");
      a.font = `${(cell + 1) * dpr}px ui-monospace, Menlo, monospace`;
      a.textBaseline = "top";
      for (let l = 0; l < LEVELS; l++) {
        a.fillStyle = `rgba(255,255,255,${0.005 + (l / (LEVELS - 1)) * 0.5})`;
        for (let c = 0; c < CHARS.length; c++) {
          a.fillText(CHARS[c], c * size, l * size);
        }
      }
    };

    const addRipple = (x, y, press, strength) => {
      ripples.push({ x, y, t0: performance.now() / 1000, press, strength });
      if (ripples.length > MAX_RIPPLES) ripples.shift();
    };

    const rippleAt = (x, y, t) => {
      let sum = 0;
      for (const rp of ripples) {
        const age = t - rp.t0;
        if (age < 0 || age > RIPPLE_LIFE) continue;
        const dx = x - rp.x;
        const dy = y - rp.y;
        const d = Math.sqrt(dx * dx + dy * dy);

        if (rp.press) {
          const press = Math.min(1, age / 0.15) * Math.exp(-age / 0.7);
          sum -=
            1.6 *
            rp.strength *
            press *
            Math.exp(-(d * d) / (2 * DENT_RADIUS * DENT_RADIUS));
        }

        const radius = Math.max(0, age - (rp.press ? 0.12 : 0)) * RIPPLE_SPEED;
        const off = d - radius;
        sum +=
          1.1 *
          rp.strength *
          Math.exp(-(off * off) / (2 * RIPPLE_WIDTH * RIPPLE_WIDTH)) *
          Math.exp(-age / 1.1);
      }
      return sum;
    };

    const render = (now) => {
      const t = now / 1000;
      const size = Math.ceil(cell * dpr);
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cx = w * (0.5 + 0.35 * Math.sin(t * 0.11));
      const cy = h * (0.5 + 0.35 * Math.cos(t * 0.09));
      const threshold = 0.08 + 0.14 * Math.sin(t * 0.22);
      const blockPx = cell * WAVE_STEP;

      ripples = ripples.filter((rp) => t - rp.t0 <= RIPPLE_LIFE);
      hover.strength += (hover.target - hover.strength) * 0.15;
      hover.x += (hover.tx - hover.x) * 0.25;
      hover.y += (hover.ty - hover.y) * 0.25;
      const hoverOn = hover.strength > 0.01;
      const hoverDenom = 2 * HOVER_RADIUS * HOVER_RADIUS;

      for (let wr = 0; wr < waveRows; wr++) {
        const y = wr * blockPx;
        for (let wc = 0; wc < waveCols; wc++) {
          const x = wc * blockPx;
          const w1 = Math.sin(x * 0.006 + y * 0.004 - t * 0.5);
          const w2 = Math.sin(x * 0.003 - y * 0.007 + t * 0.35 + 1.7);
          const dx = x - cx;
          const dy = y - cy;
          const w3 = Math.sin(Math.sqrt(dx * dx + dy * dy) * 0.009 - t * 0.45);
          let v = (w1 + w2 + w3) / 3;

          if (ripples.length) v += rippleAt(x, y, t);
          if (hoverOn) {
            const hx = x - hover.x;
            const hy = y - hover.y;
            v += 0.3 * hover.strength * Math.exp(-(hx * hx + hy * hy) / hoverDenom);
          }

          const s = smoothstep(threshold, threshold + 1.3, v);
          wave[wr * waveCols + wc] = s * s;
        }
      }

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let r = 0; r < rows; r++) {
        const waveRow = Math.floor(r / WAVE_STEP) * waveCols;
        for (let c = 0; c < cols; c++) {
          let intensity = wave[waveRow + Math.floor(c / WAVE_STEP)];
          if (intensity <= 0.01) continue;

          const i = r * cols + c;
          if (Math.random() < intensity * 0.06) {
            glyphs[i] = randomIndex();
            shimmer[i] = 0.4 + Math.random() * 0.6;
          }
          intensity *= shimmer[i];

          const level = Math.min(LEVELS - 1, Math.floor(intensity * LEVELS));
          ctx.drawImage(
            atlas,
            glyphs[i] * size,
            level * size,
            size,
            size,
            c * size,
            r * size,
            size,
            size,
          );
        }
      }
    };

    const loop = (now) => {
      raf = requestAnimationFrame(loop);
      if (now - last < 1000 / fps) return;
      last = now;
      render(now);
    };

    const onPointerDown = (e) => {
      dragging = true;
      lastDrag = { x: e.clientX, y: e.clientY, t: performance.now() };
      addRipple(e.clientX, e.clientY, true, 1);
    };

    const onPointerMove = (e) => {
      if (e.pointerType === "mouse") {
        if (hover.target === 0) {
          hover.x = e.clientX;
          hover.y = e.clientY;
        }
        hover.tx = e.clientX;
        hover.ty = e.clientY;
        hover.target = 1;
      }
      if (!dragging) return;
      const now = performance.now();
      const dx = e.clientX - lastDrag.x;
      const dy = e.clientY - lastDrag.y;
      if (now - lastDrag.t > 280 && dx * dx + dy * dy > 120 * 120) {
        addRipple(e.clientX, e.clientY, false, 0.18);
        lastDrag = { x: e.clientX, y: e.clientY, t: now };
      }
    };

    const onPointerUp = () => {
      dragging = false;
    };

    const onLeave = () => {
      hover.target = 0;
      dragging = false;
    };

    const resize = () => {
      const mobile = window.innerWidth <= 768;
      cell = mobile ? 6 : 4;
      fps = mobile ? 20 : 30;
      dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      cols = Math.ceil(window.innerWidth / cell);
      rows = Math.ceil(window.innerHeight / cell);
      waveCols = Math.ceil(cols / WAVE_STEP);
      waveRows = Math.ceil(rows / WAVE_STEP);
      wave = new Float32Array(waveCols * waveRows);
      glyphs = Array.from({ length: cols * rows }, randomIndex);
      shimmer = Array.from(
        { length: cols * rows },
        () => 0.5 + Math.random() * 0.5,
      );
      buildAtlas();
      if (reducedMotion) render(30000);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reducedMotion) {
      raf = requestAnimationFrame(loop);
      window.addEventListener("pointerdown", onPointerDown);
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
      window.addEventListener("pointercancel", onPointerUp);
      document.documentElement.addEventListener("pointerleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        background: "#000",
        touchAction: "none",
      }}
    />
  );
}
