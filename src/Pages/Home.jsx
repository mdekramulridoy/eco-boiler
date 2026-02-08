import { Link } from "react-router-dom";
import Hero from "../Component/Hero";

const Home = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <Hero />

      {/* ===== ABOUT SNAPSHOT ===== */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative animate-in fade-in slide-in-from-left duration-1000">
            <span className="text-[#00ba3e] font-extrabold uppercase tracking-widest text-sm mb-4 block">
              Engineering Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Leading the Way in <br /> 
              <span className="text-[#00ba3e]">Eco-Friendly</span> Engineering
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed font-medium">
              Eco Boiler and Engineering is a premier industrial solution provider, 
              specializing in high-efficiency fire tube boilers. We combine decades 
              of expertise with sustainable technology to deliver safe, durable, 
              and energy-efficient systems for modern industries.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#00ba3e] text-white rounded-2xl font-bold hover:bg-[#00ff73] hover:text-[#06120a] transition-all duration-300 shadow-xl shadow-[#00ba3e]/20"
            >
              Learn More About Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>

          <div className="relative group animate-in fade-in slide-in-from-right duration-1000">
            <div className="absolute -inset-4 bg-[#00ba3e]/10 rounded-[2.5rem] transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                alt="Industrial Boiler Installation" 
                className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="bg-[#f4fcf6] py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our <span className="text-[#00ba3e]">Core</span> Specialization
            </h2>
            <p className="text-gray-600 text-lg font-medium">
              We focus on high-performance Fire Tube technology designed to optimize 
              thermal efficiency and reduce operational costs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Steam Boiler Card */}
            <div className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#00ba3e]/20">
              <div className="w-16 h-16 bg-[#f4fcf6] text-[#00ba3e] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#00ba3e] group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fire Tube Steam Boiler</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Premium 3-pass wet-back boilers engineered for high pressure and maximum steam quality.
              </p>
              <Link to="/products" className="text-[#00ba3e] font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Explore Tech <span className="text-xl">→</span>
              </Link>
            </div>

            {/* Heat Recovery Card */}
            <div className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#00ba3e]/20">
              <div className="w-16 h-16 bg-[#f4fcf6] text-[#00ba3e] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#00ba3e] group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Heat Recovery Systems</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                HRSG units designed to capture industrial waste heat and turn it into zero-cost energy.
              </p>
              <Link to="/products" className="text-[#00ba3e] font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Explore Tech <span className="text-xl">→</span>
              </Link>
            </div>

            {/* Spares/Service Card */}
            <div className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#00ba3e]/20">
              <div className="w-16 h-16 bg-[#f4fcf6] text-[#00ba3e] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#00ba3e] group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Parts & Maintenance</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                High-precision burners, PLC panels, and 24/7 technical support for peak performance.
              </p>
              <Link to="/products" className="text-[#00ba3e] font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Explore Tech <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US STATS ===== */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 sm:grid-cols-2 gap-12 text-center">
          
          <div className="p-8 rounded-3xl bg-[#f4fcf6] hover:scale-105 transition-transform">
            <h3 className="text-5xl font-black text-[#00ba3e] mb-2">25+</h3>
            <p className="text-gray-900 font-bold uppercase tracking-widest text-xs">Years Expertise</p>
          </div>

          <div className="p-8 rounded-3xl bg-[#f4fcf6] hover:scale-105 transition-transform">
            <h3 className="text-5xl font-black text-[#00ba3e] mb-2">95%</h3>
            <p className="text-gray-900 font-bold uppercase tracking-widest text-xs">Thermal Efficiency</p>
          </div>

          <div className="p-8 rounded-3xl bg-[#f4fcf6] hover:scale-105 transition-transform">
            <h3 className="text-5xl font-black text-[#00ba3e] mb-2">100%</h3>
            <p className="text-gray-900 font-bold uppercase tracking-widest text-xs">Safety Record</p>
          </div>

          <div className="p-8 rounded-3xl bg-[#f4fcf6] hover:scale-105 transition-transform">
            <h3 className="text-5xl font-black text-[#00ba3e] mb-2">24/7</h3>
            <p className="text-gray-900 font-bold uppercase tracking-widest text-xs">Technical Support</p>
          </div>

        </div>
      </section>

      {/* ===== FINAL CALL TO ACTION ===== */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#0c2a16]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,186,62,0.15),transparent_70%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight italic">
            Ready to Build a <span className="text-[#00ba3e]">Greener</span> Industry?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-medium">
            Contact Eco Boiler and Engineering today for reliable fire tube boiler 
            systems and precision engineering support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="px-12 py-5 bg-[#00ba3e] text-white font-black rounded-2xl hover:bg-[#00ff73] hover:text-[#06120a] transition-all duration-300 shadow-2xl shadow-[#00ba3e]/40 text-lg"
            >
              Contact Our Engineers
            </Link>
            <Link
              to="/products"
              className="px-12 py-5 border-2 border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-lg"
            >
              View Catalog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;