import React from 'react'
import { login, logout } from '../features/user'
import {useDispatch } from 'react-redux';

function Login() {
    const dispatch = useDispatch();
  return (
    <div>
        <button 
            
            onClick={()=>{
                dispatch(login({name:"hamzah",age:25,email:"hamzahashmi.office@gmail.com"}))}}> Login

        </button>

        <button 
            
            onClick={()=>{
                dispatch(logout())}}> Logout

        </button>

    </div>
  )
}

export default Login