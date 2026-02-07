import { NavLink, Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { SearchContext } from "../Context/SearchContext";

const Navbar = () => {
  const { handleSearch } = useContext(SearchContext);

  // mobile
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutMobile, setAboutMobile] = useState(false);
  const [productMobile, setProductMobile] = useState(false);

  // desktop
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const aboutTimer = useRef(null);
  const productTimer = useRef(null);

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 text-sm font-semibold ${
      isActive ? "text-green-700" : "text-gray-700 hover:text-green-700"
    }`;

  // desktop hover helpers
  const openAbout = () => {
    clearTimeout(aboutTimer.current);
    setAboutOpen(true);
  };
  const closeAbout = () => {
    aboutTimer.current = setTimeout(() => setAboutOpen(false), 150);
  };
  const openProduct = () => {
    clearTimeout(productTimer.current);
    setProductOpen(true);
  };
  const closeProduct = () => {
    productTimer.current = setTimeout(() => setProductOpen(false), 150);
  };

  return (
    <header className="w-full shadow-md">
      {/* ===== Top Bar ===== */}
      <div className="bg-green-800 text-white text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">
          <span>Eco Boiler Solutions Ltd.</span>
          <span className="hidden sm:block">
            Industrial & Energy Efficient Boiler Manufacturer
          </span>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://i.ibb.co.com/ksmx1vbp/Eco-Boiler-circle.png"
              alt="Eco Boiler Logo"
              className="w-11 h-11"
            />
            <div>
              <h1 className="text-lg font-bold text-gray-800">Eco Boiler</h1>
              <p className="text-xs text-gray-500">Industrial Boiler Systems</p>
            </div>
          </Link>

          {/* ===== Desktop Menu ===== */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            {/* About (desktop) */}
            <div
              className="relative"
              onMouseEnter={openAbout}
              onMouseLeave={closeAbout}
            >
              <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-green-700">
                About Us <span className="text-xs">▼</span>
              </button>
              {aboutOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white border shadow-lg rounded-md z-50"
                  onMouseEnter={openAbout}
                  onMouseLeave={closeAbout}
                >
                  <Link
                    to="/about"
                    className="block px-4 py-3 hover:bg-green-50"
                  >
                    <Link to="/company-profile">
                      Company Profile
                    </Link>
                  </Link>
                  <Link
                    to="/about"
                    className="block px-4 py-3 hover:bg-green-50"
                  >
                    <Link to="/management-team" >Management Team</Link>
                  </Link>
                </div>
              )}
            </div>

            {/* Products (desktop) */}
            <div
              className="relative"
              onMouseEnter={openProduct}
              onMouseLeave={closeProduct}
            >
              <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-green-700">
                Products <span className="text-xs">▼</span>
              </button>
              {productOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white border shadow-lg rounded-md z-50"
                  onMouseEnter={openProduct}
                  onMouseLeave={closeProduct}
                >
                  <Link
                    to="/services"
                    className="block px-4 py-3 hover:bg-green-50"
                  >
                    <Link to="/industrial-steam-boiler">
                      Industrial Steam Boiler
                    </Link>
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <input
              type="text"
              placeholder="Search products, services..."
              className="w-64 h-9 border border-gray-300 rounded-md px-3 text-sm"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Link
              to="/contact"
              className="h-9 px-5 flex items-center rounded-md bg-green-700 text-white text-sm font-semibold hover:bg-green-800"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {menuOpen && (
          <div className="lg:hidden border-t bg-white px-4 py-4 space-y-2">
            <NavLink
              onClick={() => setMenuOpen(false)}
              to="/"
              className={navLinkClass}
            >
              Home
            </NavLink>

            {/* About mobile */}
            <button
              onClick={() => setAboutMobile(!aboutMobile)}
              className="w-full flex justify-between px-4 py-2 font-semibold"
            >
              About Us <span>{aboutMobile ? "−" : "+"}</span>
            </button>
            {aboutMobile && (
              <div className="pl-6">
                <Link to="/about" className="block py-2">
                  <Link to="/company-profile" >Company Profile
</Link>
                </Link>
                <Link to="/about" className="block py-2">
                  <Link to="/management-team" >Management Team</Link>
                </Link>
              </div>
            )}

            {/* Products mobile */}
            <button
              onClick={() => setProductMobile(!productMobile)}
              className="w-full flex justify-between px-4 py-2 font-semibold"
            >
              Products <span>{productMobile ? "−" : "+"}</span>
            </button>
            {productMobile && (
              <div className="pl-6">
                <Link to="/services" className="block py-2">
                  <Link to="/industrial-steam-boiler">
                    Industrial Steam Boiler
                  </Link>
                </Link>
              </div>
            )}

            <NavLink
              onClick={() => setMenuOpen(false)}
              to="/services"
              className={navLinkClass}
            >
              Services
            </NavLink>
            <NavLink
              onClick={() => setMenuOpen(false)}
              to="/contact"
              className={navLinkClass}
            >
              Contact
            </NavLink>

            {/* Mobile Search */}
            <input
              type="text"
              placeholder="Search website..."
              className="w-full mt-3 border border-gray-300 rounded-md px-3 py-2 text-sm"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
