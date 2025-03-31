import MemoContainer from "./MemoContainer";

function SideBar({ noteTitle, noteSelected, setNoteSelected }) {
  return (
    <div className="SideBar">
      <noteList
        noteTitle={noteTitle}
        noteSelected={noteSelected}
        setNoteSelected={setNoteSelected}
      />
      <MemoContainer />
    </div>
  );
}

export default SideBar;
