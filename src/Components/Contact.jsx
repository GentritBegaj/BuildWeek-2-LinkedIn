import React, { Component } from "react";
import { Container, Image, Row } from "react-bootstrap";
import { withRouter } from "react-router";
import "./Contact.css";

class Contact extends Component {
  render() {
    // console.log("RRRRRRRRRRRRRRRRRRR", this.props);

    return (
      <Container fluid className="contact-wrapper">
        <Row>
          <div className="image-wrapper">
            <Image
              src={this.props.user.image}
              alt="img"
              onClick={() =>
                this.props.history.push(`/user/${this.props.user._id}`)
              }
            />
          </div>
          <div className="name-wrapper">
            <h6>{this.props.user.name}</h6>
            <p>{this.props.user.title.slice(0, 40)}</p>
            <div className="button-wrapper">
              <button
                className="btn  btn-outline text-muted contact-button"
                onClick={() =>
                  this.props.history.push(`/user/${this.props.user._id}`)
                }
              >
                Connect
              </button>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}
export default withRouter(Contact);
