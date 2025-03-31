import Gallery from "./Gallery";
import List from "./List/List";

export default function Center({ selectedHeadIndex }) {
  if (selectedHeadIndex === 0) return <List />;
  if (selectedHeadIndex === 1) return <Gallery />;
}
