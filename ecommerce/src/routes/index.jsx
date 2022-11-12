import React, {useContext} from 'react'
import { Routes, Route } from 'react-router-dom'
import DetallesProduct from '../pages/DetallesProduct'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import User from '../pages/User'
import { AuthContext } from '../context/AuthContext'




const RoutesIndex = () => {
  const { isAuth } = useContext(AuthContext)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detalles/:id' element={<DetallesProduct />} />
        
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='*' element={<Error404 />} />
      <Route path='/user' element={isAuth ? <User /> : <Navigate to='/login' replace />} />
    </Routes>
  )
}

export default RoutesIndex