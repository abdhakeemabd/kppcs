import React from 'react';
import Navbar from '../components/navbar';
import HomeBanner from '../components/banner';
import HomeNews from '../components/home-news';
import Footer from '../components/footer';
import HomeService from '../components/home-service';
import HomeUpdates from '../components/home-updates';
import HomeContact from '../components/home-contact';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>KP - India | Drive the Future</title>
          <meta name="description" content="Welcome to KP - India. We drive the future of technology and innovation." />
        </Helmet>
        <Navbar />
        <HomeBanner />
        <HomeNews />
        <HomeService />
        <HomeUpdates />
        <HomeContact />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default Home;
