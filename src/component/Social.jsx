import React from 'react'
import { GitHub, LinkedIn, WhatsApp, Twitter} from '@material-ui/icons'
function Social() {
  return (
    <div className='social'>
        <a className="git" href="https://github.com/Rogue-codes" rel="noreferrer" target="_blank"><GitHub/></a>

        <a className="LinkedIn" href="https://www.linkedin.com/in/osujinnamdidaniel" rel="noreferrer" target="_blank"><LinkedIn/></a>

        <a className="IG" href="https://api.whatsapp.com/send?phone=2348058091098" rel="noreferrer" target="_blank"><WhatsApp/></a> 
        
        <a className="Twiter" href="https://twitter.com/Rogue_OnyeEgwu" rel="noreferrer" target="_blank"><Twitter/></a> 
    </div>
  )
}

export default Social