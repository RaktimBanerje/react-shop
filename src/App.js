import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Index from "./pages/Index"
import Login from "./pages/Login"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Index /> } />
          <Route exact path="/login" element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App