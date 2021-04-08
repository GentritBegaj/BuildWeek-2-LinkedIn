import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/SmsRounded";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
const avatarUrl =
  "https://image.freepik.com/vector-gratis/avatar-cabeza-perro-lindo_79416-67.jpg";
function Header() {
  return (
    <Container fluid className="main_header">
      <Row className="header">
        <Col className="header_left">
          <Link to="/">
            <div className="search">
              <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" />
              <SearchIcon style={{ backgroundColor: "#eef3f8" }} />
              <input type="text" placeholder="Search" />
            </div>
          </Link>
          <div className="header_right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <Link to="/me">
              <HeaderOption avatar={avatarUrl} title="Me" />
            </Link>
            <HeaderOption
              className="border"
              Icon={ViewModuleIcon}
              title="Work"
            />
            <HeaderOption title="Try Premium Free for 1 Month" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
