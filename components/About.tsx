import React from "react";
import styled from "styled-components";
import Image from "next/dist/client/image";
import { Flex } from "../styles/components/layout";

const Container = styled.div`
  > div:nth-child(2) {
    > div:nth-child(2) {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3vw;
      > div:nth-child(1) {
        font-weight: 600;
        line-height: 170%;
        width: 80%;
        color: #02073e;
      }
      > div:nth-child(2) {
        font-size: 0.8vw;
        line-height: 170%;
        width: 80%;
        color: #02073e;
      }
    }
  }
`;

const ImgContainer = styled.div`
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  padding: 3vw;
  > div {
    position: unset !important;
  }
`;

const Banner = styled(Flex)`
  position: relative;
  color: #02073e;
  > .info {
    position: absolute;
    top: 30%;
    left: 17%;
    width: 18rem;
    > div:nth-child(1) {
      line-height: 200%;
      height: 100%;
      font-weight: 600;
    }
    > div:nth-child(2) {
      font-size: 1vw;
      margin-top: 2vw;
      line-height: 170%;
    }
  }
`;

const About: React.FC = (props) => {
  return (
      <Container>
        <Banner>
          <Image src="/images/banner-bg.png" alt="banner" className="w-100" width={1700} height={700} />
          <div className="info">
            <div>Our mission is to make healthcare service sustainable through transforming data to knowledge</div>
            <div>㈜온택트헬스는 자체적으로 보유하고 있는 의료 데이터 분석 전문 조직과 데이터 생성 SOP를 기반으로 양질의 심장초음파 참값 DB를 생성하고 있고, 이를 활용하여 심장초음파 영상 분석 AI 소프트웨어를 개발하고 있습니다.</div>
          </div>
        </Banner>
        <div>
          <ImgContainer>
            <Image src="/images/medical.jpg" alt="about_image"  width={200} height={150} layout="responsive"/>
          </ImgContainer>

          <div>
            <div>Supply of quality software required in the medical field</div>
            <div>AI 기술을 활용한 제품의 품질은 데이터의 질과 분석 능력에 의존하지만 의료데이터는 수집과 분석이 모두 어려운 영역이기에 타 산업에 비해 기술의 발전이 어렵고 의료 현장에서 요구하는 양질의 소프트웨어가 공급되기는 더욱 어렵습니다.</div>
          </div>
        </div>
      </Container>
  );
};

export default About;
