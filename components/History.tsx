import React from "react";
import styled from "styled-components";
import { FlexCenter, FlexColumnCenter, KeyValueGrid } from "../styles/components/layout";
import { generateKey } from "../util";
import styles from "./History.module.scss";

const historyContents = [
  {date: '2021-10', content: <div>ISO 13485 <br/>(의료기기 품질 경영시스템)<br/>인증 획득</div>},
  {date: '2021-07', content: <div>의료기기 제조<br/> 및 품질관리 GMP<br/> 인증 획득</div>},
  {date: '2021-05', content: <div>벤처기업 인증</div>},
  {date: '2021-05', content: <div>과학기술정보통신부<br/>2021년도 인공지능<br/>학습용 데이터 구축<br/>지원 사업 참여기관 선정</div>},
  {date: '2021-04', content: <div>50억 원 VC 투자유치</div>},
  {date: '2021-02', content: <div>기업부설연구소 인정</div>},
  {date: '2020-11', content: <div>㈜온택트헬스 설립</div>},
];

const companyInfo = {
  회사명: "(주)온택트헬스",
  대표이사: "장혁재",
  설립연도: "2020년도",
  주소: "서울 서대문구 이화여대길 50-5 이룸타워 5층 (온택트헬스)",
  TEL: "02-362-9611",
  FAX: "02-362-9611",
  EMAIL: "ontact@ontacthealth.com",
};

const History: React.FC = (props) => {
  const Container = styled(FlexCenter)`
    background-color: #f9f9f9;
    flex-direction: column;
    gap: 3vw;
    padding-top: 8vw;
    > div:nth-child(1) {
      width: 70%;
      font-size: 5vh;
      text-align: center;
    }
    > div:nth-child(2) {
      width: 70%;
      font-size: 2vh;
      line-height: 170%;
      text-align: center;
    }
  `;

  return (
    <Container>
      <div>회사 소개</div>
      <div>
        장혁재 대표이사는 경력 20년 이상의 임상전문가로 다년간 의료 영상 처리 기술과 인공지능, 가상현실 소프트웨어 기술을 연구해왔으며,
      의료 산업에 대한 통찰력을 바탕으로 그간의 성과를 단계적으로 산업화하기 위해 ㈜온택트헬스를 설립하였습니다.
      </div>
      {CompanyInfoComponent(companyInfo)}
      <FlexColumnCenter className={styles.history_container + ' bg-white w-100'}>
        <div>주요 연혁</div>
        <FlexCenter className={styles.history_contents_container}>
          {generateKey(historyContents).map(content => (
          <div key={content.key} className={styles.history_content}>
            <div>{content.date}</div>
            <div>{content.content}</div>
          </div>
          ))}
        </FlexCenter>
      </FlexColumnCenter>
    </Container>
  );
};

const CompanyInfo = styled(FlexCenter)`
  padding: 5vw;
  .key-value {
    grid-template-columns: 1fr 4fr;
    font-size: 2vh;
    padding: 5vw;
  }
`;

const CompanyInfoComponent = (obj: Record<string, string>) => {
  const array = Object.keys(obj);
  return (
    <CompanyInfo>
      <div style={{width: '80%'}}>
        <KeyValueGrid className="bg-white key-value">
          {array.map(key => <>
            <div>{key}</div>
            <div>{obj[key]}</div>
          </>)}
        </KeyValueGrid>
      </div>
    </CompanyInfo>
  )
}

export default History;
