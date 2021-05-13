import React from "react";
import "./AddComment.css";

const AddComment = ({ userInfo }) => {
  return (
    <div className="add-comment-wrapper">
      <img
        style={{ borderRadius: "50%" }}
        height="45"
        width="45"
        draggable="false"
        src={userInfo.image}
        alt="profile-pic"
      />
      <form>
        <input type="text" placeholder="Add a comment..." />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddComment;
