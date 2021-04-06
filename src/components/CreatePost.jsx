import React, { Component } from "react";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import DateRangeIcon from "@material-ui/icons/DateRange";
import BallotIcon from "@material-ui/icons/Ballot";
import "./CreatePost.css";

export default class CreatePost extends Component {
  render() {
    return (
      <div className="start-post-wrapper">
        <div className="input-and-picture-div">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQEa6k5GfxuAlg/profile-displayphoto-shrink_100_100/0/1519850458991?e=1623283200&v=beta&t=6b5H71nr2Vkt9dVr6hka1o5hZz5ouWzUmx-qNan9ddo"
            alt="profile-pic"
          />
          <form>
            <input type="text" placeholder="Start a post" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="input-options-div">
          <InputOption Icon={ImageIcon} title={"Photo"} color="#7085F9" />
          <InputOption Icon={YouTubeIcon} title={"Video"} color="#E7A33E" />
          <InputOption Icon={DateRangeIcon} title={"Event"} color="#C0CBCD" />
          <InputOption
            Icon={BallotIcon}
            title={"Write Article"}
            color="#7FC15E"
          />
        </div>
      </div>
    );
  }
}
