import LoginForm from '@/app/_components/LoginForm'
import Link from 'next/link'
import React from 'react'

function LoginPage() {
  return (
    <div className='max-w-md mx-auto bg-white p-8 rounded-lg shadow-md '>
      <h1 className='text-2xl text-blue-600 font-bold text-center  '>welcome Back</h1>
      <LoginForm/>
      <p className='mt-4 text-center font-extralight text-slate-700 '> Do not have an account ? <Link href="/register"className='text-blue-600 hover:underline font-semibold'>Register</Link></p>
    </div>
  )
}

export default LoginPage