/////////////////////////
//recursive function js//
/////////////////////////

import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";

const ListLoop = ({ entry, depth, onClick, noteIndex, setNoteIndex }) => {
  const [open, setOpen] = useState(false);

  return (
    <EntryContainer>
      <ItemButton
        //click event, noteId setting
        onClick={() => {
          setOpen((prev) => !prev);
          setNoteIndex(entry.id);
          onClick?.();
          //console.log("entry id:", noteIndex);
        }}
      >
        <ItemPlusMinus>
          {entry.children ? (open ? "-" : "+") : null}
        </ItemPlusMinus>
        {entry.title}
      </ItemButton>
      {open &&
        // entry toggle, pass neccesary parameter
        entry.children?.map((child) => (
          <ListLoop
            entry={child}
            depth={depth + 1}
            key={child.id}
            noteIndex={noteIndex}
            setNoteIndex={setNoteIndex}
            onClick={onClick}
          />
        ))}
    </EntryContainer>
  );
};

const TGroupsPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.object),
});

ListLoop.propTypes = {
  entry: TGroupsPropType.isRequired,
  depth: PropTypes.number.isRequired,
};

export default ListLoop;

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

export const EntryContainer = styled.div``;
