import { motion } from 'framer-motion'

/**
 * ProjectDescription Component
 * Full project description section
 */
const ProjectDescription = ({
  description,
  className = '',
}) => {
  if (!description) {
    return null
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`w-full py-8 md:py-12 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] font-heading mb-6">
          About This Project
        </h2>
        <div className="prose prose-lg max-w-none">
          {typeof description === 'string' ? (
            <p className="text-[#5A5A5A] text-base md:text-lg leading-relaxed whitespace-pre-line">
              {description}
            </p>
          ) : (
            <div className="text-[#5A5A5A] text-base md:text-lg leading-relaxed space-y-4">
              {description}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  )
}

export default ProjectDescription

