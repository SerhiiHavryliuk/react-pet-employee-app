import React, { Component } from 'react';
import List from "../List";
import Header from "../Header";
import {dataEmp} from '../../dataEmployees'
import './style.css';


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
            inpName: '',
            inpSalary: '',
        }
        this.maxId = 4; // приклад створення змінної, ніде не використовується
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

        // встановлюємо актуальну кількість бонусів
        this.setCounterBonus();
    }

    // ----------------------------------------------------------------
    // Додавання/видалення бонусів для працівника
    // ----------------------------------------------------------------
    ToggleAddBonus = (id) => {
        console.log("Id for bonus - " + id)
        this.setState(({data}) =>{
            return {
                // метд map - створює новий масив
                // в якому ми знаходимо потрібну людина за id (це item)
                // та через деструктиризацію розвертаюмо всі поля які там були (...item) та заміняємо значення на протилежне (isBonus: !item.isBonus)
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

    // ----------------------------------------------------------------
    // Коли йде зміна значення у input то ми зчитуємо ці значення та перезаписуємо відповідно їх state
    // ----------------------------------------------------------------
    onChangeInpName = (e) => {
        this.setState(({dataInp}) =>{
            return{
                inpName: e.target.value
            }
        })
    }

    // ----------------------------------------------------------------
    // Коли йде зміна значення у input то ми зчитуємо ці значення та перезаписуємо відповідно їх state
    // ----------------------------------------------------------------
    onChangeInpSalary = (e) => {
        this.setState(({dataInp}) =>{
            return{
                inpSalary: e.target.value
            }
        })
    }

    // ----------------------------------------------------------------
    // додаємо нового користувача до списку
    // ----------------------------------------------------------------
    addItem = (e) => {
        // перевірка на пусті поля, щоб не додати у список пусту строку
        if(this.state.inpName && this.state.inpSalary) {

            // створюємо шаблон обєкту та заповняємо його інфою, яка прийшла зі стейту інпутів
            const objItem = {
                id: this.state.data.length + Math.floor(Math.random() * 1000),
                name: `${this.state.inpName}`,
                salary:`${this.state.inpSalary}`,
                isBonus: false
            };

            // створюємо новий масив в який додаємо попередній масив та новий обєкт у кінець
            let dataList = [...this.state.data, objItem];

            // оновлюємо stste загального списку
            this.setState(({data}) =>{
                return{
                    data: dataList
                }
            })

            // очищаємо поля інпутів
            this.resetFormField();
        }

    }

    // ----------------------------------------------------------------
    // reset input fields
    // ----------------------------------------------------------------
    resetFormField = () => {
        this.setState(({inpName}) =>{
            return{
                inpName: '',
                inpSalary: '',
            }
        })
    }


    render() {

        return (
            <div className="app">
                <Header
                    title = {this.state.title}
                    countEmployee ={this.state.data.length}
                    countEmployeesBonus = {this.state.counterEmployeesBonus}
                />

                <div className='addItemWrap'>
                    <input className='addItemName' type='text' placeholder='Enter Name' onChange={this.onChangeInpName} value={this.state.inpName}/>
                    <input className='addItemSalary' type='text' placeholder='Enter Salary' onChange={this.onChangeInpSalary} value={this.state.inpSalary}/>
                    <button className='addItemBtn' onClick={this.addItem}> add </button>
                </div>

                {/* Умова, тернальний оператор. Якщо список пустий то показуємо повідомлення */}
                {
                    this.state.data.length?
                    <List
                        data={this.state.data}
                        onDelete={this.deleteItem}
                        onToggleAddBonus={this.ToggleAddBonus}
                    />:
                    <p className='emptyList'> List is empty! </p>
                }

            </div>
        );
    }
}

export default App;
