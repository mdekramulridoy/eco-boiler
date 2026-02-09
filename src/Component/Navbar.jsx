import { NavLink, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { SearchContext } from "../Context/SearchContext";

const Navbar = () => {
  const { handleSearch } = useContext(SearchContext);

  // Mobile Menu State
  const [menuOpen, setMenuOpen] = useState(false);

  // Active Link Styling
  const navLinkClass = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-bold tracking-wide transition-all duration-300 ${
      isActive 
        ? "text-[#00ba3e] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00ba3e]" 
        : "text-gray-700 hover:text-[#00ba3e]"
    }`;

  return (
    <header className="w-full sticky top-0 z-[100] bg-white shadow-sm">
      {/* ===== Top Bar (Eco Dark Theme) ===== */}
      <div className="bg-[#0c2a16] text-white text-[11px] font-medium tracking-wider uppercase">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#00ba3e] rounded-full animate-pulse"></span>
              Eco Boiler and Engineering
            </span>
          </div>
          <span className="hidden sm:block opacity-80">
            Advanced & Sustainable Fire Tube Boiler Solutions
          </span>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-[#f4fcf6] rounded-xl flex items-center justify-center border border-gray-100 group-hover:border-[#00ba3e]/30 transition-all">
              <img
                src="https://i.ibb.co.com/ksmx1vbp/Eco-Boiler-circle.png"
                alt="Eco Boiler Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-black text-gray-900 leading-none tracking-tight">
                ECO <span className="text-[#00ba3e]">BOILER</span>
              </h1>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                Engineering Excellence
              </p>
            </div>
          </Link>

          {/* ===== Desktop Navigation ===== */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
            <NavLink to="/products" className={navLinkClass}>Products</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          {/* ===== Desktop Actions ===== */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Search Box */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Search solutions..."
                className="w-48 h-10 bg-gray-50 border border-gray-100 rounded-xl px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#00ba3e]/20 focus:border-[#00ba3e] transition-all w-full group-hover:w-64"
                onChange={(e) => handleSearch(e.target.value)}
              />
              <svg className="w-4 h-4 absolute left-3.5 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="h-11 px-7 flex items-center rounded-xl bg-[#00ba3e] text-white text-sm font-bold hover:bg-[#00ff73] hover:text-[#0c2a16] transition-all duration-300 shadow-lg shadow-[#00ba3e]/20 transform active:scale-95"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 text-gray-800 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>

        {/* ===== MOBILE MENU (Side Drawer Style) ===== */}
        <div className={`lg:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 transition-all duration-300 shadow-2xl overflow-hidden ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-8 space-y-4">
            <NavLink onClick={() => setMenuOpen(false)} to="/" className="block text-lg font-bold text-gray-800">Home</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/about" className="block text-lg font-bold text-gray-800">About Us</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/products" className="block text-lg font-bold text-gray-800">Products</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/services" className="block text-lg font-bold text-gray-800">Services</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/contact" className="block text-lg font-bold text-gray-800">Contact</NavLink>
            
            <div className="pt-6 border-t border-gray-100">
               <input
                type="text"
                placeholder="Search..."
                className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm focus:outline-none"
                onChange={(e) => handleSearch(e.target.value)}
              />
              <Link
                onClick={() => setMenuOpen(false)}
                to="/contact"
                className="w-full mt-4 h-12 flex items-center justify-center rounded-xl bg-[#00ba3e] text-white font-bold"
              >
                Get a Quotes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;