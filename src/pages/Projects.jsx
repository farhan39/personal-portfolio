import { useState } from 'react'
import ProjectsPageHeader from '../components/projects/ProjectsPageHeader'
import ProjectFilters from '../components/projects/ProjectFilters'
import ProjectsGrid from '../components/projects/ProjectsGrid'
import { useProjectFilters } from '../hooks/useProjectFilters'
import { getAllProjects, portfolioData } from '../data/portfolioData'
import AnimatedBlob from '../components/common/AnimatedBlob'
import AnimatedGradientMesh from '../components/common/AnimatedGradientMesh'
import ElegantParticles from '../components/common/ElegantParticles'
import AnimatedGrid from '../components/common/AnimatedGrid'
import OrbitingElements from '../components/common/OrbitingElements'
import SparkleEffect from '../components/common/SparkleEffect'

/**
 * Projects Page
 * Projects listing page with filters and grid
 */
const Projects = () => {
  const [selectedFilters, setSelectedFilters] = useState([])
  const [isLoading] = useState(false)

  // Get projects from centralized data
  const allProjects = getAllProjects()

  // Filter projects based on selected filters
  const filteredProjects = useProjectFilters(allProjects, selectedFilters)

  const handleFilterChange = (newFilters) => {
    setSelectedFilters(newFilters)
  }

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Premium background animations */}
      <AnimatedGradientMesh className="opacity-30" />
      <OrbitingElements className="opacity-15" />
      <ElegantParticles count={20} className="opacity-25" />
      <AnimatedGrid />
      <AnimatedBlob 
        size="lg" 
        color="purple" 
        className="top-20 -right-40 opacity-10" 
        delay={0}
      />
      <AnimatedBlob 
        size="md" 
        color="cyan" 
        className="bottom-20 -left-40 opacity-10" 
        delay={2}
      />
      <SparkleEffect count={15} />
      {/* Page Header */}
      <ProjectsPageHeader
        title="My Projects"
        description="A collection of my recent work, side projects, and open-source contributions."
        projectCount={filteredProjects.length}
      />

      {/* Filters Section */}
      <section className="w-full py-8 bg-[#FDF7FF]/80 backdrop-blur-sm border-y border-[#EADFF2] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectFilters
            projects={allProjects}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
          />
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          {selectedFilters.length > 0 && (
            <div className="mb-8">
              <p className="text-[#5A5A5A] text-sm md:text-base">
                Showing <span className="font-semibold text-[#1A1A1A]">{filteredProjects.length}</span> of{' '}
                <span className="font-semibold text-[#1A1A1A]">{allProjects.length}</span> projects
              </p>
            </div>
          )}

          {/* Projects Grid */}
          <ProjectsGrid
            projects={filteredProjects}
            isLoading={isLoading}
            isFiltered={selectedFilters.length > 0}
            onClearFilters={() => setSelectedFilters([])}
          />
        </div>
      </section>
    </div>
  )
}

export default Projects
