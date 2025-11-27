import ProjectCard from './ProjectCard'
import ProjectCardSkeleton from './ProjectCardSkeleton'
import ProjectsEmptyState from './ProjectsEmptyState'

/**
 * ProjectsGrid Component
 * Grid container for project cards with loading and empty states
 * 
 * @example
 * <ProjectsGrid 
 *   projects={projectsData}
 *   isLoading={loading}
 *   isFiltered={hasActiveFilters}
 *   onClearFilters={handleClearFilters}
 *   className="my-8"
 * />
 */
const ProjectsGrid = ({
  projects = [],
  isLoading = false,
  isFiltered = false,
  onClearFilters,
  className = '',
}) => {

  // Loading State
  if (isLoading) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 ${className}`}>
        {[...Array(6)].map((_, index) => (
          <ProjectCardSkeleton key={index} />
        ))}
      </div>
    )
  }

  // Empty State
  if (!projects || projects.length === 0) {
    return (
      <ProjectsEmptyState
        title={isFiltered ? 'No Projects Match Your Filters' : 'No Projects Found'}
        description={
          isFiltered
            ? 'Try adjusting your filters to see more projects.'
            : 'There are no projects to display at the moment.'
        }
        isFiltered={isFiltered}
        onClearFilters={onClearFilters}
        showCTA={!isFiltered}
        className={className}
      />
    )
  }

  // Projects Grid
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 ${className}`}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id || index}
          id={project.id}
          title={project.title}
          description={project.description}
          thumbnail={project.thumbnail}
          tags={project.tags}
          slug={project.slug}
        />
      ))}
    </div>
  )
}

export default ProjectsGrid

