import "../css/Head.css";

// index 0 == note
// index 1 == Gallery

export default function Head({ setSelectedHeadIndex }) {
  return (
    <div className="Head">
      <a className="Title" href="../../../public/index.html">
        SINPEDIA
      </a>
      <div className="HeadMenu">
        <p
          className="Note"
          onClick={() => {
            console.log("Clicked");
            setSelectedHeadIndex(0);
          }}
        >
          Note
        </p>
        <p
          className="Gallery"
          onClick={() => {
            console.log("Clicked");
            setSelectedHeadIndex(1);
          }}
        >
          Gallery
        </p>
      </div>
    </div>
  );
}
