import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const AddNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const MyInputEvent = (event) => {
    console.log(event.target.value);
    // Note :- const pchi je value and name lakho cho e aaj rite lakhvu myvalue,myName eva koi bija name na apva
    // const value = event.target.value;
    // const name = event.target.name;

    // we can also take value and name which user will enter Using object destructuring as below:
    const { value, name } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    console.log("button click in addnote component");
    props.passNote(note);

    // for clear input field after add data
    setNote({
      title: "",
      content: "",
    });
  };
  return (
    <>
      <div className="create_note">
        <input
          className="m-2 w-50 input_style"
          type="text"
          placeholder="Title"
          onChange={MyInputEvent}
          value={note.title}
          name="title"
        />
        <textarea
          className="m-2 w-50 input_style"
          placeholder="write a note here.."
          onChange={MyInputEvent}
          value={note.content}
          name="content"
          rows="5"
          column="3"
        ></textarea>
        <button className="btn" onClick={addEvent}>
          <AddCircleIcon fontSize="large" className="add_icon" />
        </button>
      </div>
    </>
  );
};

export default AddNote;
