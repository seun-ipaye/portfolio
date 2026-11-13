// Makes grid thumbnails for the gallery photos and records every photo's size.
// Run after adding photos:  npm run thumbs   (macOS only: uses sips)
import { execFileSync } from "node:child_process";
import {
  closeSync,
  mkdirSync,
  openSync,
  readSync,
  readdirSync,
  writeFileSync,
} from "node:fs";
import { join, parse } from "node:path";

// recursive: also look inside subfolders (experience/<slug>/...)
const FOLDERS = {
  hiking: { longEdge: 800, quality: 68 },
  manga: { longEdge: 640, quality: 68 },
  design: { longEdge: 800, quality: 68 },
  experience: { longEdge: 1000, quality: 72, recursive: true },
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

// Every photo under `dir` as a path relative to it, skipping thumbs/ folders.
const listImages = (dir, recursive, prefix = "") => {
  let entries;
  try {
    entries = readdirSync(join(dir, prefix), { withFileTypes: true });
  } catch {
    return [];
  }
  return entries.flatMap((e) => {
    const rel = join(prefix, e.name);
    if (e.isDirectory()) {
      return recursive && e.name !== "thumbs" ? listImages(dir, recursive, rel) : [];
    }
    return IMAGE.test(e.name) ? [rel] : [];
  });
};

const meta = {};

for (const [folder, { longEdge, quality, recursive }] of Object.entries(FOLDERS)) {
  const dir = join("public/media", folder);
  const files = listImages(dir, recursive).sort();
  if (!files.length) continue;

  for (const rel of files) {
    const { dir: sub, name } = parse(rel);
    const thumbDir = join(dir, sub, "thumbs");
    mkdirSync(thumbDir, { recursive: true });
    const out = join(thumbDir, `${name}.jpg`);
    execFileSync("sips", [
      "-Z", String(longEdge),
      "-s", "format", "jpeg",
      "-s", "formatOptions", String(quality),
      join(dir, rel),
      "--out", out,
    ], { stdio: "ignore" });
    // the grid shows the thumbnail, so record its exact size
    const [w, h] = size(out);
    const url = (p) => `/media/${folder}/${p.split("\\").join("/")}`;
    meta[url(rel)] = { thumb: url(join(sub, "thumbs", `${name}.jpg`)), w, h };
  }
  console.log(`${folder}: ${files.length} thumbnails`);
}

writeFileSync("src/data/galleryMeta.json", JSON.stringify(meta, null, 2) + "\n");
console.log(`wrote src/data/galleryMeta.json (${Object.keys(meta).length} photos)`);
