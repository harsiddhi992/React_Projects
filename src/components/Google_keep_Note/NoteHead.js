import React from "react";
import "./Notes.css";
import NotesIcon from '@mui/icons-material/Notes';

const NoteHead = () => {
  return (
    <>
      <div className="d-flex w-100 p-0 mb-4 heading">
        <NotesIcon fontSize="large" className="icon_style"/>
        <h1>Harsiddhi Notes</h1>
        {/* <button className='btn btn-primary'>hi</button> */}
      </div>
    </>
  );
};

export default NoteHead;
