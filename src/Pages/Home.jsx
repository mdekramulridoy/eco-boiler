import { Link } from "react-router-dom"
import Hero from "../Component/Hero"

const Home = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <Hero />

      {/* ===== ABOUT SNAPSHOT ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              About Eco Boiler
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Eco Boiler Solutions Ltd. is a leading industrial boiler
              manufacturer and service provider, delivering energy-efficient,
              safe, and durable boiler systems for modern industries.
            </p>
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-green-700 text-white rounded-md font-semibold hover:bg-green-800 transition"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-gray-100 h-64 rounded-md flex items-center justify-center text-gray-500">
            Industrial Boiler Image
          </div>

        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Products & Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">
                Industrial Steam Boiler
              </h3>
              <p className="text-gray-600 mb-4">
                High-efficiency steam boilers designed for heavy industrial
                operations.
              </p>
              <Link to="/services" className="text-green-700 font-semibold">
                Read More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">
                Thermal Oil Boiler
              </h3>
              <p className="text-gray-600 mb-4">
                Energy-efficient thermal oil boilers for precise heat control.
              </p>
              <Link to="/services" className="text-green-700 font-semibold">
                Read More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">
                Installation & Maintenance
              </h3>
              <p className="text-gray-600 mb-4">
                Complete installation, servicing, and long-term support.
              </p>
              <Link to="/services" className="text-green-700 font-semibold">
                Read More →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Eco Boiler
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Proven Experience
              </h3>
              <p className="text-gray-600 text-sm">
                Over a decade of industrial boiler expertise.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Energy Efficiency
              </h3>
              <p className="text-gray-600 text-sm">
                Optimized designs to reduce fuel consumption.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Safety First
              </h3>
              <p className="text-gray-600 text-sm">
                Built with strict safety and compliance standards.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-700 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600 text-sm">
                Reliable technical support when you need it.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-green-700 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Power Your Industry?
        </h2>
        <p className="mb-6">
          Contact Eco Boiler Solutions today for reliable industrial boiler systems.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-white text-green-700 font-semibold rounded-md hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </>
  )
}

export default Home
