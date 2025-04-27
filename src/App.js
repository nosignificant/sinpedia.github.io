import "./css/App.css";
import "./css/List.css";

import { useState } from "react";

import List from "./components/cen/List";
import SideBar from "./components/cen/SideBar";
import Head from "./components/Head";
function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <Head />
      <div className="ListView">
        <SideBar setSelectedIndex={setSelectedIndex} />
        <List selectedIndex={selectedIndex} />
      </div>
    </div>
  );
}

export default App;
