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
import { withRouter } from "react-router";
import { ReactionBarSelector } from "@charkour/react-reactions";
import { SlackSelector } from "@charkour/react-reactions";
import Moment from "react-moment";
const Post = ({
  updatedAt,
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
  history,
  comments,
  getPosts,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const executeOnClick = () => {
    setExpanded(true);
  };
  const [reactionsShow, setReactionsShow] = useState(false);

  return (
    <>
      <div className="post-wrapper">
        <div className="post-header-wrapper d-flex justify-content-between">
          <div className="d-flex justify-content-between">
            <div className="profilePic-wrapper">
              <img
                draggable="false"
                src={profilePic}
                alt="profile-pic"
                style={{ borderRadius: "50%" }}
                height="55"
                width="55"
                onClick={() => history.push(`/user/${postUserId}`)}
              />
            </div>
            <div className="name-and-description-wrapper">
              <h5>
                <strong>
                  {name} {surname}
                </strong>
              </h5>

              <p style={{ marginTop: "-7px" }}>{description}</p>

              <Moment className="momentpos" fromNow>
                {updatedAt}
              </Moment>
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
            lines={3}
            more="Show more"
            less="Show less"
            onClick={executeOnClick}
            expanded={false}
            width={500}
          >
            {postBody}
          </ShowMoreText>
        </div>
        <div className="postImage-wrapper">
          {postImage && (
            <img draggable="false" src={postImage} alt="post-img" />
          )}
        </div>
        <div class="reactions-numerator"></div>
        <div className="reactions-wrapper container-fluid my-2">
          <div className="row">
            <div className="col-3 ">
              <div className="newdiv">
                {reactionsShow && (
                  <div className="sel">
                    <ReactionBarSelector
                      iconSize="20px"
                      reactions={[
                        {
                          label: "like",
                          node: (
                            <img src="https://static-exp1.licdn.com/sc/h/36xg5gxpnrq56ebbj1wla5x2n" />
                          ),
                        },
                        {
                          label: "insightful",
                          node: (
                            <img src="https://static-exp1.licdn.com/sc/h/9wjxk9w5wguhpev3dm13672dq" />
                          ),
                        },
                        {
                          label: "celebrate",
                          node: (
                            <img src="https://static-exp1.licdn.com/sc/h/6xvr3hrj4c24dak8r7z64pgj3" />
                          ),
                        },
                        {
                          label: "love",
                          node: (
                            <img src="https://static-exp1.licdn.com/sc/h/7rghal44zenlhabcjrr4ow7gk" />
                          ),
                        },
                        {
                          label: "celebrate",
                          node: (
                            <img src="https://static-exp1.licdn.com/sc/h/1zk00q5n4o055s08tjpy4rswf" />
                          ),
                        },

                        {
                          label: "curious",
                          node: (
                            <img src="https://static-exp1.licdn.com/sc/h/3tn3hb1r3nls9c4ddwbg2pymr" />
                          ),
                        },
                      ]}
                    />
                  </div>
                )}
                <div onClick={() => setReactionsShow(!reactionsShow)}>
                  <img
                    style={{ marginRight: "20px" }}
                    height="30"
                    src="https://media.discordapp.net/attachments/841212509343580162/842580036922245180/icons8-facebook-like-64.png"
                    alt="likeico"
                  />
                </div>
              </div>
            </div>
            <div className="col-3 ">
              <img
                style={{ marginRight: "20px" }}
                height="30"
                src="https://media.discordapp.net/attachments/841212509343580162/842580604624961546/icons8-topic.gif"
                alt="likeico"
              />
            </div>
            <div className="col-3 ">
              <img
                style={{ marginRight: "20px" }}
                height="30"
                src="https://media.discordapp.net/attachments/841212509343580162/842581087586222090/icons8-connect.gif"
                alt="likeico"
              />
            </div>
            <div className="col-3 ">
              <img
                style={{ marginRight: "20px" }}
                height="30"
                src="https://media.discordapp.net/attachments/841212509343580162/842581546057203762/icons8-chat-message.gif"
                alt="likeico"
              />
            </div>
          </div>
        </div>
        <AddComment
          userInfo={userInfo}
          postId={postId}
          comments={comments}
          getPosts={getPosts}
        />
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

export default withRouter(Post);
