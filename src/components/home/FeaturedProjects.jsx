/**
 * FeaturedProjects Component
 * Featured projects section skeleton - structure and spacing only
 */
const FeaturedProjects = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="h-10 md:h-12 w-80 mx-auto bg-[#FDF7FF] border-2 border-dashed border-[#EADFF2] rounded-lg flex items-center justify-center">
            <span className="text-[#5A5A5A] text-sm">Featured Projects</span>
          </div>
          <div className="h-1 w-40 mx-auto bg-gradient-to-r from-[#FF71CE] to-[#01CDFE] rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="group flex flex-col bg-[#FDF7FF] border-2 border-dashed border-[#EADFF2] rounded-2xl overflow-hidden hover:border-[#B967FF] transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video w-full bg-[#FFF0FB] border-b-2 border-dashed border-[#EADFF2] flex items-center justify-center">
                <span className="text-[#5A5A5A] text-xs">Project Image</span>
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col">
                {/* Project Title */}
                <div className="h-6 md:h-7 w-3/4 bg-[#FFF0FB] border border-dashed border-[#EADFF2] rounded-lg"></div>

                {/* Project Description */}
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-full bg-[#FFF0FB] border border-dashed border-[#EADFF2] rounded"></div>
                  <div className="h-4 w-full bg-[#FFF0FB] border border-dashed border-[#EADFF2] rounded"></div>
                  <div className="h-4 w-5/6 bg-[#FFF0FB] border border-dashed border-[#EADFF2] rounded"></div>
                </div>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <div className="h-6 w-16 bg-[#F2FDFF] border border-dashed border-[#EADFF2] rounded-full"></div>
                  <div className="h-6 w-20 bg-[#F2FDFF] border border-dashed border-[#EADFF2] rounded-full"></div>
                  <div className="h-6 w-14 bg-[#F2FDFF] border border-dashed border-[#EADFF2] rounded-full"></div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-4">
                  <div className="h-10 w-24 bg-[#FFF0FB] border border-dashed border-[#FF71CE] rounded-lg"></div>
                  <div className="h-10 w-24 bg-[#F2FDFF] border border-dashed border-[#01CDFE] rounded-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12 md:mt-16">
          <div className="h-12 w-48 mx-auto bg-[#FFF0FB] border-2 border-dashed border-[#B967FF] rounded-lg flex items-center justify-center">
            <span className="text-[#5A5A5A] text-sm">View All Projects</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects

