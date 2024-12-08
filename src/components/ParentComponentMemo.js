import React, { useState, memo } from 'react';
 
const ChildComponent=memo(({value})=>{
    console.log('child Component');
    return(<>{value} is the value of Child Component</>)

})

function ParentComponentMemo(){
const [count,setCount]=useState(0);
const [value,setValue]=useState(null);

return(
    <>
    <button onClick={()=>setCount(count+1)}>Incremented value {count}</button>
    <button onClick={()=>setValue(value==='Hello'?'Hi':'Hello')}>
        Toggle Value</button>
        <ChildComponent value={value}/>
    </>
)
}

export default ParentComponentMemo;
// jab value of count change hori hai, toh setValue vali value change nhi hori jo pass hori hai Chilcomponent mei and vo rende r ni hora , cuz of memo 