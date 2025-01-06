import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PageBanner from '../components/page-banner';
import Banner1 from '../assets/images/banner/contact-banner.webp';
import ContactForm from '../components/contact-from';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Contact() {
  return (
    <HelmetProvider>
      <div className='contact-main'>
        <Helmet>
          <title>Contact with Us | KP - India | Drive the Future</title>
          <meta name="description" content="Get in touch with KP - India. We are dedicated to delivering exceptional results for our clients." />
        </Helmet>
        <Navbar />
        <PageBanner className="" title="Contact" subtitle="Dedicated to delivering exceptional results." image={Banner1} />
        <ContactForm />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default Contact;
