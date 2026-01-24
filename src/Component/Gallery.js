import Navbar from './Navbar';
import Footer from './Footer';
import teens from  "../images/teens.jpeg"
import { LuCalendarDays, LuMapPin, LuTicket,LuMaximize2 } from "react-icons/lu";

const otherEvents = [
  {
    title: "DevCenter Open Day",
    date: "March 15, 2026",
    location: "Dev Center Hub",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2070",
    category: "Workshop"
  },
  {
    title: "Teens World Summit",
    date: "June 22, 2026",
    location: "City Hall",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070",
    category: "Mentorship"
  },
  {
    title: "Charge Africa Outreach",
    date: "August 10, 2026",
    location: "Community Center",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
    category: "Community"
  }
];

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071", title: "Leadership Training", size: "tall" },
  { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070", title: "DevCenter Lab", size: "wide" },
  { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070", title: "Youth Summit", size: "small" },
  { url: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=2022", title: "Blaze Sports Action", size: "tall" },
  { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070", title: "Collaboration", size: "small" },
  { url: teens, title: "Community Service", size: "wide" },
];

const EventsGalleryPage = () => {
  return (
    <div className="bg-white">
      <Navbar />

      {/* --- SECTION 1: UPCOMING EVENTS --- */}
      <section id="events" className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <p className="text-dev-green font-black uppercase tracking-[0.3em] text-sm mb-4">Calendar of Impact</p>
              <h2 className="text-dev-blue text-4xl md:text-6xl font-black leading-tight">
                Upcoming <span className="text-dev-green italic">Events</span>
              </h2>
            </div>
          </div>

          {/* FEATURED EVENT FLYER */}
          <div className="relative group rounded-[3rem] overflow-hidden shadow-2xl mb-12 h-[500px] md:h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2070" 
              alt="October Games 2026 Flyer" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dev-blue via-dev-blue/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white w-full flex flex-col md:flex-row md:items-end justify-between gap-8 text-left">
              <div className="max-w-xl">
                <span className="bg-dev-green text-white px-4 py-1 rounded-full text-xs font-black uppercase mb-6 inline-block tracking-widest">Featured Flyer</span>
                <h3 className="text-4xl md:text-6xl font-black mb-4">OCTOBER GAMES <span className="text-dev-green italic">2026</span></h3>
                <div className="flex flex-wrap gap-6 text-lg font-medium opacity-90">
                  <span className="flex items-center gap-2"><LuCalendarDays className="text-dev-green" /> October 2026</span>
                  <span className="flex items-center gap-2"><LuMapPin className="text-dev-green" /> Global Sports Arena</span>
                </div>
              </div>
              <button className="bg-white text-dev-blue px-10 py-5 rounded-2xl font-black text-lg hover:bg-dev-green hover:text-white transition-all shadow-xl flex items-center gap-3 active:scale-95">
                <LuTicket className="text-xl" /> Register Now
              </button>
            </div>
          </div>

          {/* SECONDARY FLYER GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {otherEvents.map((event, index) => (
              <div key={index} className="bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-xl transition-all group">
                <div className="h-64 relative overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-dev-blue/90 backdrop-blur-md text-white text-[10px] font-black uppercase px-3 py-1 rounded-lg">
                    {event.category}
                  </div>
                </div>
                <div className="p-8 text-left">
                  <h4 className="text-xl font-black text-dev-blue mb-4 leading-tight">{event.title}</h4>
                  <div className="space-y-2 mb-6 text-sm text-gray-500 font-medium">
                    <p className="flex items-center gap-2"><LuCalendarDays className="text-dev-green" /> {event.date}</p>
                    <p className="flex items-center gap-2"><LuMapPin className="text-dev-green" /> {event.location}</p>
                  </div>
                  <button className="w-full py-3 border-2 border-dev-blue text-dev-blue font-bold rounded-xl hover:bg-dev-blue hover:text-white transition-all active:scale-95 text-sm uppercase tracking-wider">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: VISUAL IMPACT GALLERY --- */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Gallery Header */}
          <div className="text-center mb-16">
            <p className="text-dev-green font-black uppercase tracking-[0.3em] text-sm mb-4">Captured Moments</p>
            <h2 className="text-dev-blue text-4xl md:text-5xl font-black">
              Visual <span className="text-dev-green italic">Impact</span>
            </h2>
            <div className="w-24 h-2 bg-dev-green mx-auto rounded-full mt-4"></div>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative group rounded-3xl overflow-hidden break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500">
                <img src={img.url} alt={img.title} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-dev-blue/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center p-4">
                    <LuMaximize2 className="text-white text-3xl mx-auto mb-2" />
                    <p className="text-white font-bold">{img.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsGalleryPage;