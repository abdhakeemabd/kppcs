import React from 'react';
import '../assets/style/css/service-card.css';
import Img1 from '../assets/images/services/tax.webp';
import Img2 from '../assets/images/services/taxs.webp';
import Img3 from '../assets/images/services/accounts.webp';
import Img4 from '../assets/images/services/web-development.webp';
import Img5 from '../assets/images/services/app-develpment.webp';
import Img6 from '../assets/images/services/seo.webp';
import Img7 from '../assets/images/services/social.webp';
import Img8 from '../assets/images/services/designing.webp';
import Img9 from '../assets/images/services/insurance.webp';
import Img10 from '../assets/images/services/complaints.webp';
import Serv1 from '../assets/images/icons/taxes.png';
import Serv2 from '../assets/images/icons/tax.png';
import Serv3 from '../assets/images/icons/design.png';
import Serv4 from '../assets/images/icons/promotion.png';
import Serv5 from '../assets/images/icons/app.png';
import Serv6 from '../assets/images/icons/accounting.png';
import Serv7 from '../assets/images/icons/coding.png';
import Serv8 from '../assets/images/icons/seo.png';
import Serv9 from '../assets/images/icons/life-insurance.png';
import Serv10 from '../assets/images/icons/file.png';




function ServiceCard() {
  const services = [
    {
      id: 1,
      icon: Serv1,
      title: 'Direct Taxes',
      description:
        'All areas of taxation : Personal Tax, Corporate Tax. | Suggesting legal structure of business entities. | Transactional advisory – optimal deal structure | Tax Due Diligence.',
      image: Img2,
    },
    {
      id: 2,
      icon: Serv2,
      title: 'Indirect Taxes',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem enim doloremque nam accusamus voluptatum vitae praesentium fugiat aliquam id aut eligendi possimus ipsa minima ab minus a alias reiciendis.',
      image: Img3,
    },
    {
      id: 3,
      icon: Serv6,
      title: 'Accounts & Audit',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem enim doloremque nam accusamus voluptatum vitae praesentium fugiat aliquam id aut eligendi possimus ipsa minima ab minus a alias reiciendis.',
      image: Img1,
    },
    {
        id: 4,
        icon: Serv7,
        title: 'Website Development',
        description:
          'Our expert in-house team uses cutting edge technologies to build custom web and mobile applications that are stunning, robust and scalable',
        image: Img4,
      },
      {
        id: 5,
        icon: Serv5,
        title: 'Mobile App Development',
        description:
          'An all-inclusive platform for App development.  Excellent quality, high performance, and efficiency are assured for our Android,  iOS, and web applications.',
        image: Img5,
      },
      {
        id: 6,
        icon: Serv8,
        title: 'SEO',
        description:"Boost your online presence with KP's SEO and digital marketing services. Our targeted SEO strategies drive more traffic to your website and enhance visibility.",
        image: Img6,
      },
      {
        id: 7,
        icon: Serv4,
        title: 'Social Media Marketing',
        description:
          'Elevate your online presence with strategic social media marketing, fostering engagement and expanding your audience.',
        image: Img7,
      },
      {
        id: 8,
        icon: Serv3,
        title: 'Poster & Visiting Card Desin ',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem enim doloremque nam accusamus voluptatum vitae praesentium fugiat aliquam id aut eligendi possimus ipsa minima ab minus a alias reiciendis.',
        image: Img8,
      },
      {
        id: 9,
        icon: Serv9,
        title: 'Employees State Insurance (ESI)',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem enim doloremque nam accusamus voluptatum vitae praesentium fugiat aliquam id aut eligendi possimus ipsa minima ab minus a alias reiciendis.',
        image: Img9,
      },
      {
        id: 10,
        icon: Serv10,
        title: 'Compliances',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem enim doloremque nam accusamus voluptatum vitae praesentium fugiat aliquam id aut eligendi possimus ipsa minima ab minus a alias reiciendis.',
        image: Img10,
      },
  ];

  return (
    <section className='service-card'>
      <div className="container">
        <div className="row">
          {services.map(service => (
            <div key={service.id} className="col-lg-4 col-md-6 mb-3"  data-aos="fade-up" data-aos-offset="10">
              <div className="card-sm my-3">
                <div className='sr-card'>
                  <img src={service.icon} alt={`${service.title}-icon`} loading='lazy' />
                </div>
                <h5 className='mt-4'>{service.title}</h5>
                <p>{service.description}</p>
                <img className='ser-img' src={service.image} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCard;
