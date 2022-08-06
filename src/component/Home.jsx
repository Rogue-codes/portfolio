import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import Aos from 'aos'
import "aos/dist/aos.css"
import Social from './Social';

function Home() {
    useEffect(()=>{
      Aos.init({duration : 3000})
    },[])
  return (
    <main id='home'>
        <p>Hi My Name is</p>
        <h1 data-aos="fade-right"><span>Osuji Nnamdi Daniel</span>. <br /> I build things for the web.</h1>
        <span className="shortDesc" data-aos="fade-left">
          I’m a Front-End engineer specialized in building exceptional digital experiences. Currently, I’m focused on building accessible, Enterprise Solutions at SATH.
        </span>
        <button className='btn-border-drawing' data-aos="fade-up"><a href="#portfolio">View my works</a><FontAwesomeIcon icon={faArrowRight} className='icon'></FontAwesomeIcon></button>
        <Social/>
    </main>
  )
}

export default Home