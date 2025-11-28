import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { useLayoutStore } from '../../stores/useLayoutStore'
import { getNavigationLinks, portfolioData } from '../../data/portfolioData'
import MobileDrawer from './MobileDrawer'

/**
 * TopNavbar Component
 * Portfolio-style navigation bar with animations, accessibility, and responsive design
 */
const TopNavbar = () => {
  const location = useLocation()
  const { isScrolled, setIsScrolled } = useLayoutStore()
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false)

  // Navigation items from centralized data
  const navItems = getNavigationLinks()
  const logo = portfolioData.navigation.logo

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
            ? 'bg-[#FDF7FF]/95 backdrop-blur-md shadow-lg border-b border-[#EADFF2]'
            : 'bg-[#FDF7FF]/80 backdrop-blur-sm shadow-sm border-b border-[#EADFF2]/50'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Name Area */}
            <Link
              to="/"
              className="flex items-center space-x-2 sm:space-x-3 group focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2 rounded-lg px-3 py-2 -ml-2 relative overflow-visible"
              aria-label="Go to homepage"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 sm:space-x-3 relative"
              >
                {/* Decorative gradient orb - left */}
                <motion.div
                  className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, #B967FF, transparent)',
                    filter: 'blur(3px)',
                  }}
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Decorative sparkle - right */}
                <motion.div
                  className="absolute -right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5"
                  style={{
                    background: 'linear-gradient(135deg, #FF71CE, #01CDFE)',
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                  }}
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Decorative dot - top */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 -top-2 w-1 h-1 rounded-full"
                  style={{
                    background: '#01CDFE',
                    boxShadow: '0 0 6px rgba(1, 205, 254, 0.6)',
                  }}
                  animate={{
                    y: [0, -3, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Logo Image */}
                <motion.img
                  src="/assets/browser_tab_logo.png"
                  alt="Farhan Bukhari Logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg shadow-md group-hover:shadow-lg transition-shadow relative z-10"
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                />

                {/* Enhanced Logo Text with gradient */}
                <span 
                  className="text-lg sm:text-xl md:text-2xl font-bold font-heading relative z-10 tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #FF71CE 0%, #B967FF 50%, #01CDFE 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {logo.text}
                </span>

                {/* Glow effect behind text */}
                <motion.div
                  className="absolute inset-0 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 113, 206, 0.1) 0%, rgba(185, 103, 255, 0.1) 100%)',
                    filter: 'blur(8px)',
                  }}
                />
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
                    className={`relative px-4 lg:px-5 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2 ${
                      isActive(item.path)
                        ? 'text-[#1A1A1A]'
                        : 'text-[#5A5A5A] hover:text-[#1A1A1A]'
                    }`}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                  >
                    {item.label}
                    {/* Active indicator */}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0.5 w-12 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, #FF71CE 0%, #B967FF 50%, #01CDFE 100%)',
                        }}
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg -z-10"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 113, 206, 0.1) 0%, rgba(185, 103, 255, 0.1) 100%)',
                      }}
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
              className="md:hidden p-2.5 rounded-lg text-[#1A1A1A] hover:bg-[#FFF0FB] active:bg-[#FFE0F5] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2 group"
              aria-label={isMobileDrawerOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileDrawerOpen}
              aria-controls="mobile-drawer"
            >
              <motion.div
                className="w-6 h-6 relative flex items-center justify-center"
                animate={{ rotate: isMobileDrawerOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <AnimatePresence mode="wait">
                  {isMobileDrawerOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiX className="w-6 h-6 text-[#1A1A1A] group-hover:text-[#B967FF] transition-colors" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiMenuAlt3 className="w-6 h-6 text-[#1A1A1A] group-hover:text-[#B967FF] transition-colors" />
                    </motion.div>
                  )}
                </AnimatePresence>
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
