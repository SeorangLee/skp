import React, {forwardRef, useRef} from "react";
import styled from "styled-components";
import Image from "next/dist/client/image";


const Product:React.FC = (props) => {

  const ImageContainer = styled.div`
    // position:absolute;
    // border:5px solid red;
    padding:3vw;
    display:flex;
    gap:1vw;
    >div{
      position: unset !important
    }
    >div:nth-child(1){
      height:3vw;
      width:3vw;
      padding:1vw;
      border-radius:50%;
      box-shadow: 0px 0px 20px  -10px gray;
    }
    >div:nth-child(2){
      
    }
  `

  const ProductInformation = styled.div`

  `

  return(
    <div>
      <div></div>
      <div></div>
      <div>
        <div>기존 제품과의 차별성</div>
        <ProductInformation>
          <ImageContainer>
            <div><Image src="/images/share.png" alt="" width={10} height={10} layout="responsive"/></div>
            <div>
              <div>어디서나 접근 가능하며 분석결과 공유가 가능한 솔루션</div>
              <div>Sonix Health는 Web기반으로 구현되어 있어 어디서나 접근 가능하며, 특별한 원내 시스템 구축이 없더라도 의료진간 분석결과 공유가 가능한 솔루션입니다.</div>
            </div>
          </ImageContainer>
          <ImageContainer>
            <div><Image src="/images/click.png" alt="" width={10} height={10} layout="responsive"/></div>
            <div>
              <div>검사자의 간단한 조작이 가능</div>
              <div>기존의 3차병원대상의 소프트웨어는 심도 있는 검사를 위해 국소적인 데이터 입력이 가능하도록 되어있어 검사분석에 높은 숙련도가 필요하지만, Sonix Health는 1, 2차병원에서 이용하는 소프트웨어로 기획되었으며 심장초음파의 중간검사의 역할에 집중하여 개발되었으며 주요한 심장기능을 평가하는 Routine검사위주로 구성된 솔루션으로 개발되었기 때문에 검사자의 간단한 조작이 가능합니다.</div>
            </div>
          </ImageContainer>
          <ImageContainer>
            <div><Image src="/images/report.png" alt="" width={10} height={10} layout="responsive"/></div>
            <div>
              <div>AI 자동측정 기술로 영상획득이후 빠른 분석진행</div>
              <div>AI 기술에 대해서는 3차 대학병원의 레퍼런스를 기반으로 개발된 자동측정 기술이며 이를 통해서 영상획득이후 빠른 분석진행이 가능할 것입니다. 이는 단위시간대비 더 많은 검사를 진행할 수 있게 하며 이를 통해 새로 검사를 도입하려는 1, 2차병원의 인건비문제를 최소화 할 수 있도록 개발중입니다.</div>
            </div>
          </ImageContainer>
        </ProductInformation>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Product;