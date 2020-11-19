import React, { useReducer } from "react";

const CommentState = (props) => {
  const initialState = {
    artistId: null,
  };

  return (
    <CommentContext.Provider
      value={{
        artistId: null,
      }}
    >
      {props.children}{" "}
    </CommentContext.Provider>
  );
};

export default CommentState;
