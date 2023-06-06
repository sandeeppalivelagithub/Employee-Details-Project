
import {FaCheckCircle} from 'react-icons/fa'


import EmployeesDataContext from '../../Context/EmployeesDataContext' 

import './index.css'




const EditEmployeeData = (props) =>(
    <EmployeesDataContext.Consumer>
        {value => {
            const {setFirstName, setLastName, setEmail, setSalary, setRole, firstName, lastName, salary, role, email, upDateEmployeeData, isUpdate, setUpdateStatus} = value
            const onUpdateData = () => {
                upDateEmployeeData()
                setUpdateStatus()
            }
            return ( 
              <div className='edit-form-container'>
                <h1 className='edit-heading'>Edit Employee Details</h1>
                <form className='form-container'>
                    <div className='input-field-container'>
                        <label htmlFor='first-name' className='label'>FIRST NAME</label>
                        <input type='text' id='first-name' className='text-input' placeholder='Firstname' value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                    </div>
                    <div className='input-field-container'>
                        <label htmlFor='last-name' className='label'>LAST NAME</label>
                        <input type='text' id='last-name' className='text-input' placeholder='Lastname' value={lastName} onChange={(event) => setLastName(event.target.value)}/>
                    </div>
                    <div className='input-field-container'>
                        <label htmlFor='email' className='label'>EMAIL</label>
                        <input type='text' id='email' className='text-input' placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className='input-field-container'>
                        <label htmlFor='role' className='label'>ROLE</label>
                        <input type='text' id='role' className='text-input' placeholder='Role' value={role} onChange={(event) => setRole(event.target.value)}/>
                    </div>
                    <div className='input-field-container'>
                        <label htmlFor='salary' className='label'>SALARY</label>
                        <input type='text' id='salary' className='text-input' placeholder='Salary' value={salary} onChange={(event) => setSalary(event.target.value)}/>
                    </div>
                    <div className='update-btn-container'>
                    {isUpdate === true ? <FaCheckCircle className='success-icon' />: null}
                        <button type='button' className='update-btn' onClick={onUpdateData}>
                        Update
                    </button>
                 
                    
                    </div>
                </form>
              </div>
            )
        }}
    </EmployeesDataContext.Consumer>
)
export default EditEmployeeData