import React, { useState } from 'react';
import Contact from '../assets/images/img/contact.webp'
import '../assets/style/css/home-contact.css'
import Swal from 'sweetalert2';

function HomeContact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
   // Function to handle form input changes
   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append("access_key", "8d6b9597-693e-4839-b4c2-18fa44959950");
    form.append("name", formData.name);
    form.append("phone", formData.phone);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      });
      const res = await response.json();

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully",
          timer: 3000,
          icon: "success"
        }).then(() => {
          event.target.reset();
          setFormData({
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            message: ''
          });
        });
      } else {
        Swal.fire("Error", "There was an issue sending your message. Please enter proper details.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Network error or server issue. Please try again later.", "error");
    }
  };
  return (
    <section className='home-contat-sec'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-10" data-aos="fade-up" data-aos-offset="10">
              <div className="contact-card">
               <div className="row justify-content-center align-items-center">
                  <div className="col-md-6 mb-3 mb-md-0">
                      <img className='img-fluid cont-img' src={Contact} alt="Contact" loading='lazy' />
                  </div>
                  <div className="col-md-6 mb-3 mb-md-0 text-center">
                      <div className="contact-form">
                          <form  onSubmit={onSubmit} method="POST">
                              <div className="row text-start">
                                  <div className="col-12">
                                    <h5 className='font-bold'>Get In Touch</h5>
                                    <p className='fs-16 mb-2'>How can i help you ?</p>
                                  </div>
                                  <div className="col-12 mb-3">
                                  <input className='form-control' type="text" name="name" id="name" placeholder='Enter Your Name' value={formData.name} onChange={handleChange} required /> 
                                  </div>
                                  <div className="col-12 mb-3">
                                  <input 
                                      className='form-control' 
                                      type="text" 
                                      name="phone" 
                                      id="phone" 
                                      placeholder='Enter your Phone no:' 
                                      value={formData.phone}
                                      onChange={handleChange}
                                      required 
                                      inputMode="numeric" 
                                      pattern="\d{10,}" 
                                      maxLength="10" 
                                      onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, ''); }}
                                    />
                                  </div>
                                  <div className="col-12 mb-3">
                                  <input
                                    className="form-control mt-2"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                  />
                                  </div>
                                  <div className="col-12 mb-3">
                                    <textarea
                                        className="form-control"
                                        placeholder="Enter your message..."
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    >
                                    </textarea>
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
