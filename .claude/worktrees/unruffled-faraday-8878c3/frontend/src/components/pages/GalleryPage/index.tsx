import { useState } from 'react'
import { Layout } from '@/components/Layout'
import { galleryPhotos } from '@/data/galleryPhotos'
import { MasonryPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/masonry.css'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export function GalleryPage() {
  const [index, setIndex] = useState(-1)

  return (
    <Layout fixedSection="gallery">
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-8 md:p-10 mb-8">
            <h1 className="text-3xl font-semibold text-white mb-2">Gallery</h1>
            <p className="text-white/50 text-sm max-w-xl leading-relaxed">
              A personal archive — street photography, travel, and whatever catches the light.
            </p>
          </div>

          {galleryPhotos.length === 0 ? (
            <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-12 text-center">
              <p className="text-white/40 text-sm">Photos coming soon.</p>
            </div>
          ) : (
            <MasonryPhotoAlbum
              photos={galleryPhotos}
              columns={(containerWidth) => {
                if (containerWidth < 640) return 1
                if (containerWidth < 1024) return 2
                return 3
              }}
              spacing={8}
              onClick={({ index: i }) => setIndex(i)}
              render={{
                wrapper: (props) => (
                  <div
                    {...props}
                    className="overflow-hidden rounded-lg cursor-pointer group relative"
                  />
                ),
              }}
              componentsProps={{
                image: {
                  className: 'block transition-transform duration-500 group-hover:scale-105',
                },
              }}
            />
          )}

        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={galleryPhotos.map((p) => ({ src: p.src, alt: p.alt }))}
        on={{ view: ({ index: i }) => setIndex(i) }}
        styles={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' } }}
      />
    </Layout>
  )
}
