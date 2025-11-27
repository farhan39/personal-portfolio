import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLayoutStore } from '../../stores/useLayoutStore'
import MobileDrawer from './MobileDrawer'

/**
 * TopNavbar Component
 * Portfolio-style navigation bar with animations, accessibility, and responsive design
 */
const TopNavbar = () => {
  const location = useLocation()
  const { isScrolled, setIsScrolled } = useLayoutStore()
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false)

  // Navigation items - including optional Blog
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    // Optional Blog - uncomment if needed
    // { path: '/blog', label: 'Blog' },
  ]

  // Sticky-on-scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setIsScrolled])

  // Close drawer on route change
  useEffect(() => {
    setIsMobileDrawerOpen(false)
  }, [location.pathname])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isMobileDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileDrawerOpen])

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const handleMobileDrawerToggle = () => {
    setIsMobileDrawerOpen((prev) => !prev)
  }

  const handleMobileDrawerClose = () => {
    setIsMobileDrawerOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
            : 'bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Name Area */}
            <Link
              to="/"
              className="flex items-center space-x-2 sm:space-x-3 group focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded-lg px-2 py-1 -ml-2"
              aria-label="Go to homepage"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 sm:space-x-3"
              >
                {/* Logo placeholder - replace with actual logo image if available */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-md group-hover:shadow-lg transition-shadow">
                  P
                </div>
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                  Portfolio
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`relative px-4 lg:px-5 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
                      isActive(item.path)
                        ? 'text-gray-900'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                  >
                    {item.label}
                    {/* Active indicator */}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-full"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gray-100 rounded-lg -z-10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={handleMobileDrawerToggle}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              aria-label={isMobileDrawerOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileDrawerOpen}
              aria-controls="mobile-drawer"
            >
              <motion.div
                animate={isMobileDrawerOpen ? 'open' : 'closed'}
                className="w-6 h-6 relative"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  className="absolute top-0 left-0 w-full h-0.5 bg-gray-900 origin-center"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-900 -translate-y-1/2"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 origin-center"
                />
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={handleMobileDrawerClose}
        navItems={navItems}
      />
    </>
  )
}

export default TopNavbar
