import React from "react";
import './style.css'
import ListItem from "../ListItem";

class List extends React.Component {
    render() {
        const dataEmp = [
            {id: 1, name: 'Serhii', salary:'5100', isBonus: true },
            {id: 1, name: 'Andry', salary:'3400', isBonus: false },
            {id: 1, name: 'Pavel', salary:'3500', isBonus: true },
            {id: 1, name: 'Teti', salary:'5000', isBonus: true },
            {id: 1, name: 'Makar', salary:'5000', isBonus: true },
        ]
        return (
            <div data= {dataEmp} className='listWrap'>
                {dataEmp.map(item => (
                    <ListItem nameEmp = {item.name} salaryEmp={item.salary}/>
                ))}
            </div>
        );
    }
}

export default List;