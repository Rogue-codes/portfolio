import React, { useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { ThemeContext } from './Context';
import { useContext } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"

function Contact() {
    useEffect(()=>{
      Aos.init({duration : 500})
    },[])
    const formRef = useRef()
    const [done, isDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_0mhvxbd', 'template_ic74q1b', formRef.current, '8RJySH7rZZrTznIBh')
      .then((result) => {
          console.log(result.text);
          isDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <section className='contact' id='contact' data-aos="fade-right">
        <h1>
            CONTACT ME
        </h1>

        <form action="" ref={formRef} onSubmit = {handleSubmit}>
            <input style={{backgroundColor : darkMode && "#333"}} type="text" name='userName' placeholder='Your name' required />
            <input style={{backgroundColor : darkMode && "#333"}} type="text" name="userSubject" id="" placeholder='Subject' />
            <input style={{backgroundColor : darkMode && "#333"}} type="email" name="userEmail" id="" placeholder='Your Email' required/>
            <textarea style={{backgroundColor : darkMode && "#333"}} name="message" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
            <button style={{color : darkMode && "#dd1b6b"}}>Submit</button><br />
            {done && 'Your Mail has been sent'}
        </form>
    </section>
  )
}

export default Contact