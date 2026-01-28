import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LuGraduationCap, LuLightbulb, LuMicroscope, LuCompass, LuCheckCircle } from "react-icons/lu";
import teens2 from "../images/teens2.jpg";
import teens from "../images/teens.jpeg";

const TeensWorld = () => {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center bg-dev-blue overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${teens2})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dev-blue via-dev-blue/90 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1 w-12 bg-dev-green"></span>
            <p className="text-dev-green font-black uppercase tracking-[0.4em] text-sm">Development Ecosystem</p>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
            TEENS <br /> <span className="text-dev-green italic">WORLD</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl opacity-90 leading-relaxed font-medium border-l-4 border-dev-green pl-6">
            Nurturing clarity, confidence, and competence. We deliver holistic programs across schools 
            and communities, covering STEM, leadership, and career discovery during the most formative years.
          </p>
        </div>
      </section>

      {/* Program Pillars */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-dev-blue mb-4">Holistic <span className="text-dev-green italic">Development</span></h2>
            <p className="text-gray-600">Our ecosystem is built on four critical pillars designed to prepare teenagers for a rapidly evolving world.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                title: "STEM & Tech", 
                desc: "Hands-on coding, robotics, and science workshops to ignite curiosity.", 
                icon: <LuMicroscope />,
                color: "bg-blue-500" 
              },
              { 
                title: "Career Discovery", 
                desc: "Helping students map out their professional future with clarity.", 
                icon: <LuCompass />,
                color: "bg-dev-green" 
              },
              { 
                title: "Leadership", 
                desc: "Training in ethics, public speaking, and community responsibility.", 
                icon: <LuLightbulb />,
                color: "bg-orange-500" 
              },
              { 
                title: "Mentorship", 
                desc: "Connecting teens with professionals who guide their growth.", 
                icon: <LuGraduationCap />,
                color: "bg-purple-500" 
              },
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className={`${pillar.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg transform group-hover:-translate-y-2 transition-transform`}>
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-black text-dev-blue mb-3">{pillar.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section: The Journey */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="absolute -inset-4 bg-dev-blue/5 rounded-3xl -rotate-3"></div>
             <img 
               src={teens} 
               alt="Teens Learning" 
               className="relative rounded-3xl shadow-2xl z-10 w-full h-[550px] object-cover" 
             />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-black text-dev-blue mb-8">
              Clarity for the <span className="text-dev-green italic">Future</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Teens World bridges the gap between traditional classroom education and real-world 
              competence. We understand that the teenage years are a critical window for 
              identity formation and skill acquisition.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "School Outreach", text: "Direct engagement with secondary schools for assembly talks and workshops." },
                { title: "Teen Hubs", text: "Physical and digital spaces for safe collaboration and creative expression." },
                { title: "Summer Bootcamps", text: "Intensive 2-4 week programs focusing on high-income digital skills." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <LuCheckCircle className="text-dev-green text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-black text-dev-blue">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dev-green text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Invest in the Next Generation</h2>
          <p className="text-xl mb-10 opacity-90 font-medium">Whether you are a school administrator, a parent, or a volunteer, there is a place for you in the Teens World ecosystem.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-dev-blue hover:bg-white hover:text-dev-blue text-white font-black py-4 px-10 rounded-xl transition-all shadow-xl">
              Enroll a Teen
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-dev-green text-white font-black py-4 px-10 rounded-xl transition-all">
              Partner with Schools
            </button>
          </div>
        </div>
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
      </section>

      <Footer />
    </div>
  );
};

export default TeensWorld;