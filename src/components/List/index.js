import React from "react";
import './style.css'
import ListItem from "../ListItem";

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log('Компонент List додається в DOM');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Компонент List оновлюється в DOM');
    }

    componentWillUnmount() {
        console.log('викликається у List перед видаленням із DOM');
    }

    render() {
        // деструктуризація пропсів в компоненті
        const {data, onDelete, onAddBonus} = this.props

        // у циклі формуємо список елементів
        const elements = data.map(item => {
            // деструктуризація пропсів для кожного item окремо
            const {id, ...itemProps} = item;

            let classNameItem = ''
            if(itemProps.isBonus){
                console.log(555555);
                classNameItem = 'bonus'
            }
            return (
                <div className={classNameItem}>
                    <ListItem
                        className={classNameItem}
                        key={id}
                        {...itemProps}
                        onDelete={() => onDelete(id)}
                        onAddBonus={() => onAddBonus(id)}
                    />
                </div>
            )
        })

        return (
            <div className='listWrap'>
                {elements}
            </div>
        );
    }
}

export default List;
