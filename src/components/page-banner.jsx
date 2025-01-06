import React from 'react';
import '../assets/style/css/banner.css';

function PageBannner({ title, subtitle, image }) {
  return (
    <div>
      <section className='home-banner'>
        <div className="banner-cover position-relative overflow-hidden">
            <div className="banner-content">
               <div className="container">
                 <div className="row">
                    <div className="col-md-6" data-aos="fade-down" data-aos-offset="10">
                      <h1 className="text-xl-semibold mb-3">{title}</h1>
                      {subtitle && <p className='text-white'>{subtitle}</p>}
                    </div>
                 </div>
               </div>
            </div>
            <img className='page-banner' src={image} alt="Banner" loading='lazy'  />
        </div>
      </section>
    </div>
  )
}

export default PageBannner;
