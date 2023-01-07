import React from "react";
import styled from "styled-components";
import { FlexCenter } from "../../styles/components/layout";
import CompanyInfoComponent from "./CompanyInfoComponent";
import { companyInfo } from "./const";
import HistoryContentsComponent from "./HistoryContentsComponent";

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

const History: React.FC = (props) => {
  return (
    <Container>
      <div>회사 소개</div>
      <div>
        장혁재 대표이사는 경력 20년 이상의 임상전문가로 다년간 의료 영상 처리 기술과 인공지능, 가상현실 소프트웨어 기술을 연구해왔으며,
      의료 산업에 대한 통찰력을 바탕으로 그간의 성과를 단계적으로 산업화하기 위해 ㈜온택트헬스를 설립하였습니다.
      </div>
      {CompanyInfoComponent(companyInfo)}
      {HistoryContentsComponent()}
    </Container>
  );
};

export default History;
