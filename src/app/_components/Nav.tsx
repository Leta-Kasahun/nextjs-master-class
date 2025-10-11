import React from 'react'
import Link from 'next/link'

function Nav() {
    const session=false;
  return (
    <div className='bg-white shadow-sm'>
    <div className='container mx-auto p-4 flex justify-between items-center'>
        <Link href="/"className='text-blue-600 font-bold '>Contact Manager</Link>
        <div className='flex items-center space-x-4'>
            {session ? (<>
            <Link href="/contact"className='hover:text-blue-600 mr-8'>contacts</Link></>):(<><Link href="/login"className='hover:text-blue-600 mr-5'>login</Link><Link href="/register"className='hover:text-blue-600 mr-5'>register</Link></>)}

        </div>
    </div>
        
</div>
  )
}

export default Nav