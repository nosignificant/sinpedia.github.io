import "../../css/App.css";

import GalleryView from "./GalleryView";
import ListView from "./ListView";

export default function Center({ selectedHeadIndex }) {
  if (selectedHeadIndex === 0)
    return (
      <div className="Center">
        <ListView />
      </div>
    );
  if (selectedHeadIndex === 1)
    return (
      <div className="Center">
        <GalleryView />
      </div>
    );
}
