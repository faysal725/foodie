'use client'
import React from 'react'

export default function Error({error}) {
  return (
    <div className='error'>
      <h1>An Error Occured</h1>
      <p>Failed to create meal.</p>
    </div>
  )
}
