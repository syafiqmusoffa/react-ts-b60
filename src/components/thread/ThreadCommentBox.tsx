import React from "react";

function ThreadCommentBox() {
  return (
    <div className="flex my-6 mx-4  ">
      <input
        type="text"
        className="border-hidden rounded p-2 text-white w-full "
        placeholder="Add a comment..."
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
        Comment
      </button>
    </div>
  );
}

export default ThreadCommentBox;
