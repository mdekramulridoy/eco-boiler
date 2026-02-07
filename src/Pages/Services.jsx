import { Link } from "react-router-dom"

const Services = () => {
  return (
    <main className="bg-white">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-[#0b0f0e] text-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block mb-6 px-4 py-1 text-sm tracking-widest uppercase
                           bg-green-500/10 text-green-400 border border-green-500/30 rounded-full">
            Our Services
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Industrial Boiler Services
          </h1>

          <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
            Eco Boiler Solutions Ltd. provides end-to-end industrial boiler
            services covering engineering, manufacturing support, installation,
            commissioning, and long-term operational assistance.
          </p>
        </div>
      </section>

      {/* ================= SERVICE OVERVIEW ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Comprehensive Industrial Support
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Our services are designed specifically for industrial boiler
              systems operating under continuous load and critical production
              environments.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By focusing exclusively on industrial boiler solutions, we ensure
              consistent quality, strict safety compliance, and reliable
              long-term performance for our clients.
            </p>
          </div>

          <div className="bg-gray-100 h-80 rounded-xl flex items-center justify-center
                          text-gray-400 text-sm">
            Industrial Boiler Service Image
          </div>

        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Our Core Service Offerings
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Service 1 */}
            <div className="bg-white p-10 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Industrial Boiler Engineering
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Customized industrial boiler design based on capacity,
                fuel type, operating pressure, and specific industrial
                process requirements.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-10 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Installation & Commissioning
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Professional installation, testing, and commissioning of
                industrial boiler systems to ensure safe and efficient
                operation from day one.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-10 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Operation & Maintenance Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Preventive maintenance, operational support, and technical
                assistance to maintain optimal boiler performance and
                extend service life.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-10 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Safety Inspection & Compliance
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Boiler inspection, safety audits, and documentation support
                to meet regulatory and compliance requirements.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-10 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Retrofit & Performance Optimization
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Upgrading existing industrial boilers to improve efficiency,
                reduce emissions, and align with updated operational needs.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-10 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Technical Consultation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expert consultation for boiler selection, capacity planning,
                fuel optimization, and lifecycle cost analysis.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICE PROCESS ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-gray-800 mb-14">
            Our Service Approach
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-gray-600 text-sm">

            <div>
              <h4 className="font-semibold text-green-700 mb-2">
                Requirement Analysis
              </h4>
              <p>
                Detailed assessment of industrial process requirements and
                operational conditions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">
                Engineering & Planning
              </h4>
              <p>
                System design, capacity planning, and compliance verification.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">
                Execution & Commissioning
              </h4>
              <p>
                Installation, testing, and safe commissioning of boiler systems.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">
                Ongoing Support
              </h4>
              <p>
                Maintenance, inspection, and long-term technical assistance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-green-700 py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-5">
          Industrial Boiler Services You Can Depend On
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg">
          Contact Eco Boiler Solutions Ltd. to discuss professional industrial
          boiler services tailored to your facility’s requirements.
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-4 bg-white text-green-700
                     font-semibold rounded-md hover:bg-gray-100 transition"
        >
          Request Service Consultation
        </Link>
      </section>

    </main>
  )
}

export default Services
