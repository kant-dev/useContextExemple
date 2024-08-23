"use client"
import { createContext, useState } from "react"

 

type CountContextProps = {
    count: number,
    increment: (n: number) => void,
    decrement: (n: number) => void,
}

export const CountContext = createContext<CountContextProps | null>(null)

type CountProviderProps = {
    children: React.ReactNode,
}

export const CounterProvider = ({children}: CountProviderProps) => {
    const [count, setCount] = useState(2);

    const increment = (n: number) => {
        setCount((prevCount) => prevCount + n);
    };

    const decrement = (n: number) => {
        if (count - n < 0) {
            return;
        }
        setCount((prevCount) => prevCount - n);
    };

    return (
        <CountContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CountContext.Provider>
    );
}