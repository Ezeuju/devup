import React from 'react';
import { LuCalendarDays, LuMapPin, LuTicket, LuImage } from "react-icons/lu";

const otherEvents = [
  {
    title: "DevCenter Open Day",
    date: "March 15, 2025",
    location: "Dev Center Hub",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2070" ,
    category: "Workshop"
  },
  {
    title: "Teens World Summit",
    date: "June 22, 2025",
    location: "City Hall",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070",
    category: "Mentorship"
  },
  {
    title: "Charge Africa Outreach",
    date: "August 10, 2025",
    location: "Community Center",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
    category: "Community"
  }
];

const EventsGallery = () => {
  return (
    <section id="events" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <p className="text-dev-green font-black uppercase tracking-[0.3em] text-sm mb-4">Calendar of Impact</p>
            <h2 className="text-dev-blue text-4xl md:text-6xl font-black leading-tight">
              Upcoming <span className="text-dev-green italic">Events</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-dev-blue/40 font-bold border-b-2 border-gray-100 pb-2">
            <LuImage /> <span>Explore Our Gallery</span>
          </div>
        </div>

        {/* FEATURED EVENT FLYER (The Big One) */}
        <div className="relative group rounded-[3rem] overflow-hidden shadow-2xl mb-12 h-[500px] md:h-[600px]">
          <img 
            src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2070" 
            alt="October Games 2025 Flyer" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dev-blue via-dev-blue/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <span className="bg-dev-green text-white px-4 py-1 rounded-full text-xs font-black uppercase mb-6 inline-block tracking-widest">Featured Flyer</span>
              <h3 className="text-4xl md:text-6xl font-black mb-4">OCTOBER GAMES <span className="text-dev-green italic">2025</span></h3>
              <div className="flex flex-wrap gap-6 text-lg font-medium opacity-90">
                <span className="flex items-center gap-2"><LuCalendarDays className="text-dev-green" /> October 2025</span>
                <span className="flex items-center gap-2"><LuMapPin className="text-dev-green" /> Global Sports Arena</span>
              </div>
            </div>
            <button className="bg-white text-dev-blue px-10 py-5 rounded-2xl font-black text-lg hover:bg-dev-green hover:text-white transition-all shadow-xl flex items-center gap-3 active:scale-95">
              <LuTicket className="text-xl" /> Register Now
            </button>
          </div>
        </div>

        {/* SECONDARY FLYER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherEvents.map((event, index) => (
            <div key={index} className="bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-xl transition-all group">
              <div className="h-64 relative overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-dev-blue/90 backdrop-blur-md text-white text-[10px] font-black uppercase px-3 py-1 rounded-lg">
                  {event.category}
                </div>
              </div>
              
              <div className="p-8">
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
  );
};

export default EventsGallery;