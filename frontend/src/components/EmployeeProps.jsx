import React from 'react'

function EmployeeProps({employee}) {
  return (
    <div>
        <span>Name: {employee.name}</span> <br />
        <span>Designation: {employee.designation}</span> <br />
    </div>
  )
}

export default EmployeeProps