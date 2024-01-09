import { useState } from 'react'
import './App.css'
import Header from './componets/Header'
import Home from './componets/Home'
import Footer from './componets/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Home/>
     <Footer/>
    </>
  )
}

export default App
