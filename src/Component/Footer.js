import React from 'react';
import devuptrans from "../images/devuptrans.png";
import { 
  LuMail, 
  LuPhone, 
  LuMapPin, 
  LuFacebook, 
  LuInstagram, 
  LuLinkedin, 
  LuTwitter,
  LuHeart
} from "react-icons/lu";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dev-blue text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Mission */}
          <div className="space-y-6">
            <div className='logos'>
            <img src={devuptrans} alt="DevUP Global" className=" brightness-0 invert" />
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Developing human capital by empowering youth and communities with purpose, leadership, and skills that drive national progress.
            </p>
            <div className="flex gap-4">
              <a href="/" className="p-3 bg-white/10 rounded-xl hover:bg-dev-green transition-all"><LuFacebook /></a>
              <a href="/" className="p-3 bg-white/10 rounded-xl hover:bg-dev-green transition-all"><LuInstagram /></a>
              <a href="/" className="p-3 bg-white/10 rounded-xl hover:bg-dev-green transition-all"><LuLinkedin /></a>
              <a href="/" className="p-3 bg-white/10 rounded-xl hover:bg-dev-green transition-all"><LuTwitter /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className=''>
            <h4 className="text-dev-green font-black uppercase tracking-widest mb-8 text-sm">Quick Links</h4>
            <ul className="space-y-4 text-gray-300 font-medium">
              <li><a href="#home" className="hover:text-dev-green transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-dev-green transition-colors">About DevUP</a></li>
              <li><a href="#expressions" className="hover:text-dev-green transition-colors">Our Expressions</a></li>
              <li><a href="#events" className="hover:text-dev-green transition-colors">Upcoming Events</a></li>
              <li><a href="#partners" className="hover:text-dev-green transition-colors">Partnerships</a></li>
            </ul>
          </div>

          {/* Column 3: Our Expressions */}
          <div>
            <h4 className="text-dev-green font-black uppercase tracking-widest mb-8 text-sm">Expressions</h4>
            <ul className="space-y-4 text-gray-300 font-medium text-sm">
              <li><a href="/" className="hover:text-dev-green transition-colors">DevCenter Hub</a></li>
              <li><a href="/" className="hover:text-dev-green transition-colors">Blaze Sports</a></li>
              <li><a href="/" className="hover:text-dev-green transition-colors">Teens World</a></li>
              <li><a href="/" className="hover:text-dev-green transition-colors">Charge Africa</a></li>
              <li><a href="/" className="hover:text-dev-green transition-colors">Cre8City</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 className="text-dev-green font-black uppercase tracking-widest mb-8 text-sm">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <LuMapPin className="text-dev-green text-2xl flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">
               43B Enen ekpene Road <br /> Eket, Akwa Ibom State, Nigeria.
                </span>
              </li>
              <li className="flex items-center gap-4">
                <LuPhone className="text-dev-green text-xl flex-shrink-0" />
                <span className="text-gray-300 text-sm font-bold">+234 (0) 123 456 7890</span>
              </li>
              <li className="flex items-center gap-4">
                <LuMail className="text-dev-green text-xl flex-shrink-0" />
                <span className="text-gray-300 text-sm">devup@advantacatalyst.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm text-center">
            &copy; {currentYear} DevUP Global Human Capital Development Initiative. All Rights Reserved.
          </p>
          <p className="text-gray-400 text-xs flex items-center gap-1">
            Developing People <LuHeart className="text-dev-green" /> Transforming Nations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;