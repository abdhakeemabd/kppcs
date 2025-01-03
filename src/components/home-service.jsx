import React from 'react'
import '../assets/style/css/home-service.css'
function HomeService() {
  return (
    <section className='home-ser-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center" data-aos="fade-up" data-aos-offset="10">
                    <h3 className='mb-3'>We deliver best for you <br />
                    why you are waiting 
                    </h3>
                    <a className='btn-discover mt-3' href="/services">Discover</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeService
