import { useMemo } from 'react'

/**
 * useProjectFilters Hook
 * Custom hook for filtering projects based on selected filters
 */
export const useProjectFilters = (projects = [], selectedFilters = []) => {
  const filteredProjects = useMemo(() => {
    if (!selectedFilters || selectedFilters.length === 0) {
      return projects
    }

    return projects.filter((project) => {
      // Group filters by type
      const categoryFilters = selectedFilters
        .filter((f) => f.startsWith('category:'))
        .map((f) => f.replace('category:', ''))
      
      const techFilters = selectedFilters
        .filter((f) => f.startsWith('tech:'))
        .map((f) => f.replace('tech:', ''))
      
      const tagFilters = selectedFilters
        .filter((f) => f.startsWith('tag:'))
        .map((f) => f.replace('tag:', ''))

      // Check if project matches any filter in each category
      const matchesCategory = categoryFilters.length === 0 || 
        (project.category && categoryFilters.includes(project.category))
      
      const matchesTech = techFilters.length === 0 || 
        (project.techStack && techFilters.some((tech) => project.techStack.includes(tech)))
      
      const matchesTags = tagFilters.length === 0 || 
        (project.tags && tagFilters.some((tag) => project.tags.includes(tag)))

      // Project must match at least one filter from each selected category type
      // This allows multi-tag filtering (AND logic within category, OR logic across categories)
      return matchesCategory && matchesTech && matchesTags
    })
  }, [projects, selectedFilters])

  return filteredProjects
}

