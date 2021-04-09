import React, { Component } from "react";
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap";
import "./Me.css";
import Experience from "./Experience";
import MeSidebar from "./MeSidebar";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import PersonalDashboard from "./PersonalDashboard";
import Footer from "./Footer";

export default class Me extends Component {
  state = {
    users: [],
    userInfo: {},
    experiences: [],
    experience: {},
  };

  getUsers = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMTk1ZTZmZDIyODAwMTUzZmRiYWYiLCJpYXQiOjE2MTc2OTcxMTksImV4cCI6MTYxODkwNjcxOX0.Cf16ByRhKv9VhM7o3j_Z2zkXHkrjpT88O9M26Cy9yN8",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ users: data.slice(0, 10) });
        console.log("UUUUUUUUUS", this.state.users);
      } else {
        console.log("Error while fetching users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  getUserInfo = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMTk1ZTZmZDIyODAwMTUzZmRiYWYiLCJpYXQiOjE2MTc2OTcxMTksImV4cCI6MTYxODkwNjcxOX0.Cf16ByRhKv9VhM7o3j_Z2zkXHkrjpT88O9M26Cy9yN8",
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        this.setState({ userInfo: data });
        console.log("USERINFO", this.state.userInfo);
        this.getUserExperiences(data._id);
      } else {
        console.log("Error while fetching profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  getUserExperiences = async (id) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/606c195e6fd22800153fdbaf
/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMTk1ZTZmZDIyODAwMTUzZmRiYWYiLCJpYXQiOjE2MTc2OTcxMTksImV4cCI6MTYxODkwNjcxOX0.Cf16ByRhKv9VhM7o3j_Z2zkXHkrjpT88O9M26Cy9yN8",
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        this.setState({ experiences: data });
        console.log("EXPERIENCES", this.state.experiences);
      } else {
        console.log("Error while fetching experiences");
      }
    } catch (error) {
      console.log(error);
    }
  };

  addExperience = async (experience, pic) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.state.userInfo._id}/experiences`,
        {
          method: "POST",
          body: JSON.stringify(experience),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMTk1ZTZmZDIyODAwMTUzZmRiYWYiLCJpYXQiOjE2MTc2OTcxMTksImV4cCI6MTYxODkwNjcxOX0.Cf16ByRhKv9VhM7o3j_Z2zkXHkrjpT88O9M26Cy9yN8",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("RESPONSEEEEEEEEBODYYYYY", data);

        await this.addExperiencePhoto(data._id, pic);

        await this.getUserExperiences();
      } else {
        console.log("Error while adding experience");
      }
    } catch (error) {
      console.log(error);
    }
  };

  editUserExperience = async (experience, experienceId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.state.userInfo._id}/experiences/${experienceId}`,
        {
          method: "PUT",
          body: JSON.stringify(experience),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMTk1ZTZmZDIyODAwMTUzZmRiYWYiLCJpYXQiOjE2MTc2OTcxMTksImV4cCI6MTYxODkwNjcxOX0.Cf16ByRhKv9VhM7o3j_Z2zkXHkrjpT88O9M26Cy9yN8",
          },
        }
      );
      if (response.ok) {
        this.getUserExperiences();
      } else {
        console.log("Error while editing experience");
      }
    } catch (error) {
      console.log(error);
    }
  };

  deleteUserExperience = async (experienceId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.state.userInfo._id}/experiences/${experienceId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMTk1ZTZmZDIyODAwMTUzZmRiYWYiLCJpYXQiOjE2MTc2OTcxMTksImV4cCI6MTYxODkwNjcxOX0.Cf16ByRhKv9VhM7o3j_Z2zkXHkrjpT88O9M26Cy9yN8",
          },
        }
      );
      if (response.ok) {
        this.getUserExperiences();
      } else {
        console.log("Error while deleting experience");
      }
    } catch (error) {
      console.log(error);
    }
  };

  addExperiencePhoto = async (experienceId, pic) => {
    console.log("in add exp photo", experienceId, pic);
    let formData = new FormData();
    formData.append("experience", pic);

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.state.userInfo._id}/experiences/${experienceId}/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMTk1ZTZmZDIyODAwMTUzZmRiYWYiLCJpYXQiOjE2MTc2OTcxMTksImV4cCI6MTYxODkwNjcxOX0.Cf16ByRhKv9VhM7o3j_Z2zkXHkrjpT88O9M26Cy9yN8",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        console.log("PICTURE ADDED");
      } else {
        console.log("ERROR WHILE ADDING PICTURE");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevState.userInfo._id !== this.state.userInfo._id) {
  //     this.getUserExperiences();
  //   }
  // };

  componentDidMount = () => {
    this.getUserInfo();
    this.getUsers();
  };

  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <Container className="mb-5 fluid p-0">
          <Row>
            <Col xs={12} md={8} className="pr-0">
              <div className="profile-wrapper">
                <div className="header-image-wrapper">
                  <div className="profile-pic-wrapper">
                    <img
                      src={this.state.userInfo.image}
                      alt="profile-pic"
                      width="100px"
                    />
                  </div>
                </div>
                <div className="personal-information-div">
                  <div className="name-wrapper">
                    <h4>
                      {this.state.userInfo.name} {this.state.userInfo.surname}
                    </h4>
                    <p>{this.state.userInfo.bio}</p>
                  </div>
                  <div className="job-description-wrapper">
                    <p>{this.state.userInfo.title}</p>
                  </div>
                  <div className="location-wrapper">
                    {this.state.userInfo.area}
                  </div>
                  <div className="profile-buttons mt-3  d-flex">
                    <Button
                      variant="primary"
                      className="text-light mr-2"
                      style={{ borderRadius: "20px" }}
                    >
                      Open to{" "}
                    </Button>
                    <Button
                      variant={"light"}
                      className="text-muted mr-2"
                      style={{ borderRadius: "20px" }}
                    >
                      Add profile section
                    </Button>
                    <Button
                      variant={"light"}
                      className="text-muted"
                      style={{ borderRadius: "20px" }}
                    >
                      More...
                    </Button>
                  </div>
                </div>
              </div>

              <div className="profile-strength-wrapper mt-3">
                <div className="mb-3 profile-strength-header d-flex justify-content-between">
                  <h5 className="font-weight-normal">
                    Profile Strength:{" "}
                    <span className="font-weight-bold">Intermediate</span>
                  </h5>
                  <KeyboardArrowDownIcon
                    style={{ backgroundColor: "transparent" }}
                  />
                </div>
                <div>
                  <ProgressBar now={70} />
                </div>
              </div>

              <PersonalDashboard />
              <Experience
                deleteUserExperience={this.deleteUserExperience}
                editUserExperience={this.editUserExperience}
                addExperience={this.addExperience}
                getUserExperiences={this.getUserExperiences}
                getUserInfo={this.getUserInfo}
                users={this.state.users}
                userInfo={this.state.userInfo}
                experiences={this.state.experiences}
              />
            </Col>
            <Col xs={12} md={4} className="pr-0">
              <MeSidebar users={this.state.users} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}
