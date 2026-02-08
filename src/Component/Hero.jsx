import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#06120a]">
      
      {/* ===== Background Image (High Quality Industrial Boiler) ===== */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1920&q=80"
          alt="Modern Industrial Boiler Plant"
          className="w-full h-full object-cover opacity-25 scale-105"
        />
        {/* Soft Dark Overlay with Greenish Tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06120a] via-[#06120a]/80 to-transparent"></div>
      </div>

      {/* ===== Eco Glow Accents ===== */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00ba3e] rounded-full blur-[150px] opacity-10 -translate-x-1/2 -translate-y-1/2"></div>

      {/* ===== Content Section ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* ===== Left Content ===== */}
        <div className="animate-in fade-in slide-in-from-left duration-1000">
          <span className="inline-block mb-6 px-5 py-2 text-xs tracking-[0.3em] uppercase font-bold
                           bg-[#00ba3e]/10 text-[#00ff73] border border-[#00ba3e]/30 rounded-full">
            Eco Boiler & Engineering
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] text-white">
            Redefining <br />
            <span className="text-[#00ba3e]">Fire Tube</span> <br />
            Efficiency.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed font-medium">
            We are building green industrial solutions through the synergy of 
            fuel efficiency and modern fire tube technology.
          </p>

          {/* ===== CTA Buttons ===== */}
          <div className="mt-12 flex flex-wrap gap-6">
            <Link
              to="/contact"
              className="px-10 py-5 bg-[#00ba3e] hover:bg-[#00ff73] text-white hover:text-[#06120a]
                         font-bold rounded-2xl shadow-2xl shadow-[#00ba3e]/30 transition-all 
                         duration-300 transform hover:-translate-y-1 active:scale-95"
            >
              Request a Quotation
            </Link>

            <Link
              to="/services"
              className="px-10 py-5 border-2 border-white/20 text-white
                         hover:bg-white hover:text-[#06120a] font-bold
                         rounded-2xl transition-all duration-300 backdrop-blur-sm"
            >
              Explore Solutions
            </Link>
          </div>
        </div>

        {/* ===== Right Glass Stats Panel ===== */}
        <div className="relative animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
          {/* Decorative Border Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00ba3e]/50 to-transparent rounded-[2.5rem] blur-md"></div>
          
          <div className="relative backdrop-blur-3xl bg-white/[0.03] border border-white/10
                          rounded-[2.5rem] p-12 shadow-3xl overflow-hidden">
            
            <h3 className="text-2xl font-bold text-white mb-10 tracking-tight">
              Trusted Engineering Partner
            </h3>

            <div className="grid grid-cols-2 gap-y-12 gap-x-8">
              <div className="group">
                <h4 className="text-5xl font-black text-[#00ba3e] group-hover:text-[#00ff73] transition-colors">25+</h4>
                <p className="mt-3 text-sm font-bold text-gray-400 uppercase tracking-widest">Years Expertise</p>
              </div>
              
              <div className="group">
                <h4 className="text-5xl font-black text-[#00ba3e] group-hover:text-[#00ff73] transition-colors">1K+</h4>
                <p className="mt-3 text-sm font-bold text-gray-400 uppercase tracking-widest">Successful Projects</p>
              </div>

              <div className="group">
                <h4 className="text-5xl font-black text-[#00ba3e] group-hover:text-[#00ff73] transition-colors">98%</h4>
                <p className="mt-3 text-sm font-bold text-gray-400 uppercase tracking-widest">Thermal Efficiency</p>
              </div>

              <div className="group">
                <h4 className="text-5xl font-black text-[#00ba3e] group-hover:text-[#00ff73] transition-colors">24/7</h4>
                <p className="mt-3 text-sm font-bold text-gray-400 uppercase tracking-widest">Site Support</p>
              </div>
            </div>

            {/* Subtle Abstract Shape in Card */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#00ba3e] rounded-full blur-[80px] opacity-20"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;