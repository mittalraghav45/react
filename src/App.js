import logo from './logo.svg';
import './App.css';
import {useState,useContext} from 'react';
import Counter from './Counter';
import HookCounterThree from './components/HookCounterThree';
import AddNumber from './components/AddNumber';
// import UpdateTitle from './components/UpdateTitle';
import FetchDataFromApi from './components/FetchDataFromApi';
import ContextApiOne from './components/ContextApiOne';
import React from 'react';
import CounterOne from './components/CounterOne';
// import CounterTwoReducer from './components/CounterTwoReducer';
import ReducerTwo from './ReducerTwo';
import FetchDataUsingReducer from './components/FetchDataUsingReducer';
import ParentComponent from './components/ParentComponent';

export const UserContext = React.createContext();
export const channelContext = React.createContext();

function App() {
  return(
    <div className='App>'> 
  {/* // <Counter/>
  // <HookCounterThree/>
  // <AddNumber/>
  // <UpdateTitle/>
  // <FetchDataFromApi/> */}
  {/* <UserContext.Provider value={'Raghav'}>
    <ContextApiOne/>
  </UserContext.Provider> */}
  {/* <CounterOne/> */}
  {/* <ReducerTwo/> */}
  {/* <FetchDataUsingReducer/> */}
  <ParentComponent/>
  </div>
  )
}

export default App;
