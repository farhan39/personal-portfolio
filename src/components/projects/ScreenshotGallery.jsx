import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

/**
 * ScreenshotGallery Component
 * Gallery with carousel and grid view options
 */
const ScreenshotGallery = ({
  images = [],
  viewMode = 'grid', // 'grid' or 'carousel'
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageMeta, setImageMeta] = useState({})

  const normalizedImages = useMemo(
    () =>
      images.map((img) =>
        typeof img === 'string'
          ? { src: img }
          : img,
      ),
    [images],
  )

  useEffect(() => {
    let cancelled = false

    const loadDimensions = async () => {
      const metaEntries = await Promise.all(
        normalizedImages.map(
          ({ src, width, height }) =>
            new Promise((resolve) => {
              if (width && height) {
                resolve([src, { width, height }])
                return
              }

              const img = new Image()
              img.onload = () => {
                resolve([
                  src,
                  {
                    width: img.naturalWidth || 1600,
                    height: img.naturalHeight || 900,
                  },
                ])
              }
              img.onerror = () => {
                resolve([
                  src,
                  {
                    width: 1600,
                    height: 900,
                  },
                ])
              }
              img.src = src
            }),
        ),
      )

      if (!cancelled) {
        setImageMeta(Object.fromEntries(metaEntries))
      }
    }

    loadDimensions()

    return () => {
      cancelled = true
    }
  }, [normalizedImages])

  const getDimensions = (src) => {
    return imageMeta[src] || {
      width: 1600,
      height: 900,
    }
  }

  const isMetaReady = normalizedImages.every(({ src }) =>
    Boolean(imageMeta[src]),
  )

  if (!isMetaReady) {
    return (
      <div className={`w-full py-12 text-center ${className}`}>
        <div className="bg-[#FFF0FB] border-2 border-dotted border-[#EADFF2] rounded-2xl p-12">
          <p className="text-[#5A5A5A] text-base">Preparing screenshots...</p>
        </div>
      </div>
    )
  }

  if (!normalizedImages || normalizedImages.length === 0) {
    return (
      <div className={`w-full py-12 text-center ${className}`}>
        <div className="bg-[#FFF0FB] border-2 border-dashed border-[#EADFF2] rounded-2xl p-12">
          <svg
            className="w-16 h-16 mx-auto text-[#B967FF] mb-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-[#5A5A5A] text-base">No screenshots available</p>
        </div>
      </div>
    )
  }

  // Grid View
  if (viewMode === 'grid') {
    return (
      <>
        <div className={`w-full ${className}`}>
          <Gallery>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {normalizedImages.map((image, index) => (
                <Item
                  key={index}
                  original={image.src}
                  thumbnail={image.thumbnail || image.src}
                  width={getDimensions(image.src).width}
                  height={getDimensions(image.src).height}
                >
                  {({ ref, open }) => (
                    <motion.div
                      ref={ref}
                      onClick={open}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="relative aspect-video overflow-hidden rounded-xl bg-[#FFF0FB] border-2 border-dotted border-[#EADFF2] cursor-pointer group hover:border-[#B967FF] transition-all duration-300 flex items-center justify-center p-2"
                    >
                      <img
                        src={image.thumbnail || image.src}
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      <div className="hidden absolute inset-0 bg-[#1A1A1A]/60 flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-white"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-[#1A1A1A]/80 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
                          Click to zoom
                        </div>
                      </div>
                    </motion.div>
                  )}
                </Item>
              ))}
            </div>
          </Gallery>
        </div>
      </>
    )
  }

  // Carousel View
  return (
    <>
      <div className={`w-full relative ${className}`}>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#FFF0FB] border-2 border-dotted border-[#EADFF2] flex items-center justify-center p-2">
          <Gallery>
              {normalizedImages.map((image, index) => (
              <Item
                key={index}
                  original={image.src}
                  thumbnail={image.thumbnail || image.src}
                  width={getDimensions(image.src).width}
                  height={getDimensions(image.src).height}
              >
                {({ ref, open }) => (
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentIndex ? 1 : 0 }}
                    className={`absolute inset-0 ${index === currentIndex ? 'z-10' : 'z-0'}`}
                  >
                    <img
                      src={image.thumbnail || image.src}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-full object-contain cursor-pointer"
                      onClick={open}
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </motion.div>
                )}
              </Item>
            ))}
          </Gallery>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-[#1A1A1A]/80 backdrop-blur-sm text-white rounded-full hover:bg-[#1A1A1A] transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-[#1A1A1A]/80 backdrop-blur-sm text-white rounded-full hover:bg-[#1A1A1A] transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ScreenshotGallery

