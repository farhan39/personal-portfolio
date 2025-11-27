/**
 * Scroll Utilities
 * Helper functions for scroll-related functionality
 */

/**
 * Throttle function to limit how often a function can be called
 */
export const throttle = (func, limit) => {
  let inThrottle
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Check if user has scrolled past a threshold
 */
export const checkScrollThreshold = (threshold = 50) => {
  return window.scrollY > threshold
}

