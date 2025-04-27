import "../../css/List.css";

import { useEffect, useState } from "react";
import styled from "styled-components";

import Content from "./Content";

export default function List({ selectedIndex }) {
  const getTitleText = () => {
    if (selectedIndex === 0) return "this is Home";
    if (selectedIndex === 1) return "this is selectedHeadIndex 1";
    if (selectedIndex === 2) return "this is selectedHeadIndex 2";
    return "Unknown";
  };

  const dummyList = () => {
    const listArray = [];
    for (let i = 0; i < 10; i++) {
      listArray.push(
        <div key={i}>
          <ListTitle className="ListTitle">
            {getTitleText()}
            <div className="ListText">explain text here</div>
          </ListTitle>
        </div>
      );
    }
    return listArray;
  };

  const [contentOn, setContentOn] = useState(false);
  useEffect(() => {
    setContentOn(false);
  }, [selectedIndex]);
  return (
    <div className="List">
      <div className="ListChildren" onClick={() => setContentOn(true)}>
        {console.log("set Content on")}
        {dummyList()}
      </div>
      <Content contentOn={contentOn} />
    </div>
  );
}

export const ListTitle = styled.div`
  display: flex;
`;
