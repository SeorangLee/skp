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

  const history_contents = [
    {date: '2021-10', content : <div>ISO 13485 <br/>(의료기기 품질 경영시스템)<br/>인증 획득</div>},
    {date: '2021-07', content : <div>의료기기 제조<br/> 및 품질관리 GMP<br/> 인증 획득</div>},
    {date: '2021-05', content : <div>벤처기업 인증</div>},
    {date: '2021-05', content : <div>과학기술정보통신부<br/>2021년도 인공지능<br/>학습용 데이터 구축<br/>지원 사업 참여기관 선정</div>},
    {date: '2021-04', content : <div>50억 원 VC 투자유치</div>},
    {date: '2021-02', content : <div>기업부설연구소 인정</div>},
    {date: '2020-11', content : <div>㈜온택트헬스 설립</div>},
  ]

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
      <div className={styles.history_container}>
        <div>주요 연혁</div>
        <div className={styles.history_contents_container}>
          {history_contents.map(content =>{
            return<>
              <div className={styles.history_content}>
                <div>{content.date}</div>
                <div>{content.content}</div>
              </div>
            </>
          })}
        </div>
      </div>
    </Container>
  )
}

export default History;