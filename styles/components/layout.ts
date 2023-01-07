import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const FlexCenter = styled(Flex)`
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
`;

export const KeyValueGrid = styled(Grid)`
  grid-template-columns: 1fr 1fr;
  > div:nth-child(odd) {
    font-weight: 500;
  }
`;

export const CursorPointer = styled.div`
  cursor: pointer;
`;