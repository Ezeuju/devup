import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { LuTrophy, LuUsers, LuActivity, LuCircleCheck } from "react-icons/lu";
import sport5 from "../images/sport5.jpeg";
import sport1 from "../images/sport1.jpeg";

const Blaze = () => {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center bg-dev-blue overflow-hidden">
        <div 
          className="absolute inset-0 opacity-50 bg-cover bg-center scale-105 transition-transform duration-[10000ms] hover:scale-100"
          style={{ backgroundImage: `url(${sport5})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dev-blue via-dev-blue/80 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1 w-12 bg-dev-green"></span>
            <p className="text-dev-green font-black uppercase tracking-[0.4em] text-sm">Character & Mindset</p>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
            BLAZE <br /> <span className="text-dev-green italic">SPORTS</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl opacity-90 leading-relaxed font-medium border-l-4 border-dev-green pl-6">
            More than sport—it is a platform using athletics to shape discipline, values, 
            resilience, and leadership. We raise a generation determined to pursue excellence 
            on and off the field.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-dev-blue border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Athletes Trained", value: "5,000+", icon: <LuUsers /> },
              { label: "Tournaments", value: "45+", icon: <LuTrophy /> },
              { label: "Chapters", value: "12", icon: <LuActivity /> },
              { label: "Communities", value: "30+", icon: <LuCircleCheck /> },
            ].map((stat, i) => (
              <div key={i} className="text-center text-white">
                <div className="text-dev-green text-3xl mb-2 flex justify-center">{stat.icon}</div>
                <h3 className="text-3xl font-black">{stat.value}</h3>
                <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Philosophy */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-dev-blue mb-8">
              Transforming the <span className="text-dev-green italic">Game</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                At Blaze Sports, we believe the field is a classroom. While physical fitness is 
                essential, our primary focus is the internal development of the athlete. 
              </p>
              <p>
                Our programs are designed to push young people beyond their comfort zones, 
                teaching them how to handle pressure, work within a team, and bounce back 
                from defeat with their dignity intact.
              </p>
            </div>
            
            <div className="mt-10 space-y-4">
              {['Discipline-First Coaching', 'Value-Based Mentorship', 'Leadership Lab Integration'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-dev-green/10 p-1 rounded-full">
                    <LuCircleCheck className="text-dev-green text-xl" />
                  </div>
                  <span className="font-bold text-dev-blue">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-dev-green/20 rounded-3xl rotate-3"></div>
            <img 
              src={sport1} 
              alt="Athletes Training" 
              className="relative rounded-3xl shadow-2xl z-10 w-full h-[500px] object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-dev-blue text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Build Your <span className="text-dev-green">Legacy?</span></h2>
          <p className="text-xl mb-10 opacity-80">Join Blaze Sports today and start your journey toward purpose-driven excellence.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-dev-green hover:bg-white hover:text-dev-blue text-white font-black py-4 px-10 rounded-xl transition-all shadow-xl active:scale-95">
              Register an Athlete
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white font-black py-4 px-10 rounded-xl transition-all">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blaze;