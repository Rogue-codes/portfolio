import React, { useContext } from 'react'
import { useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import {All,Vanilla,Reactor} from '../dat'
import { useEffect } from 'react'
import { ThemeContext } from './Context'

function Portfoilio() {
    const [selected, setSelected] = useState('all')
    const [data, setData] = useState([])
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const List = [
        {
            id:'all',
            title: 'ALL'
        },
        {
            id:'vanilla',
            title: 'VANILLA.js'
        },
        {
            id:'react',
            title: 'REACT.js'
        },

    ]

    useEffect(()=>{
        switch (selected) {
            case 'all':
                setData(All)
                break;

            case 'vanilla':
                setData(Vanilla)
                break;

            case 'react':
                setData(Reactor)
                break;
        
            default:
                setData(All)
                break;
        }

    },[selected])
  return (
    <section className='portfolio' id='portfolio'>
        <h1>
            PROJECTS
        </h1>

        <div className="flexBox">
            <ul>
                {List.map((item)=>(
                    <PortfolioList title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>

            <div className="container">
                {data.map((d)=>(
                    <div className="cards">
                    <figure>
                    <img src={d.img} alt="" />
                    </figure>
                    <div className="overlay">
                        <h3>{d.name}</h3>
                        <button><a href={d.link} target="_blank" rel="noreferrer">{d.btn}</a></button>
                    </div>
                </div>
                ))}
            </div>
        </div>


        <a href="/OSUJI.pdf" download><button style={{color: darkMode && "#dd1b6b"}}>Download My Resume</button></a>
    </section>
  )
}

export default Portfoilio