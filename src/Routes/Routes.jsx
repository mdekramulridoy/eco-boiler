import { Routes, Route } from "react-router-dom"
import About from "../Pages/About"
import Home from "../Pages/Home"
import Contact from "../Pages/Contact"
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"
import Services from "../Pages/Services"
import Products from "../Pages/Products"

const AppRoutes = () => {
  return (
    <>
      <Navbar /> {/* সব পেজে থাকবে */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer /> {/* সব পেজে থাকবে */}
    </>
  )
}

export default AppRoutes
