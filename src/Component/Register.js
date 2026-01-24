import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { 
  LuUserPlus, 
  LuHeartHandshake, 
  LuUsers, 
  LuTrophy, 
  LuBriefcase, 
  LuFlame 
} from "react-icons/lu";
import { HiArrowRight } from "react-icons/hi";

const joinOptions = [
  {
    title: "Participate & Learn",
    desc: "Sign up to join our programs, workshops, and transformation tracks.",
    icon: <LuUserPlus />,
    link: "#", // Replace with your Google Form or Registration link
  },
  {
    title: "Volunteer or Intern",
    desc: "Gain experience and drive impact by serving in our various expressions.",
    icon: <LuHeartHandshake />,
    link: "#",
  },
  {
    title: "Mentor or Counselor",
    desc: "Guide the next generation by sharing your expertise and values.",
    icon: <LuUsers />,
    link: "#",
  },
  {
    title: "Partner or Sponsor",
    desc: "Collaborate with us to scale impact across communities and nations.",
    icon: <LuBriefcase />,
    link: "#",
  },
  {
    title: "Sports Coach or Official",
    desc: "Join Blaze Sports to shape character and excellence through athletics.",
    icon: <LuTrophy />,
    link: "#",
  }
];

const JoinUsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* --- PAGE HERO --- */}
      <section className="pt-32 pb-16 bg-dev-blue text-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-dev-green font-black uppercase tracking-[0.4em] text-xs mb-4 text-center">Get Involved</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Start Your <span className="text-dev-green italic">Journey</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-medium">
            Whether you want to learn, lead, or support, there is a purposeful place for you within the DevUP Global ecosystem.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT AREA --- */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* FEATURED: October Games */}
            <div className="lg:col-span-2 relative group overflow-hidden bg-dev-blue rounded-[2.5rem] p-10 flex flex-col justify-between shadow-2xl transition-all hover:-translate-y-2 min-h-[400px]">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                <LuFlame className="text-[12rem] text-dev-green" />
              </div>
              
              <div className="relative z-10 text-left">
                <div className="bg-dev-green text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest w-fit mb-6 animate-pulse">
                  Registration Open
                </div>
                <h3 className="text-white text-4xl md:text-6xl font-black mb-4">
                  October Games <span className="text-dev-green">2026</span>
                </h3>
                <p className="text-gray-300 text-lg max-w-md mb-8">
                  Be part of our flagship sports and character development event. Register today as an athlete, team, or official!
                </p>
              </div>
              
              <a 
                href="/" 
                className="relative z-10 w-fit bg-dev-green hover:bg-white hover:text-dev-blue text-white font-black py-4 px-10 rounded-2xl transition-all flex items-center gap-3 shadow-lg group/btn"
              >
                Join the Games <HiArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
              </a>
            </div>

            {/* Standard Options Mapping */}
            {joinOptions.map((option, index) => (
              <div 
                key={index} 
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:border-dev-green hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-gray-50 text-dev-blue rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-dev-blue group-hover:text-white transition-all duration-500">
                    {option.icon}
                  </div>
                  <h4 className="text-2xl font-black text-dev-blue mb-4 text-left">{option.title}</h4>
                  <p className="text-gray-600 leading-relaxed mb-10 text-left">
                    {option.desc}
                  </p>
                </div>
                
                <a 
                  href={option.link}
                  className="w-full py-4 bg-gray-50 text-dev-blue font-black rounded-xl group-hover:bg-dev-green group-hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  Fill Registration Form <HiArrowRight />
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* --- FAQ / GUIDANCE SECTION --- */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-dev-blue text-3xl font-black mb-6 uppercase tracking-tight">Need Assistance?</h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            If you're unsure which category fits you best or if you're experiencing issues with the registration forms, our team is ready to help you navigate your journey.
          </p>
          <a href="mailto:hello@devupglobal.org" className="text-dev-green font-black underline underline-offset-8 hover:text-dev-blue transition-colors">
            Contact Support Hub
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinUsPage;