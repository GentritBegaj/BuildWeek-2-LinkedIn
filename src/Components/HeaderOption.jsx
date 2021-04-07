import React from "react";
import "../HeaderOption.css";
import DropDown from "./DropDown";
import { Avatar } from "@material-ui/core";
function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="header_option">
      {Icon && <Icon className="options_icon" />}
      {avatar && <Avatar className="options_icon" src={avatar} />}
      <div className="d-flex" style={{ background: "white" }}>
        {" "}
        <h3 className="option_title">{title}</h3>
        {avatar && <DropDown />}
      </div>
    </div>
  );
}

export default HeaderOption;
