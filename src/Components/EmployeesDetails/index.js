import {Component } from 'react'

import {BiSearch} from 'react-icons/bi'

import {Link} from 'react-router-dom'

import EmployeesDataContext from '../../Context/EmployeesDataContext'

import EmployeeDetail from '../EmployeeDetail'

import './index.css'

class  EmployeesDetails extends Component {
     state = {searchInput: ''}

     onUpdateSearchValue = event => {
          this.setState({searchInput: event.target.value})
     }
      
     render() {
        const {searchInput} = this.state 
         return(
          <EmployeesDataContext.Consumer>
            {value => {
              const  {employeesData} = value
              const SearchResults = employeesData.filter(eachItem => eachItem.firstName.toLowerCase().includes(searchInput.toLowerCase()))
              return (
                <div className='app-container'>
                    <h1 className='heading'>Employees Details</h1>
                   <div className='search-add-container'>
                      <div className='input-field'>
                            <input type='search' className='search-input' placeholder='Search' value={searchInput} onChange={this.onUpdateSearchValue}/>
                            <BiSearch size={25}/>
                        </div>
                        <Link to='add-employeeData'>
                          <button type='button' className='update-btn' >
                                  Add 
                          </button>
                        </Link>
                   </div>
                    
                    <ul className='employeeDetail-card-container'>
                    
                        {SearchResults.map(employeeDetail => (
                            <EmployeeDetail key={employeeDetail.id} employeeDetail={employeeDetail} />
                        ))}
                    </ul>
                   </div>
              )
            }}
          </EmployeesDataContext.Consumer>
        )        
     }
}
export default EmployeesDetails