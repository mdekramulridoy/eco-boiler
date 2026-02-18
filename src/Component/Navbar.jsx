import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  ChevronRight,
  MessageSquare,
  Wind,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearch } from "../Context/SearchContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { query, handleSearch, results } = useSearch();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleGetQuote = () => {
    const whatsappNumber = "8801919541752";
    const message = `*Inquiry from Eco Boiler Website*%0A--------------------------%0AHello, I would like to get a quotation for your boiler systems.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <nav className="fixed w-full z-[1000] bg-[#06120a]/85 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 bg-[#00ba3e]/10 rounded-full flex items-center justify-center border border-[#00ba3e]/20">
              <img
                src="https://i.ibb.co.com/ccGMxwsn/Eco-Boiler-Logo-3.png"
                alt="Eco Boiler Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-white font-black text-2xl tracking-tighter uppercase">
              Eco<span className="text-[#00ba3e]">Boiler</span>
            </span>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] font-black uppercase tracking-[0.2em] transition-all relative group ${
                  location.pathname === link.path ? "text-[#00ba3e]" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#00ba3e] transition-all duration-300 ${location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
            ))}
          </div>

          {/* DESKTOP SEARCH & BUTTON */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#00ba3e] transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="bg-white/5 border border-white/10 py-2.5 pl-11 pr-4 rounded-xl text-sm text-white outline-none focus:border-[#00ba3e]/50 focus:bg-white/10 transition-all w-40 focus:w-60 font-bold"
              />
              <AnimatePresence>
                {results.length > 0 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full mt-4 left-0 w-80 bg-[#0c2a16] border border-white/10 rounded-2xl shadow-2xl p-4 overflow-hidden">
                    <div className="max-h-60 overflow-y-auto space-y-2">
                      {results.map((res, i) => (
                        <Link key={i} to={res.path} onClick={() => handleSearch("")} className="block p-3 rounded-xl hover:bg-white/5 transition-colors group/item border border-transparent hover:border-[#00ba3e]/20">
                          <p className="text-[#00ba3e] font-black text-sm flex items-center justify-between">{res.title} <ArrowUpRight size={14} /></p>
                          <p className="text-gray-400 text-xs mt-1">{res.description}</p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button onClick={handleGetQuote} className="bg-[#00ba3e] hover:bg-[#00ff73] text-[#06120a] px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg">Get a Quote</button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-[#00ba3e]/10 transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-[#06120a] border-b border-white/5 overflow-hidden shadow-2xl">
            <div className="p-8 pt-4 space-y-8">
              
              {/* Mobile Search - Fixed Integration */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-6 rounded-2xl text-white outline-none font-bold"
                />
                
                {/* Mobile Search Results Overlay */}
                <AnimatePresence>
                  {results.length > 0 && (
                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute z-[1001] left-0 right-0 mt-2 bg-[#0c2a16] border border-white/10 rounded-2xl shadow-2xl p-4 max-h-[300px] overflow-y-auto">
                      {results.map((res, i) => (
                        <Link key={i} to={res.path} onClick={() => { handleSearch(""); setIsOpen(false); }} className="block p-4 mb-2 rounded-xl bg-white/5 border border-transparent active:border-[#00ba3e]">
                          <p className="text-[#00ba3e] font-black text-sm">{res.title}</p>
                          <p className="text-gray-400 text-xs mt-1">{res.description}</p>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-black flex justify-between items-center transition-colors ${location.pathname === link.path ? "text-[#00ba3e]" : "text-white"}`}
                  >
                    {link.name}
                    <ChevronRight size={20} className={location.pathname === link.path ? "text-[#00ba3e]" : "text-gray-600"} />
                  </Link>
                ))}
              </div>

              <button
                onClick={() => { handleGetQuote(); setIsOpen(false); }}
                className="w-full bg-[#00ba3e] text-[#06120a] py-5 rounded-2xl font-black text-lg shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
              >
                <MessageSquare size={22} />
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;