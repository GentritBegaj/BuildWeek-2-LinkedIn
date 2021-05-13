import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class AddProfilePictureModal extends Component {
  state = {
    file: null,
  };

  handleInput = (e) => {
    this.setState({ file: e.target.files[0] });
  };

  uploadProfilePic = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("profile", this.state.file);

    try {
      const response = await fetch(
        `${process.env.fetchUrl}/users/${this.props.userInfo._id}/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlkMDNmMTVjNGFmNDAwMTUzMTUxY2MiLCJpYXQiOjE2MjA5MDI4OTgsImV4cCI6MTYyMjExMjQ5OH0.LaW9QgH1-d_v2mreBcgLshLoZbV-hdHdFgK2MQwzZxU",
          },
        }
      );
      if (response.ok) {
        console.log("Profile pic added");
        this.props.getUserInfo();
        this.props.onHide();
      } else {
        console.log("Error while adding profile pic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Modal {...this.props}>
        <form onSubmit={this.uploadProfilePic}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">
              Change profile picture
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center">
              <input type="file" onChange={(e) => this.handleInput(e)} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Upload
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}
