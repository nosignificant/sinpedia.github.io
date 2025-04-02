import "../../css/List.css";

import { useState } from "react";

import MemoContainer from "./MemoContainer";
import SideBar from "./SideBar";

export default function ListView({ selectedHeadIndex }) {
  const noteTitle = "note 1";
  const [noteSelected, setNoteSelected] = useState([noteTitle]);
  return (
    <div className="ListView">
      <SideBar
        noteTitle={noteTitle}
        noteSelected={noteSelected}
        setNoteSelected={setNoteSelected}
      />
      <MemoContainer />
    </div>
  );
}
