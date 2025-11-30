import { motion } from 'framer-motion'

/**
 * ProjectsPageHeader Component
 * Header section for projects listing page
 */
const ProjectsPageHeader = ({ 
  title = 'My Projects',
  description = 'A collection of my recent work and side projects.',
  projectCount = 0,
  className = '',
}) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`w-full py-8 md:py-12 lg:py-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left space-y-4">
          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] font-heading">
              {title}
            </h1>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-[#FF71CE] to-[#B967FF] rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-[#5A5A5A] text-base md:text-lg max-w-2xl">
            {description}
          </p>

          {/* Project Count */}
          {projectCount > 0 && (
            <div className="pt-2">
              <span className="inline-block px-4 py-2 bg-[#FFF0FB] border border-[#EADFF2] text-[#5A5A5A] text-sm font-medium rounded-lg">
                {projectCount} {projectCount === 1 ? 'Project' : 'Projects'}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  )
}

export default ProjectsPageHeader

