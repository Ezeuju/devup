import React from 'react';
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
    link: "#",
    type: "primary"
  },
  {
    title: "Volunteer or Intern",
    desc: "Gain experience and drive impact by serving in our various expressions.",
    icon: <LuHeartHandshake />,
    link: "#",
    type: "secondary"
  },
  {
    title: "Mentor or Counselor",
    desc: "Guide the next generation by sharing your expertise and values.",
    icon: <LuUsers />,
    link: "#",
    type: "secondary"
  },
  {
    title: "Partner or Sponsor",
    desc: "Collaborate with us to scale impact across communities and nations.",
    icon: <LuBriefcase />,
    link: "#",
    type: "secondary"
  },
  {
    title: "Sports Coach or Official",
    desc: "Join Blaze Sports to shape character and excellence through athletics.",
    icon: <LuTrophy />,
    link: "#",
    type: "secondary"
  }
];

const JoinUs = () => {
  return (
    <section id="join" className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-dev-green font-black uppercase tracking-widest text-sm mb-4">Take Action</p>
          <h2 className="text-dev-blue text-4xl md:text-5xl font-black">
            Join the <span className="text-dev-green italic">Movement</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto font-medium">
            There is a place for everyone in the DevUP Ecosystem. Choose how you want to be part of the transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* SPECIAL HIGHLIGHT: October Games 2025 */}
          <div className="lg:col-span-2 relative group overflow-hidden bg-dev-blue rounded-[2.5rem] p-10 flex flex-col justify-between shadow-2xl transition-all hover:-translate-y-2">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <LuFlame className="text-[12rem] text-dev-green" />
            </div>
            
            <div className="relative z-10">
              <div className="bg-dev-green text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest w-fit mb-6 animate-pulse">
                Upcoming Major Event
              </div>
              <h3 className="text-white text-4xl md:text-5xl font-black mb-4">
                October Games <span className="text-dev-green">2025</span>
              </h3>
              <p className="text-gray-300 text-lg max-w-md mb-8">
                Be part of our flagship sports and character development event. Registration is now open for athletes and teams!
              </p>
            </div>
            
            <button className="relative z-10 w-fit bg-dev-green hover:bg-white hover:text-dev-blue text-white font-black py-4 px-10 rounded-2xl transition-all flex items-center gap-3 shadow-lg group/btn">
              Join the Games <HiArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Standard Join Cards */}
          {joinOptions.map((option, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:border-dev-green hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-gray-50 text-dev-blue rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-dev-green group-hover:text-white transition-all">
                  {option.icon}
                </div>
                <h4 className="text-2xl font-black text-dev-blue mb-3">{option.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-8">{option.desc}</p>
              </div>
              
              <button className="text-dev-green font-black flex items-center gap-2 hover:translate-x-2 transition-transform">
                Sign Up Now <HiArrowRight />
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default JoinUs;