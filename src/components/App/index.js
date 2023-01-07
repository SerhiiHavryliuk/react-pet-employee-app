import { Component } from 'react';
import {dataEmp} from '../../dataEmployees'

import './style.css';
import List from "../List";
import Header from "../Header";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // data: [
            //     {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
            //     {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
            //     {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3}
            // ],
            title: 'React pet project',
            countEmployee: '',
            inpName: 'Henry',
            inpSalary: 34567,
            data: dataEmp,
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    componentDidMount(){
        console.log('Компонент App додається в DOM');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Компонент App оновлюється в DOM');
    }

    componentWillUnmount() {
        console.log('викликається у App перед видаленням із DOM');
    }

    deleteItem = (id) => {
        console.log(id)
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }


    render() {

        return (
            <div className="app">
                <Header
                    title = {this.state.title}
                    countEmployee ={this.state.data.length}/>
                <List
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
            </div>
        );
    }
}

export default App;
