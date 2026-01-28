import React,{useState} from 'react';
import { 
  LuScale, LuGlobe, LuMapPin, LuUsers, LuCalendar, 
  LuAward, LuPlane, LuCircleCheck, LuChevronDown, LuQuote, LuSchool 
} from "react-icons/lu";
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import csig1 from "../images/csig1.jpeg";
import csig3 from "../images/csig3.jpeg";
import cihigh from "../images/cihigh.jpeg"

const CSIG = () => {

    const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "Is CSIG only for Student Union Presidents?", a: "No. CSIG is open to all student leaders, including cabinet members, faculty leaders, and aspiring leaders preparing for governance roles." },
    { q: "Are the international trips mandatory?", a: "Yes. The program is a two-semester immersive journey. The sessions in Abidjan and Kigali are core components of the leadership curriculum." },
    { q: "Does the program provide scholarships?", a: "Interest-based grants may be available. We encourage student leaders to seek sponsorship from their institutions' Student Affairs departments." }
  ];

  const testimonials = [
    { 
      name: "Chukwuma O.", 
      role: "Former SUG President", 
      text: "CSIG shifted my perspective from campus politics to national governance. The network I built in Rwanda is still active today." 
    },
    { 
      name: "Amina K.", 
      role: "Faculty Leader", 
      text: "The policy research modules helped us draft a new student charter that was adopted by our university management." 
    }
  ];

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center bg-dev-blue overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${csig3})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dev-blue/20 via-dev-blue/90 to-dev-blue" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center">
          <div className="inline-flex items-center gap-2 bg-dev-green/20 text-dev-green px-4 py-2 rounded-full mb-8 border border-dev-green/30">
            <LuGlobe className="animate-spin-slow" />
            <span className="font-black uppercase tracking-widest text-xs">Africa Edition 2026</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
            COALITION OF <br /> <span className="text-dev-green italic">STUDENTS IN GOVERNANCE</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90 leading-relaxed font-medium">
            Strengthening, connecting, and transforming student government leaders across African 
            higher institutions for ethical governance and global impact.
          </p>
        </div>
      </section>

      {/* Program Structure - The Journey */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-dev-blue mb-4">The <span className="text-dev-green italic">Leadership Journey</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A two-semester immersive program across two African capital cities.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Semester 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-dev-blue relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 text-8xl text-dev-blue">01</div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-dev-blue text-white p-3 rounded-2xl"><LuMapPin size={28} /></div>
                <div>
                  <h3 className="text-2xl font-black text-dev-blue">Semester One</h3>
                  <p className="text-dev-green font-bold">Opening Session</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center gap-3">
                  <LuPlane className="text-dev-green" /> 
                  <span className="font-bold text-lg">Abidjan, Côte d’Ivoire</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <LuCalendar className="text-dev-blue" />
                  <span>May 25 – 29, 2026</span>
                </div>
                <p className="text-sm border-l-2 border-gray-200 pl-4 py-2 italic">
                  Focus: Governance, representation, and cross-cultural dialogue.
                </p>
              </div>
            </div>

            {/* Semester 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-dev-green relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 text-8xl text-dev-green">02</div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-dev-green text-white p-3 rounded-2xl"><LuAward size={28} /></div>
                <div>
                  <h3 className="text-2xl font-black text-dev-blue">Semester Two</h3>
                  <p className="text-dev-green font-bold">Closing Session</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center gap-3">
                  <LuPlane className="text-dev-green" /> 
                  <span className="font-bold text-lg">Kigali, Rwanda</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <LuCalendar className="text-dev-blue" />
                  <span>October 11 – 17, 2026</span>
                </div>
                <p className="text-sm border-l-2 border-gray-200 pl-4 py-2 italic">
                  Focus: Impact, legacy, and national/global leadership levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It Is For Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <img 
               src={csig1} 
               alt="Student Leaders Gathering" 
               className="rounded-3xl shadow-2xl w-full h-[600px] object-cover" 
             />
             <div className="absolute -bottom-6 -right-6 bg-dev-green p-8 rounded-3xl text-white hidden md:block max-w-xs shadow-xl">
               <p className="font-black text-2xl italic">"Lead with Integrity."</p>
             </div>
          </div>

          <div>
            <h2 className="text-4xl font-black text-dev-blue mb-8">Who <span className="text-dev-green italic">CSIG</span> is For</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              If you are leading or preparing to lead students and intend to drive change 
              beyond the university, CSIG is your platform.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "SUG & SGA Leaders",
                "SRC & Student Cabinet",
                "Faculty/Dept Leaders",
                "Campus Initiatives",
                "Aspiring Student Leaders",
                "Student Affairs Reps"
              ].map((role, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-dev-blue/5 transition-colors">
                  <LuCircleCheck className="text-dev-green" />
                  <span className="font-bold text-dev-blue text-sm">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-24 bg-dev-blue text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-black mb-4">What <span className="text-dev-green italic">CSIG Offers</span></h2>
             <p className="text-gray-400">Educational. Transformational. Collaborative. Fun.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <LuScale />, title: "Responsible Governance", desc: "Strengthen your effectiveness in student representation and policy shaping." },
              { icon: <LuUsers />, title: "African Network", desc: "Exchange best practices with peers from Universities and Polytechnics across the continent." },
              { icon: <LuAward />, title: "Career Legacy", desc: "Build leadership skills that extend beyond campus titles into global impact." }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="mx-auto w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-4xl text-dev-green mb-6 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-black text-dev-blue mb-12">The <span className="text-dev-green italic">2026 Timeline</span></h2>
        <div className="relative border-l-4 border-dev-green/30 ml-8 text-left space-y-12">
           <div className="relative pl-8">
              <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-dev-blue border-4 border-white shadow"></div>
              <h4 className="font-black text-dev-blue">Mid-February 2026</h4>
              <p className="text-gray-500">Registration officially opens on the website.</p>
           </div>
           <div className="relative pl-8">
              <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-dev-green border-4 border-white shadow"></div>
              <h4 className="font-black text-dev-blue">May 24, 2026</h4>
              <p className="text-gray-500">Arrival in Abidjan, Côte d’Ivoire for Semester One.</p>
           </div>
           <div className="relative pl-8 opacity-50">
              <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-gray-300 border-4 border-white shadow"></div>
              <h4 className="font-black text-dev-blue">October 11, 2026</h4>
              <p className="text-gray-500">Arrival in Kigali, Rwanda for Semester Two.</p>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dev-green text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Lead <span className="text-dev-blue">Differently?</span></h2>
          <p className="text-xl mb-10 opacity-90">An Interest Form will be available on our website ahead of the February registration window.</p>
          <button className="bg-dev-blue hover:bg-white hover:text-dev-blue text-white font-black py-4 px-10 rounded-xl transition-all shadow-xl active:scale-95">
            Fill the Interest Form
          </button>
        </div>
        </section>

    {/* --- TESTIMONIALS (University Focus) --- */}
      <section className="py-24 bg-dev-blue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white">Alumni <span className="text-dev-green">Impact</span></h2>
            <div className="h-px flex-grow bg-white/20"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-3xl border border-white/10 relative group hover:bg-white/10 transition-all">
                <LuQuote className="absolute top-6 right-6 text-dev-green opacity-20 text-5xl" />
                <p className="text-lg italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-black text-dev-green">{t.name}</h4>
                  <p className="text-sm opacity-60 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HIGH SCHOOL SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
               <img src={cihigh} alt="High School Leaders" className="rounded-[3rem] shadow-2xl w-full h-[550px] object-cover" />
               <div className="absolute -top-6 -left-6 bg-dev-blue p-8 rounded-[2rem] text-white shadow-xl hidden md:block">
                  <LuSchool size={48} className="text-dev-green" />
               </div>
               <div className="absolute -bottom-6 -right-6 bg-dev-green p-6 rounded-2xl text-white shadow-lg font-black italic">
                 Secondary Leadership
               </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-dev-green font-black uppercase tracking-widest text-xs mb-4">Foundation Governance</p>
              <h2 className="text-4xl md:text-5xl font-black text-dev-blue mb-6">CSiG <span className="text-dev-green italic">High School</span></h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Building the foundations of integrity early. CSiG High School is designed to equip secondary students with ethical leadership skills, 
                preparing them to become effective change agents before reaching higher institutions.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-10">
                {["Values-Based Leadership Training", "Civic Mindset Development", "Integrity & Ethics Mentorship"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <LuCircleCheck className="text-dev-green text-xl" />
                    <span className="font-bold text-dev-blue text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <button className="w-full md:w-auto bg-dev-blue hover:bg-dev-green text-white font-black py-4 px-10 rounded-xl transition-all shadow-lg active:scale-95">
                Declare School Interest
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-dev-blue">Frequently Asked <span className="text-dev-green">Questions</span></h2>
            <p className="text-gray-500 mt-2">Everything you need to know about the Africa Edition 2026.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 md:p-8 flex justify-between items-center text-left transition-all"
                >
                  <span className="font-black text-dev-blue md:text-lg">{faq.q}</span>
                  <div className={`p-2 rounded-full bg-gray-50 transition-transform ${openFaq === i ? 'rotate-180 bg-dev-green/10 text-dev-green' : ''}`}>
                    <LuChevronDown />
                  </div>
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-60 border-t border-gray-50' : 'max-h-0'}`}>
                  <div className="p-6 md:p-8 text-gray-500 leading-relaxed bg-gray-50/30">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
   {/* --- FINAL CTA SECTION --- */}
      <section className="py-24 bg-dev-green text-white text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <LuGlobe size={300} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to Lead <span className="text-dev-blue">Differently?</span></h2>
          <p className="text-xl mb-12 opacity-90 font-medium max-w-2xl mx-auto leading-relaxed">
            The Africa Edition 2026 is a call to ethical governance. Whether you are an individual leader or a school administrator, let's build the future together.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
             <button className="bg-dev-blue hover:bg-white hover:text-dev-blue text-white font-black py-5 px-10 rounded-2xl transition-all shadow-2xl active:scale-95 text-lg">
                Student Interest Form
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-dev-green text-white font-black py-5 px-10 rounded-2xl transition-all text-lg">
                School Partnership Form
              </button>
          </div>
        </div>
      </section>

      </section>

      <Footer />
    </div>
  );
};

export default CSIG;