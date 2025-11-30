import { motion } from 'framer-motion'

/**
 * FeatureList Component
 * List of project features
 */
const FeatureList = ({
  features = [],
  className = '',
}) => {
  if (!features || features.length === 0) {
    return null
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`w-full py-8 md:py-12 bg-[#FFF0FB]/30 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] font-heading mb-6">
          Key Features
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FF71CE] to-[#B967FF] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <span className="text-[#5A5A5A] text-base md:text-lg flex-1">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}

export default FeatureList

