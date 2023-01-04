import React from "react";
import './style.css'

class ListItem extends React.Component {
    render() {
        return (
            <div className='listItemWrap'>
                <div className='nameEmp'> {this.props.nameEmp} </div>
                <div className='salaryEmp'> Salary  {this.props.salaryEmp}  </div>
                <button className='addBonusEmp'> + bonus </button>
                <button className='deleteEmp'> delete </button>
            </div>
        );
    }
}

export default ListItem;