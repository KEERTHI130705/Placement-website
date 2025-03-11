import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import './App.css'
import Tpo_info from './Components/Tpo_info'
import MessagesSection from './Components/tpo_messages';
import Timeline from "./Components/Timeline";




function App() {
  return (
    <>
     <Header/>
     <MessagesSection />
     <Home/> 
     <Tpo_info/>
     <Timeline />
    </>
  )
}

export default App;
