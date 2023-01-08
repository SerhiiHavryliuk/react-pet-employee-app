import React from "react";
import './style.css'

class Header extends React.Component {
    render() {
        return (
            <div className='headerWrap'>
                <h1> {this.props.title} </h1>
                <h2> Кількість працівників у компанії - {this.props.countEmployee} </h2>
                <p> Премію отримають - {this.props.countEmployeesBonus}</p>
            </div>
        );
    }
}

export default Header;