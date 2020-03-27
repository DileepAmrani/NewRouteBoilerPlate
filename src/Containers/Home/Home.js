import React from "react";
import { Navbar } from "../../Components";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar login="Login" />
        <h1> HomePage </h1>
      </div>
    );
  }
}

export default Home;
