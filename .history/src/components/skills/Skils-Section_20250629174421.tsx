"use client"

import { Check, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const skillsData = [
  {
    title: "HTML & CSS",
    description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    title: "Javascript",
    description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    title: "Webflow",
    description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    title: "React",
    description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    title: "Node.js",
    description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    title: "Python",
    description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
]

export default function SkillSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + cardsPerView >= skillsData.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, skillsData.length - cardsPerView) : prev - 1))
  }

  const AtomicIcon = () => (
    <div className="relative w-12 h-12 flex items-center justify-center">
      {/* Central nucleus */}
      <div className="absolute w-2 h-2 bg-lime-400 rounded-full z-10"></div>

      {/* Orbital rings */}
      <div className="absolute w-10 h-6 border border-white rounded-full"></div>
      <div className="absolute w-10 h-6 border border-white rounded-full rotate-60"></div>
      <div className="absolute w-10 h-6 border border-white rounded-full -rotate-60"></div>

      {/* Outer orbital ring */}
      <div className="absolute w-12 h-7 border border-white/60 rounded-full"></div>
    </div>
  )

  return (
    <div className="bg-black text-white p-8 md:p-12 lg:p-16 rounded-3xl max-w-[1500px] mx-auto">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
        <div className="flex-1">
          {/* Why Choose Me Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-black" />
            </div>
            <span className="text-sm font-medium">Why Choose me</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 lg:mb-0">
            My Extensive
            <br />
            List of Skills
          </h1>
        </div>

        {/* Right Side Content */}
        <div className="lg:max-w-md lg:ml-8">
          <p className="text-gray-300 text-lg mb-8 lg:mb-12">
            Building the worlds best marketing Your trusted partner for strategy, design, and dev.
          </p>

          {/* Navigation Arrows */}
          <div className="flex justify-end gap-4">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-white/20 bg-transparent hover:bg-white/10 text-white transition-all duration-200"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-white/20 bg-transparent hover:bg-white/10 text-white transition-all duration-200"
              onClick={nextSlide}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Skills Cards Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
          }}
        >
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex-shrink-0"
              style={{ width: `calc(${100 / cardsPerView}% - 1rem)` }}
            >
              <div className="mb-6">
                <AtomicIcon />
              </div>
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: Math.ceil(skillsData.length / cardsPerView) }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              Math.floor(currentIndex / cardsPerView) === index ? "bg-lime-400" : "bg-white/30"
            }`}
            onClick={() => setCurrentIndex(index * cardsPerView)}
          />
        ))}
      </div>
    </div>
  )
}
