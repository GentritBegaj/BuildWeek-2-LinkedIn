import React from "react";
import "./AddComment.css";

const AddComment = ({ profilePic }) => {
  return (
    <div className="add-comment-wrapper">
      <img src={profilePic} alt="profile-pic" />
      <form>
        <input type="text" placeholder="Add a comment..." />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddComment;
