import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import "./ExperienceItem.css";
import { format, parseISO } from "date-fns";
import EditExperienceModal from "./EditExperienceModal";

const ExperienceItem = (props) => {
  console.log("PROOOOOOPS", props);
  const [modalShow, setModalShow] = useState(false);
  const {
    area,
    company,
    description,
    endDate,
    role,
    startDate,
    username,
    _id,
  } = props.experience;
  return (
    <>
      <div className="experience-item">
        <div className="d-flex">
          <div className="experience-item-image">
            <img
              src="https://media-exp1.licdn.com/dms/image/C560BAQGspgnhbJjrpg/company-logo_100_100/0/1583169861901?e=1625702400&v=beta&t=wYm1ZAAejMJ771tbQC371YQaBc4V3U5FXlBZxwcW14A"
              alt="experience-img"
            />
          </div>

          <div className="experience-item-text">
            <h5>{role}</h5>
            <p>
              {format(parseISO(startDate), "MM/yyyy")} -{" "}
              {format(parseISO(endDate), "MM/yyyy")}
            </p>
            <p>{description}</p>
            <p>London, United Kingdom</p>
          </div>
        </div>
        <div className="experience-item-edit-icon">
          <CreateIcon onClick={() => setModalShow(true)} />
        </div>
      </div>
      <EditExperienceModal
        experience={props.experience}
        show={modalShow}
        id={_id}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ExperienceItem;
