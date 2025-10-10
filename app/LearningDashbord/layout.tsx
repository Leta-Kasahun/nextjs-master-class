import Link from 'next/link'
import React from 'react'

function layout({children,}:{children:React.ReactNode})
 {
  return (
    <div>
  <Link href="LearningDashbord/">Next</Link>
  {children}
    </div>
  )
}

export default layout