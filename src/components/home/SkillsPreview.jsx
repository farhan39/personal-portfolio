import { motion } from 'framer-motion'
import SkillsIllustration from '../common/SkillsIllustration'
import AnimatedBlob from '../common/AnimatedBlob'

/**
 * SkillsPreview Component
 * Skills preview grid section
 */
const SkillsPreview = ({ data }) => {
  if (!data || !data.items || data.items.length === 0) return null

  const { title, items } = data

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-[#FFF0FB]/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <AnimatedBlob 
        size="md" 
        color="pink" 
        className="top-20 right-10 opacity-20" 
        delay={0.5}
      />
      <AnimatedBlob 
        size="sm" 
        color="cyan" 
        className="bottom-20 left-10 opacity-15" 
        delay={1.5}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center lg:text-left lg:col-span-2 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] font-heading">
              {title}
            </h2>
            <div className="h-1 w-32 lg:w-24 bg-gradient-to-r from-[#01CDFE] to-[#B967FF] rounded-full"></div>
          </motion.div>
          
          {/* Skills Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center h-48"
          >
            <SkillsIllustration />
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {items.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="aspect-square flex flex-col items-center justify-center space-y-3 p-4 bg-[#FDF7FF] border-2 border-[#EADFF2] rounded-xl hover:border-[#B967FF] transition-all duration-300 cursor-default"
            >
              {/* Skill Icon */}
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                {skill.icon && skill.icon.startsWith('/') ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-3xl md:text-4xl">{skill.icon}</span>
                )}
              </div>
              {/* Skill Name */}
              <span className="text-xs md:text-sm font-large text-[#1A1A1A] text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsPreview

