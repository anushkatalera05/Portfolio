import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kyl55mr', 'template_dq1i9el', form.current, '6zsbqQpd11zpFfYWn')
      
    e.target.reset()
  };
  return (
   <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>
     <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>anushkatalera@gmail.com</h5>
            <a href='mailto:anushkatalera@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>_anushka05_</h5>
            <a href='https://instagram.com/_anushka05_?igshid=ZDdkNTZiNTM=' target='_blank'>Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name'required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message'rows='7' placeholder='Your message' required></textarea>
          <button type='submit' className='button_btn'>Send message</button>
        </form>
     </div>
   </section>
  )
}

export default Contact