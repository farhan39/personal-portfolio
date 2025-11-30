import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import HeroIllustration from '../common/HeroIllustration'

/**
 * HeroSection Component
 * Hero section with title, description, and CTAs
 */
const HeroSection = ({ data, aboutData }) => {
  if (!data) return null

  const { title, subtitle, description, cta, image } = data
  const [showIllustration, setShowIllustration] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Transition from illustration to image after 3.5 seconds
  useEffect(() => {
    if (image) {
      const timer = setTimeout(() => {
        setShowIllustration(false)
        // After image transition completes (1 second), mark as loaded
        setTimeout(() => {
          setImageLoaded(true)
        }, 1000)
      }, 3500) // Show illustration for 3.5 seconds

      return () => clearTimeout(timer)
    }
  }, [image])

  return (
    <section className="w-full min-h-[80vh] md:min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 md:gap-6 lg:gap-12">
          {/* Top Row: Image and Content Side by Side */}
          <div className={`flex ${imageLoaded && !showIllustration ? 'flex-col' : 'flex-row flex-wrap'} md:flex-nowrap lg:contents gap-4 md:gap-6 items-start`}>
            {/* Hero Content Area - Text Only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${imageLoaded && !showIllustration ? 'w-full order-2' : 'flex-1 min-w-0'} lg:col-span-7 space-y-3 md:space-y-4 lg:space-y-6`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] font-heading leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#5A5A5A]">
                  {subtitle}
                </p>
              )}
              {/* {description && (
                <p className="text-sm sm:text-base md:text-lg text-[#5A5A5A] leading-relaxed">
                  {description}
                </p>
              )} */}
              
              {/* About Me Content */}
              {aboutData && aboutData.description && (
                <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                  {Array.isArray(aboutData.description) ? (
                    aboutData.description.map((para, index) => (
                      <p
                        key={index}
                        className="text-sm sm:text-base md:text-lg text-[#5A5A5A] leading-relaxed"
                      >
                        {para}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm sm:text-base md:text-lg text-[#5A5A5A] leading-relaxed">
                      {aboutData.description}
                    </p>
                  )}
                </div>
              )}
            </motion.div>

            {/* Hero Visual Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`flex-shrink-0 lg:col-span-5 flex items-center justify-center relative ${imageLoaded && !showIllustration ? 'w-full order-1 mb-4' : 'w-32 sm:w-40 md:w-48'} lg:w-full lg:max-w-md xl:max-w-md self-start`}
            >
              <div className="aspect-square w-full rounded-xl md:rounded-2xl overflow-hidden border-2 border-dotted border-[#EADFF2] shadow-lg relative">
                <AnimatePresence mode="wait">
                  {showIllustration ? (
                    <motion.div
                      key="illustration"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                      className="absolute inset-0 bg-gradient-to-br from-[#FFF0FB]/50 to-[#F2FDFF]/50 p-4 md:p-6 lg:p-8 flex items-center justify-center"
                    >
                      <HeroIllustration />
                    </motion.div>
                  ) : image ? (
                    <motion.img
                      key="hero-image"
                      src={image}
                      alt={title}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, ease: 'easeInOut' }}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <motion.div
                      key="fallback"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-[#FFF0FB]/50 to-[#F2FDFF]/50 p-4 md:p-6 lg:p-8 flex items-center justify-center"
                    >
                      <HeroIllustration />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: CTA Buttons - Always below content, expands full width when content wraps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full lg:col-span-7 flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-2"
          >
            {cta?.primary && (
              <Link
                to={cta.primary.link}
                className="inline-flex items-center justify-center px-5 md:px-6 lg:px-8 py-2.5 md:py-3 lg:py-4 bg-gradient-to-r from-[#FF71CE] to-[#B967FF] text-white text-sm md:text-base lg:text-lg font-semibold rounded-lg hover:from-[#E85DB8] hover:to-[#8F3FD1] transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2"
              >
                {cta.primary.text}
              </Link>
            )}
            {cta?.secondary && (
              <Link
                to={cta.secondary.link}
                className="inline-flex items-center justify-center px-5 md:px-6 lg:px-8 py-2.5 md:py-3 lg:py-4 bg-[#F2FDFF] border-2 border-[#01CDFE] text-[#1A1A1A] text-sm md:text-base lg:text-lg font-semibold rounded-lg hover:bg-[#01CDFE] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2"
              >
                {cta.secondary.text}
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

