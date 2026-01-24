import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Stats from "../Component/Stats";
import { LuLinkedin, LuMail } from "react-icons/lu";

// Image Imports
import jerid from "../images/jerid.jpeg";
import kingsley from "../images/kingsley.jpeg";
import rachel from "../images/rachel.jpeg";
import rachelc from "../images/rachelc.jpeg";
import adeyinka from "../images/adeyinka.jpeg";
import isabella from "../images/isabella.jpeg";
import akomaye from "../images/akomaye.jpeg";
import armaldo from "../images/armaldo.jpeg";
import silver from "../images/silver.jpeg";

const Advisory = () => {
  const advisors = [
    { name: "Jerid  P. Kalakay PhD", role: "Strategic Advisor", image: jerid },
    { name: "Kingsley Bangwell", role: "Technical Advisor", image: kingsley },
    { name: "Rachel Dami Odunewu", role: "Program Advisor", image: rachel },
    { name: "Rachel C. Allan", role: "Educational Consultant", image: rachelc },
    { name: "Adeyinka Adewole Ph.D", role: "Policy Advisor", image: adeyinka },
    { name: "Isabella Johston", role: "Legal Counsel", image: isabella },
    { name: "Akomaye Ugar PhD", role: "Community Advisor", image: akomaye },
    { name: "Armaldo Arnie Mejias", role: "Innovation Lead", image: armaldo },
    { name: "Silver Kandiah", role: "Global Outreach", image: silver },
  ];

  return (
    <div>
      <Navbar />
      <section className="py-24 px-6 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="relative mb-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-dev-green font-black uppercase tracking-[0.4em] text-xs mb-4 text-left">Wisdom & Counsel</p>
              <h2 className="text-4xl md:text-6xl font-black text-dev-blue leading-tight text-left">
                The Voices of <br /> 
                <span className="text-dev-green italic">Strategic Insight</span>
              </h2>
            </div>

            {/* The Advisory Quote */}
            <div className="lg:max-w-md border-l-4 border-dev-green pl-6 py-2">
              <blockquote className="text-gray-600 italic text-lg md:text-xl font-medium leading-relaxed text-left">
                "Plans fail for lack of counsel, but with many advisers they succeed. Our council provides the pillars of wisdom for national transformation."
              </blockquote>
              <cite className="block mt-4 text-dev-blue font-black uppercase tracking-widest text-xs not-italic text-left">
                — DevUP Advisory Philosophy
              </cite>
            </div>
          </div>
          
          {/* Decorative background element */}
          <div className="absolute -top-10 -left-10 text-[10rem] font-black text-gray-50 -z-10 select-none hidden md:block">
            COUNCIL
          </div>
        </div>

        {/* Section Divider */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-dev-blue">Advisory <span className="text-dev-green">Council</span></h2>
          <div className="h-1 flex-grow bg-gray-100 rounded-full"></div>
        </div>
        
        {/* Advisors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {advisors.map((member, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[2.5rem] bg-gray-100 h-[450px]">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dev-blue via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 p-8 text-white text-left">
                <h3 className="text-2xl font-black mb-1">{member.name}</h3>
                <p className="text-dev-green font-bold text-sm uppercase tracking-widest mb-4">{member.role}</p>
                
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a href="/" className="p-2 bg-white/10 rounded-lg hover:bg-dev-green">
                    <LuLinkedin className="text-xl" />
                  </a>
                  <a href="/" className="p-2 bg-white/10 rounded-lg hover:bg-dev-green">
                    <LuMail className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Stats />
      <Footer />
    </div>
  );
};

export default Advisory;