import React, { useState, useEffect } from 'react';

// Product Data - Enhanced with Professional English Translations and HQ Industrial Images
const productsData = [
  {
    id: 1,
    category: 'steam-boiler',
    name: 'Eco-Smart Steam Boiler',
    shortDesc: 'High-performance 3-pass wet-back fire tube boiler system.',
    longDesc: 'Our Eco-Smart Steam Boiler is a masterpiece of fire tube technology innovation. It features a 3-pass wet-back design that maximizes heat retention and reduces fuel consumption by up to 25%. Perfectly suited for heavy industries and the textile sector, its automated burner control ensures seamless production with consistent steam generation.',
    image: 'https://www.pennarindia.com/assets/images/boiler-3.png',
    specs: {
      "Capacity": "1 to 25 Ton/hr",
      "Design": "3-Pass Wet Back Fire Tube",
      "Efficiency": "95% to 98%",
      "Fuel Type": "Natural Gas, Diesel, Dual Fuel",
      "Pressure Range": "Up to 25 Bar",
      "Automation": "Fully PLC Controlled"
    }
  },
  {
    id: 2,
    category: 'heat-recovery',
    name: 'Green-Recover HRSG Unit',
    shortDesc: 'Efficient steam generation using industrial waste heat recovery.',
    longDesc: 'The Green-Recover unit by Eco Boiler Engineering captures heat from your generator or turbine exhaust to produce steam with zero additional fuel cost. This fire tube exchanger design is built to withstand high temperatures, helping you reduce your carbon footprint and save significant annual energy costs.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1200',
    specs: {
      "Heat Source": "Engine/Turbine Exhaust",
      "Steam Output": "Customized to Flow",
      "Tube Material": "Seamless Boiler Quality Steel",
      "Safety": "Dual Safety Relief Valves",
      "ROI": "12 to 18 Months Payback",
      "Structure": "Compact Skid-mounted"
    }
  },
  {
    id: 3,
    category: 'spares',
    name: 'Eco-Precision Burner',
    shortDesc: 'Digital modulation Low-NOx burner system for optimal combustion.',
    longDesc: 'The burner is the heart of any boiler. Our Eco-Precision Burner is finely tuned to ensure every fuel particle is combusted for maximum caloric value. Equipped with Siemens or Honeywell digital interfaces, it ensures Low-NOx emissions, helping your facility achieve green certification easily.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200',
    specs: {
      "Model": "Eco-Burner 2026",
      "Compatibility": "All Fire Tube Models",
      "Turndown Ratio": "1:10 High Modulation",
      "Emissions": "Ultra Low NOx",
      "Control Unit": "Siemens Digital PLC",
      "Power": "Variable Fan Speed Drive"
    }
  },
  {
    id: 4,
    category: 'steam-boiler',
    name: 'Compact Vertical Fire Tube',
    shortDesc: 'Maximum steam output in a space-saving vertical design.',
    longDesc: 'Designed for production floors with limited space, our vertical fire tube boiler is the ideal solution. It requires a minimal footprint while delivering premium steam quality. This model is highly popular for food processing and laundry sectors due to its low installation and maintenance costs.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
    specs: {
      "Capacity": "500kg - 2 Ton/hr",
      "Space Required": "Minimum Footprint",
      "Installation": "Ready to plug & play",
      "Efficiency": "92% Net",
      "Safety Level": "SIL-2 Certified",
      "Cleaning": "Easy Access Doors"
    }
  },
  {
    id: 5,
    category: 'spares',
    name: 'Smart Monitoring Panel',
    shortDesc: 'Fully automated boiler safety and IoT monitoring system.',
    longDesc: 'Embrace modern management with our IoT-supported Smart Control Panel. Operators can track real-time pressure, water levels, and fuel flow directly from mobile devices. The integrated smart alarm system provides automatic shutdowns to prevent accidents and ensure plant safety.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    specs: {
      "Display": "10-inch HMI Touch Screen",
      "Compatibility": "Universal Boiler Link",
      "Communication": "Modbus / Wi-Fi / LAN",
      "Safety": "Triple Redundancy Logics",
      "Data Log": "1 Year Storage",
      "Alerts": "SMS & App Notification"
    }
  }
];

const Products = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredProducts = filter === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === filter);

  return (
    <div className="w-full bg-[#f8fcf9] min-h-screen font-sans selection:bg-[#00ba3e] selection:text-white">
      
      {/* Hero Header */}
      <section className="bg-[#0c2a16] text-white py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00ba3e] rounded-full blur-[120px] opacity-20 -translate-y-1/2"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Eco <span className="text-[#00ba3e]">Boiler</span> Engineering
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            We are building green industrial solutions through the synergy of fuel efficiency and modern fire tube technology.
          </p>
        </div>
      </section>

      {/* Tabs Filter */}
      <section className="max-w-6xl mx-auto px-6 -translate-y-12">
        <div className="bg-white p-4 md:p-6 rounded-[32px] shadow-2xl flex flex-wrap justify-center gap-4 border border-gray-100">
          {['all', 'steam-boiler', 'heat-recovery', 'spares'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-10 py-3.5 rounded-2xl font-bold transition-all duration-300 transform active:scale-95 ${
                filter === cat 
                ? 'bg-[#00ba3e] text-white shadow-lg shadow-[#00ba3e]/30' 
                : 'bg-gray-50 text-gray-500 hover:text-[#00ba3e] hover:bg-green-50'
              }`}
            >
              {cat === 'all' ? 'All Tech' : cat.toUpperCase().replace('-', ' ')}
            </button>
          ))}
        </div>
      </section>

      {/* Product List Grid */}
      <section className="max-w-7xl mx-auto px-6 py-10 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#00ba3e]/20 flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-[#0c2a16]/90 backdrop-blur-md text-[#00ff73] px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {product.category.replace('-', ' ')}
                </div>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#00ba3e] transition-colors">{product.name}</h3>
                <p className="text-gray-500 text-[15px] mb-10 leading-relaxed font-medium">
                  {product.shortDesc}
                </p>
                <button 
                  onClick={() => setSelectedProduct(product)}
                  className="mt-auto py-5 bg-gray-900 text-white font-bold rounded-[24px] hover:bg-[#00ba3e] hover:shadow-xl hover:shadow-[#00ba3e]/30 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Explore Details
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PREMIUM DETAILS MODAL --- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-[#0c2a16]/95 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={() => setSelectedProduct(null)}
          ></div>
          
          <div className="relative bg-white w-full max-w-6xl max-h-[90vh] rounded-[48px] shadow-3xl overflow-hidden animate-in zoom-in-95 duration-500 flex flex-col lg:flex-row border border-white/10">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 z-50 w-12 h-12 bg-gray-100 hover:bg-[#00ff73] text-gray-800 rounded-full flex items-center justify-center transition-all shadow-lg hover:rotate-90"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="lg:w-1/2 h-[350px] lg:h-auto relative overflow-hidden">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="w-full h-full object-cover animate-in fade-in duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2a16] via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-12 left-12 text-white">
                <span className="bg-[#00ba3e] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block shadow-lg">Premium Engineering</span>
                <h2 className="text-3xl md:text-5xl font-extrabold">{selectedProduct.name}</h2>
              </div>
            </div>

            <div className="lg:w-1/2 p-10 md:p-16 overflow-y-auto bg-white">
              <div className="mb-12">
                <h4 className="text-[#00ba3e] font-extrabold uppercase tracking-[0.2em] text-xs mb-5">Product Overview</h4>
                <p className="text-gray-600 text-lg leading-relaxed font-medium italic">
                  "{selectedProduct.longDesc}"
                </p>
              </div>

              <div className="mb-12">
                <h4 className="text-gray-900 font-extrabold uppercase tracking-[0.2em] text-xs mb-8 border-b pb-3">Technical Data Sheet</h4>
                <div className="grid grid-cols-1 gap-y-1">
                  {Object.entries(selectedProduct.specs).map(([label, value], index) => (
                    <div 
                      key={label} 
                      className={`flex justify-between items-center py-4 px-2 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} rounded-lg transition-colors hover:bg-green-50/50`}
                    >
                      <span className="text-gray-400 font-semibold text-sm">{label}</span>
                      <span className="text-gray-800 font-extrabold text-sm text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-5 mt-auto">
                <button className="flex-1 py-5 bg-[#00ba3e] text-white font-bold rounded-[24px] hover:bg-[#00ff73] hover:text-gray-900 transition-all shadow-xl shadow-[#00ba3e]/30 flex items-center justify-center gap-3">
                  Get Inquiry
                </button>
                <button className="flex-1 py-5 border-2 border-gray-100 text-gray-700 font-bold rounded-[24px] hover:border-[#00ba3e] hover:text-[#00ba3e] transition-all flex items-center justify-center gap-3">
                  Catalog PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <footer className="py-12 text-center bg-white border-t border-gray-100">
        <p className="text-gray-400 text-sm font-medium">© 2026 Eco Boiler and Engineering | Powered by Advanced Fire Tube Tech</p>
      </footer>
    </div>
  );
};

export default Products;