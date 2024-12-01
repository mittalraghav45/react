import React,{useReducer} from "react";

const initialState={
    firstCounter:0
}; 

const reducer=(state,action)=>
{
    switch(action.type){
    case 'increment':
        return {firstCounter:state.firstCounter+1}
        // state+1;
    case 'decrement':
         return {firstCounter:state.firstCounter-1}
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
      <button onClick={()=>{dispatch({type:'decrement'})}}>Decrement</button>
      <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
    </div>
  );
}

export default CounterOne;
