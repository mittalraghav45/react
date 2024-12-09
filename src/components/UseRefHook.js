import React ,{useRef} from 'react'
import ChildUseRefHook from './ChildUseRefHook';

function UseRefHook() { 
    const inputRef=useRef(null);

    const clickHandler=()=>{
        inputRef.current.focus();
    }

  return (
    <div>
    <h2>useRef Hook </h2>
    <input ref={inputRef} />
    <button onClick={clickHandler}>Click for ref</button>
    <ChildUseRefHook ref={inputRef}/>

    </div>
  )
}

export default UseRefHook
//when clicked on the useRef hook input bar the control goes to the child component