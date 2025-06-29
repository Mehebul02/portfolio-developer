import { Button } from "@/components/ui/button"
import { Phone, Instagram, Globe } from "lucide-react"

export default function HeroSection() {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('../../gradient-bg.png')",
            }}
        >


            {/* Main Content */}
            <main className=" px-6 lg:px-12 pt-12 lg:pt-24">
                <div className="flex-1 max-w-4xl">
                    {/* Hero Text */}
                    <div className="space-y-4 mb-12">
                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black">
                            Trusted <span className="bg-black text-white px-4 py-2 rounded-2xl inline-block">Partner</span> for
                        </h1>
                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black">
                            Your Website <span className="bg-black text-white px-4 py-2 rounded-2xl inline-block">Develop.</span>
                        </h1>
                    </div>

                    {/* bottom  */}

                </div>
                <div className="flex flex-col lg:flex-row items-center space-x-48  mt-12">
                    {/* Left Side - Social Icons */}
                    <div className="hidden lg:flex flex-row gap-6 items-start space-y-6 mt-12">
                         <div
                            className="writing-mode-vertical text-sm text-gray-700 rotate-180"
                            style={{ writingMode: "vertical-rl" }}
                        >
                            @williamrey
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <Instagram className="w-6 h-6 text-black" />
                            <Globe className="w-6 h-6 text-black" />

                            <div className="">

                            </div>
                        </div>
                       
                    </div>

                    <div className="mb-12 max-w-2xl">
                        <p className="text-lg lg:text-xl text-gray-800 leading-relaxed">
                            Building the worlds best marketing websites for over <span className="font-semibold">a decade.</span>
                            <br />
                            Your trusted partner for strategy, design, and dev.
                        </p>
                        {/* CTA Button */}
                        <Button className="bg-transparent border-2 border-black text-black hover:bg-black mt-6 hover:text-white transition-colors rounded-full px-8 py-6 text-lg">
                            <Phone className="w-5 h-5 mr-3" />
                            Schedule a Call
                        </Button>
                    </div>
                </div>


            </main>
        </div>
    )
}
