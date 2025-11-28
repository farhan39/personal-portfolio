import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ContactIllustration from '../common/ContactIllustration'
import AnimatedBlob from '../common/AnimatedBlob'

/**
 * ContactCTA Component
 * Contact CTA footer strip
 */
const ContactCTA = ({ data }) => {
  if (!data) return null

  const { title, description, cta } = data

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-r from-[#FFF0FB] via-[#FDF7FF] to-[#F2FDFF] relative overflow-hidden">
      {/* Background decorative elements */}
      <AnimatedBlob 
        size="lg" 
        color="purple" 
        className="top-0 right-0 opacity-10" 
        delay={0}
      />
      <AnimatedBlob 
        size="md" 
        color="pink" 
        className="bottom-0 left-0 opacity-10" 
        delay={2}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 text-center md:text-left space-y-4"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] font-heading">
              {title}
            </h2>
            {description && (
              <p className="text-[#5A5A5A] text-base md:text-lg">
                {description}
              </p>
            )}
            
            {/* CTA Button */}
            {cta && (
              <div className="pt-4">
                <Link
                  to={cta.link}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#FF71CE] to-[#B967FF] text-white font-semibold text-lg rounded-lg hover:from-[#E85DB8] hover:to-[#8F3FD1] transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2"
                >
                  {cta.text}
                </Link>
              </div>
            )}
          </motion.div>

          {/* Contact Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:flex items-center justify-center h-64"
          >
            <ContactIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA

