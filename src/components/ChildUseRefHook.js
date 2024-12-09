import React ,{forwardRef} from 'react'
 
const ChildUseRefHook=forwardRef((props,ref) =>
{
    

  return (
    <div>
        <h3>Child UseRef Hook</h3>
    <input ref={ref}/>
    {/* <button onClick={ClickRef()}>Submit to forward ref</button> */}
    </div>
  )
}
)

export default ChildUseRefHook