import React from 'react';
import Header from './Components/Header';
import Home from './Components/Homebanner'
import './App.css';
import Tpo_info from './Components/Tpo_info'
import MessagesSection from './Components/tpo_messages';
import Timeline from "./Components/Timeline";
import HomeBanner from './Components/Homebanner';


function App() {
  return (
    <>
     <Header/>
     <HomeBanner/> 
     <Tpo_info/>
     <MessagesSection />
     <Timeline />
    </>
  )
}

export default App;

