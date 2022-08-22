import { useState } from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { FolderOutlined,GitHub,Link } from '@material-ui/icons'

function Portfoilio() {
    useEffect(()=>{
        Aos.init({duration : 3000})
      },[])
    const [isClicked, setIsClicked] = useState(false)
    return (
        <section className='portfolio' id='portfolio'>
            <h1>
                Some Things I've Built
            </h1>

            <div className="container">
                <a href="https://sa-market.netlify.app/" target="_blank" rel="noreferrer" className="left" data-aos="fade-right">
                    <div>
                        <div className="shadow"></div>
                        <img src="/samarket.png" alt="" />
                    </div>
                </a>
                <div className="right" data-aos="fade-left">
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
                <div className="right" data-aos="fade-right">
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

                <a href="https://healthpro.netlify.app/" target="_blank" rel="noreferrer" className="left" data-aos="fade-left">
                    <div>
                        <div className="shadow"></div>
                        <img src="/health.png" alt="" />
                    </div>
                </a>
            </div>

            <div className="container">
                <a href="https://sa-market.netlify.app/" className="left" data-aos="fade-right">
                    <div>
                        <div className="shadow"></div>
                        <img src="/atlas.png" alt="" />
                    </div>
                </a>
                <div className="right" data-aos="fade-left">
                    <span className="featured"><p>Featured Project</p></span>
                    <h1>Atlas-Air</h1>
                    <div className="about">
                        <p>                
                            A website for an Airline agency.. the purpose of this project was to test my UI skills and my ability to load data dynamically.
                            i used some modern CSS techniques like Flex, Grid, and Positioning. 
                        </p>
                    </div>
                    <div className="lang">
                        <p>React</p>
                        <p>AOS</p>
                        <p>Styled-components</p>
                    </div>
                </div>
            </div>

            <h1 className='h1-for-others'>Other Noteworthy Projects</h1>
            <div className={isClicked ? "others auto" : "others"}>
                <div className="cards" data-aos="fade-up">
                    <h1>EpayGoo</h1>
                    <p>Built the website for <strong>EpayGoo</strong> an online card payment system for transportation</p>
                    <FolderOutlined className="file"/>
                    <a href="https://github.com/Rogue-codes" className="git"><GitHub/> </a>
                    <a href="https://epay-goo.netlify.app/" className="url"><Link/></a>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Back to School</h1>
                    <p>A simple Application built with Vanila js , HTML and CSS.. This application is aimed at helping young university under grads to calculate their GPA. </p>
                    <FolderOutlined className="file"/>
                    <a href="https://github.com/Rogue-codes" target="_blank" rel="noreferrer" className="git"><GitHub/> </a>
                    <a href="https://backtocollege.netlify.app/" target="_blank" rel="noreferrer" className="url"><Link/></a>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Cloudther</h1>
                    <p>A weather Application that shows the weather condition of a place. The App Consumes the open weather API and shows weather data based on the user's location.</p>
                    <FolderOutlined className="file"/>
                    <a href="https://github.com/Rogue-codes" target="_blank" rel="noreferrer" className="git"><GitHub/> </a>
                    <a href="https://cloudther.netlify.app/" target="_blank" rel="noreferrer" className="url"><Link/></a>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Orange Bank</h1>
                    <p>Cloned the Website of Titan-Trust Bank and produced a pixel perfect replica of the original website. Project was created using React and SCSS</p>
                    <FolderOutlined className="file"/>
                    <a href="https://github.com/Rogue-codes" target="_blank" rel="noreferrer" className="git"><GitHub/> </a>
                    <a href="https://orangebank.netlify.app/" target="_blank" rel="noreferrer" className="url"><Link/></a>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>BlueBirdCmast</h1>
                    <p>Built the official website of BlueBirdCmast an I.T company that provide cloudservices to various organizations and enterprises</p>
                    <FolderOutlined className="file"/>
                    <a href="https://github.com/Rogue-codes" target="_blank" rel="noreferrer" className="git"><GitHub/> </a>
                    <a href="https://bluebirdcmast.netlify.app/" target="_blank" rel="noreferrer" className="url"><Link/></a>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Minnato Exchange</h1>
                    <p>A currency converter Application Built with HTML, CSS and Vanilla Js. The Application converts value between differnt currencies with the help of data coming from free currency API </p>
                    <FolderOutlined className="file"/>
                    <a href="https://github.com/Rogue-codes" target="_blank" rel="noreferrer" className="git"><GitHub/> </a>
                    <a href="https://minnatoexchange.netlify.app/" target="_blank" rel="noreferrer" className="url"><Link/></a>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Lexus WEbsite clone</h1>
                    <p>Here I cloned the official homepage of Lexus website using <strong>HTML, CSS and JavaScript</strong> </p>
                    <FolderOutlined className="file"/>
                    <a href="https://github.com/Rogue-codes" target="_blank" rel="noreferrer" className="git"><GitHub/> </a>
                    <a href="https://lexus-clone.netlify.app/" target="_blank" rel="noreferrer" className="url"><Link/></a>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Netflix Home page clone</h1>
                    <p>Here I cloned the official homepage of Netflix Nigeria website using <strong>React and SCSS</strong> </p>
                    <FolderOutlined className="file"/>
                    <a href="https://github.com/Rogue-codes" target="_blank" rel="noreferrer" className="git"><GitHub/> </a>
                    <a href="https://nettflixx-clone.netlify.app/" target="_blank" rel="noreferrer" className="url"><Link/></a>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Arfri Muzik</h1>
                    <p>A music Application built with HTML, CSS and JavaScript. The App supports Play, Pause, Next, Previous and Repeat functionalities</p>
                    <FolderOutlined className="file"/>
                    <a href="https://github.com/Rogue-codes" target="_blank" rel="noreferrer" className="git"><GitHub/> </a>
                    <a href="https://arfimuzik.netlify.app/" target="_blank" rel="noreferrer" className="url"><Link/></a>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Payzone</h1>
                    <p>A Fintech based website built with Reactjs and styled-components added some built in NPM libraries to create a slider component</p>
                    <FolderOutlined className="file"/>
                    <a href="https://github.com/Rogue-codes" target="_blank" rel="noreferrer" className="git"><GitHub/> </a>
                    <a href="https://payzone.netlify.app/" target="_blank" rel="noreferrer" className="url"><Link/></a>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Techy Point</h1>
                    <p>Cloned the Homepage of AltSchool Africa using <b>React and SCSS</b>. This project helped me master my CSS positioning and animation skills.</p>
                    <FolderOutlined className="file"/>
                    <a href="https://github.com/Rogue-codes" target="_blank" rel="noreferrer" className="git"><GitHub/> </a>
                    <a href="https://techypoint.netlify.app/" target="_blank" rel="noreferrer" className="url"><Link/></a>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Rogue Movie</h1>
                    <p>A Movie Application that consumes data from the OMDB API and displays current movies. The App was built using <b>Reactjs and Styled-components</b> </p>
                    <FolderOutlined className="file"/>
                    <a href="https://github.com/Rogue-codes" target="_blank" rel="noreferrer" className="git"><GitHub/> </a>
                    <a href="https://rogue-movies.netlify.app/" target="_blank" rel="noreferrer" className="url"><Link/></a>
                </div>
            </div>
            <button className='show' onClick={() =>setIsClicked(!isClicked)}>{isClicked ? 'Show Less' : 'Show More'}</button>
            
        </section>
  )
}

export default Portfoilio