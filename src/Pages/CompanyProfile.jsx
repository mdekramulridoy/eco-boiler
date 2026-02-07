import { Link } from "react-router-dom"

const CompanyProfile = () => {
  return (
    <main className="bg-white">

      {/* ===== PAGE HEADER ===== */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Company Profile
          </h1>
          <p className="text-gray-300 max-w-2xl leading-relaxed">
            Learn more about Eco Boiler Solutions Ltd., our journey,
            engineering philosophy, and commitment to industrial excellence.
          </p>
        </div>
      </section>

      {/* ===== COMPANY OVERVIEW ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Eco Boiler Solutions Ltd. is a specialized industrial boiler
              engineering company delivering energy-efficient, safe, and
              high-performance boiler systems for diverse industrial sectors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a strong focus on innovation, compliance, and sustainability,
              we support manufacturing facilities with reliable thermal
              solutions that enhance productivity while reducing operational
              costs and environmental impact.
            </p>
          </div>

          <div className="bg-gray-100 h-72 rounded-lg flex items-center justify-center text-gray-400 text-sm">
            Industrial Facility Image
          </div>

        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div className="bg-white p-10 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To engineer and deliver industrial boiler systems that meet the
              highest standards of safety, efficiency, and durability, while
              supporting our clients’ operational goals and sustainability
              objectives.
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become a trusted regional leader in industrial boiler
              engineering by continuously advancing technology, maintaining
              regulatory excellence, and building long-term partnerships with
              industries worldwide.
            </p>
          </div>

        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-14">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div>
              <h4 className="text-xl font-semibold text-green-700 mb-3">
                Engineering Excellence
              </h4>
              <p className="text-gray-600 text-sm">
                Precision-driven design and strict quality control in every
                project we undertake.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-green-700 mb-3">
                Safety & Compliance
              </h4>
              <p className="text-gray-600 text-sm">
                Full compliance with international safety and environmental
                standards.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-green-700 mb-3">
                Sustainability
              </h4>
              <p className="text-gray-600 text-sm">
                Energy-efficient systems designed to minimize environmental
                impact.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-green-700 mb-3">
                Client Commitment
              </h4>
              <p className="text-gray-600 text-sm">
                Long-term partnerships built on trust, transparency, and
                performance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES SERVED ===== */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-gray-300">

            <p>• Textile & Garments Manufacturing</p>
            <p>• Food & Beverage Processing</p>
            <p>• Pharmaceuticals & Chemicals</p>
            <p>• Power Generation & Utilities</p>
            <p>• Cement & Construction Materials</p>
            <p>• Heavy Engineering Industries</p>

          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-green-700 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Partner with Eco Boiler Solutions
        </h2>
        <p className="mb-6 max-w-xl mx-auto">
          Discover how our industrial boiler systems can enhance efficiency,
          safety, and sustainability in your operations.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-white text-green-700
                     font-semibold rounded-md hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>

    </main>
  )
}

export default CompanyProfile
