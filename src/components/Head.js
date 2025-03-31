import "../css/Head.css";

// index 0 == note
// index 1 == Gallery

export default function Head({ setSelectedHeadIndex }) {
  return (
    <div className="Head">
      <a className="Home" href="../../../public/index.html">
        NOSIGN-DIGITAL
      </a>
      <div className="HeadMenu">
        <p
          onClick={() => {
            console.log("Clicked");
            setSelectedHeadIndex(0);
          }}
        >
          Note
        </p>
        <p
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
