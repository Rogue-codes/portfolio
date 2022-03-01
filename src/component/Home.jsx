import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 

function Home() {
  return (
    <main id='home'>
        <h1>Hello , I'm <span>Osuji Nnamdi Daniel</span>. I'm a Frontend Web Developer</h1>
        <button className='btn-border-drawing'><a href="#portfolio">View my works</a><FontAwesomeIcon icon={faArrowRight} className='icon'></FontAwesomeIcon></button>
    </main>
  )
}

export default Home