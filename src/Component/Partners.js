import React from 'react';
import { LuHandshake, LuSchool, LuBuilding2, LuShieldCheck } from "react-icons/lu";

const partnerNames = [
  "Ministry of Education", "National Youth Council", "Elite Sports Academy", 
  "Tech Impact Africa", "Sustainable Growth Int'l", "Civic Leadership Forum", 
  "Global Wellness Org", "Future Leaders University"
];

const Partners = () => {
  // We double the array to create a seamless infinite loop
  const duplicatedPartners = [...partnerNames, ...partnerNames];

  return (
    <section id="partners" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-left">
        <p className="text-dev-green font-black uppercase tracking-widest text-sm mb-2">Our Network</p>
        <h2 className="text-dev-blue text-4xl md:text-5xl font-black">
          Strategic <span className="text-dev-green italic">Collaboration</span>
        </h2>
      </div>

      {/* --- THE INFINITE CAROUSEL --- */}
      <div className="bg-gray-50 border-y border-gray-100 py-12 relative flex overflow-hidden">
        {/* The Motion Container */}
        <div className="flex whitespace-nowrap animate-infinite-scroll hover:[animation-play-state:paused] cursor-pointer">
          {duplicatedPartners.map((name, i) => (
            <div 
              key={i} 
              className="inline-flex items-center justify-center min-w-[300px] px-8 py-6 bg-white rounded-3xl border border-gray-200 shadow-sm mx-6 transition-all duration-500 hover:border-dev-green group"
            >
              <span className="text-dev-blue font-black text-xl opacity-30 group-hover:opacity-100 group-hover:text-dev-green transition-all uppercase tracking-tighter">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <LuSchool />, label: "Schools" },
            { icon: <LuBuilding2 />, label: "Governments" },
            { icon: <LuShieldCheck />, label: "Private Sector" },
            { icon: <LuHandshake />, label: "Communities" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-dev-green transition-all">
              <div className="text-3xl text-dev-green group-hover:scale-110 transition-transform">{item.icon}</div>
              <span className="font-bold text-dev-blue text-xs uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;