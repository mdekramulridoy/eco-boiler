import React from 'react';

const Contact = () => {
  return (
    <main className="bg-[#f8fcf9] min-h-screen font-sans">

      {/* ================= PAGE HEADER (Industrial Dark Green) ================= */}
      <section className="bg-[#0c2a16] text-white py-32 relative overflow-hidden">
        {/* Abstract Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ba3e] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-block mb-6 px-5 py-2 text-xs tracking-[0.3em] uppercase font-bold
                           bg-[#00ba3e]/10 text-[#00ff73] border border-[#00ba3e]/30 rounded-full">
            Connect With Engineers
          </span>

          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Let’s Build Your <br />
            <span className="text-[#00ba3e]">Green Factory</span> Together
          </h1>

          <p className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed font-medium">
            Reach out to Eco Boiler and Engineering for technical consultations, 
            fire tube boiler inquiries, or global project support.
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO CARDS ================= */}
      <section className="py-24 relative z-20 -mt-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">

          {/* Office Card */}
          <div className="group bg-white p-12 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-[#00ba3e]/30 transition-all duration-500">
            <div className="w-14 h-14 bg-[#f4fcf6] text-[#00ba3e] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#00ba3e] group-hover:text-white transition-all duration-300 shadow-sm">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Global Headquarters</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              Eco Boiler and Engineering<br />
              Dhaka, Bangladesh
            </p>
          </div>

          {/* Phone Card */}
          <div className="group bg-white p-12 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-[#00ba3e]/30 transition-all duration-500">
            <div className="w-14 h-14 bg-[#f4fcf6] text-[#00ba3e] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#00ba3e] group-hover:text-white transition-all duration-300 shadow-sm">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Direct Support</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              +880 1XXX-XXXXXX<br />
              +880 1XXX-XXXXXX
            </p>
          </div>

          {/* Email Card */}
          <div className="group bg-white p-12 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-[#00ba3e]/30 transition-all duration-500">
            <div className="w-14 h-14 bg-[#f4fcf6] text-[#00ba3e] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#00ba3e] group-hover:text-white transition-all duration-300 shadow-sm">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Official Inquiries</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              info@ecoboiler.com<br />
              sales@ecoboiler.com
            </p>
          </div>

        </div>
      </section>

      {/* ================= CONTACT FORM SECTION ================= */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-20 items-start">

          {/* Form Side */}
          <div className="lg:col-span-3 bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl shadow-green-900/5 border border-gray-50">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight">
              Submit Your <span className="text-[#00ba3e]">Inquiry</span>
            </h2>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-gray-800 font-medium focus:ring-2 focus:ring-[#00ba3e]/30 transition-all"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">Company Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-gray-800 font-medium focus:ring-2 focus:ring-[#00ba3e]/30 transition-all"
                    placeholder="Your Organization"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-gray-800 font-medium focus:ring-2 focus:ring-[#00ba3e]/30 transition-all"
                    placeholder="email@company.com"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-gray-800 font-medium focus:ring-2 focus:ring-[#00ba3e]/30 transition-all"
                    placeholder="+880..."
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">Project Details / Requirement</label>
                <textarea
                  rows="6"
                  className="w-full bg-gray-50 border-none rounded-3xl px-6 py-5 text-gray-800 font-medium focus:ring-2 focus:ring-[#00ba3e]/30 transition-all resize-none"
                  placeholder="Describe your industrial boiler requirement or specific technical support needed..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-[#00ba3e] hover:bg-[#00ff73] text-white hover:text-[#0c2a16]
                           font-black rounded-2xl shadow-xl shadow-[#00ba3e]/20 transition-all duration-300
                           transform active:scale-[0.98] text-lg uppercase tracking-widest"
              >
                Send Inquiry to Engineering Team
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
                Global Operations & <br /> <span className="text-[#00ba3e]">Support Hours</span>
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed mb-8 text-lg">
                Our specialized engineering team is available for on-site consultations 
                and remote technical support to ensure your plant runs at peak efficiency.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 bg-[#00ba3e] rounded-full mt-2.5"></div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-bold">Standard Operations</p>
                    <p className="text-sm text-gray-500 font-medium">Sat – Thu: 09:00 AM – 06:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 bg-[#00ba3e] rounded-full mt-2.5"></div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-bold">Maintenance Window</p>
                    <p className="text-sm text-gray-500 font-medium">Available 24/7 for Contracted Clients</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 bg-[#0c2a16] rounded-[3rem] text-white relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00ba3e] rounded-full blur-[80px] opacity-20"></div>
               <h4 className="text-xl font-bold mb-4 relative z-10">Urgent Support?</h4>
               <p className="text-gray-400 text-sm mb-6 relative z-10">
                 For critical boiler breakdowns or emergency safety concerns, please use our priority helpline.
               </p>
               <a href="tel:+8801XXXXXXXXX" className="text-[#00ff73] font-black text-xl hover:underline relative z-10">
                 +880 1XXX-XXXXXX
               </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FINAL BRANDING BAR ================= */}
      <section className="bg-white py-16 border-t border-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em]">
            Eco Boiler and Engineering | Precision Fire Tube Technology
          </p>
        </div>
      </section>

    </main>
  );
};

export default Contact;