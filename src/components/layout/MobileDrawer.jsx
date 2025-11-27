import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * MobileDrawer Component
 * Slide-in mobile navigation drawer with Framer Motion animations
 */
const MobileDrawer = ({ isOpen, onClose, navItems }) => {
  const location = useLocation()

  // Close drawer on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when drawer is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  // Animation variants
  const drawerVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  }

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20,
    },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 25,
      },
    }),
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={backdropVariants}
            onClick={onClose}
            className="fixed inset-0 bg-[#1A1A1A]/50 backdrop-blur-sm z-50 md:hidden"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            initial="closed"
            animate="open"
            exit="closed"
            variants={drawerVariants}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#FDF7FF] shadow-2xl z-50 md:hidden"
            style={{
              boxShadow: '0 10px 15px -3px rgba(185, 103, 255, 0.25)',
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex flex-col h-full">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#EADFF2]">
                <h2 className="text-xl font-bold text-[#1A1A1A] font-heading">Menu</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-[#5A5A5A] hover:bg-[#FFF0FB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 overflow-y-auto p-6" aria-label="Main navigation">
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.path}
                      custom={index}
                      initial="closed"
                      animate="open"
                      variants={itemVariants}
                    >
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2 ${
                          isActive(item.path)
                            ? 'text-white shadow-md'
                            : 'text-[#5A5A5A] hover:text-[#1A1A1A] hover:bg-[#FFF0FB]'
                        }`}
                        style={
                          isActive(item.path)
                            ? {
                                background: 'linear-gradient(135deg, #FF71CE 0%, #B967FF 50%, #01CDFE 100%)',
                                boxShadow: '0 4px 6px -1px rgba(185, 103, 255, 0.35)',
                              }
                            : {}
                        }
                        aria-current={isActive(item.path) ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileDrawer

