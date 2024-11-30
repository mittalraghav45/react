import React,{useState} from "react";

function AddNumber() {
  const [item, setItem] = useState([]);

  const addNumber = () => {
    setItem([...item, {
      id: item.length,
      value: Math.floor(Math.random()*10)+1
    }]);
  };

  return (
    <>
      <button onClick={addNumber}>Add number</button>
      <ul>
        {item.map((i) =>
        (
          <li key={i.id}> {i.value}  </li>
        ))}
      </ul>
    </>
  );
}

export default AddNumber;
