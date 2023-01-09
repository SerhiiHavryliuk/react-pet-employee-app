import React from "react";
import './style.css'

class NewEmployee extends React.Component {
    render() {
        return (
            <div className='NewEmployeeWrap'>
                <input className='NewEmployeeName' type='text' placeholder='Enter Name' onChange={this.props.inpName} value={this.props.inpName}/>
                <input className='NewEmployeeSalary' type='text' placeholder='Enter Salary' value={this.props.inpSalary}/>
                <button className='NewEmployeeAddBtn'> add </button>
            </div>
        );
    }
}

export default NewEmployee;