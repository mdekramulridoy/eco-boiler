import React from 'react';
import { Link } from "react-router-dom";

const Services = () => {
  const coreServices = [
    {
      title: "Custom Fire Tube Engineering",
      desc: "Tailored industrial boiler designs optimized for specific pressure, fuel type, and thermal requirements.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.618.309a2 2 0 01-1.789 0l-.618-.309a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547V6.331a2 2 0 011.022-.547l2.387-.477a6 6 0 013.86.517l.618.309a2 2 0 001.789 0l.618-.309a6 6 0 013.86-.517l2.387.477a2 2 0 011.022.547v9.097z" />
        </svg>
      )
    },
    {
      title: "Precision Installation",
      desc: "Expert on-site installation and testing following international safety standards for industrial plants.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "24/7 Technical Support",
      desc: "Round-the-clock emergency technical assistance and breakdown recovery for critical boiler operations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Energy Audit & Optimization",
      desc: "Thermal efficiency audits and system retrofits to reduce fuel consumption and carbon emissions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Smart Automation Upgrade",
      desc: "Upgrading legacy boilers with modern PLC-based control systems for IoT-enabled remote monitoring.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "Spares Management",
      desc: "Supply and maintenance of genuine boiler spares, including burners, pumps, and control valves.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
      )
    }
  ];

  return (
    <main className="bg-[#f8fcf9] min-h-screen font-sans">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-[#0c2a16] text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ba3e] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-block mb-6 px-5 py-2 text-xs tracking-[0.3em] uppercase font-bold
                           bg-[#00ba3e]/10 text-[#00ff73] border border-[#00ba3e]/30 rounded-full">
            Our Expertise
          </span>

          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Industrial <span className="text-[#00ba3e]">Engineering</span> <br /> 
            Service Ecosystem.
          </h1>

          <p className="text-gray-400 max-w-3xl text-lg md:text-xl leading-relaxed font-medium">
            Eco Boiler and Engineering provides end-to-end industrial solutions 
            covering design, manufacturing, installation, and global lifecycle support.
          </p>
        </div>
      </section>

      {/* ================= SERVICE OVERVIEW ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">
              Unmatched Industrial <br /> <span className="text-[#00ba3e]">Commitment.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg font-medium">
              We specialize exclusively in high-load fire tube systems operating 
              within critical production environments. Our engineers ensure 
              consistent steam quality and uncompromising safety.
            </p>
            <ul className="space-y-4 mb-10">
              {["Strict compliance with international boiler codes.", "Advanced thermal imaging for performance analysis.", "Rapid response team for plant emergencies."].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700 font-bold text-sm">
                  <div className="w-6 h-6 bg-[#f4fcf6] text-[#00ba3e] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-3 text-[#00ba3e] font-black uppercase tracking-widest text-xs hover:gap-5 transition-all">
              Discuss Your Project <span className="text-xl">→</span>
            </Link>
          </div>

          <div className="relative group animate-in fade-in slide-in-from-right duration-1000">
             <div className="absolute -inset-4 bg-[#00ba3e]/10 rounded-[3rem] transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  alt="Engineering Support" 
                />
             </div>
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES GRID ================= */}
      <section className="bg-white py-28 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              Our Core <span className="text-[#00ba3e]">Expertise.</span>
            </h2>
            <p className="text-gray-500 font-medium text-lg italic">
              "Delivering precision-driven engineering services across the boiler lifecycle."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {coreServices.map((service, index) => (
              <div key={index} className="group p-10 bg-[#f4fcf6]/50 rounded-[2.5rem] border border-transparent hover:border-[#00ba3e]/20 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-[#00ba3e] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#00ba3e]/20 group-hover:rotate-12 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS STEPS ================= */}
      <section className="py-28 bg-[#0c2a16] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,186,62,0.1),transparent_70%)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-black mb-16 tracking-tight">Our Service <span className="text-[#00ba3e]">Approach</span></h2>
          
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Analysis", desc: "Detailed audit of thermal requirements and plant conditions." },
              { step: "02", title: "Engineering", desc: "Compliance-ready system design and capacity planning." },
              { step: "03", title: "Execution", desc: "Precision installation and high-pressure commissioning." },
              { step: "04", title: "Operations", desc: "Lifecycle maintenance and 24/7 technical assistance." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <span className="text-6xl font-black text-white/5 absolute -top-10 left-0">{item.step}</span>
                <h4 className="text-xl font-extrabold text-[#00ba3e] mb-4 relative z-10">{item.title}</h4>
                <p className="text-gray-400 text-sm font-medium leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter">
            Services You Can <br /> <span className="text-[#00ba3e]">Depend On.</span>
          </h2>
          <p className="text-gray-600 text-xl mb-12 font-medium">
            Contact Eco Boiler and Engineering to discuss a professional service 
            contract tailored for your facility.
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-5 bg-[#00ba3e] text-white font-black rounded-2xl 
                       hover:bg-[#00ff73] hover:text-[#0c2a16] transition-all duration-300 
                       shadow-xl shadow-[#00ba3e]/20 text-lg uppercase tracking-widest"
          >
            Request Consultation
          </Link>
        </div>
      </section>

    </main>
  );
};

export default Services;