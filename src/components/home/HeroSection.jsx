import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import HeroIllustration from '../common/HeroIllustration'
import AnimatedBlob from '../common/AnimatedBlob'
import FloatingElements from '../common/FloatingElements'

/**
 * HeroSection Component
 * Hero section with title, description, and CTAs
 */
const HeroSection = ({ data }) => {
  if (!data) return null

  const { title, subtitle, description, cta, image } = data
  const [showIllustration, setShowIllustration] = useState(true)

  // Transition from illustration to image after 3.5 seconds
  useEffect(() => {
    if (image) {
      const timer = setTimeout(() => {
        setShowIllustration(false)
      }, 3500) // Show illustration for 3.5 seconds

      return () => clearTimeout(timer)
    }
  }, [image])

  return (
    <section className="w-full min-h-[80vh] md:min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <AnimatedBlob 
        size="lg" 
        color="purple" 
        className="top-10 -right-20 md:-right-10 opacity-30" 
        delay={0}
      />
      <AnimatedBlob 
        size="md" 
        color="cyan" 
        className="bottom-10 -left-20 md:-left-10 opacity-20" 
        delay={1}
      />
      <FloatingElements />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Hero Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 md:space-y-8"
          >
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] font-heading">
                {title}
              </h1>
              {subtitle && (
                <p className="text-xl md:text-2xl lg:text-3xl text-[#5A5A5A]">
                  {subtitle}
                </p>
              )}
              {description && (
                <p className="text-base md:text-lg text-[#5A5A5A] leading-relaxed">
                  {description}
                </p>
              )}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {cta?.primary && (
                <Link
                  to={cta.primary.link}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#FF71CE] to-[#B967FF] text-white font-semibold rounded-lg hover:from-[#E85DB8] hover:to-[#8F3FD1] transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2"
                >
                  {cta.primary.text}
                </Link>
              )}
              {cta?.secondary && (
                <Link
                  to={cta.secondary.link}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#F2FDFF] border-2 border-[#01CDFE] text-[#1A1A1A] font-semibold rounded-lg hover:bg-[#01CDFE] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2"
                >
                  {cta.secondary.text}
                </Link>
              )}
            </div>
          </motion.div>

          {/* Hero Visual Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:flex items-center justify-center relative"
          >
            <div className="aspect-square w-full max-w-md rounded-2xl overflow-hidden border-2 border-dotted border-[#EADFF2] shadow-lg relative">
              <AnimatePresence mode="wait">
                {showIllustration ? (
                  <motion.div
                    key="illustration"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-gradient-to-br from-[#FFF0FB]/50 to-[#F2FDFF]/50 p-8 flex items-center justify-center"
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
                    className="absolute inset-0 bg-gradient-to-br from-[#FFF0FB]/50 to-[#F2FDFF]/50 p-8 flex items-center justify-center"
                  >
                    <HeroIllustration />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

