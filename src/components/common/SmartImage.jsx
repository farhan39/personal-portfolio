/**
 * Reusable image component to apply sensible defaults:
 * - lazy loading for non-critical images
 * - async decoding to avoid blocking rendering
 * - low fetch priority unless explicitly marked as priority
 */
const SmartImage = ({ priority = false, className = '', ...rest }) => {
  const loading = priority ? 'eager' : 'lazy'
  const fetchPriority = priority ? 'high' : 'low'

  return (
    <img
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      className={className}
      {...rest}
    />
  )
}

export default SmartImage

