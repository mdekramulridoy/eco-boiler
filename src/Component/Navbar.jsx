import { Link } from "react-router-dom"
import { useContext } from "react"
import { SearchContext } from "../context/SearchContext"

const Navbar = () => {
  const { handleSearch } = useContext(SearchContext)

  return (
    <>
      {/* ===== Top Green Bar ===== */}
      <div className="bg-green-800 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div>
            Eco Boiler Solutions Ltd.
          </div>

          <div className="flex items-center gap-2">
            <select className="select select-xs text-black">
              <option>Corporate</option>
              <option>Industrial</option>
              <option>Support</option>
            </select>

            <button className="btn btn-xs bg-green-600 border-none text-white">
              Go
            </button>
          </div>
        </div>
      </div>

      {/* ===== Logo + Search ===== */}
      <div className="bg-green-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo + Title */}
          <div className="flex items-center gap-3 text-white">
            <div className="w-12 h-12 bg-white text-green-700 font-bold flex items-center justify-center rounded-full">
              EB
            </div>
            <div>
              <h1 className="text-lg font-bold">
                Eco Boiler
              </h1>
              <p className="text-xs">
                Industrial & Energy Efficient Boiler Systems
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="flex w-full md:w-auto gap-2">
            <input
              type="text"
              placeholder="Search Eco Boiler website..."
              className="input input-sm w-full md:w-64 text-black"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Link to="/" className="btn btn-sm bg-green-600 border-none text-white">
              Search
            </Link>
          </div>
        </div>
      </div>

      {/* ===== Main Menu ===== */}
      <div className="bg-green-600">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="menu menu-horizontal text-white gap-2">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li tabIndex={0}>
              <details>
                <summary>About Us</summary>
                <ul className="bg-green-700">
                  <li><Link to="/about">Company Profile</Link></li>
                  <li><Link to="/about">Management</Link></li>
                </ul>
              </details>
            </li>

            <li tabIndex={0}>
              <details>
                <summary>Products</summary>
                <ul className="bg-green-700">
                  <li><Link to="/services">Industrial Boilers</Link></li>
                  <li><Link to="/services">Steam Boilers</Link></li>
                  <li><Link to="/services">Thermal Oil Boilers</Link></li>
                </ul>
              </details>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/contact" className="btn btn-sm bg-white text-green-700 ml-2">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
