import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

// pages 
import Dashboard from './pages/user/Dashboard'
import LoginPage from './pages/user/LoginPage'
import AdminHomePage from './pages/admin/AdminHomePage'

// router 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserProtectedRoute from './routes/UserProtectedRoute'
import AdminProtectedRoute from './routes/AdminProtectedRoute'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<LoginPage/>}></Route>
          <Route path='/dashboard' element={<UserProtectedRoute element={Dashboard} />}></Route>
          <Route path='/admin/' element={<AdminProtectedRoute element={AdminHomePage} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
