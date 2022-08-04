import React, { useContext } from 'react'
import { useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import {All,Vanilla,Reactor} from '../dat'
import { useEffect } from 'react'
import { ThemeContext } from './Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from 'aos'
import "aos/dist/aos.css"

function Portfoilio() {
    useEffect(()=>{
        Aos.init({duration : 500})
      },[])
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

    const [isClicked, setIsClicked] = useState(false)
  return (
    <section className='portfolio' id='portfolio'>
        <h1>
            Some Things I've Built
        </h1>

        <div className="container">
            <a href="https://sa-market.netlify.app/" className="left">
                <div>
                    <div className="shadow"></div>
                    <img src="/samarket.png" alt="" />
                </div>
            </a>
            <div className="right">
                <span className="featured"><p>Featured Project</p></span>
                <h1>SA-Market</h1>
                <div className="about">
                    <p>                
                        A fully Functional MERN-STACK E-commerce Application Created with Mongo Db, express, node, and React
                    </p> <br />
                    <p>
                        Built the Client side of the Application with React and ReduxToolkit
                    </p>
                </div>
                <div className="lang">
                    <p>React</p>
                    <p>ReduxToolkit</p>
                    <p>Node</p>
                    <p>Express</p>
                    <p>Mongo DB</p>
                    <p>Styled-components</p>
                </div>
            </div>
        </div>

        <div className="container2">
            <div className="right">
                <span className="featured"><p>Featured Project</p></span>
                <h1>Health Pro</h1>
                <div className="about">
                    <p>                
                    A Hospital management Application that can admit and Discharge patients in real time. This project was built using React and Redux-Toolkit for state management.
                    </p> <br />
                </div>
                <div className="lang">
                    <p>React</p>
                    <p>Redux</p>
                    <p>CHARTJS</p>
                    <p>Styled-components</p>
                </div>
            </div>

            <a href="https://sa-market.netlify.app/" className="left">
                <div>
                    <div className="shadow"></div>
                    <img src="/health.png" alt="" />
                </div>
            </a>
        </div>

        <div className="container">
            <a href="https://sa-market.netlify.app/" className="left">
                <div>
                    <div className="shadow"></div>
                    <img src="/todo.png" alt="" />
                </div>
            </a>
            <div className="right">
                <span className="featured"><p>Featured Project</p></span>
                <h1>MERN-STACK Todo App</h1>
                <div className="about">
                    <p>                
                        A Todo Application that helps you keep track of your daily task  in real time. 
                        The Application helps you filter through your task based on the task that are 
                        pending, Completed, due today, due tommorrow and passed due 
                    </p>
                </div>
                <div className="lang">
                    <p>React</p>
                    <p>ReduxToolkit</p>
                    <p>Node</p>
                    <p>Express</p>
                    <p>Mongo DB</p>
                    <p>Styled-components</p>
                </div>
            </div>
        </div>


        <div className={isClicked ? "others auto" : "others"}>
            <div className="cards">
                <h1>Integrating Algolia Search with WordPress Multisite</h1>
                <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                
            </div>

            <div className="cards">
                <h1>Integrating Algolia Search with WordPress Multisite</h1>
                <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                
            </div>

            <div className="cards">
                <h1>Integrating Algolia Search with WordPress Multisite</h1>
                <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                
            </div>

            <div className="cards">
                <h1>Integrating Algolia Search with WordPress Multisite</h1>
                <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                
            </div>

            <div className="cards">
                <h1>Integrating Algolia Search with WordPress Multisite</h1>
                <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                
            </div>

            <div className="cards">
                <h1>Integrating Algolia Search with WordPress Multisite</h1>
                <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                
            </div>

            <div className="cards">
                <h1>Integrating Algolia Search with WordPress Multisite</h1>
                <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                
            </div>

            <div className="cards">
                <h1>Integrating Algolia Search with WordPress Multisite</h1>
                <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                
            </div>

            <div className="cards">
                <h1>Integrating Algolia Search with WordPress Multisite</h1>
                <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                
            </div>

            <div className="cards">
                <h1>Integrating Algolia Search with WordPress Multisite</h1>
                <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                
            </div>

            <div className="cards">
                <h1>Integrating Algolia Search with WordPress Multisite</h1>
                <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                
            </div>

            <div className="cards">
                <h1>Integrating Algolia Search with WordPress Multisite</h1>
                <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                
            </div>
        </div>
        <button className='show' onClick={() =>setIsClicked(!isClicked)}>{isClicked ? 'Show Less' : 'Show More'}</button>
        {/* <div className="flexBox">
            <ul>
                {List.map((item)=>(
                    <PortfolioList title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>

            <div className="container" data-aos="fade-up">
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
        </div> */}


        {/* <a href="/daniel.pdf" download><button style={{color: darkMode && "#dd1b6b"}}>Download My Resume</button></a> */}
    </section>
  )
}

export default Portfoilio