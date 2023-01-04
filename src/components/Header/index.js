import React from "react";
import './style.css'

class Header extends React.Component {
    render() {
        return (
            <div className='headerWrap'>
                <h1> Header component </h1>
                <h2> Кількість працівників у компанії </h2>
                <p> Премію отримають</p>
            </div>
        );
    }
}

export default Header;