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
    { 
      name: "Success Ekpenyong", 
      role: "Founder / CEO", 
      image: success,
      bio: "A visionary leader committed to pan-African development, Success drives the strategic roadmap of DevUP to empower 40,000 young leaders."
    },
    { 
      name: "Oluwadamilola Ekpenyong", 
      role: "Executive Member", 
      image: oluwa,
      bio: "An expert in organizational growth and youth ecosystem building, ensuring our operations align with global standards of excellence."
    },
    { 
      name: "Ndifreke Patrick", 
      role: "Executive Member", 
      image: patrick,
      bio: "Specializing in civic engagement and governance, Ndifreke bridges the gap between student leadership and public policy impact."
    },
  ];

  return (
    <div className="bg-white">
      <Navbar/>
      
      <section className="py-24 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="relative mb-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <p className="text-dev-green font-black uppercase tracking-[0.4em] text-xs mb-4">Governance & Stewardship</p>
              <h2 className="text-4xl md:text-6xl font-black text-dev-blue leading-tight">
                The Minds Guiding <br /> 
                <span className="text-dev-green italic">Our Mission</span>
              </h2>
            </div>

            <div className="lg:max-w-md border-l-4 border-dev-green pl-6 py-2 text-left">
              <blockquote className="text-gray-600 italic text-lg md:text-xl font-medium leading-relaxed">
                "True leadership is not about being in charge. It is about taking care of those in our charge to ensure generations thrive."
              </blockquote>
              <cite className="block mt-4 text-dev-blue font-black uppercase tracking-widest text-xs not-italic">
                — DevUP Governance Philosophy
              </cite>
            </div>
          </div>
          <div className="absolute -top-10 -left-10 text-[10rem] font-black text-gray-50 -z-10 select-none">
            BOARD
          </div>
        </div>

        {/* Section Title */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-dev-blue">Board of <span className="text-dev-green">Directors</span></h2>
          <div className="h-px flex-grow bg-gray-200"></div>
        </div>
        
        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {directors.map((member, i) => (
            <div key={i} className="group flex flex-col items-center bg-white border border-gray-100 rounded-[3rem] p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
              
              {/* Centered Circular Image Container */}
              <div className="relative flex justify-center items-center w-56 h-56 md:w-64 md:h-64 mb-8">
                {/* Rotating Decorative Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-dev-green/30 animate-spin-slow group-hover:border-dev-green transition-colors duration-500"></div>
                
                {/* The Actual Image Wrapper */}
                <div className="absolute inset-3 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>

                {/* Social Overlay - Centered logic but absolute to top right of image area */}
                <div className="absolute -top-2 -right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <a href="/" className="p-3 bg-dev-blue text-white rounded-2xl hover:bg-dev-green transition-colors shadow-lg">
                    <LuLinkedin />
                  </a>
                  <a href="/" className="p-3 bg-dev-blue text-white rounded-2xl hover:bg-dev-green transition-colors shadow-lg">
                    <LuMail />
                  </a>
                </div>
              </div>

              {/* Text Content - Centered */}
              <div className="w-full">
                <h3 className="text-2xl font-black text-dev-blue mb-1 uppercase tracking-tight">{member.name}</h3>
                <p className="text-dev-green font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">
                  "{member.bio}"
                </p>
                
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-gray-300 tracking-[0.2em]">Executive Board</span>
                  <div className="h-1.5 w-1.5 bg-dev-green rounded-full"></div>
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