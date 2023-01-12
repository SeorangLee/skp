import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRefs } from "../../util/hooks";
import { logo } from "../../assets/images";
import { generateKey } from "../../util";
import { pageItems } from "./const";
import { ScrollNav } from "./ScrollNav";
import InformationComponent from "./InformationComponent";
import SkpImage from "../SkpImage";
import { Nav } from "../../styles/components/const";
import { FlexAlignCenter } from "../../styles/components/layout";
import { device } from "../../styles/components/media-query";

const NavContainer = styled(FlexAlignCenter)`
  background-color: white;
  box-shadow: 0px 0.5px 5px -3px black;
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
  height: ${Nav.mobileHeaderHeight};
  justify-content: space-evenly;
  gap: 40vw;
  @media ${device.tablet} {
    height: ${Nav.headerHeight};
    justify-content: baseline;
    gap: unset;
    padding-left: 5vw;
    margin-right: 0;
    .burgerBtn {
      display: none;
    }
  }
`;

const PageItemWrap = styled.div`
  margin-top: ${Nav.mobileHeaderHeight};
  @media ${device.tablet} {
    margin-top: ${Nav.headerHeight};
  }
`;

const Navigator: React.FC = (props) => {
  const [refs, register] = useRefs();
  return (
    <>
      <NavContainer>
        <div>
          <SkpImage img={logo} width={110} height={40}/>
        </div>
        <ScrollNav className='menu_container' refs={refs} pageItems={pageItems} />
        <div className='burgerBtn'>
          <GiHamburgerMenu size={"3vh"} />
        </div>
      </NavContainer>
      <PageItemWrap>
        {generateKey(pageItems).map(it => (
          <div key={it.key} ref={(register as Function)(it.refName)}>
            {it.comp}
          </div>
        ))}
      </PageItemWrap>
      <InformationComponent refs={refs} pageItems={pageItems}/>
    </>
  );
};

export default Navigator;
