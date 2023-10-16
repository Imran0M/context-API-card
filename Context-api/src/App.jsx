import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './Components/Card/Cart'
import { ContextApi } from './Components/ContextAPI/ContextApi'

function App() {
  return (
    <>
      <ContextApi>
        <Cart />
      </ContextApi>


    </>
  )
}

export default App
