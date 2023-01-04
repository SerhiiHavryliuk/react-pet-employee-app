import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import NewEmployee from "./components/NewEmployee";
import {dataEmp} from './dataEmployees'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: true};
        this.state = {appData: dataEmp}
    }

    addNewEmployee() {
        console.log(11111);
    }

    render() {
        return (
            <div>
                <Header/>
                <NewEmployee/>
                <List data={this.state.appData}/>
                <div className='NewEmployeeWrap'>
                    <input className='NewEmployeeName' type='text' placeholder='Enter Name'/>
                    <input className='NewEmployeeSalary' type='text' placeholder='Enter Salary'/>
                    <button className='NewEmployeeAddBtn' onClick={this.addNewEmployee}> add </button>
                </div>
            </div>
        );
    }
}

export default App;