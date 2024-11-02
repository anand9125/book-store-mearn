import React from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from 'react';
function Register() {
    const [message ,setMessage]= useState("")
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const handleGoogleSignIn =()=>{
      
    }
  return (
    <div>
         <div className='h-[calc(100vh-120px)]  flex justify-center items-center'>
             
             <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8'>
                <h1 className='text-2xl font-semibold'>Please Register</h1>
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
                </form>
              </div>
             <div>
               </div>
               {
                 message && <p className='text-red-500 text0xs itallic mb-3'>{message}</p>
               }
              <div>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none '>Login</button>
              </div>
                  <p className='pt-2'>
                     Haven't an account? Please 
                     <Link to="/login" className='text-blue-500 hover:text-blue-700'> Login !</Link>
                  </p>
                <div className='pt-2'>
                   <button onClick={handleGoogleSignIn}
                    className='w-full flex flex-wrap gap-1 items-cemter justify-center
                    bg-secondary hover:bg-blue-500 hover:text-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>
                    <FaGoogle  className='mr-2 mt-1'/>
                   Resgister with Google
                 </button>
                </div>
                 <div>
                   <p></p>
                 </div>
             </div>    
       </div>
    </div>
  )
}

export default Register