import React from "react";

import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header branding="Contact Manager" />
      <div className="container">
        <Contact
          name="Suraj Mager "
          email="stsurajst@gmail.com"
          address="kathmnadu"
        />
        <Contact
          name="kiran Magar"
          email="kiran@gmail.com"
          address="Lalitpur"
        />
      </div>
    </div>
  );
}

export default App;
