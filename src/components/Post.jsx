import React, { useState } from "react";
import "./Post.css";
import ShowMoreText from "react-show-more-text";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import InputOption from "./InputOption";
import AddComment from "./AddComment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditPostModal from "./EditPostModal";

const Post = ({
  userInfo,
  postId,
  name,
  surname,
  postUserId,
  description,
  postBody,
  profilePic,
  postImage,
  editPosts,
  deletePosts,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const executeOnClick = () => {
    setExpanded(true);
  };
  return (
    <>
      <div className="post-wrapper">
        <div className="post-header-wrapper d-flex justify-content-between">
          <div className="d-flex justify-content-between">
            <div className="profilePic-wrapper">
              <img src={profilePic} alt="profile-pic" width="50px" />
            </div>
            <div className="name-and-description-wrapper">
              <h5>
                {name} {surname}
              </h5>
              <p>{description}</p>
            </div>
          </div>
          <div>
            {userInfo._id === postUserId && (
              <MoreHorizIcon
                onClick={() => setModalShow(true)}
                postId={postId}
                style={{ cursor: "pointer" }}
              />
            )}
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
      <EditPostModal
        postId={postId}
        postBody={postBody}
        show={modalShow}
        onHide={() => setModalShow(false)}
        editPosts={editPosts}
        deletePosts={deletePosts}
      />
    </>
  );
};

export default Post;
