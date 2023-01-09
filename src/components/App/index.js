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
            data: dataEmp,
            title: 'React pet project',
            countEmployee: '',
            counterEmployeesBonus: 0,
            inpName: 'Henry',
            inpSalary: 34567,
        }
        this.maxId = 4;
    }

    // ----------------------------------------------------------------
    // Компонент додається в DOM
    // ----------------------------------------------------------------
    componentDidMount(){
        console.log('Компонент App додається в DOM');
        this.setCounterBonus();
    }

    // ----------------------------------------------------------------
    // Компонент оновлюється в DOM
    // ----------------------------------------------------------------
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Компонент App оновлюється в DOM');
    }

    // ----------------------------------------------------------------
    // Компонент викликається у App перед видаленням із DOM
    // ----------------------------------------------------------------
    componentWillUnmount() {
        console.log('викликається у App перед видаленням із DOM');
    }

    // ----------------------------------------------------------------
    // Видалення працівника
    // ----------------------------------------------------------------
    deleteItem = (id) => {
        console.log(id)
        // в setState в аргументи поміщаємо калбек ф-ію щоб отримати самий останній стан
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    // ----------------------------------------------------------------
    // Додавання/видалення бонусів для працівника
    // ----------------------------------------------------------------
    ToggleAddBonus = (id) => {
        console.log("Id for bonus - " + id)
        this.setState(({data}) =>{
            return {
                data: data.map( item => {
                    if(item.id === id){
                        return {...item, isBonus: !item.isBonus}
                    }
                    return item;
                })
            }
        })

        this.setCounterBonus();
    }

    // ----------------------------------------------------------------
    // Встановлюємо актуальну кільість працівників, які мають бонус
    // ----------------------------------------------------------------
    setCounterBonus = () => {
        // Тут важливий момент, треба передавати останній стейт самого списку через колбек ф-ію,
        // ({data}) => - цей вираз означає що ми будемо чекати останній стан нашого списку data
        // це треба для того щоб правильно рахувалась кількість працівників, які отримають премію
        this.setState(({data}) =>{
            return{
                counterEmployeesBonus: data.filter(item => item.isBonus).length
            }
        })
    }


    render() {

        return (
            <div className="app">
                <Header
                    title = {this.state.title}
                    countEmployee ={this.state.data.length}
                    countEmployeesBonus = {this.state.counterEmployeesBonus}/>

                <List
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleAddBonus={this.ToggleAddBonus}/>
            </div>
        );
    }
}

export default App;
