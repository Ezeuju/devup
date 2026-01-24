import React, { useState } from 'react';
import devcenterpp from "../images/devcenterpp.png"
// Importing specific icons from Lucide (part of react-icons)
import { 
  LuRocket, 
  LuTrophy, 
  LuGraduationCap, 
  LuPalette, 
  LuScale, 
  LuGlobe, 
  LuTrendingUp 
} from "react-icons/lu";
import { HiArrowRight } from "react-icons/hi";

const expressions = [
  {
    title: "DevCenter",
    image: devcenterpp,
    desc: "Our operations hub housing smart classrooms and training rooms. A space for learning, collaboration, and capacity-building.",
    icon: <LuRocket />
  },
  {
    title: "Blaze Sports",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070",
    desc: "More than sport—a character transformation platform using sports to shape discipline, resilience, and leadership.",
    icon: <LuTrophy />
  },
  {
    title: "Teens World",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069",
    desc: "A teenage development ecosystem delivering holistic programs across schools covering education, STEM, and career discovery.",
    icon: <LuGraduationCap />
  },
  {
    title: "Cre8City",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2187",
    desc: "An innovative ecosystem for creatives to innovate and build solutions, transforming talent into economic opportunity.",
    icon: <LuPalette />
  },
  {
    title: "CSIG",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2923216?q=80&w=2069",
    desc: "Empowering student leaders for governance and public policy, equipping them to lead with integrity as agents of change.",
    icon: <LuScale />
  },
  {
    title: "Charge Africa",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
    desc: "Our community service impact program mobilizing professionals for projects that address real needs across Africa.",
    icon: <LuGlobe />
  },
  {
    title: "EPMP",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070",
    desc: "A growth-focused mentorship platform helping emerging professionals transition from potential to sustained excellence.",
    icon: <LuTrendingUp />
  }
];

const Expressions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= expressions.length - 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? expressions.length - 3 : prev - 1));
  };

  return (
    <section id="expressions" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className=" too text-dev-green font-black uppercase tracking-widest text-sm mb-2">Our Expressions</p>
            <h2 className="toobig text-dev-blue text-4xl md:text-5xl font-black leading-tight">
              A Platform of <span className=" toop text-dev-green italic text-5xl">Transformation</span>
            </h2>
          </div>
          
        <div className="flex gap-4">
            <button onClick={prevSlide} className="group p-4 bg-white border border-gray-200 rounded-2xl hover:bg-dev-blue hover:border-dev-blue transition-all duration-300">
              <svg className="w-6 h-6 text-dev-blue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextSlide} className="group p-4 bg-white border border-gray-200 rounded-2xl hover:bg-dev-blue hover:border-dev-blue transition-all duration-300">
              <svg className="w-6 h-6 text-dev-blue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="relative">
          <div 
            className="flex transition-all duration-700 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (window.innerWidth < 768 ? 100 : 33.333)}%)` }}
          >
            {expressions.map((exp, index) => (
              <div key={index} className="min-w-full md:min-w-[calc(33.333%-1rem)] group relative h-[550px] rounded-3xl overflow-hidden shadow-xl">
                <img src={exp.image} alt={exp.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-dev-blue via-dev-blue/60 to-transparent"></div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  {/* React Icon integration */}
                  <div className="mb-4 bg-dev-green text-white w-14 h-14 flex items-center justify-center rounded-2xl text-3xl shadow-lg border border-white/20">
                    {exp.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black mb-3 group-hover:text-dev-green transition-colors">{exp.title}</h3>
                  <p className="text-sm text-gray-100 leading-relaxed mb-8 line-clamp-3 font-medium opacity-90">
                    {exp.desc}
                  </p>
                  
                  {/* Dynamic "Learn More" Button */}
                  <button className="bg-white text-dev-blue font-black py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-dev-green hover:text-white transition-all duration-300 group/btn shadow-lg active:scale-95">
                    Learn More 
                    <HiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expressions;