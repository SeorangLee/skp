import React, { forwardRef, useRef } from "react";
import styled from "styled-components";
import Image from "next/dist/client/image";

const Container = styled.div`
  position: relative;
  > div:nth-child(2) {
    display: flex;
    > div:nth-child(2) {
      // border:3px solid red;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3vw;
      > div:nth-child(1) {
        // border:1px solid blue;
        font-weight: 600;
        line-height: 170%;
        // text-align : center;
        width: 80%;
        color: #02073e;
      }
      > div:nth-child(2) {
        // border:1px solid blue;
        font-size: 0.8vw;
        line-height: 170%;
        width: 80%;
        color: #02073e;
      }
    }
  }
`;
const ImgContainer = styled.div`
  // position:absolute;
  top: 0;
  left: 0;
  // border:5px solid red;
  width: 40%;
  height: 100%;
  padding: 3vw;
  > div {
    position: unset !important;
  }

  .homeContainer_img {
    object-fit: scale-down;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

const Banner = styled.div`
  // background-image: url("../public/images/banner-bg.png");
  // width:10vw;
  // height:10vw;
  position: relative;
  > div:nth-child(2) {
    position: absolute;
    top: 30%;
    left: 17%;
    > div:nth-child(1) {
      line-height: 200%;
      width: 18rem;
      height: 100%;
      font-weight: 600;
      color: #02073e;
    }
    > div:nth-child(2) {
      font-size: 1vw;
      width: 18rem;
      margin-top: 2vw;
      line-height: 170%;
      color: #02073e;
    }
  }
`;

const About: React.FC = (props) => {
  return (
    <>
      <Container>
        <Banner>
          <Image
            src="/images/banner-bg.png"
            alt="banner"
            width={600}
            height={250}
            layout="responsive"
          />
          <div>
            <div>
              Our mission is to make healthcare service sustainable through
              transforming data to knowledge
            </div>
            <div>
              ㈜온택트헬스는 자체적으로 보유하고 있는 의료 데이터 분석 전문
              조직과 데이터 생성 SOP를 기반으로 양질의 심장초음파 참값 DB를
              생성하고 있고, 이를 활용하여 심장초음파 영상 분석 AI 소프트웨어를
              개발하고 있습니다.
            </div>
          </div>
        </Banner>
        <div>
          <ImgContainer>
            {/* <Image src="/images/medical.jpg" alt="about_image"  layout="fill"/> */}
            <Image
              src="/images/medical.jpg"
              alt="about_image"
              width={200}
              height={150}
              layout="responsive"
            />
          </ImgContainer>

          <div>
            <div>Supply of quality software required in the medical field</div>
            <div>
              AI 기술을 활용한 제품의 품질은 데이터의 질과 분석 능력에
              의존하지만 의료데이터는 수집과 분석이 모두 어려운 영역이기에 타
              산업에 비해 기술의 발전이 어렵고 의료 현장에서 요구하는 양질의
              소프트웨어가 공급되기는 더욱 어렵습니다.
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
