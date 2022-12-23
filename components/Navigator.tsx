import React from 'react';
import styled from "styled-components";
import styles from "./Navigator.module.scss";

const Container = styled.div`
 border:1px solid red;
 color: red;
 display: flex;
 gap: 5vw;
  >div{
    display:flex;
  }
`

const Navigator: React.FC = () => {

  return (
    // <div className={styles.container}>
    //   <div>logo</div>
    //   <div>
    //     <div>회사소개</div>
    //     <div>주요연혁</div>
    //     <div>제품소개</div>
    //   </div>
    // </div>
    <Container>
      <div>logo</div>
      <div className='menu_container'>
        <div>회사소개</div>
        <div>주요연혁</div>
        <div>제품소개</div>
      </div>
    </Container>
  ) 
}

export default Navigator;