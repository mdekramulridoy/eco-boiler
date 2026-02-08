import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#06120a] text-gray-400 font-sans">
      
      {/* ===== Top Branding & Newsletter (Optional/Accent) ===== */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#00ba3e]/10 rounded-xl flex items-center justify-center border border-[#00ba3e]/20">
              <img
                src="https://i.ibb.co.com/ksmx1vbp/Eco-Boiler-circle.png"
                alt="Eco Boiler Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white leading-none tracking-tight">
                ECO <span className="text-[#00ba3e]">BOILER</span>
              </h2>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                Engineering Excellence
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            {/* Social Icons (Inline SVGs for reliability) */}
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00ba3e] hover:text-white transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00ba3e] hover:text-white transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.61c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.71h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* ===== Main Footer Content ===== */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

        {/* Column 1: About */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-[#00ba3e]"></span>
            The Company
          </h4>
          <p className="text-sm leading-relaxed mb-6 italic">
            "Eco Boiler and Engineering is a global leader in high-efficiency fire tube boiler systems, 
            driving industrial growth through sustainable energy innovation."
          </p>
          <div className="flex items-center gap-3">
             <div className="px-3 py-1 border border-white/10 rounded-md text-[10px] font-bold text-gray-500 uppercase">ISO 9001</div>
             <div className="px-3 py-1 border border-white/10 rounded-md text-[10px] font-bold text-gray-500 uppercase">Green Tech</div>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-[#00ba3e]"></span>
            Navigation
          </h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/" className="hover:text-[#00ba3e] transition-colors">Industrial Home</Link></li>
            <li><Link to="/about" className="hover:text-[#00ba3e] transition-colors">Corporate Profile</Link></li>
            <li><Link to="/products" className="hover:text-[#00ba3e] transition-colors">Tech Solutions</Link></li>
            <li><Link to="/services" className="hover:text-[#00ba3e] transition-colors">After-Sales Support</Link></li>
            <li><Link to="/contact" className="hover:text-[#00ba3e] transition-colors">Global Inquiry</Link></li>
          </ul>
        </div>

        {/* Column 3: Expertise */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-[#00ba3e]"></span>
            Expertise
          </h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-center gap-2 text-gray-500">
              <span className="text-[#00ba3e]">●</span> Fire Tube Steam Boilers
            </li>
            <li className="flex items-center gap-2 text-gray-500">
              <span className="text-[#00ba3e]">●</span> HRSG Waste Heat Recovery
            </li>
            <li className="flex items-center gap-2 text-gray-500">
              <span className="text-[#00ba3e]">●</span> PLC Automation Systems
            </li>
            <li className="flex items-center gap-2 text-gray-500">
              <span className="text-[#00ba3e]">●</span> Precision Burner Tuning
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="bg-white/[0.03] p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#00ba3e]/10 rounded-full blur-3xl group-hover:bg-[#00ba3e]/20 transition-all"></div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 relative z-10">Headquarters</h4>
          <ul className="space-y-6 text-sm relative z-10">
            <li className="flex gap-4">
              <span className="text-[#00ba3e] font-bold">HQ:</span>
              <span className="text-gray-300">Dhaka, Bangladesh</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#00ba3e] font-bold">PH:</span>
              <span className="text-gray-300 font-mono tracking-tighter">+880 1XXX-XXXXXX</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#00ba3e] font-bold">EM:</span>
              <a href="mailto:info@ecoboiler.com" className="text-gray-300 hover:text-[#00ba3e]">info@ecoboiler.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600">
          <p>
            © {currentYear} Eco Boiler and Engineering. Empowering Green Industry.
          </p>
          <div className="mt-4 md:mt-0 flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;