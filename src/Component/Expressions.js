import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'; // Added Link for internal navigation
import devcenterpp from "../images/devcenterpp.png"
import mentor2 from "../images/mentor2.jpg";
import sport5 from "../images/sport5.jpeg";
import creative2 from "../images/creative2.jpg";
import teens2 from "../images/teens2.jpg";
import csig3 from "../images/csig3.jpeg";
import collage from "../images/collage.png"

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

// Updated with relative links to match your routes
const expressions = [
  {
    title: "DevCenter",
    image: devcenterpp,
    desc: "Our operations hub housing smart classrooms and training rooms. A space for learning, collaboration, and capacity-building.",
    icon: <LuRocket />,
    link: "/expressions/devcenter"
  },
  {
    title: "Blaze Sports",
    image:  sport5,
    desc: "More than sport a character transformation platform using sports to shape discipline, resilience, and leadership.",
    icon: <LuTrophy />,
    link: "/blazesports"
  },
  {
    title: "Teens World",
    image:  teens2,
    desc: "A teenage development ecosystem delivering holistic programs across schools covering education, STEM, and career discovery.",
    icon: <LuGraduationCap />,
    link: "/expressions/teens-world"
  },
  {
    title: "Cre8City",
    image: creative2,
    desc: "An innovative ecosystem for creatives to innovate and build solutions, transforming talent into economic opportunity.",
    icon: <LuPalette />,
    link: "/expressions/cre8city"
  },
  {
    title: "CSIG",
    image: csig3,
    desc: "Empowering student leaders for governance and public policy, equipping them to lead with integrity as agents of change.",
    icon: <LuScale />,
    link: "/csig"
  },
  {
    title: "Charge Africa",
    image: collage,
    desc: "Our community service impact program mobilizing professionals for projects that address real needs across Africa.",
    icon: <LuGlobe />,
    link: "/expressions/charge-africa"
  },
  {
    title: "EPMP",
    image:  mentor2,
    desc: "A growth-focused mentorship platform helping emerging professionals transition from potential to sustained excellence.",
    icon: <LuTrendingUp />,
    link: "/expressions/epmp"
  }
];

const Expressions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    // Adjusted logic to ensure it loops correctly based on visible items
    setCurrentIndex((prev) => (prev + 1 >= expressions.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? expressions.length - 2 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000); // Set to 4s for better readability before it slides
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section id="expressions" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-dev-green font-black uppercase tracking-widest text-sm mb-2">Our Expressions</p>
            <h2 className="text-dev-blue text-4xl md:text-5xl font-black leading-tight">
              A Platform of <span className="text-dev-green italic text-5xl">Transformation</span>
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevSlide} 
              className="group p-4 bg-white border-2 border-dev-blue rounded-2xl hover:bg-dev-blue transition-all duration-300 shadow-md"
            >
              <svg className="w-6 h-6 text-dev-blue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide} 
              className="group p-4 bg-white border-2 border-dev-blue rounded-2xl hover:bg-dev-blue transition-all duration-300 shadow-md"
            >
              <svg className="w-6 h-6 text-dev-blue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1) gap-6"
            style={{ transform: `translateX(-${currentIndex * (window.innerWidth < 768 ? 100 : 33.333)}%)` }}
          >
            {expressions.map((exp, index) => (
              <div 
                key={index} 
                className="min-w-full md:min-w-[calc(33.333%-1rem)] group relative h-[550px] rounded-3xl overflow-hidden shadow-xl"
              >
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dev-blue via-dev-blue/60 to-transparent"></div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="mb-4 bg-dev-green text-white w-14 h-14 flex items-center justify-center rounded-2xl text-3xl shadow-lg border border-white/20">
                    {exp.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black mb-3 group-hover:text-dev-green transition-colors">{exp.title}</h3>
                  <p className="text-sm text-gray-100 leading-relaxed mb-8 line-clamp-3 font-medium opacity-90">
                    {exp.desc}
                  </p>
                  
                  {/* Changed from button to Link */}
                  <Link 
                    to={exp.link}
                    className="bg-white text-dev-blue font-black py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-dev-green hover:text-white transition-all duration-300 group/btn shadow-lg active:scale-95 text-center"
                  >
                    Learn More 
                    <HiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
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