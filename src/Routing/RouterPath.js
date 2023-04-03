import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { SignUp } from './SignUp'
import Login from './Login'
import Dashboard from './Dashboard'
const RouterPath = () => {
  return (
    <div>
         {/* <BrowserRouter>
                <Route path='/' element={<Login/>}></Route>
            <Routes>
                <Route path='/SignUp' element={<SignUp/>}></Route>
                <Route path='/Dashboard' element={<Dashboard/>}></Route>
            </Routes>
        </BrowserRouter> */}
    </div>
  )
}

export default RouterPath