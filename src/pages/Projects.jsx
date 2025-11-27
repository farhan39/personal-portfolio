import { useState, useMemo } from 'react'
import ProjectsPageHeader from '../components/projects/ProjectsPageHeader'
import ProjectFilters from '../components/projects/ProjectFilters'
import ProjectsGrid from '../components/projects/ProjectsGrid'
import { useProjectFilters } from '../hooks/useProjectFilters'

/**
 * Projects Page
 * Projects listing page with filters and grid
 */
const Projects = () => {
  const [selectedFilters, setSelectedFilters] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Mock projects data - Replace with actual data fetching
  const allProjects = useMemo(() => [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
      thumbnail: null,
      tags: ['E-Commerce', 'Full-Stack', 'Payment'],
      category: 'Web Application',
      techStack: ['React', 'Node.js', 'MongoDB'],
      slug: '/projects/ecommerce-platform',
    },
    {
      id: '2',
      title: 'Mobile Weather App',
      description: 'Beautiful weather application with real-time forecasts and location tracking.',
      thumbnail: null,
      tags: ['Mobile', 'Weather', 'API'],
      category: 'Mobile Application',
      techStack: ['React Native', 'TypeScript'],
      slug: '/projects/weather-app',
    },
    {
      id: '3',
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations and responsive design.',
      thumbnail: null,
      tags: ['Portfolio', 'Design', 'Responsive'],
      category: 'Web Application',
      techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
      slug: '/projects/portfolio',
    },
    {
      id: '4',
      title: 'Task Management Tool',
      description: 'Collaborative task management application with real-time updates.',
      thumbnail: null,
      tags: ['Productivity', 'Collaboration', 'Real-time'],
      category: 'Web Application',
      techStack: ['Vue.js', 'Firebase', 'WebSockets'],
      slug: '/projects/task-manager',
    },
    {
      id: '5',
      title: 'AI Image Generator',
      description: 'AI-powered image generation tool using machine learning models.',
      thumbnail: null,
      tags: ['AI', 'Machine Learning', 'Image Processing'],
      category: 'Web Application',
      techStack: ['Python', 'TensorFlow', 'React'],
      slug: '/projects/ai-image-generator',
    },
    {
      id: '6',
      title: 'Fitness Tracker',
      description: 'Mobile fitness tracking app with workout plans and progress analytics.',
      thumbnail: null,
      tags: ['Mobile', 'Health', 'Analytics'],
      category: 'Mobile Application',
      techStack: ['Flutter', 'Firebase', 'Charts'],
      slug: '/projects/fitness-tracker',
    },
  ], [])

  // Filter projects based on selected filters
  const filteredProjects = useProjectFilters(allProjects, selectedFilters)

  const handleFilterChange = (newFilters) => {
    setSelectedFilters(newFilters)
  }

  return (
    <div className="w-full min-h-screen">
      {/* Page Header */}
      <ProjectsPageHeader
        title="My Projects"
        description="A collection of my recent work, side projects, and open-source contributions."
        projectCount={filteredProjects.length}
      />

      {/* Filters Section */}
      <section className="w-full py-8 bg-[#FDF7FF] border-y border-[#EADFF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectFilters
            projects={allProjects}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
          />
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
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
