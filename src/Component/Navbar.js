import React, { useState } from 'react';
import devuptrans from '../images/devuptrans.png'; // Placeholder for the logo image

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false); // Handles desktop hover & mobile click

  return (
    <div>
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
      {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            {/* Replace with your actual <img> tag */}
            <div className="h-12 w-32  flex items-center justify-center text-xs font-bold text-dev-blue">
                <a href="/"> <img src={devuptrans} alt="DevUP Logo"/></a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-dev-blue font-medium hover:text-dev-green transition">Home</a>
            <a href="/about" className="text-dev-blue font-medium hover:text-dev-green transition">About Us</a>
            
            {/* Desktop Dropdown (Hover) */}
            <div 
              className="relative py-4"
              onMouseEnter={() => setIsTeamOpen(true)}
              onMouseLeave={() => setIsTeamOpen(false)}
            >
              <button className="flex items-center gap-1 text-dev-blue font-medium hover:text-dev-green transition cursor-pointer">
                Our Team
                <svg className={`w-4 h-4 transition-transform ${isTeamOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border-t-4 border-dev-green py-2 transition-all duration-200 ${isTeamOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                <a href="/board" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-dev-green">Board of Directors</a>
                <a href="/advisory" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-dev-green">Advisory Council</a>
              </div>
            </div>

            <a href="/ourexpress" className="text-dev-blue font-medium hover:text-dev-green transition">Expressions</a>
            <a href="/gallery" className="text-dev-blue font-medium hover:text-dev-green transition">Events</a>
            <a href="/contact" className="text-dev-blue font-medium hover:text-dev-green transition">Contact</a>
            
           <a href="/register"> <button className="bg-dev-blue text-white px-6 py-2.5 rounded-lg font-bold hover:bg-dev-green transition-all shadow-md active:scale-95">
              Join Us
            </button></a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-dev-blue p-2">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${isMobileMenuOpen ? 'max-h-[500px] border-t border-gray-100' : 'max-h-0'}`}>
        <div className="px-4 py-6 space-y-4">
          <a href="/" className="block text-dev-blue font-bold">Home</a>
          <a href="/about" className="block text-dev-blue font-bold">About Us</a>
          
          {/* Mobile Accordion for Team */}
          <div>
            <button 
              onClick={() => setIsTeamOpen(!isTeamOpen)} 
              className="flex justify-between items-center w-full text-dev-blue font-bold"
            >
              Our Team
              <svg className={`w-5 h-5 transition-transform ${isTeamOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* This sub-menu only shows on mobile when clicked */}
           
                 {/* Updated Mobile Sub-Menu Container */}
                <div className={`ml-2 pl-4 mt-2 space-y-1 border-l-2 border-dev-green/30 bg-gray-50/30 rounded-r-xl transition-all duration-300 ${isTeamOpen ? 'max-h-40 opacity-100 py-2' : 'max-h-0 opacity-0'}`}>
                <a href="/board" className="block text-gray-600 py-2 hover:text-dev-green active:font-bold">
                    Board of Directors
                </a>
                <a href="/advisory" className="block text-gray-600 py-2 hover:text-dev-green active:font-bold">
                    Advisory Council
                </a>
                </div>
            </div>
          

          <a href="/ourexpress" className="block text-dev-blue font-bold">Expressions</a>
          <a href="/gallery" className="block text-dev-blue font-bold">Events</a>
          <a href="/contact" className="block text-dev-blue font-bold">Contact</a>
        
          <a href="/register"><button className="w-full bg-dev-blue text-white py-3 rounded-lg font-bold mt-4">Join Us</button></a>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;