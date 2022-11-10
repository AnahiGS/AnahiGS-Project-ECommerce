import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DetallesProduct from '../pages/DetallesProduct'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SingUp from '../pages/SignUp'



const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detalles' element={<DetallesProduct />} />
        
      <Route path='/login' element={<Login />} />
      <Route path='/singup' element={<SingUp />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default RoutesIndex