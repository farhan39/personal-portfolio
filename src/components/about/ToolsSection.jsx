import { memo } from 'react'
import { motion } from 'framer-motion'
import SmartImage from '../common/SmartImage'

/**
 * ToolsSection Component
 * Display of tools and technologies used
 */
const ToolsSection = ({
  tools = [],
  className = '',
}) => {
  if (!tools || tools.length === 0) {
    return null
  }

  // Group tools by category if provided
  const groupedTools = tools.reduce((acc, tool) => {
    const category = tool.category || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(tool)
    return acc
  }, {})

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className={`w-full py-12 md:py-16 lg:py-20 bg-[#F2FDFF]/30 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] font-heading mb-4">
            Tools & Technologies
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#01CDFE] to-[#B967FF] rounded-full"></div>
        </div>

        {/* Tools Grid by Category */}
        <div className="space-y-12">
          {Object.entries(groupedTools).map(([category, categoryTools], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            >
              {/* Category Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] font-heading mb-6 text-center md:text-left">
                {category}
              </h3>

              {/* Tools Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {categoryTools.map((tool, index) => (
                  <motion.div
                    key={tool.name || index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center justify-center p-4 bg-[#FDF7FF] border-2 border-dotted border-[#EADFF2] rounded-xl hover:border-[#01CDFE] transition-all duration-300 cursor-default group"
                  >
                    {/* Tool Icon/Logo */}
                    <div className="w-10 h-10 md:w-12 md:h-12 mb-2 flex items-center justify-center p-1">
                      {tool.icon ? (
                        tool.icon.startsWith('/') ? (
                          <SmartImage
                            src={tool.icon}
                            alt={tool.name}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="text-2xl md:text-3xl">{tool.icon}</span>
                        )
                      ) : (
                        <div className="w-8 h-8 bg-[#01CDFE] rounded"></div>
                      )}
                    </div>

                    {/* Tool Name */}
                    <span className="text-xs md:text-sm font-medium text-[#1A1A1A] text-center">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

ToolsSection.displayName = 'ToolsSection'

export default memo(ToolsSection)

