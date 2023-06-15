import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import NoteHead from "./components/Google_keep_Note/NoteHead";
import AddNote from "./components/Google_keep_Note/AddNote";
import Notes from "./components/Google_keep_Note/Notes";
import StateWise from "./components/Covid_Project/StateWise";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNotes = (note) => {
    // alert("button click");
    setAddItem((oldData) => {
      return [...oldData, note];
    });
    // note etle amte pass aryu lem ke user je pan data add karse e to levo padse ne etle
    console.log(note);
  };

  const onDelete = (theId) => {
    setAddItem((prevDatas) =>
      prevDatas.filter((currentData, indx) => {
        return indx !== theId;
      })
    );
  };

  return (
    <>
      <div className="note_project">
        <NoteHead />
        <AddNote passNote={addNotes} />
        {/* <Notes /> */}
        {addItem.map((curVal, index) => {
          return (
            <Notes
              key={index}
              myId={index}
              myTitle={curVal.title}
              myContent={curVal.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>

      {/* Projetc Name : Coid Data using live API start */}
      <div className="Covid_project">
        {/* <StateWise /> */}
      </div>
    </>
  );
};

export default App;
