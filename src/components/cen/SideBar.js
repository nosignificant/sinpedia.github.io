import PropTypes from "prop-types";
import styled from "styled-components";

import SideBarList from "../../db/list.json";
import ListLoop from "./ListLoop";

const TGroupsPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object),
});

const SideBar = ({ noteIndex, setNoteIndex }) => {
  return (
    <div className="SideBar">
      <ListContainer>
        {SideBarList.map((entry) => (
          <ListLoop
            entry={entry}
            depth={1}
            key={entry.id}
            noteIndex={noteIndex}
            setNoteIndex={setNoteIndex}
          ></ListLoop>
        ))}
      </ListContainer>
    </div>
  );
};

SideBar.propTypes = {
  TreeGroups: PropTypes.arrayOf(TGroupsPropType),
};

export default SideBar;

const ListContainer = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 10px;
`;
