import React from 'react';
import { LuShieldCheck, LuStar, LuHeartHandshake, LuLightbulb, LuUsers } from "react-icons/lu";

const values = [
  {
    title: "Integrity",
    desc: "We believe that character is the bedrock of leadership. We act with honesty and strong moral principles in all we do.",
    icon: <LuShieldCheck />,
  },
  {
    title: "Excellence",
    desc: "We strive for the highest standards in our programs, ensuring that our human capital is world-class and future-ready.",
    icon: <LuStar />,
  },
  {
    title: "Service",
    desc: "Transformation is for the collective good. We are committed to selfless service that uplifts communities and nations.",
    icon: <LuHeartHandshake />,
  },
  {
    title: "Innovation",
    desc: "We embrace creative solutions and technological advancement to solve the unique challenges facing African youth.",
    icon: <LuLightbulb />,
  },
  {
    title: "Accountability",
    desc: "We take full responsibility for our actions and the trust placed in us by our partners and the generations we serve.",
    icon: <LuUsers />,
  }
];

const CoreValues = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-dev-green font-black uppercase tracking-[0.3em] text-sm mb-4">Our DNA</p>
          <h2 className="text-dev-blue text-4xl md:text-5xl font-black mb-6">
            The Values That <span className="text-dev-green italic">Drive Us</span>
          </h2>
          <div className="w-24 h-2 bg-dev-green mx-auto rounded-full"></div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`p-10 rounded-[2.5rem] border border-gray-100 transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2
                ${index === 3 || index === 4 ? 'lg:col-span-1.5' : ''} 
                bg-gray-50 hover:bg-white`}
            >
              <div className="w-16 h-16 bg-white text-dev-blue rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-sm group-hover:bg-dev-blue group-hover:text-white transition-all duration-500">
                {value.icon}
              </div>
              <h3 className="text-2xl font-black text-dev-blue mb-4 group-hover:text-dev-green transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {value.desc}
              </p>
            </div>
          ))}

          {/* Special "Why It Matters" Card */}
          <div className="lg:col-span-3 mt-8 p-12 bg-dev-blue rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="relative z-10">
               <h4 className="text-3xl font-black mb-2">Character over Competence</h4>
               <p className="text-dev-green font-bold italic">"Skill without values is a liability to society."</p>
             </div>
             <div className="relative z-10 text-gray-300 max-w-md text-right md:text-left">
               We don't just build experts; we build ethical stewards. Our core values ensure that as we develop capital, we are also securing the future.
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;