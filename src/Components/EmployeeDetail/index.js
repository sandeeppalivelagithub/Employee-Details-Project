
import {Link} from 'react-router-dom'

import EmployeesDataContext from '../../Context/EmployeesDataContext'

import './index.css'

const profileColors = [
    'bisket-color',
 'green-color',
    'light-sky',
    'light-red',
   'light-purple',
]

const EmployeeDetail = props => (
    <EmployeesDataContext.Consumer>
        {value => {
            const {deleteEmployeeData, setActiveId, editEmployeeDetails, unsetUpdateStatus} = value 
            const {employeeDetail} = props 
            const {id , firstName , lastName, email, salary, role} = employeeDetail
            const onDeleteEmployeeData = () => {
                deleteEmployeeData(id)
            }
            const onSetActiveId = () => {
                setActiveId(id)
                editEmployeeDetails()
                unsetUpdateStatus()
                
                
            }
            return (
                <li className='employeeDetail-list-container'>
            <div className='profile-details-container'>
                    <div className={`profile-container ${profileColors[Math.ceil(Math.random()*4)]}`}>
                        {firstName[0].toUpperCase()}{lastName[0].toUpperCase()}
                    </div>
                <div className='employee-details-container'>
                        <p className='name'>{firstName} {lastName}</p>
                        <p className='role'>Role: {role}</p>
                        <p className='email'>{email}</p>
                        <p className='salary'>salary : {salary}</p>
                        <div className='buttons-container'>
                           <Link to={`EmployeeDetails/${id}`} className='link-item'>
                                <button type='button' className='edit-btn' onClick={onSetActiveId}>Edit</button>
                           </Link>
                            <button type='button' className='delete-btn' onClick={onDeleteEmployeeData} >Delete</button>
                        </div>
                </div>
            </div>
            </li>
            )
        }}
    </EmployeesDataContext.Consumer>
)
export default EmployeeDetail