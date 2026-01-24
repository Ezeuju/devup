import React from 'react';
import { LuEye, LuTarget} from "react-icons/lu";

const MissionVision = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-dev-green font-black uppercase tracking-[0.3em] text-sm mb-4">Our Core Purpose</p>
          <h2 className="text-dev-blue text-4xl md:text-6xl font-black">
            Why We <span className="text-dev-green italic">Exist</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Vision Card */}
          <div className="bg-white p-10 md:p-16 rounded-[2rem] shadow-xl border-t-8 border-dev-blue flex flex-col justify-between hover:shadow-2xl transition-all duration-500 group">
            <div>
              <div className="bg-dev-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <LuEye className="text-dev-blue text-4xl" />
              </div>
              <h3 className="text-dev-blue text-3xl font-black mb-6 uppercase tracking-tight">Vision Statement</h3>
              <p className="text-gray-700 text-xl leading-relaxed font-medium mb-6 italic">
                "To raise generations of purpose-driven, values-anchored, and transformational people who shape communities, institutions, and nations for good."
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a world where young people are not liabilities to be managed, but assets to be developed; where communities are healed through leadership and values, and where nations grow by investing intentionally in their people.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-2 text-dev-blue font-bold">
              <uCircleCheck className="text-dev-green" /> Visionary Leadership
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-dev-blue p-10 md:p-16 rounded-[2rem] shadow-xl border-t-8 border-dev-green flex flex-col justify-between hover:shadow-2xl transition-all duration-500 group text-white">
            <div>
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <LuTarget className="text-dev-green text-4xl" />
              </div>
              <h3 className="text-dev-green text-3xl font-black mb-6 uppercase tracking-tight">Mission Statement</h3>
              <p className="text-gray-100 text-lg leading-relaxed mb-6">
                DevUP Global exists to develop human capital by empowering youth, young people, and communities with purpose, leadership, skills, values, and opportunities that drive personal transformation, social stability, and national progress.
              </p>
              <p className="text-gray-300 leading-relaxed italic">
                Through education, leadership development, innovation, sports, civic engagement, and enterprise, we build minds, character, and systems that enable people to thrive and societies to transform.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-2 text-dev-green font-bold">
              <uCircleCheck className="text-white" /> Strategic Execution
            </div>
          </div>

        </div>

        {/* Philosophy Hook - Small fantastic addition */}
        <div className="mt-20 bg-dev-blue text-white p-12 rounded-[2rem] text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-dev-green/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
           <p className="text-dev-green font-bold uppercase tracking-widest mb-4">Our Philosophy</p>
           <h4 className="text-2xl md:text-3xl font-medium leading-relaxed max-w-4xl mx-auto">
             "When minds are shaped, character is formed. When character is formed, leadership emerges. When leadership emerges, societies transform."
           </h4>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;