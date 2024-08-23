"use client"
import { CountContext } from '@/contexts/CounterContext'
import React, { useContext } from 'react'

const DecrementButton = () => {
    const count = useContext(CountContext)
    console.log(count)

    const handleDrecement = (n: number) => {
      const dec = n;

        if(count?.count === 0) return alert("quer tirar o que não tem?")

        count?.decrement(dec)
    }
  return (
    <button
        className='py-1 px-2 bg-blue-500 text-white text-xl rounded'
        onClick={() => handleDrecement(1)}
    >
        - 1
    </button>
  )
}

export default DecrementButton