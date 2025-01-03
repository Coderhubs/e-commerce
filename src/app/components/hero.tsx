import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-4 rounded-[20px] overflow-hidden">
        {/* Background Image Container */}
        <div className="relative w-full h-full">
          <div className="absolute inset-0 hero-background">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <div className="max-w-[800px] mx-auto">
              <h1 className="text-[42px] md:text-[56px] shadow-lg text-white font-bold leading-[1.2] mb-6">
                Discovering The Best Furniture For Your Home
              </h1>
              <p className="text-[17px] text-white font-medium shadow-md max-w-[600px] mx-auto mb-8">
                Our practice is designing complete environments, exceptional buildings, 
                communities and place in special situations, here a uniques history
              </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-6 h-6 text-white" />
            </div>

            {/* Free Design Button */}
            <div className="absolute bottom-8 right-8">
              <button className="group relative bg-[#E2FF7D] rounded-full px-6 py-3 text-[15px] font-medium transition-all hover:bg-[#d4ff4d]">
                <span className="relative z-10">100% Free</span>
                <span className="block text-[13px] absolute -bottom-5 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  Design Consultations
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

