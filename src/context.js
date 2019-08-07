
import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "Suraj Thapa",
                email: "stsurajst@gmail.com",
                address: "Kathmandu"
            },
            {
                id: 2,
                name: "Kiran Thapa",
                email: "kiran@gmail.com",
                address: "Kathmandu"
            },
            {
                id: 3,
                name: "Manoj Thapa",
                email: "monoj@gmail.com",
                address: "Kathmandu"
            }
        ]
    };

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;