import React, { useState } from "react";
import "./Post.css";
import ShowMoreText from "react-show-more-text";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import InputOption from "./InputOption";
import AddComment from "./AddComment";

const Post = ({ name, description, postBody, profilePic, postImage }) => {
  const [expanded, setExpanded] = useState(false);
  const executeOnClick = () => {
    setExpanded(true);
  };
  return (
    <div className="post-wrapper">
      <div className="post-header-wrapper">
        <div className="profilePic-wrapper">
          <img src={profilePic} alt="profile-pic" width="50px" />
        </div>
        <div className="name-and-description-wrapper">
          <h5>{name}</h5>
          <p>{description}</p>
        </div>
      </div>
      <div className="post-body">
        <ShowMoreText
          lines={1}
          more="Show more"
          less="Show less"
          onClick={executeOnClick}
          expanded={false}
          width={1000}
        >
          {postBody}
        </ShowMoreText>
      </div>
      <div className="postImage-wrapper">
        <img src={postImage} alt="post-img" />
      </div>
      <div class="reactions-numerator"></div>
      <div className="reactions-wrapper container-fluid">
        <div className="row">
          <div className="col-3 ">
            <InputOption Icon={ThumbUpAltIcon} title={"Like"} />
          </div>
          <div className="col-3 ">
            <InputOption Icon={ChatIcon} title={"Comment"} />
          </div>
          <div className="col-3 ">
            <InputOption Icon={ShareIcon} title={"Share"} />
          </div>
          <div className="col-3 ">
            <InputOption Icon={SendIcon} title={"Send"} />
          </div>
        </div>
      </div>
      <AddComment profilePic={profilePic} />
    </div>
  );
};

export default Post;
