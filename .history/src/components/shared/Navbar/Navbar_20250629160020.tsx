"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-xl font-bold">
              <span className="text-black">DEVLOP</span>
              <span className="text-red-600">.ME</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all duration-200 hover:scale-105">
              Start Project
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Mobile Logo */}
                  <div className="text-xl font-bold mb-8">
                    <span className="text-black">DEVLOP</span>
                    <span className="text-red-600">.ME</span>
                  </div>

                  {/* Mobile Navigation Links */}
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-gray-700 hover:text-gray-900 px-4 py-3 text-lg font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md block"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}

                  {/* Mobile CTA Button */}
                  <div className="pt-6">
                    <Button
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Start Project
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
