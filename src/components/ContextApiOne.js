import React, { useContext } from 'react'
import { UserContext } from '../App'


function ContextApiOne() {
    const user=useContext(UserContext);

  return (
    <div>ContextApiOne==  {user}</div>
  )
}

export default ContextApiOne