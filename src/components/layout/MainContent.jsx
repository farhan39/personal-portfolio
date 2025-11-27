/**
 * MainContent Component
 * Wrapper for main content area with consistent spacing and container width
 * Responsive padding accounts for navbar height (h-16 sm:h-18 md:h-20)
 */
const MainContent = ({ children, className = '' }) => {
  return (
    <main className={`min-h-screen pt-16 md:pt-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        {children}
      </div>
    </main>
  )
}

export default MainContent

