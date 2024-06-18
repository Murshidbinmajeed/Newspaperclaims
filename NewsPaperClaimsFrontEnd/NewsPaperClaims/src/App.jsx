import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Newspaperclaims from './components/Newspaperclaims'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Header />
        <div className='content-container'>
          <Sidebar />
          <Newspaperclaims />
        </div>
      </div>
     {/* <Newspaperclaims></Newspaperclaims> */}
    </>
  )
}

export default App
