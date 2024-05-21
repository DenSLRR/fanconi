import React from 'react'
import { Navbar, Video, Cards, Footer, Gallery, Menu }  from './components'
import './App.css';





const App = () => {
  return (
    <div className='App'>
      
        <Navbar/>
        <Video/>
        <Cards/>
        <Gallery/>
        <Menu/>
        <Footer/>
        
      
    </div>
  )
}

export default App