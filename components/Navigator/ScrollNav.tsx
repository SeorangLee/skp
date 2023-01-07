import styled from "styled-components";
import { device } from "../../styles/components/media-query";
import { generateKey } from "../../util";
import { Ref, ScrollTo } from "../../util/hooks";
import { PageItem } from "./const";

const MenuContainer = styled.div`
  margin: 0 20vw;
  gap:5vw;
  >div{
    font-size: 1.8vh;
  }
  display: none;
  @media ${device.tablet} {
    display: flex;
  }
`;

interface ScrollNavPros {
  refs: Ref<Record<string, Ref>>;
  pageItems: PageItem[];
  className?: string;
}

export const ScrollNav = ({ refs, pageItems, className = '' }: ScrollNavPros) => {
  return (
    <MenuContainer className={className}>
      {generateKey(pageItems).map(it =>
        <ScrollTo key={it.key} refs={refs} refName={it.refName}>{it.name}</ScrollTo> )}
    </MenuContainer>
  )
};
