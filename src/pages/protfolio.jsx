import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PageBanner from '../components/page-banner';
import Banner1 from '../assets/images/banner/contact-banner.webp';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProtfolioCard from '../components/protoflio-card';

function Protfolio() {
  return (
    <HelmetProvider>
      <div className='contact-main'>
        <Helmet>
          <title>Protfolio | KP - India | Drive the Future</title>
          <meta name="description" content="Get in touch with KP - India. We are dedicated to delivering exceptional results for our clients." />
        </Helmet>
        <Navbar />
        <PageBanner title="Protfolio" subtitle="Dedicated to delivering exceptional results." image={Banner1} />
        <ProtfolioCard/>
        <Footer />
      </div>    
    </HelmetProvider>
  );
}

export default Protfolio;
