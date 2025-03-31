import { useState } from "react";

import memoContainer from "./MemoContainer";
import SideBar from "./SideBar";
export default function List({ selectedHeadIndex }) {
  const noteTitle = "note 1";
  const [noteSelected, setNoteSelected] = useState([noteTitle]);
  return (
    <div>
      this is list view
      <SideBar
        noteTitle={noteTitle}
        noteSelected={noteSelected}
        setNoteSelected={setNoteSelected}
      />
      <memoContainer />
    </div>
  );
}
