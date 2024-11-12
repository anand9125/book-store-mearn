import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';

function Login() {
  const [message ,setMessage]= useState("")
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const {loginUser,signInWithgoogle } = useAuth();
  const navigate=useNavigate()
  const onSubmit = async (data) => {   
    try {
        await loginUser(data.email, data.password);
        alert("User login successfully");
        navigate("/")
    } catch (e) {
        alert("Please provide a valid email and password");
    }
};

  const handleGoogleSignIn =async()=>{
   try{
    await signInWithgoogle()
    alert("Login successfull with google")
    navigate("/")
   }
   catch(e){
    alert("Google signin failed")
   }
  }
  return (
         <div className='h-[calc(100vh-120px)]  flex justify-center items-center'>
             
                <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8'>
                   <h1 className='text-2xl font-semibold'>Please Login</h1>
                  <div>
                   <form onSubmit={handleSubmit(onSubmit)}>
                      <div className='mb-4'>
                       <label className='block text-gray-700 text-sm font-bold mb-2 mt-2' htmlFor="email">
                         Email</label>
                       <input {...register("email", { required: true })}
                        type="text" name="email" id="email" placeholder='Email Address'  className='shadow appreance-none border rounded w-full py-2 px-3
                        leading-tight focus:outline-none focus:shadow'/>  
                       </div>
                       <div className='mb-4'>
                       <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">
                         Password</label>
                       <input {...register("password", { required: true })}
                        type="text" name="password" id="password" placeholder='Password'  className='shadow appreance-none border rounded w-full py-2 px-3
                        leading-tight focus:outline-none focus:shadow'/>  
                      </div>
                   
                
                  {
                    message && <p className='text-red-500 text0xs itallic mb-3'>{message}</p>
                  }
                 <div>
                 <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none '>Login</button>
                  </div>
                    <p className='pt-2'>
                       Haven't an account? Please 
                       <Link to="/register" className='text-blue-500 hover:text-blue-700'> Register</Link>
                    </p>
                    </form>
                 </div>
                   <div className='pt-2'>
                    <button onClick={handleGoogleSignIn}
                    className='w-full flex flex-wrap gap-1 items-cemter justify-center
                     bg-secondary hover:bg-blue-500 hover:text-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>
                     <FaGoogle  className='mr-2 mt-1'/>
                     Sign in with Google
                    </button>
                   </div>
                    <div>
                     
                    </div>
                </div>    
          </div>
    
  )
}

export default Login