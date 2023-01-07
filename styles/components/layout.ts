import styled, { css } from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

const FlexAlignCenterCss = css`
  align-items: center;
`;

const FlexJustifyCenterCss = css`
  align-items: center;
`;

const FlexCenterCss = css`
  ${FlexAlignCenterCss};
  ${FlexJustifyCenterCss};
`;

const FlexColumnCss = css`
  flex-direction: column;
`;

export const FlexColumn = styled(Flex)`
  ${FlexColumnCss};
`;

export const FlexAlignCenter = styled(Flex)`
  ${FlexAlignCenterCss};
`;

export const FlexCenter = styled(Flex)`
  ${FlexCenterCss};
`;

export const FlexColumnCenter = styled(FlexColumn)`
  ${FlexCenterCss};
  ${FlexColumnCss};
`;

export const Grid = styled.div`
  display: grid;
`;

export const KeyValueGrid = styled(Grid)`
  grid-template-columns: 1fr 1fr;
  line-height: 120%;
  > div:nth-child(odd) {
    font-weight: 500;
  }
`;

export const CursorPointer = styled.div`
  cursor: pointer;
`;