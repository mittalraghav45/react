// import React, { useState } from "react";

// function Counter() {
//   const iState = 0;
//   const [count, setCount] = useState(iState);

//   const incrementByFive=()=> {
//     for (let i = 0; i < 5; i++) 
//         {
//       setCount(prevCount => prevCount+ 1);
//     }
//   }
//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         click to inc by 1
//       </button>

//       <button onClick={incrementByFive}>Inc by 5 </button>

//       <p>count:: {count}</p>
//     </div>
//   );
// }

// export default Counter;


import React,{useReducer} from "react";

const initialState={
    firstCounter:0,
    secondCounter:10
}; 

const reducer=(state,action)=>
{
    switch(action.type){
    case 'increment':
        return {...state,firstCounter:state.firstCounter+1,secondCounter:state.secondCounter+5}
    case 'increment2':
        return {...state,secondCounter:state.secondCounter+5}
        // state+1;
    case 'decrement':
         return {...state,firstCounter:state.firstCounter-1}
        // return state-1
    case 'reset':
        return {initialState}
    default:
        return state
    }
}


function CounterOne() {

    const [count,dispatch] = useReducer(reducer,initialState);
  return (
    <div> count - {count} <br/>
      <button onClick={()=>{dispatch({type:'increment'})}}>Increment</button>
      <button onClick={()=>{dispatch({type:'increment2'})}}>Increment</button>
      <button onClick={()=>{dispatch({type:'decrement'})}}>Decrement</button>
      <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
    </div>
  );
}

export default CounterOne;
