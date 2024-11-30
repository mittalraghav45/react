
import React, { useState,useEffect } from 'react'

function UpdateTitle() {
    
    const [count,setCount]=useState(0);

    useEffect(()=>{
        document.title=`document title is${count}`
    },[count])

  return (
    <>
    <div>useEffect</div>
    <br></br>
    <button onClick={()=>setCount(count+1)}>click to change the title</button>
    <p>COunt:{count}</p></>

  )
}

export default UpdateTitle