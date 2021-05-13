import React, { useEffect, useState } from "react";
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
import PersonIcon from "@material-ui/icons/Person";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
function Header() {
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = async () => {
    try {
      let response = await fetch(`https://linkedinnn.herokuapp.com/users/me/`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlkMDNmMTVjNGFmNDAwMTUzMTUxY2MiLCJpYXQiOjE2MjA5MDI4OTgsImV4cCI6MTYyMjExMjQ5OH0.LaW9QgH1-d_v2mreBcgLshLoZbV-hdHdFgK2MQwzZxU",
        },
      });

      if (response.ok) {
        let data = await response.json();
        setUserInfo(data);
      } else {
        console.log("Error while fetching profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <Container fluid className="main_header">
      <Row className="header">
        <Col className="header_left">
          <div className="search">
            <Link to="/">
              <img
                draggable="false"
                src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
              />
            </Link>
            <SearchIcon style={{ backgroundColor: "#eef3f8" }} />
            <input type="text" placeholder="Search" />
          </div>
          <Link to="/me">
            <div id="small_icon">
              <PersonIcon />
            </div>
          </Link>
          <div className="header_right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <div className="border-right">
              <Link to="/me">
                <HeaderOption avatar={userInfo.image} title="Me" />
              </Link>
            </div>
            <HeaderOption
              changing
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
