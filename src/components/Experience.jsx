import React from "react";
import "./Experience.css";
<<<<<<< Updated upstream
import CreateIcon from "@material-ui/icons/Create";

const Experience = () => {
  return (
    <div className="experience-wrapper">
      <div className="d-flex">
        <p style={{ fontSize: "24px" }}>Experience</p>
      </div>
      <div className="experience-item">
        <div className="d-flex">
          <div className="experience-item-image">
            <img
              src="https://media-exp1.licdn.com/dms/image/C560BAQGspgnhbJjrpg/company-logo_100_100/0/1583169861901?e=1625702400&v=beta&t=wYm1ZAAejMJ771tbQC371YQaBc4V3U5FXlBZxwcW14A"
              alt="experience-img"
=======
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

  editUserExperience = async (experience, id) => {
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
>>>>>>> Stashed changes
            />
          </div>

          <div className="experience-item-text">
            <h5>Researcher</h5>
            <h6>University of Hertfordshire</h6>
            <p>Sep 2019 - Aug 2020 - 1yr</p>
            <p>London, United Kingdom</p>
          </div>
        </div>
        <div className="experience-item-edit-icon">
          <CreateIcon />
        </div>
      </div>
    </div>
  );
};

export default Experience;
