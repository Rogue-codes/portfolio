import React, { useEffect, useState } from 'react'
import { CODEWARE, SATH, USA } from '../experience'
import ExpList from './ExperienceList/ExpList'
import Aos from 'aos'
import "aos/dist/aos.css"
 
function Experience() {
    useEffect(()=>{
        Aos.init({duration : 3000})
    },[])
    const [data,setData] = useState([])
    const [selected, setSelected] = useState('sath')
    const List =[
        {
            id:'sath',
            name:'SATH'
        },
        {
            id:'usa',
            name: 'UNITED STATES OF AFRICA'
        },
        {
            id:'codeware',
            name: 'CODEWARE'
        }
    ]

    useEffect(()=>{
        switch(selected){
            case 'sath':
                setData(SATH)
                break;

            case 'usa':
                setData(USA)
                break;

            case 'codeware':
                setData(CODEWARE)
                break;

            default:
                setData(SATH)
                break;
        }
    },[selected])
  return (
    <div className='experience' data-aos="fade-up">
        
        <div className="expContainer">
            {
                List.map((item)=>(
                        <ExpList name={item.name} active={selected===item.id} setSelected={setSelected} id={item.id}/>
                ))
            }
        </div>

        {
            data.map((i)=>(
                <div className="desc">
                    <h1>{i.role} @<span className='companyName'>{i.Company}</span></h1>
                    <p className="date">{i.date}</p>
                    <ul>
                        <li><span>{i.task[0]}</span></li>
                        <li><span>{i.task[1]}</span></li>
                        <li><span>{i.task[2]}</span></li>
                    </ul>
                </div>
            ))
        }
    </div>


  )
}

export default Experience