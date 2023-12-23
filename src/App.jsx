import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import GetAllMobiles from './components/GetAllMobiles'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<GetAllMobiles />
    <Navbar/>
     <h1>hellio</h1>
    </>
  )
}

export default App
