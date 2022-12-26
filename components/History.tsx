import React, {forwardRef, useRef} from "react";
import styled from "styled-components";
import styles from "./History.module.scss";



const History:React.FC = (props) => {
  const company_info = {
    '회사명' : '(주)온택트헬스',
    '대표이사' : '장혁재',
    '설립연도' :'2020년도',
    '주소' :'서울 서대문구 이화여대길 50-5 이룸타워 5층 (온택트헬스)',
    'TEL' : '02-362-9611',
    'FAX' :'02-362-9611',
    'EMAIL' :'ontact@ontacthealth.com'

  }

  const Container = styled.div`
    background-color : #f9f9f9;
    display : flex;
    flex-direction: column;
    gap:3vw;
    align-items : center;
    justify-contents : center;
    padding-top:8vw;
    >div:nth-child(1){
      width: 70%;
      font-size:3vw;
      text-align : center;
    }
    >div:nth-child(2){
      width: 70%;
      font-size:1vw;
      line-height: 170%;
      text-align : center;
    }
  `
  return(
    <Container>
      <div>회사 소개</div>
      <div>장혁재 대표이사는 경력 20년 이상의 임상전문가로 다년간 의료 영상 처리 기술과 인공지능, 가상현실 소프트웨어 기술을 연구해왔으며,
      의료 산업에 대한 통찰력을 바탕으로 그간의 성과를 단계적으로 산업화하기 위해 ㈜온택트헬스를 설립하였습니다.</div>
      <div className={styles.table_container}>
        <div className={styles.table}>
          <div className={styles.table_column}>
            {Object.keys(company_info).map(key=>{
              return <>
                <div>{key}</div>
              </>
            })}
          </div>
          <div >
            <div className={styles.table_row}>
              {Object.values(company_info).map(value=>{
                return <>
                  <div>{value}</div>
                </>
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default History;