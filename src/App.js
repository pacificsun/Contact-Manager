import React from "react";

import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header branding="Contact Manager" />
      <Contact
        name="SurajThapa"
        email="stsurajst@gmail.com"
        address="kathmnadu"
      />
    </div>
  );
}

export default App;
