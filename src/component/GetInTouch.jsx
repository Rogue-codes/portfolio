import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

function GetInTouch() {
    useEffect(()=>{
        Aos.init({duration : 3000})
    },[])
    return (
        <div className='getInTouch' data-aos="zoom-in">
            <h1>Get In Touch</h1>
            <p> I’m currently looking for entry level front-End Roles and to work with a team of creative and Intuitive developers. If you think I might be a good fit for Your Team, kindly reach out to me</p>
            <a href="mailto:nnamdidanielosuji@gmail.com"><button>Say Hello</button></a>
        </div>
  )
}

export default GetInTouch