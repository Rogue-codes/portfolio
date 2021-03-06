import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

function About() {
  useEffect(()=>{
    Aos.init({duration : 500})
  },[])
  return (
    <section className='about' id='abt'>
        <h1>ABOUT</h1>

        <div className="flex">
            <div className="left" data-aos="fade-right">
                <img src="/PP.png" alt="" />
            </div>

            <div className="right" data-aos="fade-left">
            <p>
                Hello, I'm <span>Osuji Nnamdi Daniel</span> š
                Iām a Front End Developer and with strong Proficiency in REACT.js from Nigeria. I build websites with a focus on responsiveness, accessibility and pleasing aesthetics.
            </p>
            </div>
        </div>

        
    </section>
  )
}

export default About