import Gallery from "./Gallery";
import List from "./List";
import MemoContainer from "./MemoContainer";

export default function Center({ selectedHeadIndex }) {
  if (selectedHeadIndex === 0)
    return (
      <div className="Center">
        <List />
      </div>
    );
  if (selectedHeadIndex === 1)
    return (
      <div className="Center">
        <Gallery />
      </div>
    );
}
