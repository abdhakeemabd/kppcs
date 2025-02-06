import React from 'react';
import '../assets/style/css/protfolio.css';
import Jdt from '../assets/images/protfolio/jdt.webp';
import KG from '../assets/images/protfolio/kg.webp'
import Selto from '../assets/images/protfolio/selto.jpeg'
import { IoEyeSharp } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { FaLink } from "react-icons/fa6";
function ProtfolioCard() {
  const blogData = [
      {
          image: Jdt,
          subTitle: 'Website',
          title: 'School Website',
          url: 'https://jdtislamsda.org/',
          url1: 'https://jdtislamsda.org/',
          content: 'JDT Islam is a school that caters to differently-abled students, focusing on their educational and holistic development. The institution provides specialized support and resources to ensure that every student can thrive in a nurturing and inclusive environment. For more details, you can visit their website',
      },
      {
        image: KG,
        subTitle: 'poster',
        title: 'Poster',
        url: 'Feb ',
        url1: '',
        content: 'KG Electronics & Home Appliances is your trusted destination for high-quality electronic products and home essentials. Offering a wide range of appliances, including refrigerators, washing machines, TVs, and kitchen gadgets, KG Electronics ensures the best deals with flexible EMI options and zero down payment.',
      },
      {
        image: Selto,
        subTitle: 'Sticker Poster',
        title: 'Sticker Poster',
        url: 'Feb ',
        url1: '',
        content: 'Selto Laundry Liquid is a high-quality detergent designed for effective cleaning and freshness. Infused with a soothing lavender fragrance, it ensures a delightful washing experience. The product is manufactured by RJ Soap, Karipur, and is available in a 5 kg pack. It is recommended for both hand and machine wash, with a suggested usage of 50 ml per load. For safety, it should be kept away from direct sunlight and out of reach of children. ',
      },
  ];

  return (
    <div>
      <section className='protfolio-sec'>
        <div className="container">
        <div className="row">
          {blogData.map((protfolio, index) => (
            <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up" data-aos-offset="10">
              <div className="protfolio-card">
                  <div className="position-relative">
                      <img className='protfolio-img mb-3' src={protfolio.image} alt="JDT Islam" />
                      <a href={protfolio.url} target='_blank' class="bt">
                      <GoArrowUpRight />
                      </a>
                  </div>
                  <div className="cont font-BaiJamjuree">
                     <h4 class="subtitle">{protfolio.subTitle}</h4>
                     <h4 className='mb-3'>{protfolio.title}</h4>
                     <p className='mb-3'>{protfolio.content}</p>
                  </div>
                  <div className="card-bottom">
                    <a href={protfolio.url} target="_blank" class="link">
                      <FaLink />
                       View
                    </a>
                    <a href={protfolio.url1} target="_blank" class="link">
                      <IoEyeSharp /> 
                       View
                    </a>
                  </div>
              </div>
            </div>   
          ))}
        </div>
        </div>
      </section>
    </div>
  )
}

export default ProtfolioCard
