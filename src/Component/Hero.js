import React, { useState, useEffect } from 'react';
// import blazesport from '../images/blazesport.jpeg';
import cihigh from "../images/cihigh.jpeg";
import teens from "../images/teens.jpeg";
import project40 from "../images/project40.jpeg";
import csig1 from "../images/csig1.jpeg";
// import csig2 from "../images/csig2.jpeg";
// import csig3 from "../images/csig3.jpeg";
import hand from "../images/hand.jpg"
import health from "../images/health.jpg"


const slides = [
  {
    image: hand,
    title: 'Shaping Minds.',
    subtitle: 'Building Futures.',
    paragraph: 'Empowering the next generation with purpose, leadership, and essential life skills.',
    buttonText: 'Our Mission',
  },
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    title: 'DevCenter.',
    subtitle: 'Innovation Hub.',
    paragraph: 'A space for learning, collaboration, and tech capacity-building for real-world impact.',
    buttonText: 'Explore DevCenter',
  },
  {
    image: teens,
    title: 'Teens World.',
    subtitle: 'Holistic Growth.',
    paragraph: 'Delivering programs across schools to help young people grow with clarity and confidence.',
    buttonText: 'View Teens World',
  },
 {
    image: project40,
    title: 'Project 40,000.',
    subtitle: 'Inspiring Impact.',
    paragraph: 'Our strategic journey to ignite purpose and transform 40,000 lives across Africa by 2026.',
    buttonText: 'See Our Vision',
  },
  {
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    title: 'Cre8City.',
    subtitle: 'For Creatives.',
    paragraph: 'Nurturing young talents to innovate and transform creativity into economic opportunity.',
    buttonText: 'Start Creating',
  },
    {
    image: csig1, // or csig2/csig3 depending on your preference
    title: 'CSIG Universities.',
    subtitle: 'Civic Excellence.',
    paragraph: 'Preparing tertiary students for public policy, governance, and transformational leadership in society.',
    buttonText: 'Join the Coalition',
    },
    {
    image: cihigh,
    title: 'CSIG High School.',
    subtitle: 'Early Leadership.',
    paragraph: 'Equipping secondary school students with the values, ethics, and civic mindset to lead with integrity.',
    buttonText: 'Learn More',
  },
  {
    image: health,
    title: 'Charge Africa.',
    subtitle: 'Service Impact.',
    paragraph: 'Mobilizing professionals and youth for hands-on community service projects across Africa.',
    buttonText: 'Volunteer Now',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full h-[90vh] md:h-[700px] overflow-hidden bg-dev-blue">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`sliding-comp absolute inset-0 w-full h-full transition-all duration-2000 ease-in-out transform
            ${index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
        >
          {/* Image Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(to right, rgba(4, 54, 148, 0.8), rgba(0, 0, 0, 0.4)), url(${slide.image})` }}
          />

          {/* Text Content */}
         <div className="relative z-20 flex items-center justify-start h-full px-6 md:px-20 text-left text-white">
            {/* Added a simple fade-in-up animation for the content when slide is active */}
            <div className={`max-w-3xl transition-all duration-1000 delay-500 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-dev-green uppercase tracking-[0.3em] text-[10px] md:text-sm font-black mb-4">
                DevUP Global Ecosystem
              </p>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 leading-tight">
                {slide.title} <br />
                <span className="text-dev-green italic">{slide.subtitle}</span>
              </h1>
              
              <p className="text-sm md:text-lg mb-8 font-medium max-w-md md:max-w-xl text-gray-100 leading-relaxed">
                {slide.paragraph}
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="bg-dev-green hover:bg-white hover:text-dev-blue text-white font-bold py-3 px-8 rounded-md text-sm md:text-base transition-all shadow-lg active:scale-95"
                >
                  {slide.buttonText}
                </a>
                <a 
                  href="#expressions" 
                  className="border-2 border-white/50 hover:border-white text-white font-bold py-3 px-8 rounded-md text-sm md:text-base transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Modern Pill Indicators */}
      <div className="absolute bottom-10 left-6 md:left-20 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-1000 h-1.5 rounded-full ${
              index === currentSlide ? 'w-12 bg-dev-green' : 'w-4 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;