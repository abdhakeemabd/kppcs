import React, { useState } from 'react';
import '../assets/style/css/contact-form.css';
import Swal from 'sweetalert2';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
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
    form.append("firstname", formData.firstname);
    form.append("lastname", formData.lastname);
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
  <div className='contact-main-card'>
    <section className="contact-form-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="contact-info">
              <div className="row">
                <div className="col-12">
                  <h4 className="font-medium mb-3">
                    Have a Creative Challenge? Let’s Solve It Together!
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur necessitatibus reprehenderit
                    impedit inventore vero doloremque architecto debitis facilis sunt quod?
                  </p>
                </div>
                <div className="col-12">
                  <h5 className="my-2">Corporate Address</h5>
                  <a>
                  Mona Enclave, Sannatammanahalli, <br /> Battarahalli,  Bengaluru, <br />   Karnataka <br /> 560049
                  </a>
                </div>
                <div className="col-12">
                  <h5 className="my-2">Mail Us</h5>
                  <a href="mailto:admin@kppcs.com">admin@kppcs.com</a>
                </div>
                <div className="col-12">
                  <h5 className="my-2">Telephone</h5>
                  <a href="tel:+91 8606065001">+91 86060 65001</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="contact-form">
              <form  onSubmit={onSubmit} method="POST">
                <div className="row text-start">
                  <div className="col-12">
                    <h5 className="font-bold">Get In Touch</h5>
                    <p className="fs-16 mb-2">How can I help you?</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstname">First Name</label>
                    <input 
                      className='form-control mt-2' 
                      type="text" 
                      name="firstname" 
                      id="firstname" 
                      placeholder='Enter Your Name' 
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                    /> 
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastname">Last Name</label>
                    <input 
                      className='form-control mt-2' 
                      type="text" 
                      name="lastname" 
                      id="lastname" 
                      placeholder='Enter Your Name' 
                      value={formData.lastname}
                      onChange={handleChange}
                      required
                    /> 
                  </div>
                  <div className="col-12 mb-3">
                  <label htmlFor="lastname"> Phone Number</label>
                  <input 
                    className='form-control mt-2' 
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
                  <label htmlFor="lastname">Email</label>
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
                  <label htmlFor="lastname">Message</label>
                    <textarea
                      className="form-control mt-2"
                      placeholder="Enter your message..."
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 mt-3">
                    <button type="submit" className="btn btn-submit">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
    </section>
    <section className='py-0'>
       <iframe
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1759565600405!2d77.7072675!3d13.024464399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11000bcd07cd%3A0x28024596209046f5!2sKP%20Consulting!5e0!3m2!1sen!2sin!4v1733845642712!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  </div>
  );
}

export default ContactForm;
