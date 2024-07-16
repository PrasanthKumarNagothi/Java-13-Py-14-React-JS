import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import PasswordGenerator from './components/PasswordGenerator'
import Employees from './components/Employees'
import EmployeeProps from './components/EmployeeProps'

function App() {

  let employeesData = [
    {
      id: 1,
      name: 'John',
      designation : 'Junior SWE'
    },
    {
      id: 2,
      name: 'Smith',
      designation : 'Senior SWE'
    },
    {
      id: 3,
      name: 'Akhil',
      designation : 'Trainer'
    }
  ]

  return (
    <>
      <h1>React JS</h1>
      <EmployeeProps employee={{id: 1,name: 'John',designation : 'Junior SWE'}} />
      <EmployeeProps employee={{id: 2,name: 'Smith',designation : 'Senior SWE'}} />
      <EmployeeProps employee={{id: 3,name: 'Akhil',designation : 'Trainer'}} />
      <Employees />
      <PasswordGenerator />
      <Counter />
    </>
  )
}

export default App
