import React from 'react'

function Employees() {
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
      <h1>Employees Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {
            employeesData.map((employee) => {
              if (employee.designation.includes('SWE'))
                return (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.designation}</td>
                  </tr>
                )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Employees