// ─────────────────────────────────────────────────────────────────────────────
// OWNER: To add a photo to the gallery:
//   1. Drop the file into frontend/public/photos/gallery/
//   2. Add an entry below with the filename, actual pixel dimensions, and a
//      brief alt description. Width and height must match the real image —
//      they control how the mosaic layout tiles the photos.
// ─────────────────────────────────────────────────────────────────────────────

export interface GalleryPhoto {
  src: string
  width: number   // actual pixel width (check image properties / Finder Get Info)
  height: number  // actual pixel height
  alt: string
}

const base = import.meta.env.BASE_URL

export const galleryPhotos: GalleryPhoto[] = [
  { src: `${base}photos/gallery/_DSC0219.jpg`,   width: 6000,  height: 4000,  alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0224.jpg`,   width: 5956,  height: 3971,  alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0238-2.jpg`, width: 8000,  height: 12000, alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0238.jpg`,   width: 8000,  height: 12000, alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0241.jpg`,   width: 4000,  height: 6000,  alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0254.jpg`,   width: 5994,  height: 3996,  alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0268.jpg`,   width: 4000,  height: 6000,  alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0277.jpg`,   width: 6000,  height: 4000,  alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0278.jpg`,   width: 6000,  height: 4000,  alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0279.jpg`,   width: 6000,  height: 4000,  alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0280.jpg`,   width: 6000,  height: 4000,  alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0281.jpg`,   width: 6000,  height: 4000,  alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0282.jpg`,   width: 6000,  height: 4000,  alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0283.jpg`,   width: 6000,  height: 4000,  alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0286.jpg`,   width: 12000, height: 8000,  alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0287.jpg`,   width: 6000,  height: 4000,  alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0298.jpg`,   width: 4000,  height: 6000,  alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0308.jpg`,   width: 4000,  height: 6000,  alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0310-2.jpg`, width: 4000,  height: 6000,  alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0310.jpg`,   width: 4000,  height: 6000,  alt: 'Photo' },
  { src: `${base}photos/gallery/_DSC0312.jpg`,   width: 4000,  height: 6000,  alt: 'Photo' },
]
