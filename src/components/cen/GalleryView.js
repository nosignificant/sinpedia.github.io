import "../../css/Gallery.css";

import galleryArray from "../../db/gallery.json";
import GalleryCompo from "./GalleryCompo";
export default function Gallery({ selectedHeadIndex, setSelectedHeadIndex }) {
  return (
    <div className="Gallery">
      {galleryArray.map((entry) => (
        <GalleryCompo
          key={entry.id}
          title={entry.title}
          content={entry.content}
        />
      ))}
    </div>
  );
}
