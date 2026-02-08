import React from 'react';
import { Link } from "react-router-dom";

const timelineData = [
  { 
    year: '2001', 
    side: 'left', 
    title: 'The Inception',
    text: 'Eco Boiler and Engineering was founded in Dhaka with a core mission to revolutionize industrial heating through indigenous engineering excellence.' 
  },
  { 
    year: '2010', 
    side: 'right', 
    title: 'Fire Tube Pioneer',
    text: 'We pioneered the 3-pass wet-back fire tube technology in the local market, drastically improving energy efficiency for industrial garment and food sectors.' 
  },
  { 
    year: '2018', 
    side: 'left', 
    title: 'Smart Tech Integration',
    text: 'Launched our IoT-enabled smart monitoring systems, allowing factory managers to monitor boiler health and fuel efficiency in real-time from anywhere.' 
  },
  { 
    year: '2026', 
    side: 'right', 
    title: 'Leading the Green Shift',
    text: 'Today, we stand as a leader in sustainable engineering, focusing on zero-fuel waste heat recovery and ultra-low emission boiler systems.' 
  },
];

const About = () => {
  return (
    <main className="w-full bg-[#f8fcf9] min-h-screen font-sans">
      
      {/* ================= HERO HEADER ================= */}
      <section className="bg-[#0c2a16] text-white py-28 md:py-36 px-6 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ba3e] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00ff73] rounded-full blur-[100px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-6 px-5 py-2 text-xs tracking-[0.3em] uppercase font-bold bg-[#00ba3e]/10 text-[#00ff73] border border-[#00ba3e]/30 rounded-full">
              Engineering Excellence Since 2001
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
              About <span className="text-[#00ba3e]">Eco Boiler</span> & Engineering
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
              We are not just manufacturers; we are thermal efficiency experts dedicated to building a sustainable industrial future with advanced fire tube technology.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
               <div className="absolute -inset-4 bg-[#00ba3e]/10 rounded-[3rem] rotate-3"></div>
               <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 shadow-3xl">
                  <p className="text-[#00ff73] text-4xl font-black mb-2">25+</p>
                  <p className="text-white text-sm font-bold uppercase tracking-widest opacity-60">Years of Innovation</p>
                  <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-2xl font-bold">1K+</p>
                      <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">Projects</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">98%</p>
                      <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">Efficiency</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-24 px-6 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-gray-900 tracking-tight">Our Mission</h3>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              To empower the global manufacturing industry with innovative, energy-efficient, and eco-friendly boiler systems that reduce operational costs and environmental impact.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-gray-900 tracking-tight">Our Vision</h3>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              To be the most trusted name in thermal engineering, recognized worldwide for setting the highest standards in fire tube technology and green energy solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= EVOLUTION TIMELINE ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-6">
                Our <span className="text-[#00ba3e]">Evolution</span> Story
            </h2>
            <p className="text-gray-500 font-medium italic text-lg">"Two decades of precision, passion, and engineering growth."</p>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pb-20">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-[3px] bg-[#00ba3e] -translate-x-1/2 hidden md:block opacity-20"></div>

          {/* Start/End Bullets */}
          <div className="absolute left-1/2 top-[-10px] -translate-x-1/2 w-8 h-8 bg-[#00ba3e] rounded-full z-20 hidden md:block border-4 border-white shadow-xl"></div>
          <div className="absolute left-1/2 bottom-[-10px] -translate-x-1/2 w-8 h-8 bg-[#0c2a16] rounded-full z-20 hidden md:block border-4 border-white shadow-xl"></div>

          <div className="space-y-24 md:space-y-0 relative">
            {timelineData.map((item, index) => (
              <div key={index} className="relative md:flex md:items-start mb-24 last:mb-0 group">
                
                {/* Desktop: Left Side */}
                <div className={`hidden md:block w-1/2 pr-20 ${item.side === 'left' ? 'text-right' : 'invisible'}`}>
                  {item.side === 'left' && (
                    <div className="relative inline-block text-left bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-green-900/5 border border-gray-100 transform transition-all duration-500 group-hover:scale-[1.03]">
                      <span className="block text-4xl font-black text-[#00ba3e] mb-4 tracking-tighter">{item.year}</span>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                      <p className="text-gray-500 text-[16px] leading-relaxed font-medium">{item.text}</p>
                      <div className="absolute top-12 -right-3 w-6 h-6 bg-white rotate-45 border-r border-t border-gray-50 shadow-sm"></div>
                    </div>
                  )}
                </div>

                {/* Center Connection Dots */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10 top-12">
                  <div className="w-6 h-6 bg-[#00ba3e] rounded-full border-4 border-white shadow-lg transition-transform group-hover:scale-125 duration-300"></div>
                  <div className="w-3 h-3 bg-[#00ff73] rounded-full mt-2 opacity-40"></div>
                </div>

                {/* Desktop: Right Side */}
                <div className={`hidden md:block w-1/2 pl-20 ${item.side === 'right' ? 'text-left' : 'invisible'}`}>
                  {item.side === 'right' && (
                    <div className="relative inline-block bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-green-900/5 border border-gray-100 transform transition-all duration-500 group-hover:scale-[1.03]">
                      <span className="block text-4xl font-black text-[#00ba3e] mb-4 tracking-tighter">{item.year}</span>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                      <p className="text-gray-500 text-[16px] leading-relaxed font-medium">{item.text}</p>
                      <div className="absolute top-12 -left-3 w-6 h-6 bg-white rotate-45 border-l border-b border-gray-50 shadow-sm"></div>
                    </div>
                  )}
                </div>

                {/* Mobile Implementation */}
                <div className="md:hidden flex">
                  <div className="mr-8 flex flex-col items-center">
                    <div className="w-6 h-6 bg-[#00ba3e] rounded-full border-4 border-white z-10"></div>
                    <div className="w-[2px] h-full bg-[#00ba3e]/20"></div>
                  </div>
                  <div className="bg-white p-8 rounded-[2rem] mb-6 flex-1 shadow-xl border border-gray-50">
                    <span className="block text-2xl font-black text-[#00ba3e] mb-2">{item.year}</span>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="bg-[#0c2a16] py-24 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,186,62,0.1),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight italic uppercase tracking-tighter">
            Be a Part of Our <span className="text-[#00ba3e]">Green</span> Legacy
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
            Join the hundreds of industries that have upgraded to Eco Boiler engineering for a cleaner and more profitable tomorrow.
          </p>
          <Link
            to="/contact"
            className="px-12 py-5 bg-[#00ba3e] text-white font-black rounded-2xl hover:bg-[#00ff73] hover:text-[#0c2a16] transition-all duration-300 shadow-2xl shadow-[#00ba3e]/40 text-lg uppercase tracking-widest"
          >
            Contact Our Experts
          </Link>
        </div>
      </section>

      {/* Footer Branding Bar */}
      <footer className="py-12 text-center bg-white border-t border-gray-100">
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em]">
          Eco Boiler and Engineering | Precision Fire Tube Technology
        </p>
      </footer>
    </main>
  );
};

export default About;