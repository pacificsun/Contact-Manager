
import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action)=>{

  switch(action.type){
      case 'DELETE_CONTACT':
          return {
              ...state, /*suru ma bahira nikalera ani tesmathi operation garna*/
              contacts: state.contacts.filter(contacts=> contacts.id !== action.payload)
          };
      default:
          return state;

  }
};

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
        ],
        dispatch : action => this.setState(state =>reducer(state, action))
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