import React from 'react'
import { login } from '../features/user'
import {useDispatch } from 'react-redux';

function Login() {
    const dispatch = useDispatch();
  return (
    <div>
        <button 
            
            onClick={()=>{
                dispatch(login({name:"hamzah",age:25,email:"hamzahashmi.office@gmail.com"}))}}> Login

        </button>

    </div>
  )
}

export default Login