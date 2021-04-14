import React from 'react'
import './Login.css'
import { loginURL } from './spotify'

function Login () {
  return (
    <div className='login'>
      {/* <h1> I am the Login Page</h1> */}
      <img
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt='Spotify Logo'
      />

      <a href={loginURL}>Login with Spotify</a>
    </div>
  )
}

export default Login
