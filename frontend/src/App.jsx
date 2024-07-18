import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Counter from './components/Counter'
import PasswordGenerator from './components/PasswordGenerator'
import Employees from './components/Employees'
import EmployeeProps from './components/EmployeeProps'
import Home from './components/Home'
import Layout from './Layout'

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

  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='counter' element={<Counter />}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
