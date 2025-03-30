import "./App.css";
import MemoContainer from "./components/MemoCon/MemoContainer";
import SideBar from "./components/SideBar";
import HeadMenu from "./components/HeadMenu";
import { useState } from "react";

function App() {
  const [memos, setMemos] = useState([
    {
      title: "memo 1",
      content: "This is memo 1",
      createdAt: 0, //시간값
      updateAt: 0, //시간값
    },
    {
      title: "memo 2",
      content: "This is memo 2",
      createdAt: 0, //시간값
      updateAt: 0, //시간값
    },
  ]);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = newMemo;
    setMemos(newMemos);
  };

  const addMemo = () => {
    const now = new Date().getTime();
    setMemos([
      ...memos,
      {
        title: "Untitled",
        content: " ",
        createdAt: now,
        updatedAt: now,
      },
    ]);
    setSelectedMemoIndex(memos.length);
  };

  const deleteMemo = (index) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
    if (index === selectedMemoIndex) {
      setSelectedMemoIndex(0);
    }
  };

  return (
    <div className="App">
      <HeadMenu />
      <SideBar
        memos={memos}
        addMemo={addMemo}
        setSelectedMemoIndex={setSelectedMemoIndex}
        selectedMemoIndex={selectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
