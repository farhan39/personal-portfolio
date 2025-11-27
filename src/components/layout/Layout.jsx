import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import TopNavbar from './TopNavbar'
import StickyHeader from './StickyHeader'
import MainContent from './MainContent'
import PageTransition from './PageTransition'
import { useLayoutStore } from '../../stores/useLayoutStore'
import { useScrollDetection } from '../../hooks/useScrollDetection'

/**
 * Layout Component
 * Main layout shell that combines all layout components
 */
const Layout = ({ children }) => {
  const location = useLocation()
  const { setCurrentPage, setPageTitle, setBreadcrumbs } = useLayoutStore()

  // Initialize scroll detection
  useScrollDetection(50)

  // Update page state when route changes
  useEffect(() => {
    const path = location.pathname
    setCurrentPage(path)

    // Set page title based on route (can be enhanced with route config)
    const routeTitles = {
      '/': 'Home',
      '/about': 'About',
      '/projects': 'Projects',
      '/contact': 'Contact',
    }

    setPageTitle(routeTitles[path] || '')
    
    // Set breadcrumbs based on route
    const breadcrumbs = []
    if (path !== '/') {
      breadcrumbs.push({ label: 'Home', path: '/' })
      const pathSegments = path.split('/').filter(Boolean)
      pathSegments.forEach((segment, index) => {
        const isLast = index === pathSegments.length - 1
        const path = '/' + pathSegments.slice(0, index + 1).join('/')
        breadcrumbs.push({
          label: segment.charAt(0).toUpperCase() + segment.slice(1),
          path: isLast ? null : path,
        })
      })
    }
    setBreadcrumbs(breadcrumbs)
  }, [location.pathname, setCurrentPage, setPageTitle, setBreadcrumbs])

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <StickyHeader />
      <MainContent>
        <PageTransition>{children}</PageTransition>
      </MainContent>
    </div>
  )
}

export default Layout

