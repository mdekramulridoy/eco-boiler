import React from 'react';

const timelineData = [
  { 
    year: '2001', 
    side: 'left', 
    text: 'Company is founded by Philipp Loos in Neustadt (Palatinate region, Germany).' 
  },
  { 
    year: '2005', 
    side: 'right', 
    text: 'New production site in Gunzenhausen (Bavaria, Germany). Development of new series production for floor-standing three-pass boilers.' 
  },
  { 
    year: '2012', 
    side: 'left', 
    text: 'Patent for horizontal three-pass flame-tube smoke-tube boiler with internal, water-cooled flue gas reversing chamber.' 
  },
  { 
    year: '2026', 
    side: 'right', 
    text: 'New, additional sites in Schlungenhof (Germany) and Bischofshofen (Austria).' 
  },
];

const About = () => {
  return (
    <div className="w-full bg-white font-sans min-h-screen py-10">
      {/* Header Section */}
      <header className="py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Company history from 2001 until today
        </h2>
      </header>

      {/* Timeline Section */}
      <div className="relative max-w-6xl mx-auto px-6 pt-10 pb-24">
        
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-[#007dba] -translate-x-1/2 hidden md:block"></div>

        {/* Start Circle */}
        <div className="absolute left-1/2 top-[-10px] -translate-x-1/2 w-8 h-8 bg-[#007dba] rounded-full z-20 hidden md:block border-4 border-white shadow-md"></div>

        {/* End Circle */}
        <div className="absolute left-1/2 bottom-[-10px] -translate-x-1/2 w-8 h-8 bg-[#007dba] rounded-full z-20 hidden md:block border-4 border-white shadow-md"></div>

        <div className="space-y-16 md:space-y-0 relative">
          {timelineData.map((item, index) => (
            <div key={index} className="relative md:flex md:items-start mb-24 last:mb-0">
              
              {/* Left Side */}
              <div className={`hidden md:block w-1/2 pr-16 ${item.side === 'left' ? 'text-right' : 'invisible'}`}>
                {item.side === 'left' && (
                  <div className="relative inline-block text-left bg-[#f4f7f9] p-8 rounded-lg shadow-sm">
                    <span className="block text-2xl font-extrabold text-[#007dba] mb-3">
                      {item.year}
                    </span>
                    <p className="text-gray-700 text-[16px] leading-relaxed font-medium">
                      {item.text}
                    </p>
                    <div className="absolute top-10 -right-2 w-5 h-5 bg-[#f4f7f9] rotate-45"></div>
                  </div>
                )}
              </div>

              {/* Center Dots */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10 top-10">
                <div className="w-5 h-5 bg-[#007dba] rounded-full border-4 border-white shadow-sm mb-2"></div>
                <div className="w-3 h-3 bg-[#007dba] rounded-full border-2 border-white opacity-60"></div>
              </div>

              {/* Right Side */}
              <div className={`hidden md:block w-1/2 pl-16 ${item.side === 'right' ? 'text-left' : 'invisible'}`}>
                {item.side === 'right' && (
                  <div className="relative inline-block bg-[#f4f7f9] p-8 rounded-lg shadow-sm">
                    <span className="block text-2xl font-extrabold text-[#007dba] mb-3">
                      {item.year}
                    </span>
                    <p className="text-gray-700 text-[16px] leading-relaxed font-medium">
                      {item.text}
                    </p>
                    <div className="absolute top-10 -left-2 w-5 h-5 bg-[#f4f7f9] rotate-45"></div>
                  </div>
                )}
              </div>

              {/* Mobile View */}
              <div className="md:hidden flex">
                <div className="mr-6 flex flex-col items-center">
                  <div className="w-5 h-5 bg-[#007dba] rounded-full border-2 border-white z-10"></div>
                  <div className="w-[2px] h-full bg-[#007dba]"></div>
                </div>
                <div className="bg-[#f4f7f9] p-6 rounded-lg mb-4 flex-1 shadow-sm">
                  <span className="block text-xl font-bold text-[#007dba] mb-2">
                    {item.year}
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
