import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' Component={LoginPage}/>
      <Route path="/register" Component={RegisterPage}/>
    </Routes>
  )
}

export default App