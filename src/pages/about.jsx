import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PageBanner from '../components/page-banner';
import Banner2 from '../assets/images/banner/about-3.webp';
import VisionMission from '../components/vision-mission';
import Team from '../components/team';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function About() {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>About Us | KP - India | Drive the Future</title>
          <meta name="description" content="Learn more about KP - India, our mission, vision, and team dedicated to delivering exceptional results." />
        </Helmet>
        <Navbar />
        <PageBanner title="About Our Company" subtitle="Dedicated to delivering exceptional results." image={Banner2} />
        <VisionMission />
        <Team />
        <Footer />
      </>
    </HelmetProvider>
  );
}

export default About;
