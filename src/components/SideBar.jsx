import "../css/SideBar.css";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import AddIcon from "@material-ui/icons/Add";

const SideBar = (props) => {
  return (
    <>
      <div id="profileWrapper" className="flex-column align-items-center">
        <div className="card mb-1">
          <div className="imageWrapper">
            <div id="cardTop"></div>
            <div id="idImage">
              <img src={props.userInfo.image} alt="ProfileImage" />
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
            <p className="my-1">Access exclusive tools & insights</p>
            <p className="my-1">
              <span className="my-2" id="premiumIcon"></span>
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
            <li>Groups</li>
            <div className="d-flex justify-content-between">
              <li>Events</li>
              <span>
                <AddIcon id="bookmark" className="mx-0" />
              </span>
            </div>
            <li>Followed Hashtags</li>
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
