import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * ContactCTA Component
 * Contact CTA footer strip
 */
const ContactCTA = ({ data }) => {
  if (!data) return null

  const { title, description, cta } = data

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-r from-[#FFF0FB] via-[#FDF7FF] to-[#F2FDFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8"
        >
          {/* CTA Content */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] font-heading">
              {title}
            </h2>
            {description && (
              <p className="text-[#5A5A5A] text-base md:text-lg">
                {description}
              </p>
            )}
          </div>

          {/* CTA Button */}
          {cta && (
            <div className="flex-shrink-0">
              <Link
                to={cta.link}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#FF71CE] to-[#B967FF] text-white font-semibold text-lg rounded-lg hover:from-[#E85DB8] hover:to-[#8F3FD1] transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2"
              >
                {cta.text}
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA

