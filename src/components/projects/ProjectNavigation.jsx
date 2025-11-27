import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * ProjectNavigation Component
 * Previous and next project navigation
 */
const ProjectNavigation = ({
  previousProject,
  nextProject,
  className = '',
}) => {
  if (!previousProject && !nextProject) {
    return null
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`w-full py-8 md:py-12 border-t border-[#EADFF2] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Previous Project */}
          {previousProject ? (
            <Link
              to={previousProject.slug || `/projects/${previousProject.id}`}
              className="group flex items-center gap-4 p-6 bg-[#FDF7FF] border-2 border-[#EADFF2] rounded-xl hover:border-[#B967FF] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF71CE] to-[#B967FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#5A5A5A] mb-1">Previous Project</p>
                <p className="text-lg font-bold text-[#1A1A1A] font-heading truncate group-hover:text-[#B967FF] transition-colors">
                  {previousProject.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="p-6 bg-[#FDF7FF]/50 border-2 border-dashed border-[#EADFF2] rounded-xl opacity-50">
              <p className="text-[#5A5A5A] text-sm">No previous project</p>
            </div>
          )}

          {/* Next Project */}
          {nextProject ? (
            <Link
              to={nextProject.slug || `/projects/${nextProject.id}`}
              className="group flex items-center gap-4 p-6 bg-[#FDF7FF] border-2 border-[#EADFF2] rounded-xl hover:border-[#B967FF] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2 md:text-right md:flex-row-reverse"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#01CDFE] to-[#66E4FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#5A5A5A] mb-1">Next Project</p>
                <p className="text-lg font-bold text-[#1A1A1A] font-heading truncate group-hover:text-[#B967FF] transition-colors">
                  {nextProject.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="p-6 bg-[#FDF7FF]/50 border-2 border-dashed border-[#EADFF2] rounded-xl opacity-50 md:text-right">
              <p className="text-[#5A5A5A] text-sm">No next project</p>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  )
}

export default ProjectNavigation

