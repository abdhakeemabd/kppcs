import React from 'react'
import Vision from '../assets/images/banner/about-1.webp';
import Mission from '../assets/images/banner/about-4.webp';
import '../assets/style/css/vision-mission.css'
function VisionMission() {
  return (
    <section className='vision-mission-sec'>
    <div className="container">
        <div className="row align-items-center">
            <div className='col-md-6 mb-3 pe-md-4 mb-3' data-aos="fade-right" data-aos-offset="10">
                <h5>Our Mission</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sunt at. Temporibus soluta aliquid natus. Quibusdam blanditiis molestias, reiciendis ipsam repudiandae maxime? Fuga voluptate quaerat culpa, dolorem eligendi sint nostrum?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit sequi modi animi odio at, qui molestiae. Corrupti sint in incidunt optio molestiae voluptatum. Rerum culpa ipsum perspiciatis ut, facilis ratione?</p>
            </div>
            <div className='col-md-6 ps-md-0' data-aos="fade-left" data-aos-offset="10">
              <img className='vision-img' src={Vision} alt="Vision" loading='lazy'/>
            </div>
            <div className='col-md-6 mb-3 pe-md-0' data-aos="fade-right" data-aos-offset="10">
              <img className='mission-img' src={Mission} alt="Mission" loading='lazy'/>
            </div>
            <div className='col-md-6 mb-3 mt-3 ps-md-4' data-aos="fade-left" data-aos-offset="10">
              <h5>Our Vision</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sunt at. Temporibus soluta aliquid natus. Quibusdam blanditiis molestias, reiciendis ipsam repudiandae maxime? Fuga voluptate quaerat culpa, dolorem eligendi sint nostrum?</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit sequi modi animi odio at, qui molestiae. Corrupti sint in incidunt optio molestiae voluptatum. Rerum culpa ipsum perspiciatis ut, facilis ratione?</p>
            </div>

        </div>
    </div>
    </section>
  )
}

export default VisionMission
 