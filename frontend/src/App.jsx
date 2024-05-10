import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

// pages 
import Dashboard from './pages/Dashboard'

// router 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<LoginPage/>}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
