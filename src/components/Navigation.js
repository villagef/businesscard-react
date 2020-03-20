import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";

export class Navigation extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <Menu>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="skills" className="menu-item" href="/skills">
            Skills
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
        </Menu>
      </React.Fragment>
    );
  }
}

export default Navigation;
