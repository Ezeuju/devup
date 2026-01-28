import React from 'react';
import project445 from "../images/project445.jpeg";

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
        
        {/* Main Project 40k Highlight with Image */}
        <div className="bg-white/10 backdrop-blur-md rounded-[3rem] overflow-hidden mb-16 border border-white/20 relative group">
          <div className="flex flex-col lg:flex-row items-stretch">
            
            {/* Left Side: Image with Overlay */}
            <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
              <img 
                src={project445} 
                alt="Project 40,000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dev-blue/30 group-hover:bg-transparent transition-colors duration-500"></div>
              {/* Floating Badge on Image */}
              <div className="absolute bottom-4 left-4 bg-dev-green text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                2024 - 2026 Goal
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="lg:w-3/5 p-8 md:p-12 relative flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity hidden md:block">
                <LuFlame className="text-9xl text-dev-green" />
              </div>
              
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-bold uppercase tracking-tighter opacity-80">Project</p>
                <h2 className="text-dev-green text-6xl md:text-8xl font-black mb-2 leading-none">40,000</h2>
                <p className="text-xl md:text-2xl font-bold uppercase tracking-tighter mb-6">Inspired</p>
                
                <p className="max-w-md text-gray-200 text-lg leading-relaxed mb-8">
                  An ambitious journey to ignite purpose and transform the lives of forty thousand young Africans through our integrated development platforms.
                </p>

                <div className="flex items-center gap-3 text-dev-green bg-dev-green/10 w-fit px-4 py-2 rounded-xl border border-dev-green/20">
                  <LuCircleCheck className="text-xl animate-pulse" />
                  <span className="font-black text-xs uppercase tracking-widest">Active Strategic Mission</span>
                </div>
              </div>
            </div>

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