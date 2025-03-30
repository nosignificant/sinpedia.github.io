import "./MemoContainer.css";

function MemoContainer({ memo, setMemo }) {
  if (memo === undefined) {
    return (
      <div>
        <h1>no memo</h1>
        <h2>please add new memo</h2>
      </div>
    );
  }

  return (
    <div className="MemoContainer">
      <div>
        <input
          type="text"
          className="MemoContainer_title"
          value={memo.title}
          onChange={(e) => {
            setMemo({
              ...memo,
              title: e.target.value,
              updateAt: new Date().getTime(),
            });
          }}
        />
      </div>

      <div>
        <textarea
          className="MemoContainer_content"
          value={memo.content}
          onChange={(e) => {
            setMemo({
              ...memo,
              content: e.target.value,
              updateAt: new Date().getTime(),
            });
          }}
        />
      </div>
    </div>
  );
}

export default MemoContainer;
