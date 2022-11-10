import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DetallesProduct from '../pages/DetallesProduct'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'




const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detalles/:id' element={<DetallesProduct />} />
        
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default RoutesIndex