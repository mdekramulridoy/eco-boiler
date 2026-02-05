import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* ===== Main Footer ===== */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Eco Boiler
          </h3>
          <p className="text-sm leading-relaxed mb-4">
            Eco Boiler Solutions Ltd. is a trusted industrial boiler
            manufacturer providing energy-efficient, safe, and reliable
            boiler systems for modern industries.
          </p>
          <p className="text-sm">
            ISO Certified | Industrial Grade Solutions
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Products & Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Our Products
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Industrial Steam Boiler</li>
            <li>Thermal Oil Boiler</li>
            <li>Hot Water Boiler</li>
            <li>Boiler Maintenance Service</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact Information
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              📍 Dhaka, Bangladesh
            </li>
            <li>
              📞 +880 1XXXXXXXXX
            </li>
            <li>
              ✉️ info@ecoboiler.com
            </li>
            <li>
              🕒 Sat – Thu : 9:00 AM – 6:00 PM
            </li>
          </ul>
        </div>

      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Eco Boiler Solutions Ltd. All rights reserved.
          </p>
          <p>
            Designed & Developed by Eco Boiler Team
          </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer
