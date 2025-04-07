import "./css/App.css";
import "./css/List.css";
import "./components/cen/Center";

import { useState } from "react";

import Center from "./components/cen/Center";
import Head from "./components/Head";
function App() {
  const [selectedHeadIndex, setSelectedHeadIndex] = useState(0);

  return (
    <div className="App">
      <Head setSelectedHeadIndex={setSelectedHeadIndex} />
      <Center selectedHeadIndex={selectedHeadIndex} />
    </div>
  );
}

export default App;
