import BayCitiesLogo from "./components/BayCitiesLogo";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <BayCitiesLogo width={128} height={128} />
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 pb-20">
        <div className="container mx-auto px-4 text-center">
          <BayCitiesLogo width={200} height={267} className="mx-auto mb-8" />
          <h1 className="text-5xl font-bold text-yellow-400 mb-6">
            Bay Cities Lock & Safe
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bay Cities Lock & Safe takes care of all essential commercial
            locksmith services, including re-keying, master keying, access
            control, and record-keeping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Get Emergency Service
            </a>
            <a
              href="tel:408-564-7281"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-colors"
            >
              Call Now: (408) 564-7281
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="text-yellow-400 text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                Masterkeying
              </h3>
              <h2 className="mb-3">One key opens thousands of locks.</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• Tiered access control</li>
                <li>• Security and convenience</li>
                <li>• Key duplication</li>
                <li>• Security upgrades</li>
                <li>• Walkthrough estimates available</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="text-yellow-400 text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                Commercial
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Lock installation & repair</li>
                <li>• Record keeping</li>
                <li>• Commercial safes</li>
                <li>• Office lockouts</li>
                <li>• Security assessments</li>
                <li>• File cabinets</li>
                <li>• Electronic locks</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="text-yellow-400 text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                Hardware and Repairs
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Cost-effective repairs</li>
                <li>• Custom solutions</li>
                <li>• Emergency service</li>
                <li>• On-site service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-yellow-400 mb-8">
              About Bay Cities Lock & Safe
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              With years of experience serving the Bay Area, Bay Cities Lock &
              Safe has built a reputation for reliable, professional locksmith
              services. Our certified technicians are available 24/7 for
              emergency situations and provide expert solutions for all your
              security needs.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-yellow-400 text-3xl font-bold">24/7</div>
                <div className="text-gray-300">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 text-3xl font-bold">
                  Licensed
                </div>
                <div className="text-gray-300">& Insured</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 text-3xl font-bold">Local</div>
                <div className="text-gray-300">Bay Area Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
            Contact Us
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-xl mr-3">📞</span>
                  <a href="tel:408-564-7281" className="text-gray-300 hover:underline">
                    (408) 564-7281
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-xl mr-3">✉️</span>
                  <a href="mailto:support@baycitieslock.com?subject=I need a locksmith!" className="text-gray-300 hover:underline">
                    support@baycitieslock.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-xl mr-3">📍</span>
                  <span className="text-gray-300">
                    Serving the Greater Bay Area
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-xl mr-3">🕒</span>
                  <span className="text-gray-300">
                    24/7 Emergency Service Available
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
                Service Areas
              </h3>
              <div className="text-gray-300 space-y-2">
                <p>• San Francisco</p>
                <p>• Oakland</p>
                <p>• San Jose</p>
                <p>• Berkeley</p>
                <p>• Fremont</p>
                <p>• And surrounding Bay Area cities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <BayCitiesLogo width={80} height={107} className="mx-auto mb-4" />
          <p className="text-gray-400 mb-2">
            © 2025 Bay Cities Lock & Safe. All rights reserved.
          </p>
          <p className="text-gray-400">Licensed, Bonded & Insured</p>
        </div>
      </footer>
    </div>
  );
}
