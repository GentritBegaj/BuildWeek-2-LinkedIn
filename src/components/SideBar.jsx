import "../css/SideBar.css";
import { Col, Row } from "react-bootstrap";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import StopIcon from "@material-ui/icons/Stop";
import AddIcon from "@material-ui/icons/Add";
import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";

const SideBar = (props) => {
  console.log("My props", props);
  return (
    <>
      <div id="profileWrapper" className="flex-column align-itmes-center">
        <div className="card mb-1">
          <div className="imageWrapper">
            <div id="cardTop"></div>
            <div id="idImage">
              <img src={props.userInfo.image} alt="Profile Image" />
            </div>
            <div className="d-flex flex-column align-items-center text-center">
              <p>Welcome, {props.userInfo.name}!</p>
              <a href="#!">Add a photo</a>
            </div>
          </div>
          <div id="network" className="mx-2">
            <div className="d-flex justify-content-between">
              <p>Connections</p>
              <p>25</p>
            </div>
            <p>Grow your network</p>
          </div>
          <div id="premium" className="mx-2">
            <p>Access exclusive tools & insights</p>
            <p>
              <span id="premiumIcon"></span>
              Reactivate Premium
            </p>
          </div>
          <p className="mx-2">
            <span>
              <TurnedInIcon />
            </span>
            My items
          </p>
        </div>
        <div className="links">
          <div>
            <a href="#">Groups</a>
            <div className="d-flex justify-content-between">
              <a href="#">Events</a>
              <span>
                <AddIcon id="bookmark" className="mx-0" />
              </span>
            </div>
            <a href="#">Followed Hashtags</a>
          </div>
          <div>
            <p>Discover more</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SideBar;
