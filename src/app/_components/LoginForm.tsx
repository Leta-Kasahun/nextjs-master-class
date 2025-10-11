'use client'
import React from 'react'
import { Mail,Lock } from 'lucide-react'
import { loginAction } from './actions/auth'

function LoginForm() {
  
  return (
    <form  action={loginAction}className='max-w-md w-full space-y-7 p-8'>
        <div>
            <label htmlFor="email"className='font-medium text-gray-700 text-sm block mb-2'>Email</label>
          <div className='relative'>
           <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <Mail className='h-5 w-5 text-gray-400' /></div>
            <input 
            type="email" 
            name='email'
            placeholder='email@example.com'
            required
            className=' block w-full pl-10 pr-3 py-3 border  border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2   focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white '
            />
          </div>
        </div>

        <div>
            <label htmlFor="password"className='font-medium text-gray-700 text-sm block mb-2'>Email</label>
          <div className='relative'>
           <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <Lock className='h-5 w-5 text-gray-400' /></div>
            <input 
            type="password" 
            name='password'
            placeholder='your password'
            required
            className=' block w-full pl-10 pr-3 py-3 border  border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2   focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white '
            />
          </div>
        </div>
          <button
        type="submit"
        className="w-full py-3 px-4 border border-transparent rounded-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-[1.02] shadow-md"
      >Login</button>
    </form>
  )
}

export default LoginForm