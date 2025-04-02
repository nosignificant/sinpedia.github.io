import React from "react";
import styled from "styled-components";

// ✅ TypeScript 인터페이스 정의
type TGroups = {
  id: number;
  name: string;
  children?: TGroups[];
};

const TreeView = () => {
  const TreeGroups: TGroups[] = new Array(5).fill(0).map((_, idx) => ({
    id: idx + 1,
    name: "부문" + (idx + 1),
    children: new Array(3).fill(0).map((_, index) => ({
      id: (index + 1) * 12,
      name: "부서" + (index + 1),
      children: Array(3)
        .fill(0)
        .map((_, i) => ({
          id: (i + 1) * 13,
          name: "팀" + (i + 1),
        })),
    })),
  }));

  // ✅ 타입을 명시적으로 지정한 컴포넌트
  const EntryLoop: React.FC<{ entry: TGroups; depth: number }> = ({
    entry,
    depth,
  }) => {
    return (
      <EntryContainer>
        <ItemButton>
          <ItemPlusMinus>+</ItemPlusMinus>
          🍄 {entry.name}
        </ItemButton>
        {entry.children?.map((child) => (
          <EntryLoop entry={child} depth={depth + 1} key={child.id} />
        ))}
      </EntryContainer>
    );
  };

  return (
    <div>
      <h2>Tree View UI</h2>
      <ListContainer>
        <Root>🍄 root</Root>
        {TreeGroups.map((entry) => (
          <EntryLoop entry={entry} depth={1} key={entry.id} />
        ))}
      </ListContainer>
    </div>
  );
};

export default TreeView;

// ✅ 스타일드 컴포넌트 정의
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
