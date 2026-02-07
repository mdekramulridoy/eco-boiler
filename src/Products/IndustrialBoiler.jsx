import { Link } from "react-router-dom"

const IndustrialBoiler = () => {
  return (
    <main className="bg-white">

      {/* ================= PAGE HERO ================= */}
      <section className="bg-[#0b0f0e] text-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block mb-6 px-4 py-1 text-sm tracking-widest uppercase
                           bg-green-500/10 text-green-400 border border-green-500/30 rounded-full">
            Core Product
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Industrial Boiler Systems
          </h1>

          <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
            Eco Boiler Solutions Ltd. specializes exclusively in the engineering,
            manufacturing, and supply of industrial boiler systems designed for
            continuous operation, high efficiency, and long-term industrial use.
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Industrial Boiler Expertise
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Our industrial boilers are engineered to support heavy-duty
              manufacturing processes where reliability, thermal stability,
              and operational safety are critical.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By focusing exclusively on industrial boiler systems, we ensure
              uncompromised engineering quality, optimized performance, and
              complete alignment with industrial compliance standards.
            </p>
          </div>

          <div className="bg-gray-100 h-80 rounded-xl flex items-center justify-center
                          text-gray-400 text-sm">
            Industrial Boiler System Image
          </div>

        </div>
      </section>

      {/* ================= TECHNICAL CAPABILITIES ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Technical Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-10 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Continuous Operation Design
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Engineered for uninterrupted industrial processes with
                consistent thermal output and system stability.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Fuel Flexibility
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Designed to operate efficiently with gas, diesel, or approved
                industrial fuel systems based on client requirements.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Advanced Control & Automation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Integrated automation, safety interlocks, and monitoring
                systems for precise control and risk mitigation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TECHNICAL SPECIFICATION ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-gray-800 mb-14">
            Standard Technical Specifications
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-gray-600">

            <ul className="space-y-4">
              <li>• Industrial-grade pressure vessel construction</li>
              <li>• High thermal efficiency heat transfer design</li>
              <li>• Fully welded steel structure with NDT inspection</li>
              <li>• Automated combustion control system</li>
              <li>• Integrated safety valves and protection systems</li>
            </ul>

            <ul className="space-y-4">
              <li>• PLC / relay-based control options</li>
              <li>• Low-emission industrial burner system</li>
              <li>• Designed for long operational lifecycle</li>
              <li>• Custom capacity based on industrial demand</li>
              <li>• Compliance-ready documentation</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ================= INDUSTRIAL APPLICATION ================= */}
      <section className="bg-[#0b0f0e] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-12">
            Industrial Applications
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-gray-300 text-sm">
            <p>• Textile & Garments Manufacturing Units</p>
            <p>• Food Processing & Industrial Kitchens</p>
            <p>• Pharmaceutical & Chemical Plants</p>
            <p>• Power & Utility Support Systems</p>
            <p>• Paper, Packaging & Printing Industries</p>
            <p>• Heavy Engineering & Fabrication Plants</p>
          </div>

        </div>
      </section>

      {/* ================= SAFETY & COMPLIANCE ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Safety, Compliance & Reliability
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Safety is integrated into every stage of our industrial boiler
              engineering process—from material selection to final testing
              and commissioning.
            </p>
            <p className="text-gray-600 leading-relaxed">
              All systems are delivered with full technical documentation to
              support inspection, regulatory approval, and long-term operation.
            </p>
          </div>

          <div className="bg-gray-100 h-72 rounded-xl flex items-center justify-center
                          text-gray-400 text-sm">
            Safety & Compliance Documentation
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-green-700 py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-5">
          Industrial Boiler Solutions You Can Rely On
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg">
          Talk to Eco Boiler Solutions Ltd. for customized industrial boiler
          systems engineered to meet your exact operational requirements.
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-4 bg-white text-green-700
                     font-semibold rounded-md hover:bg-gray-100 transition"
        >
          Request Technical Consultation
        </Link>
      </section>

    </main>
  )
}

export default IndustrialBoiler
