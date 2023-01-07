import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import styles from "./Navigator.module.scss";
import About from "./About";
import History from "./History";
import Product from "./Product";
import Image from "next/dist/client/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { CursorPointer } from "../styles/components/layout";

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

const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4vw;
  padding: 1vw 0vw 2vw 0vw;
  background-color: #f9f9f9;
  box-shadow: 0px -0.5px 5px -3px black;
  > div:nth-child(2) {
    > div {
      font-size: 0.5vw;
      margin-bottom: 0.6vw;
    }
  }

  > div:nth-child(3) {
    display: flex;
    gap: 3vw;
    > div {
      width: 100%;
      font-size: 1vw;
      font-weight: 500;
    }
  }
`;
const Navigator: React.FC = (props) => {
  const [refs, register] = useRefs();
  const AboutRef = useRef<null | HTMLDivElement>(null);
  const HistoryRef = useRef<null | HTMLDivElement>(null);
  const ProductRef = useRef<null | HTMLDivElement>(null);
  return (
    <>
      <div className={styles.NavContainer}>
        <div>
          <Image src="/images/logo.png" alt="logo" width={110} height={40} layout="reponsive"/>
        </div>
        <div className={styles.menu_container}>
          <ScrollTo ref={refs}>회사소개</ScrollTo>
          <CursorPointer onClick={()=>{AboutRef.current?.scrollIntoView({behavior:'smooth'})}}>회사소개</CursorPointer>
          <CursorPointer onClick={()=>{HistoryRef.current?.scrollIntoView({behavior:'smooth'})}}>주요연혁</CursorPointer>
          <CursorPointer onClick={()=>{ProductRef.current?.scrollIntoView({behavior:'smooth'})}}>제품소개</CursorPointer>
        </div>
        <div className={styles.burgerBtn}>
          <GiHamburgerMenu size={"3vh"} />
        </div>
      </div>
      <Container>
        {/* <div ref={AboutRef}>
          <About />
        </div> */}
        <div ref={(register as Function)('test')}>
          <About />
        </div>
        <div ref={HistoryRef}>
          <History />
        </div>
        <div ref={ProductRef}>
          <Product />
        </div>
      </Container>
      <Information>
        <div><Image src="/images/logo.png" alt="logo" width={80} height={28} layout="reponsive"/></div>
        <div>
          <div>(48932) 부산광역시 중구 대청로 121-1, 102동 1309호(대청동1가, 코모도에스테이트) 주식회사 온택트헬스</div>
          <div>대표 장혁재 | 사업자등록번호 436-88-02020 | Email : cdh82@ontacthealth.com</div>
          <div>Tel : 02-362-9610 | Fax : 02-362-9611</div>
          <div>Copyright © 2022 주식회사 온택트헬스 ONTACT HEALTH Co.,Ltd. All rights reserved.</div>
        </div>
        <div>
          <div onClick={()=>{AboutRef.current?.scrollIntoView({behavior:'smooth'})}}>회사소개</div>
          <div onClick={()=>{HistoryRef.current?.scrollIntoView({behavior:'smooth'})}}>주요연혁</div>
          <div onClick={()=>{ProductRef.current?.scrollIntoView({behavior:'smooth'})}}>제품소개</div>
        </div>
      </Information>
    </>
  );
};

interface IScrollTo {
  // ref: React.MutableRefObject<HTMLDivElement | null>;
  ref: any;
  children: any;
}

const ScrollTo = ({ref, children}: IScrollTo) => {
  const [refs, register] = useRefs();
  
  const onClick = React.useCallback(() => {
    (((refs as any).current as any)?.['test'])?.scrollIntoView({behavior:'smooth'});
  }, [refs])

  return <CursorPointer onClick={onClick}>{children}</CursorPointer>
}

function useRefs() {
  const refs = useRef({});

  const register = useCallback((refName: string) => (ref: any) => {
    (refs.current as any)[refName] = ref;
  }, []);

  return [refs, register];
}


export default Navigator;
