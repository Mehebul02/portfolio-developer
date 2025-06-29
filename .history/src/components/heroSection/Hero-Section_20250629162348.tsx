import { Button } from "@/components/ui/button"

import { Clock, Instagram, Twitter } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden ">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('../../gradient-bg.png')",
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-white text-black px-2 py-1 mr-2">Trusted</span>
              <span className="bg-black text-white px-2 py-1">Partner</span>
              <span className="text-black"> for</span>
              <br />
              <span className="text-black">Your Website </span>
              <span className="bg-black text-white px-2 py-1">Develop.</span>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-8 max-w-2xl">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Building the worlds best marketing websites for over a decade.
              <br />
              Your trusted partner for strategy, design, and dev.
            </p>
          </div>

          {/* Call to Action Button */}
          <div className="mb-8">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/90 hover:bg-white border-gray-300 text-black px-6 py-3 rounded-full flex items-center gap-2"
            >
              <Clock className="w-4 h-4" />
              Schedule a Call
            </Button>
          </div>
        </div>

        {/* Side Navigation */}
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-20">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            <div className="flex flex-col gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">→</span>
              </div>
              <Instagram className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer" />
              <div className="w-6 h-6 bg-red-500 rounded"></div>
            </div>
            <div className="mt-4 transform -rotate-90 origin-center">
              <span className="text-xs text-gray-600 whitespace-nowrap">@webfactory</span>
            </div>
          </div>
        </div>

        {/* Top Right Avatars */}
        <div className="fixed top-6 right-6 z-20">
          <div className="flex items-center gap-2">
         
            <div className="bg-gray-800 text-white px-2 py-1 rounded text-sm">5</div>
          </div>
        </div>

        {/* Bottom Right Chat */}
        <div className="fixed bottom-6 right-6 z-20">
          <div className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg">
            <span className="text-sm font-medium">Md Jubaerim</span>
          </div>
        </div>

        {/* Top Right Profile Indicators */}
        <div className="fixed top-16 right-20 z-20">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <span className="text-sm text-gray-700 ml-1">5</span>
          </div>
        </div>
      </div>
    </div>
  )
}
