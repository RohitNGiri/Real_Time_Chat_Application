import React from 'react'
import Add from '../img/addAvatar.png';

const Register = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
      <span className="logo">Rg Chat</span>
      <span className="title">Register</span>
         <form action="">
            <input type='text' placeholder='Your Name'/>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <input style={{display: 'none'}} type='file' id='file'/>
            <label htmlFor="file">
              <img src={Add} alt='' />
             <span> Add an Avatar</span>
            </label>
            <button>Sign Up</button>
         </form>
         <p>You do have account? Login</p>
      </div>
    </div>
  )
}

export default Register