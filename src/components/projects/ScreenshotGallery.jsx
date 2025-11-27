import { useState } from 'react'
import { motion } from 'framer-motion'
import ImageModal from './ImageModal'

/**
 * ScreenshotGallery Component
 * Gallery with carousel and grid view options
 */
const ScreenshotGallery = ({
  images = [],
  viewMode = 'grid', // 'grid' or 'carousel'
  className = '',
}) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!images || images.length === 0) {
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

  const handleImageClick = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
    setIsModalOpen(true)
  }

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length
    setCurrentIndex(nextIndex)
    setSelectedImage(images[nextIndex])
  }

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(prevIndex)
    setSelectedImage(images[prevIndex])
  }

  const handleCarouselNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handleCarouselPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Grid View
  if (viewMode === 'grid') {
    return (
      <>
        <div className={`w-full ${className}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative aspect-video overflow-hidden rounded-xl bg-[#FFF0FB] border-2 border-[#EADFF2] cursor-pointer group hover:border-[#B967FF] transition-all duration-300"
                onClick={() => handleImageClick(image, index)}
              >
                <img
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
                {/* Zoom indicator */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-[#1A1A1A]/80 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
                    Click to zoom
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <ImageModal
          isOpen={isModalOpen}
          image={selectedImage}
          images={images}
          currentIndex={currentIndex}
          alt={`Screenshot ${currentIndex + 1}`}
          onClose={() => setIsModalOpen(false)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </>
    )
  }

  // Carousel View
  return (
    <>
      <div className={`w-full relative ${className}`}>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#FFF0FB] border-2 border-[#EADFF2]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              className={`absolute inset-0 ${index === currentIndex ? 'z-10' : 'z-0'}`}
            >
              <img
                src={image}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => handleImageClick(image, index)}
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </motion.div>
          ))}

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handleCarouselPrevious}
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
                onClick={handleCarouselNext}
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

      <ImageModal
        isOpen={isModalOpen}
        image={selectedImage}
        alt={`Screenshot ${currentIndex + 1}`}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default ScreenshotGallery

