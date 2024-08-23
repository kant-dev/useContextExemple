"use client"
import { CountContext } from '@/contexts/CounterContext'
import React, { useContext } from 'react'

const IncrementButton = () => {
    const count = useContext(CountContext)

    const handleIncrement = (n: number) => {
        count?.increment(n)
    }
  return (
    <button
        className='py-1 px-2 bg-blue-500 text-white text-xl rounded'
        onClick={()=>handleIncrement(1)}
    >+ 1</button>
  )
}

export default IncrementButton