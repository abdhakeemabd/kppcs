import React from 'react';
import Slider from 'react-slick'; 
import '../assets/style/css/home-update.css';
import Card1 from "../assets/images/banner/2.webp";
import Card2 from "../assets/images/banner/protfolio1.webp";
import Card3 from "../assets/images/banner/protfolio.webp";
import Card4 from "../assets/images/banner/service-banner.webp";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function HomeUpdates() {
  const updates = [
    {
      id: 1,
      title: "The Role of Responsive Web Design in Increasing Sales",
      description: "Responsive web design is key for success because it makes your website easy to use on any device, whether it's a phone, tablet, or computer. This improves user experience, keeps visitors on your site longer, and increases the chances of making sales.",
      date: "19 Nov 2024",
      location: "Kerala | IND",
      author: "Nisam",
      image: Card1,
    },
    {
      id: 2,
      title: "How Mobile App Development Drives Success for Modern Businesses",
      description: "Mobile app development is key for businesses because it allows you to connect with customers on the go, offer a better user experience, and make it easier for people to access your products or services. It can also help build customer loyalty and increase sales by providing a more convenient and personalized experience.",
      date: "19 Nov 2024",
      location: "Kerala | IND",
      author: "Musthafa",
      image: Card3,
    },
    {
      id: 3,
      title: "Optimize SEO with UX Signals: How Search Intent Can Enhance Your Rankings",
      description: "Understanding search intent is crucial for improving SEO and boosting rankings. When you align your content with what users are actively searching for, it creates a better user experience (UX), which search engines reward. By analyzing search intent—whether informational, navigational, or transactional—you can tailor your content to meet users' needs, making it more likely they’ll engage with your website. A seamless UX with relevant, intent-driven content can lead to lower bounce rates, higher engagement, and ultimately better rankings on search engine results pages (SERPs).",
      date: "19 Nov 2024",
      location: "Kerala | IND",
      author: "Nihad",
      image: Card4,
    },
  ];

  const rightCards = [
    {
      id: 1,
      title: "The Defensive Edge: Transforming Cybersecurity for a Safer Future.",
      date: "19 Dec 2024",
      location: "Kerala | IND",
      author: "Rashid",
    },
    {
      id: 2,
      title: "What is BGP and How Does it Enable the Internet to Work?.",
      date: "20 Nov 2024",
      location: "Kerala | IND",
      author: "Nidhin",
    },
    {
      id: 3,
      title: "How IT Services Contribute to Gaining a Competitive Edge.",
      date: "02 Oct 2024",
      location: "Kerala | IND",
      author: "AD",
    },
    {
      id: 4,
      title: "Metaverse Is The Future – Experience It With Iluzia Lab",
      date: "20 Nov 2024",
      location: "Kerala | IND",
      author: "AD",
    },
  ];
  const settings = {
    dots: false,
    arrows:false,
    infinite: true, 
    autoplay:true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className='home-updates-sec position-relative overflow-hidden'>
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3" data-aos="fade-down" data-aos-offset="10">
            <h4>Latest Updates</h4>
          </div>
          <div className="col-md-8 mb-3" data-aos="fade-up" data-aos-offset="10">
            <Slider {...settings}>
             {updates.map((update) => (
              <div key={update.id} className="">
                <div className="update-card">
                  <div className="img-card position-relative overflow-hidden mb-3">
                  <img className='update-img' src={update.image} alt={update.title}  loading='lazy'/>
                  </div>
                  <div className="cont px-3 py-2">
                    <h5 className='mb-3 fs-16'>{update.title}</h5>
                    <p className='fs-14 truncate-4'>{update.description}</p>
                    <div className="d-flex justify-content-between mb-2">
                      <div className='fs-13'>{update.date}</div>
                      <div className='fs-13'>{update.location}</div>
                      <div className='fs-13'>{update.author}</div>
                    </div>
                  </div>
                </div>
              </div>
             ))}
            </Slider>  
          </div>
          <div className="col-md-4 mb-3" data-aos="fade-up" data-aos-offset="10">
            <div className="update-right pt-3 ps-md-5">
              {rightCards.map((card) => (
                <div key={card.id} className="card-1 border-bottom-gray mb-3">
                  <h5>{card.title}</h5>
                  <div className="d-flex justify-content-between mb-3">
                    <div className='fs-13'>{card.date}</div>
                    <div className='fs-13'>{card.location}</div>
                    <div className='fs-13'>{card.author}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeUpdates;
