import React from 'react'
import Contact from '../assets/images/img/contact.jpg'
import '../assets/style/css/home-contact.css'
function HomeContact() {
  return (
    <section className='home-contat-sec'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-10" data-aos="fade-up" data-aos-offset="10">
              <div className="contact-card">
               <div className="row justify-content-center align-items-center">
                  <div className="col-md-6 mb-3 mb-md-0">
                      <img className='img-fluid cont-img' src={Contact} alt="" />
                  </div>
                  <div className="col-md-6 mb-3 mb-md-0 text-center">
                      <div className="contact-form">
                          <form action="">
                              <div className="row text-start">
                                  <div className="col-12">
                                    <h5 className='font-bold'>Get In Touch</h5>
                                    <p className='fs-16 mb-2'>How can i help you ?</p>
                                  </div>
                                  <div className="col-12 mb-3">
                                      <input className='form-control mt-2' type="text" id='Name' name='Name' placeholder='Enter your name' />
                                  </div>
                                  <div className="col-12 mb-3">
                                      <input className='form-control mt-2' type="number" id='FirstName' name='FirstName' placeholder='Enter phone number' />
                                  </div>
                                  <div className="col-12 mb-3">
                                      <input className='form-control mt-2' type="gmail" id='gmail' name='gmail' placeholder='Enter your gmail' />
                                  </div>
                                  <div className="col-12 mb-3">
                                      <textarea className='form-control' placeholder='Enter  your note ...' name="" id=""></textarea>
                                  </div>
                                  <div className="col-12">
                                    <button className='btn btn-submit'> Send</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
               </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HomeContact
