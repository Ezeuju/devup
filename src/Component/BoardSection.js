import React from 'react';
import success from "../images/success.jpeg";
import oluwa from "../images/oluwa.jpeg";
import patrick from "../images/patrick.jpeg";
import Navbar  from './Navbar';
import { LuLinkedin, LuMail } from "react-icons/lu";
import Footer from './Footer';
import Stats from "../Component/Stats";
const BoardSection = () => {
  const directors = [
    { name: "Sir Success Ekpenyong", role: "Founder / CEO", image: success },
    { name: "Oluwadamilola E.", role: "Executive Member", image: oluwa },
    { name: "Ndifreke Patrick", role: "Executive Member", image: patrick },
    // Add more board members here
  ];

  return (
    <div>
        <Navbar/>
    <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="relative mb-20">
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
      <div className="max-w-2xl">
        <p className="text-dev-green font-black uppercase tracking-[0.4em] text-xs mb-4">Governance & Stewardship</p>
        <h2 className="text-4xl md:text-6xl font-black text-dev-blue leading-tight">
          The Minds Guiding <br /> 
          <span className="text-dev-green italic">Our Mission</span>
        </h2>
      </div>

      {/* The Strategic Quote */}
      <div className="lg:max-w-md border-l-4 border-dev-green pl-6 py-2">
        <blockquote className="text-gray-600 italic text-lg md:text-xl font-medium leading-relaxed">
          "True leadership is not about being in charge. It is about taking care of those in our charge to ensure generations thrive."
        </blockquote>
        <cite className="block mt-4 text-dev-blue font-black uppercase tracking-widest text-xs not-italic">
          — DevUP Governance Philosophy
        </cite>
      </div>
    </div>
    
    {/* Decorative background element */}
    <div className="absolute -top-10 -left-10 text-[10rem] font-black text-gray-50 -z-10 select-none">
      BOARD
    </div>
  </div>
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-dev-blue">Board of <span className="text-dev-green">Directors</span></h2>
        <div className="h-1 flex-grow bg-gray-100 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {directors.map((member, i) => (
          <div key={i} className="group relative overflow-hidden rounded-[2.5rem] bg-gray-100 h-[450px]">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-dev-blue via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <h3 className="text-2xl font-black mb-1">{member.name}</h3>
              <p className="text-dev-green font-bold text-sm uppercase tracking-widest mb-4">{member.role}</p>
              <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a href="/" className="p-2 bg-white/10 rounded-lg hover:bg-dev-green"><LuLinkedin /></a>
                <a href="/" className="p-2 bg-white/10 rounded-lg hover:bg-dev-green"><LuMail /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Stats/>
    <Footer/>
    </div>
  );
};

export default BoardSection;