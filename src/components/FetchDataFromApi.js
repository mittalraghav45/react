import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchDataFromApi() {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const[buttonClick,setButtonClick]=useState(1)

  const API_URL = `http://jsonplaceholder.typicode.com/posts/${id}`;
  

    useEffect(()=>{
      axios.get(API_URL)
      .then(res=>
          {
              console.log(buttonClick);
              setPost(res.data) 
          }
      )
      .catch(err=>console.log(err))
    },[buttonClick])

//   const handleData = () => {
//     axios
//       .get(API_URL)
//       .then((res) => {
//         console.log(res);
//         setPost(res.data);
//       })
//       .catch((err) => console.log(err));
//   };

const handleData=()=>{
    setButtonClick(id);
}
  return (
    <>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

      <button onClick={handleData}>Submit</button>

      <ul>
        <li key={post.id}>{post.title}</li>
      </ul>
    </>
  );
}

export default FetchDataFromApi;
//can use the useEffect or the function call to fetch the data from the APi

//we click on the button and set the id , then we pass on this id to useEffect []dependency and if it changes a call is made 