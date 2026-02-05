import { Routes, Route } from "react-router-dom"
import About from "../Pages/About"
import Home from "../Pages/Home"
import Contact from "../Pages/Contact"
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"

const AppRoutes = () => {
  return (
    <>
      <Navbar /> {/* সব পেজে থাকবে */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer /> {/* সব পেজে থাকবে */}
    </>
  )
}

export default AppRoutes
