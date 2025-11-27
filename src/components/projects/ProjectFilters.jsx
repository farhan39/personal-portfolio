import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * ProjectFilters Component
 * Filter component for tags, categories, and tech stack
 */
const ProjectFilters = ({
  projects = [],
  selectedFilters = [],
  onFilterChange,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  // Extract all unique tags, categories, and tech stack from projects
  const { tags, categories, techStack } = useMemo(() => {
    const allTags = new Set()
    const allCategories = new Set()
    const allTechStack = new Set()

    projects.forEach((project) => {
      if (project.tags) {
        project.tags.forEach((tag) => allTags.add(tag))
      }
      if (project.category) {
        allCategories.add(project.category)
      }
      if (project.techStack) {
        project.techStack.forEach((tech) => allTechStack.add(tech))
      }
    })

    return {
      tags: Array.from(allTags).sort(),
      categories: Array.from(allCategories).sort(),
      techStack: Array.from(allTechStack).sort(),
    }
  }, [projects])

  const handleFilterToggle = (filterType, value) => {
    const filterKey = `${filterType}:${value}`
    const newFilters = selectedFilters.includes(filterKey)
      ? selectedFilters.filter((f) => f !== filterKey)
      : [...selectedFilters, filterKey]

    onFilterChange(newFilters)
  }

  const isFilterActive = (filterType, value) => {
    return selectedFilters.includes(`${filterType}:${value}`)
  }

  const clearAllFilters = () => {
    onFilterChange([])
  }

  const activeFilterCount = selectedFilters.length

  return (
    <div className={`w-full ${className}`}>
      {/* Filter Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] font-heading">
            Filters
          </h3>
          {activeFilterCount > 0 && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={clearAllFilters}
              className="px-3 py-1 text-xs md:text-sm bg-[#FFF0FB] border border-[#FF71CE] text-[#FF71CE] rounded-full hover:bg-[#FF71CE] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2"
            >
              Clear All ({activeFilterCount})
            </motion.button>
          )}
        </div>

        {/* Mobile Expand/Collapse */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="sm:hidden flex items-center gap-2 px-4 py-2 bg-[#FDF7FF] border border-[#EADFF2] rounded-lg text-[#5A5A5A] hover:bg-[#FFF0FB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2"
          aria-expanded={isExpanded}
        >
          <span className="text-sm font-medium">
            {isExpanded ? 'Hide' : 'Show'} Filters
          </span>
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Filter Sections */}
      <AnimatePresence>
        <motion.div
          initial={false}
          animate={{ 
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className={`space-y-6 overflow-hidden sm:block sm:!h-auto sm:!opacity-100 ${isExpanded ? 'block' : 'hidden sm:block'}`}
        >
            {/* Categories Filter */}
            {categories.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-[#5A5A5A] uppercase tracking-wide">
                  Category
                </h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleFilterToggle('category', category)}
                      className={`px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2 ${
                        isFilterActive('category', category)
                          ? 'bg-gradient-to-r from-[#FF71CE] to-[#B967FF] text-white border-transparent shadow-md'
                          : 'bg-[#FDF7FF] text-[#5A5A5A] border-[#EADFF2] hover:border-[#B967FF] hover:bg-[#FFF0FB]'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Filter */}
            {techStack.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-[#5A5A5A] uppercase tracking-wide">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => handleFilterToggle('tech', tech)}
                      className={`px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2 ${
                        isFilterActive('tech', tech)
                          ? 'bg-gradient-to-r from-[#01CDFE] to-[#66E4FF] text-[#1A1A1A] border-transparent shadow-md'
                          : 'bg-[#F2FDFF] text-[#5A5A5A] border-[#EADFF2] hover:border-[#01CDFE] hover:bg-[#F2FDFF]'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tags Filter */}
            {tags.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-[#5A5A5A] uppercase tracking-wide">
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleFilterToggle('tag', tag)}
                      className={`px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2 ${
                        isFilterActive('tag', tag)
                          ? 'bg-[#B967FF] text-white border-transparent shadow-md'
                          : 'bg-[#FDF7FF] text-[#5A5A5A] border-[#EADFF2] hover:border-[#B967FF] hover:bg-[#FFF0FB]'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ProjectFilters

