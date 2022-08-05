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
                <a href="https://sa-market.netlify.app/" className="left" data-aos="fade-right">
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

                <a href="https://sa-market.netlify.app/" className="left" data-aos="fade-left">
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
                        <img src="/todo.png" alt="" />
                    </div>
                </a>
                <div className="right" data-aos="fade-left">
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

            <h1 className='h1-for-others'>Other Noteworthy Projects</h1>
            <div className={isClicked ? "others auto" : "others"}>
                <div className="cards" data-aos="fade-up">
                    <h1>Integrating Algolia Search with WordPress Multisite</h1>
                    <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                    <FolderOutlined className="file"/>
                    <a href="#" className="git"><GitHub/> </a>
                    <a href="#" className="url"><Link/></a>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Integrating Algolia Search with WordPress Multisite</h1>
                    <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                    <FolderOutlined className="file"/>
                    <GitHub className="git"/>
                    <Link className="url"/>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Integrating Algolia Search with WordPress Multisite</h1>
                    <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                    <FolderOutlined className="file"/>
                    <GitHub className="git"/>
                    <Link className="url"/>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Integrating Algolia Search with WordPress Multisite</h1>
                    <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                    <FolderOutlined className="file"/>
                    <GitHub className="git"/>
                    <Link className="url"/>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Integrating Algolia Search with WordPress Multisite</h1>
                    <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                    <FolderOutlined className="file"/>
                    <GitHub className="git"/>
                    <Link className="url"/>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Integrating Algolia Search with WordPress Multisite</h1>
                    <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                    <FolderOutlined className="file"/>
                    <GitHub className="git"/>
                    <Link className="url"/>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Integrating Algolia Search with WordPress Multisite</h1>
                    <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                    <FolderOutlined className="file"/>
                    <GitHub className="git"/>
                    <Link className="url"/>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Integrating Algolia Search with WordPress Multisite</h1>
                    <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                    <FolderOutlined className="file"/>
                    <GitHub className="git"/>
                    <Link className="url"/>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Integrating Algolia Search with WordPress Multisite</h1>
                    <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                    <FolderOutlined className="file"/>
                    <GitHub className="git"/>
                    <Link className="url"/>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Integrating Algolia Search with WordPress Multisite</h1>
                    <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                    <FolderOutlined className="file"/>
                    <GitHub className="git"/>
                    <Link className="url"/>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Integrating Algolia Search with WordPress Multisite</h1>
                    <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                    <FolderOutlined className="file"/>
                    <GitHub className="git"/>
                    <Link className="url"/>
                </div>

                <div className="cards" data-aos="fade-up">
                    <h1>Integrating Algolia Search with WordPress Multisite</h1>
                    <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                    <FolderOutlined className="file"/>
                    <GitHub className="git"/>
                    <Link className="url"/>
                </div>
            </div>
            <button className='show' onClick={() =>setIsClicked(!isClicked)}>{isClicked ? 'Show Less' : 'Show More'}</button>
            
        </section>
  )
}

export default Portfoilio