import React, {useRef} from 'react';
import styled from "styled-components";
import styles from "./Navigator.module.scss";
import About from './about';
import History from './History';
import Product from './Product';
import Information from './Information';


const NaviContainer = styled.div`
 border:1px solid red;
 color: red;
 display: flex;
 
  >div{
    display:flex;
  }
  .menu_container {
    margin-left : 20vw;   
    background-color :black;
    gap:5vw;
  }
`
const Container = styled.div`
  border:1px solid blue;
  >div{
    border:1px solid green;

  }
`

const Navigator: React.FC = (props) => {
  const AboutRef = useRef<null|HTMLDivElement>(null);
  const HistoryRef = useRef<null|HTMLDivElement>(null);
  const ProductRef = useRef<null|HTMLDivElement>(null);
  return (
    <>
      <NaviContainer>
        <div>logo</div>
        <div className='menu_container'>
          <div onClick={()=>{AboutRef.current?.scrollIntoView({behavior:'smooth'})}}>회사소개</div>
          <div>주요연혁</div>
          <div>제품소개</div>
        </div>
      </NaviContainer>
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
      <Information />
      
    </>

  ) 
}

export default Navigator;