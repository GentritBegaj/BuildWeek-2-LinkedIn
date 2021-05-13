import React from "react";
import ClearIcon from "@material-ui/icons/Clear";

const SingleComment = ({ comment, deleteComment, userInfo, postId }) => {
  const styleForIcon = {
    height: "15px",
  };

  return (
    <div
      style={{
        borderRadius: "10px",
        padding: "15px",
        backgroundColor: "silver",
        marginBottom: "2px",
      }}
    >
      <div className="d-flex justify-content-between">
        <p>{comment.comment}</p>

        <ClearIcon
          style={styleForIcon}
          onClick={() => deleteComment(postId, userInfo._id, comment._id)}
        />
      </div>
    </div>
  );
};

export default SingleComment;
