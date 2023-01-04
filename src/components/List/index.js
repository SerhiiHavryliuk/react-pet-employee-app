import React from "react";
import './style.css'
import ListItem from "../ListItem";
import {dataEmp} from '../../dataEmploees'

class List extends React.Component {
    render() {
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