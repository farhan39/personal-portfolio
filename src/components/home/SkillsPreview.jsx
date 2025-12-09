import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import SkillsIllustration from '../common/SkillsIllustration'
import SparkleEffect from '../common/SparkleEffect'
import SmartImage from '../common/SmartImage'

/**
 * SkillsPreview Component
 * Skills preview grid section
 */
const SkillsPreview = ({ data }) => {
  if (!data || !data.items || data.items.length === 0) return null

  const { title, items } = data
  const shouldReduceMotion = useReducedMotion()

  const gridVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.08,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  }

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-[#FFF0FB]/30 relative overflow-hidden">
      {/* Background animations */}
      <SparkleEffect count={3} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Illustration */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12 md:mb-16"
        >
          <div className="text-center lg:text-left lg:col-span-2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] font-heading">
              {title}
            </h2>
            <div className="h-1 w-32 lg:w-24 bg-gradient-to-r from-[#01CDFE] to-[#B967FF] rounded-full"></div>
          </div>
          
          {/* Skills Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center justify-center h-48"
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, -8, 0] }
            }
            transition={{
              duration: 0.5,
              delay: 0.1,
              scale: { duration: 0.5 },
              y: shouldReduceMotion
                ? undefined
                : { duration: 7, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <SkillsIllustration />
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8"
        >
          {items.map((skill, index) => (
            <motion.div
              key={skill.name || index}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="aspect-square flex flex-col items-center justify-center space-y-3 p-4 bg-[#FDF7FF] border-2 border-[#EADFF2] rounded-xl hover:border-[#B967FF] transition-all duration-300 cursor-default shadow-sm"
            >
              {/* Skill Icon */}
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                {skill.icon && skill.icon.startsWith('/') ? (
                  <SmartImage
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-3xl md:text-4xl">
                    {skill.icon}
                  </span>
                )}
              </div>
              {/* Skill Name */}
              <span className="text-xs md:text-sm font-large text-[#1A1A1A] text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

SkillsPreview.displayName = 'SkillsPreview'

export default memo(SkillsPreview)

