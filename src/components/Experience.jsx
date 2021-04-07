import React from "react";
import "./Experience.css";
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
