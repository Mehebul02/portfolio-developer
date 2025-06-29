import { Button } from "@/components/ui/button"
import { Phone, Instagram, Globe } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('../../gradient-bg.png')",
      }}
    >
   

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row items-start justify-between px-6 lg:px-12 pt-12 lg:pt-24">
        
        {/* Left Side - Social Icons */}
        <div className="hidden lg:flex flex-col items-center space-y-6 mt-12">
          <div className="flex flex-col items-center space-y-4">
            <Instagram className="w-6 h-6 text-black" />
            <Globe className="w-6 h-6 text-black" />
          </div>
          <div
            className="writing-mode-vertical text-sm text-gray-700 rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            @williamrey
          </div>
        </div>

        {/* Center Content */}
        
      </main>
    </div>
  )
}
