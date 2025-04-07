import "../../css/List.css";

import { marked } from "marked";
import { useEffect, useState } from "react";
import styled from "styled-components";

import defaultMemo from "../../db/explain.json";
import SideBarList from "../../db/list.json";

function findContent(id, list = SideBarList) {
  for (const entry of list) {
    if (entry.id === id) return entry;
    if (entry.children) {
      const found = findContent(id, entry.children);
      if (found) return found;
    }
  }
  return null;
}

function ListContent({ noteIndex }) {
  const [html, setHtml] = useState("");
  const [stateTitle, setStateTitle] = useState("");

  useEffect(() => {
    const entry = noteIndex === 0 ? defaultMemo : findContent(noteIndex);
    if (!entry.children) setStateTitle(entry.title);
    if (!entry) return;
    if (entry.children) return;
    if (entry.content?.endsWith(".md")) {
      fetch(entry.content)
        .then((res) => res.text())
        .then((md) => setHtml(marked(md)));
    } else {
      setHtml(`<p>${entry.content}</p>`);
    }
  }, [noteIndex]);

  return (
    <div className="ListContent">
      <ListTitle className="ListTitle">{stateTitle}</ListTitle>
      <div className="ListText" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default ListContent;

export const ListTitle = styled.div`
  display: flex;
`;
