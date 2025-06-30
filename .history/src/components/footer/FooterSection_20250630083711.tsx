export default function FooterSection() {
  return (
    <footer className="bg-black text-white p-4 md:p-8 rounded-t-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="text-lime-400 text-lg font-bold mb-4">DEVLOP.ME</div>
          <div className="text-3xl md:text-4xl font-bold italic text-white mb-8">
            As you <span className="italic">can</span>
          </div>

          {/* Mobile Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            {/* Say Hello Column */}
            <div>
              <h3 className="text-gray-400 text-sm font-medium mb-4">Say hello</h3>
              <div className="space-y-2">
                <a
                  href="mailto:HELLO@DEVLOP.ME.COM"
                  className="block text-white hover:text-lime-400 transition-colors text-sm"
                >
                  HELLO@DEVLOP.ME.COM
                </a>
                <a
                  href="mailto:MAHBUBUL@ME.COM"
                  className="block text-white hover:text-lime-400 transition-colors text-sm"
                >
                  MAHBUBUL@ME.COM
                </a>
              </div>
            </div>

            {/* Call Column */}
            <div>
              <h3 className="text-gray-400 text-sm font-medium mb-4">Call</h3>
              <div className="space-y-2">
                <a href="tel:+784549498100" className="block text-white hover:text-lime-400 transition-colors text-sm">
                  +784549 4981 00
                </a>
                <a href="tel:+88450100211" className="block text-white hover:text-lime-400 transition-colors text-sm">
                  +8845 0100 211
                </a>
              </div>
            </div>

            {/* Menu Column */}
            <div>
              <h3 className="text-gray-400 text-sm font-medium mb-4">Menu</h3>
              <div className="space-y-2">
                <a href="#" className="block text-white hover:text-lime-400 transition-colors text-sm">
                  HOME
                </a>
                <a href="#" className="block text-white hover:text-lime-400 transition-colors text-sm">
                  ABOUT
                </a>
                <a href="#" className="block text-white hover:text-lime-400 transition-colors text-sm">
                  PORTFOLIO
                </a>
                <a href="#" className="block text-white hover:text-lime-400 transition-colors text-sm">
                  BLOG
                </a>
              </div>
            </div>

            {/* Social Column */}
            <div>
              <h3 className="text-gray-400 text-sm font-medium mb-4">Social</h3>
              <div className="space-y-2">
                <a href="#" className="block text-white hover:text-lime-400 transition-colors text-sm">
                  TWITTER
                </a>
                <a href="#" className="block text-white hover:text-lime-400 transition-colors text-sm">
                  INSTAGRAM
                </a>
                <a href="#" className="block text-white hover:text-lime-400 transition-colors text-sm">
                  FACEBOOK
                </a>
                <a href="#" className="block text-white hover:text-lime-400 transition-colors text-sm">
                  BEHANCE
                </a>
                <a href="#" className="block text-white hover:text-lime-400 transition-colors text-sm">
                  DRIBBBLE
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Bottom Section */}
          <div className="flex flex-col space-y-4 pt-6 border-t border-gray-800">
            <div className="text-white font-bold text-base">BESNIK</div>
            <div className="text-gray-400 text-xs">© devlop.me 2022</div>
            <div className="text-gray-400 text-xs">
              <a href="#" className="hover:text-white transition-colors">
                PRIVACY
              </a>
              <span className="mx-2">-</span>
              <a href="#" className="hover:text-white transition-colors">
                TERMS
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between">
          {/* Header Section */}
          <div className="flex flex-col items-start justify-between mb-16">
            <div className="text-lime-400 text-xl font-bold">DEVLOP.ME</div>
            <div className="text-white font-bold text-lg">BESNIK</div>
          </div>

          <div>
            {/* Main Content Grid */}
            <div className="text-6xl xl:text-7xl font-bold italic text-white">
              As you <span className="italic">can</span>
            </div>

            <div className="grid grid-cols-4 gap-8 xl:gap-12 mb-16 mt-8">
              {/* Say Hello Column */}
              <div>
                <h3 className="text-gray-400 text-sm font-medium mb-6">Say hello</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:HELLO@DEVLOP.ME.COM"
                    className="block text-white hover:text-lime-400 transition-colors"
                  >
                    HELLO@DEVLOP.ME.COM
                  </a>
                  <a href="mailto:MAHBUBUL@ME.COM" className="block text-white hover:text-lime-400 transition-colors">
                    MAHBUBUL@ME.COM
                  </a>
                </div>
              </div>

              {/* Call Column */}
              <div>
                <h3 className="text-gray-400 text-sm font-medium mb-6">Call</h3>
                <div className="space-y-3">
                  <a href="tel:+784549498100" className="block text-white hover:text-lime-400 transition-colors">
                    +784549 4981 00
                  </a>
                  <a href="tel:+88450100211" className="block text-white hover:text-lime-400 transition-colors">
                    +8845 0100 211
                  </a>
                </div>
              </div>

              {/* Menu Column */}
              <div>
                <h3 className="text-gray-400 text-sm font-medium mb-6">Menu</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-white hover:text-lime-400 transition-colors">
                    HOME
                  </a>
                  <a href="#" className="block text-white hover:text-lime-400 transition-colors">
                    ABOUT
                  </a>
                  <a href="#" className="block text-white hover:text-lime-400 transition-colors">
                    PORTFOLIO
                  </a>
                  <a href="#" className="block text-white hover:text-lime-400 transition-colors">
                    BLOG
                  </a>
                </div>
              </div>

              {/* Social Column */}
              <div>
                <h3 className="text-gray-400 text-sm font-medium mb-6">Social</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-white hover:text-lime-400 transition-colors">
                    TWITTER
                  </a>
                  <a href="#" className="block text-white hover:text-lime-400 transition-colors">
                    INSTAGRAM
                  </a>
                  <a href="#" className="block text-white hover:text-lime-400 transition-colors">
                    FACEBOOK
                  </a>
                  <a href="#" className="block text-white hover:text-lime-400 transition-colors">
                    BEHANCE
                  </a>
                  <a href="#" className="block text-white hover:text-lime-400 transition-colors">
                    DRIBBBLE
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex items-center justify-between pt-8 border-t border-gray-800">
              <div className="text-gray-400 text-sm">© devlop.me 2022</div>
              <div className="text-gray-400 text-sm">
                <a href="#" className="hover:text-white transition-colors">
                  PRIVACY
                </a>
                <span className="mx-2">-</span>
                <a href="#" className="hover:text-white transition-colors">
                  TERMS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
