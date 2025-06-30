
import { Button } from "../ui/button"
import Worked from "./Worked-Section"
import { FaDownload } from "react-icons/fa"

export default function About() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url('../../about.png')",
        backgroundSize: "cover",
        backgroundPosition: "top left",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navigation */}
      <nav className="flex justify-end items-center pt-6 pr-8">
        <div className="flex items-center gap-2">
          <Button className="w-9 h-9 rounded-full cursor-pointer border border-gray-400 bg-white flex items-center justify-center">
            <FaDownload className="h-3.5 w-3.5 text-black fill-black" />
          </Button>
          <button className="px-5 cur py-2 rounded-full border border-gray-400 bg-white text-black text-sm font-medium">
            About
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="px-4 pt-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6 text-black space-y-8">
            I&#39;ve been <span className="bg-black text-white px-5 py-2 rounded-2xl inline-block mx-1">Developing</span>
            <br />
            Websites since <span className="bg-black text-white px-5 py-2 rounded-2xl inline-block mx-1">2013</span>
          </h1>

          <p className="text-lg text-black max-w-xl mx-auto leading-relaxed mt-8">
            We start every new client interaction with an in-depth discovery call where we get
            <br />
            to know each other and recommend the best course of action.
          </p>
        </div>

        {/* Previously Worked On Section */}
        <div className="relative max-w-5xl mx-auto">
          <Worked/>
        </div>
      </div>
    </div>
  )
}
