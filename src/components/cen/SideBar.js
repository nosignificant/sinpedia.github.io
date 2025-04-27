import "../../css/List.css";

const SideBar = ({ setSelectedIndex }) => {
  return (
    <div className="SideBar">
      <div>
        <p
          onClick={() => {
            console.log("Clicked 0");
            setSelectedIndex(0);
          }}
        >
          Home
        </p>
        <p
          onClick={() => {
            console.log("Clicked 1");
            setSelectedIndex(1);
          }}
        >
          Javascript
        </p>
        <p
          onClick={() => {
            console.log("Clicked");
            setSelectedIndex(2);
          }}
        >
          Notes
        </p>
      </div>
    </div>
  );
};

export default SideBar;
