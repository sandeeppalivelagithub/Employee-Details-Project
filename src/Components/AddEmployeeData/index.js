import {Component} from 'react'

import EmployeesDataContext from '../../Context/EmployeesDataContext' 

class AddEmployeeData extends Component {
    state = {firstName: '', lastName: '', email: '', role: '', salary: '', isAdd: false}

    onUpdateFirstName = event => {
        this.setState({firstName: event.target.value})
    }

    onUpdateLastName = event => {
        this.setState({lastName: event.target.value})
    }

    onUpdateEmail = event => {
        this.setState({email: event.target.value})
    }

    onUpdateSalary = event => {
        this.setState({salary: event.target.value})
    }

    onUpdateRole = event => {
        this.setState({role: event.target.value})
    }

   


    render() {
        const {firstName, lastName, email, role, salary} = this.state 
        return (
            <EmployeesDataContext.Consumer>
                {value => {
                    const {addEmployeeData, employeesData} = value 
                    const onAddData = () => {
                        addEmployeeData({
                            firstName,
                            lastName,
                            email,
                            role,
                            salary,
                            id: employeesData.length + 1,
                        })
                    }

                    return (
                        <div className='edit-form-container'>
                            <h1 className='edit-heading'>Edit Employee Details</h1>
                            <form className='form-container'>
                                <div className='input-field-container'>
                                    <label htmlFor='first-name' className='label'>FIRST NAME</label>
                                    <input type='text' id='first-name' className='text-input' placeholder='Firstname' value={firstName} onChange={this.onUpdateFirstName}/>
                                </div>
                                <div className='input-field-container'>
                                    <label htmlFor='last-name' className='label'>LAST NAME</label>
                                    <input type='text' id='last-name' className='text-input' placeholder='Lastname' value={lastName} onChange={this.onUpdateLastName}/>
                                </div>
                                <div className='input-field-container'>
                                    <label htmlFor='email' className='label'>EMAIL</label>
                                    <input type='text' id='email' className='text-input' placeholder='Email' value={email} onChange={this.onUpdateEmail}/>
                                </div>
                                <div className='input-field-container'>
                                    <label htmlFor='role' className='label'>ROLE</label>
                                    <input type='text' id='role' className='text-input' placeholder='Role' value={role} onChange={this.onUpdateRole}/>
                                </div>
                                <div className='input-field-container'>
                                    <label htmlFor='salary' className='label'>SALARY</label>
                                    <input type='text' id='salary' className='text-input' placeholder='Salary' value={salary} onChange={this.onUpdateSalary}/>
                                </div>
                                <div className='update-btn-container'>
                                
                                    <button type='button' className='update-btn' onClick={onAddData}>
                                        Add Employee
                                    </button>
                                </div>
                            </form>
                        </div>
                    )
                }}
            </EmployeesDataContext.Consumer>
            
        )
    }
} 

export default AddEmployeeData