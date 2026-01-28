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
    { name: "Jerid P. Kalakay PhD", role: "Strategic Advisor", image: jerid, bio: "Providing high-level strategic oversight and organizational development frameworks for sustainable growth." },
    { name: "Kingsley Bangwell", role: "Technical Advisor", image: kingsley, bio: "Expert in technical systems and digital transformation strategies for large-scale social impact projects." },
    { name: "Rachel Dami Odunewu", role: "Program Advisor", image: rachel, bio: "Directing program design and execution to ensure maximum engagement and value for our student communities." },
    { name: "Rachel C. Allan", role: "Educational Consultant", image: rachelc, bio: "Aligning our curriculum and development modules with global educational standards and pedagogical best practices." },
    { name: "Adeyinka Adewole Ph.D", role: "Policy Advisor", image: adeyinka, bio: "Bridging the gap between student governance and national policy through rigorous research and advocacy." },
    { name: "Isabella Johnston", role: "Legal Counsel", image: isabella, bio: "Ensuring all DevUP operations and international partnerships adhere to strict legal and ethical governance standards." },
    { name: "Akomaye Ugar PhD", role: "Community Advisor", image: akomaye, bio: "Building resilient community networks and fostering local partnerships to drive grassroots transformation." },
    { name: "Armaldo Arnie Mejias", role: "Innovation Lead", image: armaldo, bio: "Spearheading our innovation ecosystem and digital tools to keep the DevUP platform at the cutting edge." },
    { name: "Silver Kandiah", role: "Global Outreach", image: silver, bio: "Expanding our international footprint and connecting DevUP with global stakeholders and development partners." },
  ];

  return (
    <div className="bg-white">
      <Navbar />
      
      <section className="py-24 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="relative mb-24">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <p className="text-dev-green font-black uppercase tracking-[0.4em] text-xs mb-4">Wisdom & Counsel</p>
              <h2 className="text-4xl md:text-6xl font-black text-dev-blue leading-tight">
                The Voices of <br /> 
                <span className="text-dev-green italic">Strategic Insight</span>
              </h2>
            </div>

            <div className="lg:max-w-md border-l-4 border-dev-green pl-6 py-2 text-left">
              <blockquote className="text-gray-600 italic text-lg md:text-xl font-medium leading-relaxed">
                "Plans fail for lack of counsel, but with many advisers they succeed. Our council provides the pillars of wisdom for national transformation."
              </blockquote>
              <cite className="block mt-4 text-dev-blue font-black uppercase tracking-widest text-xs not-italic">
                — DevUP Advisory Philosophy
              </cite>
            </div>
          </div>
          <div className="absolute -top-10 -left-10 text-[10rem] font-black text-gray-50 -z-10 select-none hidden md:block">
            COUNCIL
          </div>
        </div>

        {/* Section Divider */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-dev-blue">Advisory <span className="text-dev-green">Council</span></h2>
          <div className="h-px flex-grow bg-gray-200"></div>
        </div>
        
        {/* Advisors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {advisors.map((member, i) => (
            <div key={i} className="group flex flex-col items-center bg-white border border-gray-100 rounded-[3rem] p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
              
              {/* Centered Circular Image Container */}
              <div className="relative flex justify-center items-center w-56 h-56 md:w-64 md:h-64 mb-8">
                {/* Rotating Decorative Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-dev-green/30 animate-spin-slow group-hover:border-dev-green transition-colors duration-500"></div>
                
                {/* Image Wrapper */}
                <div className="absolute inset-3 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>

                {/* Social Overlay */}
                <div className="absolute -top-2 -right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <a href="/" className="p-3 bg-dev-blue text-white rounded-2xl hover:bg-dev-green transition-colors shadow-lg">
                    <LuLinkedin size={20} />
                  </a>
                  <a href="/" className="p-3 bg-dev-blue text-white rounded-2xl hover:bg-dev-green transition-colors shadow-lg">
                    <LuMail size={20} />
                  </a>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full">
                <h3 className="text-2xl font-black text-dev-blue mb-1 uppercase tracking-tight">{member.name}</h3>
                <p className="text-dev-green font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">
                  "{member.bio}"
                </p>
                
                {/* Footer Badge */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-gray-300 tracking-[0.2em]">Strategic Council</span>
                  <div className="h-1.5 w-1.5 bg-dev-green rounded-full"></div>
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