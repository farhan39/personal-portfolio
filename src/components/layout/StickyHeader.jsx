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
      className={`sticky top-16 md:top-20 z-30 bg-[#FDF7FF]/95 backdrop-blur-md border-b border-[#EADFF2] shadow-sm transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
      style={
        isScrolled
          ? {
              boxShadow: '0 4px 6px -1px rgba(185, 103, 255, 0.15)',
            }
          : {}
      }
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center space-x-2 text-sm text-[#5A5A5A]">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {index > 0 && (
                    <span className="text-[#EADFF2]" aria-hidden="true">
                      /
                    </span>
                  )}
                  {crumb.path ? (
                    <Link
                      to={crumb.path}
                      className="hover:text-[#1A1A1A] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={index === breadcrumbs.length - 1 ? 'text-[#1A1A1A] font-medium' : ''}>
                      {crumb.label}
                    </span>
                  )}
                </div>
              ))}
            </nav>
          )}

          {/* Page Title */}
          {pageTitle && (
            <h1 className="text-xl md:text-2xl font-bold text-[#1A1A1A]">
              {pageTitle}
            </h1>
          )}
        </div>
      </div>
    </header>
  )
}

export default StickyHeader

