import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Cards } from './components/Cards'
import Hero from './components/Hero'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
<Hero/>
 
   <Cards/>
    </>
  )
}

export default App
