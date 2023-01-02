import React, {useRef} from 'react';
import styled from "styled-components";
import styles from "./Navigator.module.scss";
import About from './About';
import History from './History';
import Product from './Product';
import Image from "next/dist/client/image";
import {GiHamburgerMenu} from 'react-icons/gi'

const NaviContainer = styled.div`
  height:4rem;
  // border:1px solid red;
  background-color:white;
  box-shadow: 0px 0.5px 5px  -3px black;
  display: flex;
  align-items: center;
  padding-left:5vw;
  position:fixed;
  top:0;
  left:0;
  z-index:3;
  width:100%;
   >div:nth-child(1){
    //  border:1px solid blue;
   }

`
const Container = styled.div`
  // border:1px solid blue;
  >div{
    // border:1px solid green;

  }
`
// const ImgContainer = styled.div`
//   // position:absolute;
//   top: 0;
//   left: 0; 
//   // border:5px solid red;
//   width:50%;
//   height:100%;
//   >div{
//     position: unset !important
//   }

// `

const Information = styled.div`
  // border:1px solid red;
  display : flex;
  align-items: center;
  justify-content: center;
  gap:4vw;
  padding:  1vw 0vw 2vw 0vw;
  background-color : #f9f9f9;
  box-shadow: 0px -0.5px 5px  -3px black;
  >div:nth-child(2){
    // border:1px solid red;
    >div{ 
      // color:red;
      font-size:0.5vw;
      margin-bottom:0.6vw;
    }
  }

  >div:nth-child(3){
    display:flex;
    gap:3vw;
    >div{
      width:100%;
      font-size:1vw;
      font-weight:500;
    }
  }

`
const Navigator: React.FC = (props) => {
  const AboutRef = useRef<null|HTMLDivElement>(null);
  const HistoryRef = useRef<null|HTMLDivElement>(null);
  const ProductRef = useRef<null|HTMLDivElement>(null);
  return (
    <>
      <div className={styles.NavContainer}>
        <div>
          <Image src="/images/logo.png" alt="logo" width={110} height={40} layout="reponsive"/>
        </div>
        <div className={styles.menu_container}>
          <div onClick={()=>{AboutRef.current?.scrollIntoView({behavior:'smooth'})}}>회사소개</div>
          <div onClick={()=>{HistoryRef.current?.scrollIntoView({behavior:'smooth'})}}>주요연혁</div>
          <div onClick={()=>{ProductRef.current?.scrollIntoView({behavior:'smooth'})}}>제품소개</div>
        </div>
        <div className={styles.burgerBtn}>
          <GiHamburgerMenu size={"3vh"}/>
        </div>
      </div>
      <Container>
        <div ref={AboutRef}>
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

  ) 
}

export default Navigator;