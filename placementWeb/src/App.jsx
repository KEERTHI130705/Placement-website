import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import './App.css'
import Tpo_info from './Components/Tpo_info'

import MessagesSection from './tpo_messages.jsx';


import Timeline from "./components/Timeline";

/* function App() {
  return (
    
  );
}
 */


function App() {
  return (
    <>

     Hello world
     this is the first page
     This is the first change!

     <MessagesSection />

    <Header/>

    <Home/> 
    <Tpo_info/>
     <Timeline />

    </>
  )
}

export default App;
