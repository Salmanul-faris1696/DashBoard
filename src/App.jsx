import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Card from './components/Card'
import Graph from './components/Graph'
import Table from './components/Table'

import { Outlet, BrowserRouter as Router,Routes } from 'react-router-dom'

function App() {
  

  return (
 
<div className='md:flex w-screen mt-5'>

<div className=''>
         
  

          <Sidebar/>
</div>
<div className='flex-1'>

        <Navbar/>
          
<div className='md:mt-3 '>
  
          {/* <Card/>
          <Graph/>

          <Table/> */}
          <Outlet />
</div>
</div>
</div>
  

    // <Router>


    // </Router>

    

     
     
     

        
    
 
  )
}

export default App
