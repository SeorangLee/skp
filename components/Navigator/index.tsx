import React from "react";
import styled from "styled-components";
import styles from "./Navigator.module.scss";
import Image from "next/dist/client/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRefs } from "../../util/hooks";
import { logo } from "../../assets/images";
import { generateKey } from "../../util";
import { pageItems } from "./const";
import { ScrollNav } from "./ScrollNav";
import InformationComponent from "./InformationComponent";

const NaviContainer = styled.div`
  height: 4rem;
  background-color: white;
  box-shadow: 0px 0.5px 5px -3px black;
  display: flex;
  align-items: center;
  padding-left: 5vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
`;
const Container = styled.div`
`;

const Navigator: React.FC = (props) => {
  const [refs, register] = useRefs();

  return (
    <>
      <div className={styles.NavContainer}>
        <div>
          <Image src={logo.url} alt={logo.alt} width={110} height={40}/>
        </div>
        <ScrollNav className={styles.menu_container} refs={refs} pageItems={pageItems} />
        <div className={styles.burgerBtn}>
          <GiHamburgerMenu size={"3vh"} />
        </div>
      </div>
      <Container>
        {generateKey(pageItems).map(it => (
          <div key={it.key} ref={(register as Function)(it.refName)}>
            {it.comp}
          </div>
        ))}
      </Container>
      <InformationComponent refs={refs} pageItems={pageItems}/>
    </>
  );
};

export default Navigator;
