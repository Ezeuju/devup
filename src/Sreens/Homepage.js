import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Expressions from '../Component/Expressions'
import MissionVision from '../Component/MissionVision'
import Stats from '../Component/Stats';
import Partners from '../Component/Partners';
import JoinUs from '../Component/JoinUs';
import EventsGallery from '../Component/EventsGallery';
import Footer from '../Component/Footer';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Expressions />
      <MissionVision />
      <Stats />
      <Partners />
      <JoinUs />
      <EventsGallery />
      <Footer />

    </div>
  )
}

export default Homepage