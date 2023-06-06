import React from 'react'



const EmployeesContext = React.createContext({
     employeesData: [],
     activeEmployeeId:1,
     isEdit: false,
     firstName: '',
     lastName: '',
     role: '',
     email: '',
     Salary: '',
     isUpdate: false,
     setFirstName: () => {},
     setLastName: () => {},
     setRole: () => {},
     setEmail: () => {},
     addEmployeeData: () => {},
     setSalary: () => {},
     deleteEmployeeData: () => {},
     setActiveId: () => {},
     setEditStatus: () => {},
     editEmployeeDetails: () => {},
     upDateEmployeeData: () => {},
     setUpdateStatus: () => {},
     unsetUpdateStatus: () => {},
})

export default EmployeesContext
