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
        const {data, onDelete} = this.props

        // у циклі формуємо список елементів
        const elements = data.map(item => {
            // деструктуризація пропсів для кожного item окремо
            const {id, ...itemProps} = item;
            return (
                <ListItem
                    key={id}
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                />
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
