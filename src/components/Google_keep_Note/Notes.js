import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Notes = (props) => {
  const delteNote = () => {
    props.deleteItem(props.myId);
  };
  return (
    <>
      <div className="note">
        <h1>{props.myTitle}</h1>
        <p>{props.myContent}</p>
        <button className="btn" onClick={delteNote}>
          <DeleteIcon />
        </button>
      </div>
    </>
  );
};

export default Notes;
