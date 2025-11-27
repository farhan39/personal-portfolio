import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * ImageModal Component
 * Full-screen modal for viewing images with zoom
 */
const ImageModal = ({ 
  isOpen, 
  image, 
  onClose, 
  alt = '',
  images = [],
  currentIndex = 0,
  onNext,
  onPrevious,
}) => {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext()
      } else if (e.key === 'ArrowLeft' && onPrevious) {
        onPrevious()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, onNext, onPrevious])

  if (!image) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1A1A1A]/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="fixed inset-4 md:inset-8 z-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-10 p-3 bg-[#1A1A1A]/80 backdrop-blur-md text-white rounded-full hover:bg-[#1A1A1A] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
              aria-label="Close image viewer"
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
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.img
                key={image}
                src={image}
                alt={alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
              />

              {/* Navigation Arrows (if multiple images) */}
              {images && images.length > 1 && (
                <>
                  {onPrevious && (
                    <button
                      onClick={onPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-[#1A1A1A]/80 backdrop-blur-sm text-white rounded-full hover:bg-[#1A1A1A] transition-colors focus:outline-none focus:ring-2 focus:ring-white"
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
                  )}
                  {onNext && (
                    <button
                      onClick={onNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-[#1A1A1A]/80 backdrop-blur-sm text-white rounded-full hover:bg-[#1A1A1A] transition-colors focus:outline-none focus:ring-2 focus:ring-white"
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
                  )}
                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#1A1A1A]/80 backdrop-blur-sm text-white rounded-full text-sm">
                    {currentIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ImageModal

