const Contact = () => {
  return (
    <main className="bg-white">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-[#0b0f0e] text-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block mb-6 px-4 py-1 text-sm tracking-widest uppercase
                           bg-green-500/10 text-green-400 border border-green-500/30 rounded-full">
            Contact Us
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Get in Touch
          </h1>

          <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
            Contact Eco Boiler Solutions Ltd. for industrial boiler inquiries,
            technical consultation, project discussion, or service support.
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* Office Address */}
          <div className="bg-gray-50 p-10 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Head Office
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Eco Boiler Solutions Ltd.<br />
              Dhaka, Bangladesh
            </p>
          </div>

          {/* Phone */}
          <div className="bg-gray-50 p-10 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Phone
            </h3>
            <p className="text-gray-600 text-sm">
              +880 1XXXXXXXXX<br />
              +880 1XXXXXXXXX
            </p>
          </div>

          {/* Email */}
          <div className="bg-gray-50 p-10 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Email
            </h3>
            <p className="text-gray-600 text-sm">
              info@ecoboiler.com<br />
              support@ecoboiler.com
            </p>
          </div>

        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

          {/* Form */}
          <div className="bg-white p-12 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-3
                             focus:outline-none focus:border-green-600"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-3
                             focus:outline-none focus:border-green-600"
                  placeholder="Company / Organization"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-3
                             focus:outline-none focus:border-green-600"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-3
                             focus:outline-none focus:border-green-600"
                  placeholder="+880..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full border border-gray-300 rounded-md px-4 py-3
                             focus:outline-none focus:border-green-600"
                  placeholder="Describe your industrial boiler requirement..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white
                           font-semibold py-3 rounded-md transition"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Office Hours / Note */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Office Hours & Support
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              Our engineering and support team is available to assist you with
              industrial boiler inquiries, project planning, and technical
              consultations.
            </p>

            <ul className="text-gray-600 text-sm space-y-3">
              <li>• Saturday – Thursday: 9:00 AM – 6:00 PM</li>
              <li>• Friday: Closed</li>
              <li>• Emergency technical support available upon request</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-green-700 py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-5">
          Let’s Discuss Your Industrial Boiler Requirement
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg">
          Reach out to Eco Boiler Solutions Ltd. and connect with our
          engineering team for reliable industrial boiler solutions.
        </p>
      </section>

    </main>
  )
}

export default Contact
