import React from "react";
import './style.css'
import ListItem from "../ListItem";
//import {dataEmp} from '../../dataEmploees'

class List extends React.Component {
    dataList = this.props.data;

    render() {
        return (
            <div className='listWrap'>
                {this.dataList.map(item => (
                    <ListItem key = {item.id} nameEmp = {item.name} salaryEmp={item.salary}/>
                ))}
            </div>
        );
    }
}

export default List;