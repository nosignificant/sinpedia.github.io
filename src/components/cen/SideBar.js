import "../../css/List.css";

export default function SideBar({ noteTitle, noteSelected, setNoteSelected }) {
  return (
    <div className="SideBar">
      this is list sidebar
      <noteList
        noteTitle={noteTitle}
        noteSelected={noteSelected}
        setNoteSelected={setNoteSelected}
      />
    </div>
  );
}
