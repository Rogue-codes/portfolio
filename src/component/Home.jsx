import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import Aos from 'aos'
import "aos/dist/aos.css"

function Home() {
    useEffect(()=>{
      Aos.init({duration : 3000})
    },[])
  return (
    <main id='home'>
        <h1 data-aos="fade-up">Hello , I'm <span>Osuji Nnamdi Daniel</span>. I'm a Frontend Web Developer</h1>
        <button className='btn-border-drawing' data-aos="fade-up"><a href="#portfolio">View my works</a><FontAwesomeIcon icon={faArrowRight} className='icon'></FontAwesomeIcon></button>
    </main>
  )
}

export default Home