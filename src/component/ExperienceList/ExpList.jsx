import React from 'react'

function ExpList({name,active,id,setSelected}) {
  return (
    <li className={active ? 'expList active' : 'expList'} onClick={()=>setSelected(id )}>
        {name}
    </li>
  )
}

export default ExpList