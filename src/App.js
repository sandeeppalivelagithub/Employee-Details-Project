import {Component} from 'react'
import {Route, Routes} from 'react-router-dom'

import AddEmployeeData from './Components/AddEmployeeData'
import EmployeesDataContext from './Context/EmployeesDataContext'
import EditEmployeeData from './Components/EditEmployeeData'



import EmployeesDetails from './Components/EmployeesDetails'



import './App.css';

const initialEmployeesData = [
    {
      id: 1,
      firstName: 'Augustin',
      lastName: 'Melimi',
      email: 'Augustin@example.com',
      salary: '95,000',
      role: 'Frontend Developer',
    },
    {
      id: 2,
      firstName: 'Sandeep',
      lastName: 'Palivela',
      email: 'sandeep@example.com',
      salary: '89,000',
      role: 'Frontend Developer',
      
    },
    {
      id: 3,
      firstName: 'Vinay',
      lastName: 'Kommu',
      email: 'kommu@example.com',
      salary: '79,000',
      role: 'Software Developer',
    },
    {
      id: 4,
      firstName: 'Kent',
      lastName: 'Rosner',
      email: 'kent@example.com',
      salary: '56,000',
      role: 'Frontend Developer',
    },
    {
      id: 5,
      firstName: 'Vilekhana Sri',
      lastName: 'Katakam',
      email: 'vilekhana@example.com',
      salary: '1,65,000',
      role: 'FullStack Web Developer',
    },
    {
      id: 6,
      firstName: 'Dileep',
      lastName: 'Palivela',
      email: 'dileep@example.com',
      salary: '1,20,000',
      role: 'Backend Developer',
    },
    {
      id: 7,
      firstName: 'Naveen Kumar',
      lastName: 'Gampala',
      email: 'naveen@example.com',
      salary: '90,000',
      role: 'Data Analyst',
    },
    {
      id: 8,
      firstName: 'Jesica',
      lastName: 'Watlington',
      email: 'jesica@example.com',
      salary: '60,000',
      role: 'UI/UX Designer',
    },
    {
      id: 9,
      firstName: 'Dinesh Sai Krishna Varma',
      lastName: 'Pothuri',
      email: 'dinesh@example.com',
      salary: '71,000',
      role: 'Data Analyst',
    },
    {
      id: 10,
      firstName: 'Dhana Sai',
      lastName: 'Karri',
      email: 'dhana@example.com',
      salary: '1,10,000',
      role: 'FullsTack Developer',
    }
  ];


class App extends Component {
   state={employeesData: initialEmployeesData, activeEmployeeId: 1, searchResult:"", isEdit: false, firstName: '',
   lastName: '',
   role: '',
   email: '',
   Salary: '',
   isUpdate: false}

   addEmployeeData = (object) => {
       this.setState(prevState => ({employeesData: [...prevState.employeesData, object]}))
   }

   

   editEmployeeDetails = () => {
        const {employeesData, activeEmployeeId} = this.state
        const employeeEditData = employeesData.find(eachItem => eachItem.id === activeEmployeeId)
        const {firstName, lastName, role, email, salary} = employeeEditData
        this.setState({firstName, lastName, role, email, salary})
   }

   setFirstName = (value) => {
    this.setState({firstName: value})
   }

   upDateEmployeeData = () => {
       const {firstName, lastName, role, salary, email, activeEmployeeId} = this.state 
       
       this.setState(prevState => ({employeesData: prevState.employeesData.map(eachData => {
        if (eachData.id === activeEmployeeId) {
            return {...eachData, firstName, lastName, role, salary, email}
        }
            return {...eachData}
         
       })
      }))
   }

   setUpdateStatus = () => {
    this.setState({isUpdate: true})
   }

   unsetUpdateStatus = () => {
    this.setState({isUpdate: false})
   }

    setLastName = (value) => {
        this.setState({lastName: value})
    }

    setRole = (value) => {
        this.setState({role: value})
    }

    setEmail = (value) => {
        this.setState({email: value})
    }

    setSalary = (value) => {
        this.setState({salary: value})
    }

   setActiveId = id => {
    this.setState({activeEmployeeId: id}, this.editEmployeeDetails)
   }

   setEditStatus = () => {
       this.setState({isEdit: true})
   }

   deleteEmployeeData = (id) => {
     const {employeesData} = this.state 
     const newEmployeesData = employeesData.filter(eachItem => eachItem.id !== id)
      this.setState({employeesData: newEmployeesData})
   }

   render() {
    const {employeesData, activeEmployeeId, isEdit, firstName, lastName, role, email, salary, isUpdate} = this.state 
    console.log(employeesData)
    return (
        <EmployeesDataContext.Provider value={
            {employeesData,
             activeEmployeeId, 
             isEdit, 
             isUpdate,
             addEmployeeData: this.addEmployeeData,
             setEditStatus: this.setEditStatus,
              setActiveId: this.setActiveId, 
              deleteEmployeeData: this.deleteEmployeeData,
              setFirstName: this.setFirstName,
              setLastName: this.setLastName,
              setRole: this.setRole,
              setEmail: this.setEmail,
              setSalary: this.setSalary,
              editEmployeeDetails: this.editEmployeeDetails,
              upDateEmployeeData: this.upDateEmployeeData,
              setUpdateStatus: this.setUpdateStatus,
              unsetUpdateStatus: this.unsetUpdateStatus,
              firstName,
               lastName,
                role, 
                email,
                salary,
              }
            }>
             <Routes>
                <Route exact path='/' element={<EmployeesDetails/>}/>
                <Route exact path='EmployeeDetails/:id' element={<EditEmployeeData/>}/>
                <Route exact path='add-employeeData' element={<AddEmployeeData/>}/>
            </Routes>
        </EmployeesDataContext.Provider>
    )
   }
}


export default App;
