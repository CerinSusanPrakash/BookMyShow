// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//     </>
//   )
// }

// export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import Navbar from './components/Navbar'
import Viewmovies from './components/Viewmovies'
import Addmovies from './components/Addmovies'
import { Route,Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Viewmovies/>}></Route>
      <Route path='/add' element={<Addmovies/>}></Route>
    </Routes>
    
    
      
    </>
  )
}

export default App
