import React, { Component } from "react";
import Contact from "./Contact";
import "./Contacts.css";

export default class Contacts extends Component {
  render() {
    return (
      <div className="contacts-wrapper">
        {this.props.users.map((user) => (
          <Contact key={user._id} user={user} />
        ))}
      </div>
    );
  }
}
