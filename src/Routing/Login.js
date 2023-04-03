import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
       <Link to='/SignUp'> <button>Signup</button> </Link>
       <Link TO='/Dashboard'><button>Dashboard</button></Link>
    </div>
  )
}

export default Login