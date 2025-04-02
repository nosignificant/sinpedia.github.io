import "../../css/List.css";

import React from "react";
import styled from "styled-components";

export default function SideBar() {
  return (
    <div className="SideBar">
      <h2>Tree View UI</h2>
      <div>
        <div>🍄root</div>
        <div>
          <span>+</span>
          🍄 children
        </div>
      </div>
    </div>
  );
}

const ListContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  background: #f8f7f3;
  padding: 10px;
`;

const Root = styled.div`
  font-weight: 700;
`;

export const ItemButton = styled.div`
  cursor: pointer;
  display: inline-block;
  width: 100%;
  height: 20px;
  position: relative;
  padding-left: 30px;
`;

export const ItemPlusMinus = styled.button`
  border: none;
  background: transparent;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 20px;
`;

export const EntryContainer = styled.div`
  width: 100%;
  padding-left: 20px;
`;
