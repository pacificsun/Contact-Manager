import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
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

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
