import React from 'react'
import Login from './login'
import Signup from './signup'
import {BrowswerRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowswerRouter>
      <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      
    </BrowswerRouter>
  )
}

export default App
