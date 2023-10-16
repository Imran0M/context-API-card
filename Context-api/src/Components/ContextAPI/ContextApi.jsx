import React,{createContext, useState}from 'react'
const PriceContext =createContext();

function ContextApi({children}){
    const [count, setCount]=useState(0)
    // const [total, setTotal]=useState()
    const [apple9, setApple9]=useState(0)
    const [empty, setEmpty]=useState()


    return(
        <PriceContext.Provider value={{count, setCount, apple9, setApple9, empty, setEmpty}}>
            {children}
        </PriceContext.Provider>
    )
}

export {PriceContext, ContextApi}