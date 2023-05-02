import React from 'react'
import Add from '../img/addAvatar.png';

const Login = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
      <span className="logo">Rg Chat</span>
      <span className="title">LogIn</span>
         <form action="">
           
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
          
            <button>Sign Up</button>
         </form>
         <p>You don't have account? Register</p>
      </div>
    </div>
  )
}

export default Login
