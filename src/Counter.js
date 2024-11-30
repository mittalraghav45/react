import React, { useState } from "react";

function Counter() {
  const iState = 0;
  const [count, setCount] = useState(iState);

  const incrementByFive=()=> {
    for (let i = 0; i < 5; i++) 
        {
      setCount(prevCount => prevCount+ 1);
    }
  }
  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click to inc by 1
      </button>

      <button onClick={incrementByFive}>Inc by 5 </button>

      <p>count:: {count}</p>
    </div>
  );
}

export default Counter;
