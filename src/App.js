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
  <UserContext.Provider value={'Raghav'}>
    <ContextApiOne/>
  </UserContext.Provider>
  </div>
  )
}

export default App;
