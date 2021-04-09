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
    console.log(this.props.userInfo._id);
    console.log(this.state.file);
    let formData = new FormData();
    formData.append("profile", this.state.file);

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.userInfo._id}/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMTk1ZTZmZDIyODAwMTUzZmRiYWYiLCJpYXQiOjE2MTc2OTcxMTksImV4cCI6MTYxODkwNjcxOX0.Cf16ByRhKv9VhM7o3j_Z2zkXHkrjpT88O9M26Cy9yN8",
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
    console.log("PROOOPS", this.props);
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