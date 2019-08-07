import React, { Component } from "react";
import Contact from "./Contact";
import {Consumer} from "../context";

class Contacts extends Component {

  render() {

    return (

        <Consumer>

            { value =>{
              const {contacts} = value;
              return(
                  <React.Fragment> {/*div is replaced by that part*/}
                      {contacts.map(contact => (
                          <Contact
                              key={contact.id}
                              contact={contact}

                          />
                      ))}
                  </React.Fragment>
                  )
              }
            }

        </Consumer>
    );


  }
}

export default Contacts;
