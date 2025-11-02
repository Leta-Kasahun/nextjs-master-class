import React from 'react'
import Link from 'next/link';
interface UserDetailsProps{
 params:{ id:string;}
}
function page({params}:UserDetailsProps) {
  const {id}=params;
  return (
    <div className='text-center p-10'>
      <h1 className='text-center font-bold '>User Details</h1>
      <h3>user Details for user id #{params.id}</h3>
<Link href="/dashboard/users">back</Link>
    </div>
  )
}

export default page