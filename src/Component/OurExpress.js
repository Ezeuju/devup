import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { 
  LuCode, LuTrophy, LuBaby, LuPalette, 
  LuGavel, LuZap, LuBriefcase, LuArrowRight 
} from "react-icons/lu";

const expressions = [
  {
    id: "devcenter",
    name: "DevCenter",
    tagline: "Connect with us at Dev Center.",
    desc: "Dev Center is our learning and resource center, it’s also our operations hub housing our offices, smart classrooms, training rooms, and resource library. It is a space for learning, collaboration, innovation, and enterprise, where young people, professionals, and organizations access training, workshops, mentorship, and capacity-building for real-world impact.",
    icon: <LuCode />,
    color: "bg-blue-600"
  },
  {
    id: "blazesports",
    name: "Blaze Sports",
    tagline: "Blaze Sports is more than sport.",
    desc: "It is a character and mindset transformation platform using sports to shape discipline, values, resilience, and leadership. We raise a generation of young people with transformed minds—confident, purpose-driven, and determined to pursue excellence, break limitations, and build a brighter future on and off the field.",
    icon: <LuTrophy />,
    color: "bg-orange-500"
  },
  {
    id: "teensworld",
    name: "Teens World",
    tagline: "Our teenage development ecosystem.",
    desc: "It delivers holistic programs for teenagers across schools and communities covering education, leadership, sports, entrepreneurship, technology, STEM, career discovery, mentorship, and capacity building. Teens World helps young people grow with clarity, confidence, skills, and values during their most formative years.",
    icon: <LuBaby />,
    color: "bg-dev-green"
  },
  {
    id: "cre8city",
    name: "Cre8City",
    tagline: "Our innovative ecosystem for creatives.",
    desc: "It serves the creative, artistic, and tech community discovering, nurturing, and empowering young talents to innovate, collaborate, and build solutions. Cre8City transforms creativity into impact, enterprise, and opportunity, positioning creative talent as a driver of cultural, social, and economic development.",
    icon: <LuPalette />,
    color: "bg-purple-600"
  },
  {
    id: "csig",
    name: "Coalition of Students in Governance (CSiG)",
    tagline: "Empowering student leaders.",
    desc: "It prepares young leaders in secondary and tertiary institutions for governance, public policy, civic engagement, and ethical leadership. It equips students to lead with integrity while in school and prepares them to become effective change agents beyond the classroom.",
    icon: <LuGavel />,
    color: "bg-dev-blue"
  },
  {
    id: "chargeafrica",
    name: "Charge Africa",
    tagline: "Community service impact program.",
    desc: "It mobilizes young people, professionals, and communities for hands-on service projects that address real needs across Africa. Through coordinated surges of service, Charge Africa delivers meaningful social impact—restoring dignity, strengthening communities, and inspiring a culture of responsibility, compassion, and collective action.",
    icon: <LuZap />,
    color: "bg-yellow-500"
  },
  {
    id: "epmp",
    name: "Emerging Professionals Mentorship Program (EPMP)",
    tagline: "Growth-focused mentorship platform.",
    desc: "It supports young adults who are already thriving and ready to elevate their careers, leadership, and impact. Through mentorship, collaborative learning, and peer engagement, EPMP helps participants sharpen skills, expand networks, and transition from potential to sustained professional excellence.",
    icon: <LuBriefcase />,
    color: "bg-teal-600"
  }
];

const OurExpress = () => {
  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-40 pb-20 bg-dev-blue text-white px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-dev-green/10 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-dev-green font-black uppercase tracking-[0.4em] text-xs mb-4">Our Ecosystem</p>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-none">
            Our <br />
            <span className="text-dev-green italic">Expressions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-medium leading-relaxed">
            Our multi-dimensional approach to human capital development ensures that transformation reaches every sector of society.
          </p>
        </div>
      </section>

      {/* Expressions Detailed List */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {expressions.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image/Icon Side */}
              <div className="w-full lg:w-1/2">
                <div className={`aspect-square rounded-[3rem] ${exp.color} flex items-center justify-center text-white text-[10rem] shadow-2xl transition-transform duration-500 hover:rotate-3`}>
                  {exp.icon}
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                   <span className="h-px w-12 bg-dev-green"></span>
                   <span className="text-dev-green font-black uppercase tracking-widest text-sm">Expression {index + 1}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-dev-blue">{exp.name}</h2>
                <h4 className="text-xl font-bold text-gray-400 italic">"{exp.tagline}"</h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {exp.desc}
                </p>
                <button className="flex items-center gap-3 text-dev-blue font-black group hover:text-dev-green transition-colors">
                  Join this Expression <LuArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Call to Action */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto bg-dev-blue rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-6">Ready to Experience Transformation?</h3>
            <p className="mb-8 text-gray-300">Whether you are a student, a professional, or a creative, there is a place for you in our ecosystem.</p>
            <button className="bg-dev-green hover:bg-white hover:text-dev-blue text-white px-10 py-4 rounded-2xl font-black transition-all shadow-xl">
              Get Involved Today
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurExpress;