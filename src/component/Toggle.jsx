import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './Context'

function Toggle() {
  const theme = useContext(ThemeContext)
  const handleClick = () =>{
    theme.dispatch({type:'TOGGLE'})
  }
  return (
    <div className='toggle'>
        <img src="/sun.png" alt="" className='t-icon' />
        <img src="/moon.png" alt="" className='t-icon'/>
        <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}

export default Toggle