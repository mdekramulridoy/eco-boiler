import { Routes, Route } from "react-router-dom"
import About from "../Pages/About"
import Home from "../Pages/Home"
import Contact from "../Pages/Contact"
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"
import Services from "../Pages/Services"
import IndustrialBoiler from "../Products/IndustrialBoiler"
import CompanyProfile from "../Pages/CompanyProfile"
import ManagementTeam from "../Pages/ManagementTeam"

const AppRoutes = () => {
  return (
    <>
      <Navbar /> {/* সব পেজে থাকবে */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industrial-steam-boiler" element={<IndustrialBoiler />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/management-team" element={<ManagementTeam />} />
      </Routes>

      <Footer /> {/* সব পেজে থাকবে */}
    </>
  )
}

export default AppRoutes
