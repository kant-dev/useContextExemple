"use client"
import { CountContext } from '@/contexts/CounterContext'
import React, { useContext } from 'react'

const DisplayCounter = () => {
    const count = useContext(CountContext)

  return (
    <p className='p-2 text-2xl'>
        num: { count?.count}
    </p>
  )
}

export default DisplayCounter