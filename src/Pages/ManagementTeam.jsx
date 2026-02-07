const ManagementTeam = () => {
  return (
    <main className="bg-white">

      {/* ===== PAGE HEADER ===== */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Management Team
          </h1>
          <p className="text-gray-300 max-w-2xl leading-relaxed">
            Leadership that drives engineering excellence, operational
            integrity, and long-term industrial growth.
          </p>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-600 max-w-3xl leading-relaxed text-lg">
            At Eco Boiler Solutions Ltd., our leadership team brings together
            decades of experience in industrial engineering, project execution,
            safety compliance, and strategic management. Their collective
            expertise ensures that every solution we deliver meets the highest
            standards of performance and reliability.
          </p>
        </div>
      </section>


      {/* ===== GOVERNANCE STATEMENT ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Corporate Governance
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our management team is committed to transparent governance,
              ethical business practices, and compliance with all relevant
              regulatory and safety standards.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Strategic decisions are guided by long-term sustainability,
              risk management, and continuous improvement in engineering
              excellence.
            </p>
          </div>

          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center text-gray-400 text-sm">
            Corporate Leadership Image
          </div>

        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-green-700 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Leadership You Can Trust
        </h2>
        <p className="mb-6 max-w-xl mx-auto">
          Engage with a management team that understands industrial challenges
          and delivers dependable engineering solutions.
        </p>
      </section>

    </main>
  )
}

export default ManagementTeam
