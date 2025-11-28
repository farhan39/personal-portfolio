import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedBlob from '../common/AnimatedBlob'
import AnimatedGradientMesh from '../common/AnimatedGradientMesh'
import ElegantParticles from '../common/ElegantParticles'
import SparkleEffect from '../common/SparkleEffect'

/**
 * AboutPreview Component
 * About preview section with image, title, description, and CTA
 */
const AboutPreview = ({ data }) => {
  if (!data) return null

  const { title, description, image, cta } = data

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Premium background animations */}
      <AnimatedGradientMesh className="opacity-20" />
      <ElegantParticles count={12} className="opacity-15" />
      <SparkleEffect count={8} />
      <AnimatedBlob 
        size="md" 
        color="cyan" 
        className="top-10 left-10 opacity-15" 
        delay={0}
      />
      <AnimatedBlob 
        size="sm" 
        color="purple" 
        className="bottom-10 right-10 opacity-10" 
        delay={1}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* About Image/Visual Area */}
          {image && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border-2 border-[#EADFF2] shadow-lg">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}

          {/* About Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 space-y-6 md:space-y-8"
          >
            {/* Section Title */}
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] font-heading">
                {title}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#FF71CE] to-[#B967FF] rounded-full"></div>
            </div>

            {/* Description */}
            {description && Array.isArray(description) ? (
              <div className="space-y-4">
                {description.map((para, index) => (
                  <p
                    key={index}
                    className="text-[#5A5A5A] text-base md:text-lg leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-[#5A5A5A] text-base md:text-lg leading-relaxed">
                {description}
              </p>
            )}

            {/* CTA Link */}
            {cta && (
              <div className="pt-4">
                <Link
                  to={cta.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF71CE] to-[#B967FF] text-white font-semibold rounded-lg hover:from-[#E85DB8] hover:to-[#8F3FD1] transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2"
                >
                  {cta.text}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview

