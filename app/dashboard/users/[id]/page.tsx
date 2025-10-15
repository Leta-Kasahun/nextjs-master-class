import React from 'react'

const userDetailsPage=({params}:{params:{id:string}})=> {
    const {id}=params;

  return (
    <div><h1>userDetailsPage</h1>
    <h2>profile: {id}</h2>
    </div>
  )
}

export default userDetailsPage