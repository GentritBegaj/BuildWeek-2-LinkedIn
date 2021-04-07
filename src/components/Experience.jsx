import React from "react";
import "./Experience.css";
import ExperienceItem from "./ExperienceItem";
import AddIcon from "@material-ui/icons/Add";
import AddExperienceModal from "./AddExperienceModal";
class Experience extends React.Component {
  state = {
    userInfo: {},
    experiences: [],
    experience: {},
    modalShow: false,
  };

  getUserInfo = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
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
      } else {
        console.log("Error while fetching profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  getUserExperiences = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/606c195e6fd22800153fdbaf/experiences",
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

  addExperience = async (experience) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/606c195e6fd22800153fdbaf/experiences",
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
        console.log("Experience added");
        this.getUserExperiences();
      } else {
        console.log("Error while adding experience");
      }
    } catch (error) {
      console.log(error);
    }
  };

   editUserExperience = aync (experience) => {
  try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/606c195e6fd22800153fdbaf/experiences",
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
        console.log("Experience added");
        this.getUserExperiences();
      } else {
        console.log("Error while adding experience");
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount = async () => {
    this.getUserInfo();
    this.getUserExperiences();
  };
  render() {
    return (
      <>
        <div className="experience-wrapper">
          <div className="d-flex justify-content-between">
            <p style={{ fontSize: "24px" }}>Experience</p>

            <AddIcon
              onClick={() => this.setState({ modalShow: true })}
              style={{ cursor: "pointer" }}
            />
          </div>
          {this.state.experiences.map((experience) => (
            <>
              <ExperienceItem experience={experience} />
            </>
          ))}
        </div>
        <AddExperienceModal
          style={{ height: "70vh" }}
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          addExperience={this.addExperience}
        />
      </>
    );
  }
}

export default Experience;
