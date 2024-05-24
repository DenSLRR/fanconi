import React, { useEffect, useState } from 'react'
import { Navbar, Video, Cards, Footer, Gallery, Menu, Loader }  from './components'
import './App.css';





const App = () => {

  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  return (
    <div className='App'>
      {loading?<Loader/>:<>
        <Navbar/>
        <Video/>
        <Cards/>
        <Gallery/>
        <Menu/>
        <Footer/>
      </>}
        
    </div>
  )
}

export default App