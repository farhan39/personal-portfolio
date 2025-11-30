import { motion } from 'framer-motion'

/**
 * ProjectCardSkeleton Component
 * Loading skeleton state for project cards
 */
const ProjectCardSkeleton = ({ className = '' }) => {
  return (
    <div className={`flex flex-col bg-[#FDF7FF] border-2 border-dashed border-[#EADFF2] rounded-2xl overflow-hidden animate-pulse ${className}`}>
      {/* Thumbnail Skeleton */}
      <div className="aspect-video w-full bg-gradient-to-br from-[#FFF0FB] to-[#F2FDFF]"></div>

      {/* Content Skeleton */}
      <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col">
        {/* Title Skeleton */}
        <div className="space-y-2">
          <div className="h-6 md:h-7 w-3/4 bg-[#FFF0FB] rounded-lg"></div>
          <div className="h-6 md:h-7 w-1/2 bg-[#FFF0FB] rounded-lg"></div>
        </div>

        {/* Description Skeleton */}
        <div className="space-y-2 flex-1">
          <div className="h-4 w-full bg-[#FFF0FB] rounded"></div>
          <div className="h-4 w-full bg-[#FFF0FB] rounded"></div>
          <div className="h-4 w-5/6 bg-[#FFF0FB] rounded"></div>
        </div>

        {/* Tags Skeleton */}
        <div className="flex flex-wrap gap-2 pt-2">
          <div className="h-6 w-16 bg-[#F2FDFF] rounded-full"></div>
          <div className="h-6 w-20 bg-[#F2FDFF] rounded-full"></div>
          <div className="h-6 w-14 bg-[#F2FDFF] rounded-full"></div>
        </div>

        {/* Links Skeleton */}
        <div className="flex gap-4 pt-2">
          <div className="h-8 w-20 bg-[#FFF0FB] rounded-lg"></div>
          <div className="h-8 w-20 bg-[#F2FDFF] rounded-lg"></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCardSkeleton

