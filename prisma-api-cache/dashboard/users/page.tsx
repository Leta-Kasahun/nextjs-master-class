import React from 'react'
import { Card,CardContent,CardHeader } from '@/components/ui/card'
import Link from 'next/link'

function page() {
  return (
    <div>
        
        <Card className='w-1/2 m-auto  p-10'>
        <CardHeader><h1>User List</h1></CardHeader>
        <CardContent>
          <ol className='mt-10'>
            <li><Link href="/dashboard/users/1">User 1</Link></li>
            <li><Link href="/dashboard/users/2">User 2</Link></li>
            <li><Link href="/dashboard/users/3">User 3</Link></li>
            <li><Link href="/dashboard/users/4">User 4</Link></li>
            <li><Link href="/dashboard/users/5">User 5</Link></li>
        </ol>
        </CardContent>

        </Card>
    </div>
  )
}

export default page