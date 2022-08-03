import React from 'react'
import { Data } from '../data'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'; 

function Accordion() {
    const [clicked, setClicked] = useState(false)
    const toggle = index => {
        if(clicked === index){
            return setClicked(null)
        }
        setClicked(index)
    }
  return (
    <div className='accordion'>
        {Data.map((item,index)=>(<div className="accordion-container">
                <div className="head" onClick={()=>toggle(index)} key={index}><span>{clicked === index ? <FontAwesomeIcon icon={faAngleDown} className='icon'></FontAwesomeIcon> : <FontAwesomeIcon icon={faAngleRight} className='icon'></FontAwesomeIcon>}</span><p>{item.question}</p></div>
                {clicked === index ? <div className="foot"><p>{item.answer}</p></div>:null}
            </div>))}
            <div className="head"><span><FontAwesomeIcon icon={faAngleDown} className='icon'></FontAwesomeIcon></span><p>SKILLS</p></div>
            <div className="tech">
              <ul>
                <li>HTML</li>
                <li>CSS/SCSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT</li>
                <li>REDUX</li>
                <li>STYLED-COMPONENTS</li>
              </ul>

              <ul>
                <li>NODE</li>
                <li>EXPRESS</li>
                <li>MONGO DB</li>
              </ul>
              
              
            </div>
    </div>
  )
}

export default Accordion