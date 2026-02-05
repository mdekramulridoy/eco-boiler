import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0b0f0e]">

      {/* ===== Background Image (VISIBLE ~12%) ===== */}
      <img
        src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1920&q=80"
        alt="Industrial Boiler Background"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      {/* ===== Soft Dark Overlay (NOT blocking image) ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

      {/* ===== Eco Glow Accent ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,197,94,0.15),transparent_55%)]"></div>

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">

        {/* ===== Left Content ===== */}
        <div>
          <span className="inline-block mb-6 px-4 py-1 text-sm tracking-widest uppercase
                           bg-green-500/10 text-green-400 border border-green-500/30 rounded-full">
            Industrial Energy Solutions
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Powering Industries with
            <span className="block text-green-400">
              Intelligent Boiler Systems
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-xl leading-relaxed">
            Eco Boiler Solutions Ltd. delivers high-efficiency industrial boiler
            systems engineered for safety, performance, and long-term
            operational excellence.
          </p>

          {/* ===== CTA ===== */}
          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              to="/contact"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white
                         font-semibold rounded-md shadow-lg shadow-green-600/30 transition"
            >
              Request a Quotation
            </Link>

            <Link
              to="/services"
              className="px-8 py-4 border border-white/40 text-white
                         hover:bg-white hover:text-gray-900 font-semibold
                         rounded-md transition"
            >
              Explore Solutions
            </Link>
          </div>
        </div>

        {/* ===== Right Glass Stats Panel ===== */}
        <div className="backdrop-blur-2xl bg-white/5 border border-white/20
                        rounded-2xl p-10 shadow-2xl">

          <h3 className="text-xl font-semibold text-white mb-8">
            Trusted Industrial Partner
          </h3>

          <div className="grid grid-cols-2 gap-10 text-center">
            <div>
              <h4 className="text-4xl font-extrabold text-green-400">15+</h4>
              <p className="mt-2 text-sm text-gray-300">Years of Expertise</p>
            </div>
            <div>
              <h4 className="text-4xl font-extrabold text-green-400">300+</h4>
              <p className="mt-2 text-sm text-gray-300">Industrial Projects</p>
            </div>
            <div>
              <h4 className="text-4xl font-extrabold text-green-400">120+</h4>
              <p className="mt-2 text-sm text-gray-300">Global Clients</p>
            </div>
            <div>
              <h4 className="text-4xl font-extrabold text-green-400">24/7</h4>
              <p className="mt-2 text-sm text-gray-300">Technical Support</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero
