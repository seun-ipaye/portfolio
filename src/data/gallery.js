import meta from "./galleryMeta.json";

// Adds the thumbnail and size that `npm run thumbs` recorded for each photo.
export const withMeta = (items) =>
  items.map((item) => ({ ...item, ...meta[item.src] }));

const PRIORITY_COUNT = 6;

// Quietly fetch the first few thumbnails so the gallery pages open instantly.
export function warmGalleries(...lists) {
  const run = () =>
    lists.forEach((items) =>
      withMeta(items)
        .slice(0, PRIORITY_COUNT)
        .forEach(({ thumb, src }) => {
          new Image().src = thumb || src;
        }),
    );
  if ("requestIdleCallback" in window) requestIdleCallback(run, { timeout: 2000 });
  else setTimeout(run, 1500);
}

export { PRIORITY_COUNT };
