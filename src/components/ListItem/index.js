import React from "react";
import './style.css'

class ListItem extends React.Component {

    componentDidMount(){
        console.log('Компонент ListItem додається в DOM');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Компонент ListItem оновлюється в DOM');
    }

    componentWillUnmount() {
        console.log('викликається у ListItem перед видаленням із DOM');
    }
    render() {
        return (
            <div className='listItemWrap'>
                <div className='nameEmp'> {this.props.name} </div>
                <div className='salaryEmp'> Salary  {this.props.salary}  </div>
                <button className='addBonusEmp'> + bonus </button>
                <button className='deleteEmp' onClick={this.props.onDelete}> delete </button>
            </div>
        );
    }
}

export default ListItem;