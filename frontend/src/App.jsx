import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import PasswordGenerator from './components/PasswordGenerator'

function App() {

  return (
    <>
      <h1>React JS</h1>
      <PasswordGenerator />
      <Counter />
    </>
  )
}

export default App
