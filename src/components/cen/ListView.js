import "../../css/List.css";

import { useEffect, useState } from "react";

import ListContent from "./ListContent";
import ListRight from "./ListRight";
import SideBar from "./SideBar";
export default function ListView() {
  const [noteIndex, setNoteIndex] = useState(0);
  useEffect(() => {
    console.log("useEffect:", noteIndex);
  }, [noteIndex]);

  return (
    <div className="ListView">
      <SideBar noteIndex={noteIndex} setNoteIndex={setNoteIndex} />
      <ListContent noteIndex={noteIndex} />
      <ListRight />
    </div>
  );
}
