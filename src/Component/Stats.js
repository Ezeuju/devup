import React from 'react';
import { 
  LuGlobe, 
  LuUsers, 
  LuSchool, 
  LuDumbbell, 
  LuFlame, 
  LuCircleCheck 
} from "react-icons/lu";

const statData = [
  {
    label: "Countries Reached",
    value: "5+",
    icon: <LuGlobe />,
    color: "text-dev-blue"
  },
  {
    label: "Sport Coaches",
    value: "120+",
    icon: <LuUsers />,
    color: "text-dev-green"
  },
  {
    label: "Schools Reached",
    value: "450+",
    icon: <LuSchool />,
    color: "text-dev-blue"
  },
  {
    label: "Athletes Trained",
    value: "2,500+",
    icon: <LuDumbbell />,
    color: "text-dev-green"
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-dev-blue text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Project 40k Highlight */}
        <div className="bg-white/10 backdrop-blur-md rounded-[3rem] p-8 md:p-12 mb-16 border border-white/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
            <LuFlame className="text-9xl text-dev-green" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
             
              <p className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">Project</p>
               <h2 className="text-dev-green text-5xl md:text-7xl font-black mb-2">40,000</h2>
                 <p className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">Inspired</p>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-4 text-dev-green">
                <LuCircleCheck className="text-xl" />
                <span className="font-medium">Our Strategic Goal for 2024-2026</span>
              </div>
            </div>
            <div className="h-px w-full md:h-24 md:w-px bg-white/20"></div>
            <p className="max-w-md text-gray-300 text-center md:text-left leading-relaxed">
              An ambitious journey to ignite purpose and transform the lives of forty thousand young Africans through our integrated development platforms.
            </p>
          </div>
        </div>

        {/* Secondary Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {statData.map((stat, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white rounded-[2rem] hover:bg-dev-green transition-all duration-500 hover:-translate-y-3"
            >
              <div className={`text-4xl mb-4 ${stat.color} group-hover:text-white transition-colors`}>
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-dev-blue group-hover:text-white transition-colors mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-500 font-bold uppercase text-xs tracking-widest group-hover:text-dev-blue/80 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;