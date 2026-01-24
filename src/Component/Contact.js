import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { LuPhone, LuMail, LuMapPin, LuSend, LuClock } from "react-icons/lu";

const Contact = () => {
  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 bg-dev-blue text-white px-6">
        <div className="max-w-7xl mx-auto text-left">
          <p className="text-dev-green font-black uppercase tracking-[0.4em] text-xs mb-4">Get In Touch</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6">Contact <span className="text-dev-green italic">Us</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl">Have questions about our programs or want to partner with us? Reach out and let's start a conversation.</p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left: Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black text-dev-blue mb-8">Visit Our <span className="text-dev-green">Hub</span></h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-dev-green text-2xl flex-shrink-0">
                    <LuMapPin />
                  </div>
                  <div>
                    <h4 className="font-black text-dev-blue uppercase text-xs tracking-widest mb-1">Location</h4>
                    <p className="text-gray-600 font-medium">43B Enen ekpene Road, Eket, Akwa-Ibom State <br />Akwa Ibom State, Nigeria.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-dev-green text-2xl flex-shrink-0">
                    <LuPhone />
                  </div>
                  <div>
                    <h4 className="font-black text-dev-blue uppercase text-xs tracking-widest mb-1">Phone</h4>
                    <p className="text-gray-600 font-medium">+234 (0) 123 456 7890</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-dev-green text-2xl flex-shrink-0">
                    <LuMail />
                  </div>
                  <div>
                    <h4 className="font-black text-dev-blue uppercase text-xs tracking-widest mb-1">Email</h4>
                    <p className="text-gray-600 font-medium">devup@advantacatalyst.org</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-dev-green text-2xl flex-shrink-0">
                    <LuClock />
                  </div>
                  <div>
                    <h4 className="font-black text-dev-blue uppercase text-xs tracking-widest mb-1">Hours</h4>
                    <p className="text-gray-600 font-medium">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder for Map */}
            {/* <div className="h-64 bg-gray-100 rounded-[2.5rem] overflow-hidden relative border border-gray-100"> */}
               {/* <div className="absolute inset-0 flex items-center justify-center text-dev-blue/20 font-black italic"> */}
               {/* Google Maps Integration */}
            <div className="h-64 bg-gray-100 rounded-[2.5rem] overflow-hidden relative border border-gray-100 shadow-inner">
            <iframe
                title="Dev Center Hub Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.241!2d7.93!3d4.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1060dd26cd07a525%3A0xd9b6717ed03a2f06!2s38%20Afaha%20Uqua%20Road%2C%20Eket%20524101%2C%20Akwa%20Ibom!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                className="absolute inset-0 w-full h-full border-0 grayscale-[0.2] contrast-[1.1]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
               {/* </div>
            </div> */}
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100">
            <h3 className="text-2xl font-black text-dev-blue mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-dev-green transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                  <input type="email" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-dev-green transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Subject</label>
                <select className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-dev-green transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Partnership Proposal</option>
                  <option>Volunteering</option>
                  <option>Media/Press</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Message</label>
                <textarea rows="5" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-dev-green transition-all" placeholder="How can we help you?"></textarea>
              </div>

              <button className="w-full bg-dev-blue hover:bg-dev-green text-white font-black py-5 rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3">
                Send Message <LuSend />
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;