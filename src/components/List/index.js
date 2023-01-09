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
        const {data, onDelete, onToggleAddBonus} = this.props

        // у циклі формуємо список елементів
        const elements = data.map(item => {
            // деструктуризація пропсів для кожного item окремо
            const {id, ...itemProps} = item;

            // Додавання класу до тегу
            let classNameItem = ''
            if(itemProps.isBonus){
                classNameItem = 'bonus'
            }
            return (
                // {...itemProps} - це деструктиразація елементів їз масиві, все що є в комірці масиву розвертається у атрибути
                // дуже зручно так як назви атрибутів не треба прописувати вручну
                <div className={classNameItem} key={id}>
                    <ListItem
                        className={classNameItem}
                        {...itemProps}
                        onDelete={() => onDelete(id)}
                        onToggleAddBonus={() => onToggleAddBonus(id)}
                    />
                </div>
            )
        })

        return (
            <div className='listWrap'>
                {/* тут всю логіку ми винесли до рендеру*/}
                {elements}
            </div>
        );
    }
}

export default List;
