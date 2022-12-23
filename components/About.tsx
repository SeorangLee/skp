import React, {forwardRef, useRef} from "react";
import styled from "styled-components";
import Image from "next/dist/client/image";

const ImgContainer = styled.div`

  border:5px solid red;
  width:10%;
  height:10%;
  >div{
    position: unset !important
  }

  .homeContainer_img{
    object-fit: scale-down;
    width: 100% !important;
    position: relative !important;
    // height: unset !important;
  }
`

const About:React.FC = (props) => {
  return(
    <>
    <div>
      {/* <ImgContainer > */}
        <Image src="/images/medical.jpg" alt="about_image"  width={300} height={300}/>
      {/* </ImgContainer> */}
      
      <div>
        <div>Supply of quality software required in the medical field</div>
        <div>AI 기술을 활용한 제품의 품질은 데이터의 질과 분석 능력에 의존하지만 의료데이터는 수집과 분석이 모두 어려운 영역이기에 타 산업에 비해 기술의 발전이 어렵고 의료 현장에서 요구하는 양질의 소프트웨어가 공급되기는 더욱 어렵습니다.</div>
      </div>
    </div>
    </>
  )
}

export default About;