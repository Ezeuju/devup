import React, { useState } from 'react';
import { LuHandshake, LuSchool, LuBuilding2, LuShieldCheck, LuChevronDown, LuGlobe2 } from "react-icons/lu";
import partner1 from "../images/partner1.jpeg";
import partner2 from "../images/partner2.jpeg";
import partner3 from "../images/partner3.jpeg";
import partner4 from "../images/partner4.jpeg";
import partner5 from "../images/partner5.jpeg";
import partner7 from "../images/partner7.jpeg";
import partner8 from "../images/partner8.jpeg";
import partner9 from "../images/partner9.jpeg";
import nflag from "../images/nflag.png";
import rflag from "../images/cote.webp"; // Using for Ivory Coast/Cote d'Ivoire
import abidjan from "../images/abidjan.jpg"; // Using for Abidjan city highlight
import kenya from "../images/kenya.png";

const partnerLogos = [
  partner1, partner2, partner3, partner4, partner5, partner7, partner8, partner9
];

const reachData = [
  { name: "Nigeria", flag: nflag },
  { name: "Rwanda", flag: nflag }, // Replace with Rwanda flag if available
  { name: "Côte d'Ivoire", flag: rflag },
  { name: "Abidjan", flag: abidjan },
  { name: "Kenya", flag: kenya }
];

const categoryDetails = [
  { 
    icon: <LuSchool />, 
    label: "Schools", 
    list: ["Future Leaders University", "Elite Sports Academy", "St. Andrews College", "Greenwood High"] 
  },
  { 
    icon: <LuBuilding2 />, 
    label: "Governments", 
    list: ["Ministry of Education", "National Youth Council", "Regional Sports Commission"] 
  },
  { 
    icon: <LuShieldCheck />, 
    label: "Private Sector", 
    list: ["Tech Impact Africa", "Sustainable Growth Int'l", "CushyPay", "Data All Network"] 
  },
  { 
    icon: <LuHandshake />, 
    label: "Communities", 
    list: ["Civic Leadership Forum", "Global Wellness Org", "DevUP Ecosystem", "Blaze Community"] 
  }
];

const Partners = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];
  const duplicatedReach = [...reachData, ...reachData];

  const toggleCategory = (idx) => {
    setActiveCategory(activeCategory === idx ? null : idx);
  };

  return (
    <section id="partners" className="overflow-hidden">
      
      {/* --- PARTNERS SECTION --- */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-left">
          <p className="text-dev-green font-black uppercase tracking-widest text-sm mb-2">Our Partners</p>
          <h2 className="text-dev-blue text-4xl md:text-5xl font-black">
            Strategic <span className="text-dev-green italic">Collaboration</span>
          </h2>
        </div>

        {/* Partners Carousel */}
        <div className="bg-gray-50 border-y border-gray-100 py-12 relative flex overflow-hidden">
          <div className="flex whitespace-nowrap animate-infinite-scroll hover:[animation-play-state:paused] cursor-pointer">
            {duplicatedLogos.map((logo, i) => (
              <div 
                key={i} 
                className="inline-flex items-center justify-center min-w-[300px] md:min-w-[400px] px-12 mx-4 grayscale hover:grayscale-0 transition-all duration-500"
              >
                <img 
                  src={logo} 
                  alt={`Partner Logo ${i}`} 
                  className="h-24 md:h-32 w-auto object-contain max-w-[200px] md:max-w-[300px]" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Categories Grid with Dropdowns */}
        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryDetails.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <button 
                  onClick={() => toggleCategory(idx)}
                  className={`flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 ${
                    activeCategory === idx 
                    ? 'bg-dev-blue text-white border-dev-blue shadow-lg' 
                    : 'bg-gray-50 text-dev-blue border-gray-100 hover:border-dev-green'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`text-3xl ${activeCategory === idx ? 'text-dev-green' : 'text-dev-green'}`}>
                      {item.icon}
                    </div>
                    <span className="font-black text-xs uppercase tracking-widest">{item.label}</span>
                  </div>
                  <LuChevronDown className={`transition-transform duration-300 ${activeCategory === idx ? 'rotate-180' : ''}`} />
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeCategory === idx ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <ul className="space-y-3">
                      {item.list.map((name, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-600">
                          <div className="w-1.5 h-1.5 bg-dev-green rounded-full"></div>
                          {name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- COUNTRIES REACH SECTION --- */}
      <div className="py-24 bg-dev-blue">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-left">
          <p className="text-dev-green font-black uppercase tracking-widest text-sm mb-2">Our Footprint</p>
          <h2 className="text-white text-4xl md:text-5xl font-black">
            Countries <span className="text-dev-green italic">Reached</span>
          </h2>
        </div>

        <div className="bg-white/5 border-y border-white/10 py-16 relative flex overflow-hidden">
          <div className="flex whitespace-nowrap animate-infinite-scroll hover:[animation-play-state:paused] cursor-pointer">
            {duplicatedReach.map((item, i) => (
              <div 
                key={i} 
                className="inline-flex items-center justify-center min-w-[350px] md:min-w-[450px] px-12 mx-4 group"
              >
                <div className="flex items-center gap-8">
                  {/* Flag Container */}
                  <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-dev-green transition-all duration-500 shadow-2xl">
                    <img 
                      src={item.flag} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  
                  {/* Country Name */}
                  <div className="flex flex-col">
                    <span className="text-white font-black text-4xl md:text-6xl opacity-20 group-hover:opacity-100 group-hover:text-dev-green transition-all duration-700 uppercase tracking-tighter">
                      {item.name}
                    </span>
                    <div className="h-1 w-0 group-hover:w-full bg-dev-green transition-all duration-700"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Partners;