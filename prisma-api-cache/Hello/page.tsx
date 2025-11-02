"use client"
import { toast, Toaster } from 'sonner'
import { Button } from '../../components/ui/button'

import React from 'react'

function Hellow() {
  return (
    <div>
        <h1>This is client componets</h1>
        <Button onClick={()=>toast.success("theanks")}>click</Button>
        <Toaster position='top-right'/>
        </div>
  )
}

export default Hellow