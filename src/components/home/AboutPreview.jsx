/**
 * AboutPreview Component
 * About preview section skeleton - structure and spacing only
 */
const AboutPreview = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* About Image/Visual Area */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] w-full bg-[#F2FDFF] border-2 border-dashed border-[#EADFF2] rounded-2xl flex items-center justify-center">
              <span className="text-[#5A5A5A] text-sm">About Image</span>
            </div>
          </div>

          {/* About Content Area */}
          <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
            {/* Section Title */}
            <div className="space-y-3">
              <div className="h-10 md:h-12 w-48 bg-[#FFF0FB] border-2 border-dashed border-[#EADFF2] rounded-lg flex items-center px-4">
                <span className="text-[#5A5A5A] text-sm">About Section</span>
              </div>
              <div className="h-1 w-24 bg-gradient-to-r from-[#FF71CE] to-[#B967FF] rounded-full"></div>
            </div>

            {/* Content Placeholders */}
            <div className="space-y-4">
              <div className="h-6 w-full bg-[#FFF0FB] border border-dashed border-[#EADFF2] rounded-lg"></div>
              <div className="h-6 w-full bg-[#FFF0FB] border border-dashed border-[#EADFF2] rounded-lg"></div>
              <div className="h-6 w-5/6 bg-[#FFF0FB] border border-dashed border-[#EADFF2] rounded-lg"></div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="h-6 w-full bg-[#FFF0FB] border border-dashed border-[#EADFF2] rounded-lg"></div>
              <div className="h-6 w-4/5 bg-[#FFF0FB] border border-dashed border-[#EADFF2] rounded-lg"></div>
            </div>

            {/* CTA Link Placeholder */}
            <div className="pt-4">
              <div className="h-12 w-40 bg-[#FFF0FB] border-2 border-dashed border-[#FF71CE] rounded-lg flex items-center justify-center">
                <span className="text-[#5A5A5A] text-sm">Learn More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview

