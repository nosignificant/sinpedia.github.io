import "../../css/Gallery.css";

import { useThree } from "@react-three/fiber";

export default function GalleryCompo({ title, content, imgURL }) {
  return (
    <div className="GalleryCompo">
      <img className="GalleryImg" alt={imgURL} />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
