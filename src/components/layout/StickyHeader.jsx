import { useLayoutStore } from '../../stores/useLayoutStore'
import { Link } from 'react-router-dom'

/**
 * StickyHeader Component
 * Sticky header that shows page title and breadcrumbs
 */
const StickyHeader = () => {
  const { pageTitle, breadcrumbs, isScrolled } = useLayoutStore()

  // Don't render if no title and no breadcrumbs
  if (!pageTitle && (!breadcrumbs || breadcrumbs.length === 0)) {
    return null
  }

  return (
    <header
      className={`sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {index > 0 && (
                    <span className="text-gray-400" aria-hidden="true">
                      /
                    </span>
                  )}
                  {crumb.path ? (
                    <Link
                      to={crumb.path}
                      className="hover:text-gray-900 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={index === breadcrumbs.length - 1 ? 'text-gray-900 font-medium' : ''}>
                      {crumb.label}
                    </span>
                  )}
                </div>
              ))}
            </nav>
          )}

          {/* Page Title */}
          {pageTitle && (
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              {pageTitle}
            </h1>
          )}
        </div>
      </div>
    </header>
  )
}

export default StickyHeader

