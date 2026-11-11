// Makes grid thumbnails for the gallery photos and records every photo's size.
// Run after adding photos:  npm run thumbs   (macOS only: uses sips)
import { execFileSync } from "node:child_process";
import { mkdirSync, openSync, readSync, closeSync, readdirSync, writeFileSync } from "node:fs";
import { extname, join, parse } from "node:path";

const FOLDERS = {
  hiking: { longEdge: 800, quality: 68 },
  manga: { longEdge: 640, quality: 68 },
  design: { longEdge: 800, quality: 68 },
};
const IMAGE = /\.(jpe?g|png)$/i;

// Phones tag photos with a rotation instead of rotating the pixels. Browsers
// honor the tag, so a 1800x1350 file tagged 5-8 actually shows as 1350x1800.
const orientation = (file) => {
  const fd = openSync(file, "r");
  const buf = Buffer.alloc(65536);
  readSync(fd, buf, 0, buf.length, 0);
  closeSync(fd);
  let i = 2;
  while (i + 4 < buf.length && buf[i] === 0xff) {
    const marker = buf[i + 1];
    const len = buf.readUInt16BE(i + 2);
    if (marker === 0xe1 && buf.toString("latin1", i + 4, i + 8) === "Exif") {
      const t = i + 10; // start of the TIFF header
      const le = buf.toString("latin1", t, t + 2) === "II";
      const u16 = (o) => (le ? buf.readUInt16LE(o) : buf.readUInt16BE(o));
      const u32 = (o) => (le ? buf.readUInt32LE(o) : buf.readUInt32BE(o));
      const ifd = t + u32(t + 4);
      for (let n = 0, count = u16(ifd); n < count; n++) {
        const entry = ifd + 2 + n * 12;
        if (u16(entry) === 0x0112) return u16(entry + 8);
      }
      return 1;
    }
    i += 2 + len;
  }
  return 1;
};

const size = (file) => {
  const out = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", file], {
    encoding: "utf8",
  });
  const w = Number(out.match(/pixelWidth: (\d+)/)[1]);
  const h = Number(out.match(/pixelHeight: (\d+)/)[1]);
  return orientation(file) >= 5 ? [h, w] : [w, h];
};

const meta = {};

for (const [folder, { longEdge, quality }] of Object.entries(FOLDERS)) {
  const dir = join("public/media", folder);
  let files;
  try {
    files = readdirSync(dir).filter((f) => IMAGE.test(f));
  } catch {
    continue;
  }
  if (!files.length) continue;

  const thumbDir = join(dir, "thumbs");
  mkdirSync(thumbDir, { recursive: true });

  for (const file of files.sort()) {
    const out = join(thumbDir, `${parse(file).name}.jpg`);
    execFileSync("sips", [
      "-Z", String(longEdge),
      "-s", "format", "jpeg",
      "-s", "formatOptions", String(quality),
      join(dir, file),
      "--out", out,
    ], { stdio: "ignore" });
    // the grid shows the thumbnail, so record its exact size
    const [w, h] = size(out);
    meta[`/media/${folder}/${file}`] = {
      thumb: `/media/${folder}/thumbs/${parse(file).name}.jpg`,
      w,
      h,
    };
  }
  console.log(`${folder}: ${files.length} thumbnails`);
}

writeFileSync("src/data/galleryMeta.json", JSON.stringify(meta, null, 2) + "\n");
console.log(`wrote src/data/galleryMeta.json (${Object.keys(meta).length} photos)`);
