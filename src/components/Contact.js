import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    const { name, email, address } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>{email}</li>
          <li>{address}</li>
        </ul>
      </div>
    );
  }
}
// Contact.prototype ={
//     name:
// }

export default Contact;
