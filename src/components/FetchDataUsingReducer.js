import React, {useEffect ,useReducer} from "react";
import axios from "axios";

const initialState = {
  post: {},
  error: "",
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        post: action.payload,
        error: "",
        loading: false,
      };
    case "FETCH_FAIL": {
      return {
        loading: false,
        post: {},
        error: "Something went wrong",
      };
    }
  }
};

function FetchDataUsingReducer() {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
      dispatch({ type: "FETCH_SUCCESS", payload: response.data })
    })
      .catch((error) => {
          dispatch({ type: "FETCH_FAIL" });
        }
      );
    }, []);
  

    return (
      <div>
        <h2>Fetch Data Using Reducer </h2>
        {state.loading ? "Loading" : state.post.title}
        {state.error ? state.error : null}
      </div>
    );
  }
  

export default FetchDataUsingReducer;
