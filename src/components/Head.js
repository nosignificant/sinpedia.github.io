import "../css/Head.css";

// index 0 == note
// index 1 == Gallery

export default function Head({ setSelectedHeadIndex }) {
  return (
    <div className="Head">
      <a className="Title" href="../../../public/index.html">
        SINPEDIA
      </a>
    </div>
  );
}
