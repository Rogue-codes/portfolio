import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'
import {useState} from 'react'

function Nav() {
  const [showMenu, setShowMenu]= useState(false)

  const maskTransitions = useTransition(showMenu, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reverse: showMenu,
      delay: 200,
      // config: config.molasses,
      // onRest: () => set(!show),
    })

    const menuTransitions = useTransition(showMenu, {
      from: { opacity: 0, transform: "translatey(-100%)"},
      enter: { opacity: 1, transform: "translatey(60%)" },
      leave: { opacity: 0, transform: "translatey(-100%)" },
      reverse: showMenu,
      delay: 200,
      // config: config.molasses,
      // onRest: () => set(!show),
    })


  return (
    <nav>
        <a href="#home">HOME</a>
        <a href="#abt">ABOUT</a>
        <a href="#portfolio">PORTFOLIO</a>
        <a href="#contact">CONTACT</a>
        <a href="https://github.com/Rogue-codes/">GIT HUB</a>
        <span className="icon">
              <FontAwesomeIcon icon={faBars}
              onClick= {() => setShowMenu(!showMenu)}/>
        </span>

        {
          maskTransitions((styles, item) => item && <animated.div style={styles} className='firstAimate' onClick = {()=> setShowMenu(false)}>

          </animated.div>)
        }

        {
          menuTransitions((styles, item) => item && <animated.div style={styles} className='Animate'>
            <a href="#home" onClick = {()=> setShowMenu(false)}>HOME</a>
            <a href="#abt" onClick = {()=> setShowMenu(false)}>ABOUT</a>
            <a href="#portfolio" onClick = {()=> setShowMenu(false)}>PORTFOLIO</a>
            <a href="#contact" onClick = {()=> setShowMenu(false)}>CONTACT</a>
            <a href="https://github.com/Rogue-codes/" onClick = {()=> setShowMenu(false)}>GIT HUB</a>
          </animated.div>)
        }
    </nav>
  )
}

export default Nav