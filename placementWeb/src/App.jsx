import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import './App.css'
import Tpo_info from './Components/Tpo_info'
import Timeline from "./components/Timeline";

/* function App() {
  return (
    
  );
}
 */


function App() {
  return (
    <>
    <Header/>

    <Home/> 
    <Tpo_info/>
     <Timeline />
    </>
  )
}

export default App;
