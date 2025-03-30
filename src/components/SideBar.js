import MemoList from "./MemoCon/MemoList";
import SideBarHeader from "./SideBarHeader";
import SideBarFooter from "./SideBarFooter";

function SideBar({
  memos,
  addMemo,
  selectedMemoIndex,
  setSelectedMemoIndex,
  deleteMemo,
}) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <SideBarFooter onClick={addMemo} />
    </div>
  );
}

export default SideBar;
