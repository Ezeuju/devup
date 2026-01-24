import React from 'react';
import Navbar from "../Component/Navbar";
import Stats from "../Component/Stats";
import CoreValues from './CoreValues';
import Footer from '../Component/Footer';
import { LuTarget, LuEye, LuCpu, LuShield } from "react-icons/lu";

const About = () => {
  return (
    <div>
        <Navbar/>
    <div className="bg-white overflow-hidden">
      {/* --- PART 1: THE CORE PHILOSOPHY (Human Capital) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             {/* Decorative Background Text */}
            <div className="absolute -top-12 -left-6 text-[8rem] font-black text-gray-50 -z-10 select-none hidden md:block">
              CAPITAL
            </div>
            <p className="text-dev-green font-black uppercase tracking-[0.4em] text-xs mb-4">Our Definition</p>
            <h2 className="text-4xl md:text-6xl font-black text-dev-blue leading-tight mb-8">
              Developing <span className="text-dev-green italic">Human Capital</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                At DevUP Global, we believe that the greatest asset of any nation is not its minerals or its currency, but its <span className="text-dev-blue font-bold">Human Capital</span>.
              </p>
              <p>
                We define Human Capital as the collective skills, knowledge, values, and mental resilience of a people. Our work is to refine this capital, transforming raw potential into strategic leadership that can drive national and continental progress.
              </p>
            </div>
          </div>

          <div className="bg-dev-blue rounded-[3rem] p-10 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-dev-green/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-dev-green/40 transition-all"></div>
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
              <LuCpu className="text-dev-green" /> The Transformation Engine
            </h3>
            <ul className="space-y-4 font-medium">
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 bg-dev-green rounded-full mt-2 flex-shrink-0"></span>
                <span>Purpose discovery for teenagers & young adults.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 bg-dev-green rounded-full mt-2 flex-shrink-0"></span>
                <span>Ethical leadership and governance training.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 bg-dev-green rounded-full mt-2 flex-shrink-0"></span>
                <span>Skill acquisition in tech, sports, and enterprise.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- PART 2: THE MISSION & VISION DESIGN --- */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Vision Card - Light Mode */}
            <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-xl border-t-8 border-dev-blue flex flex-col justify-between hover:shadow-2xl transition-all duration-500 group">
              <div>
                <div className="bg-dev-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <LuEye className="text-dev-blue text-4xl" />
                </div>
                <h3 className="text-dev-blue text-3xl font-black mb-6 uppercase tracking-tight">Vision Statement</h3>
                <p className="text-gray-700 text-xl leading-relaxed font-medium mb-6 italic">
                  "To raise generations of purpose-driven, values-anchored, and transformational people who shape communities, institutions, and nations for good."
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-2 text-dev-blue font-bold">
                <LuShield className="text-dev-green" /> Visionary Stewardship
              </div>
            </div>

            {/* Mission Card - Dark Mode */}
            <div className="bg-dev-blue p-10 md:p-16 rounded-[2.5rem] shadow-xl border-t-8 border-dev-green flex flex-col justify-between hover:shadow-2xl transition-all duration-500 group text-white">
              <div>
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <LuTarget className="text-dev-green text-4xl" />
                </div>
                <h3 className="text-dev-green text-3xl font-black mb-6 uppercase tracking-tight">Mission Statement</h3>
                <p className="text-gray-100 text-lg leading-relaxed mb-6">
                  DevUP Global exists to develop human capital by empowering youth, young people, and communities with purpose, leadership, skills, values, and opportunities that drive personal transformation, social stability, and national progress.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-2 text-dev-green font-bold text-sm">
                Strategic Human Development
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
    <CoreValues/>
    <Stats/>
    <Footer/>
    </div>
  );
};

export default About;