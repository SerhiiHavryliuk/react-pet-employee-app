import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import NewEmployee from "./components/NewEmployee";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <NewEmployee/>
                <List/>
            </div>
        );
    }
}

export default App;