import React,{useReducer} from "react";

const initialState={
    firstCounter:0,
    secondCounter:10
}; 

const reducer=(state,action)=>
{
    switch(action.type){
    case 'increment':
        return {...state,firstCounter:state.firstCounter+1}
    case 'increment2':
        return {...state,secondCounter:state.secondCounter+5}
        // state+1;
    case 'decrement':
         return {...state,firstCounter:state.firstCounter-1}
        // return state-1
    case 'reset':
        return {...state,firstCounter:0,secondCounter:0}
        default:
        return state
    }
}


function ReducerTwo() {

    const [count,dispatch] = useReducer(reducer,initialState);
  return (
    <div> count - {count.firstCounter} {count.secondCounter} <br/>
     
      <button onClick={()=>{dispatch({type:'increment'})}}>Increment</button>
      <button onClick={()=>{dispatch({type:'increment2'})}}>Increment2</button>
      <button onClick={()=>{dispatch({type:'decrement'})}}>Decrement</button>
      <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
    </div>
  );
}

export default ReducerTwo;
