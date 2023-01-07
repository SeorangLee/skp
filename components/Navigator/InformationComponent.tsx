import styled from "styled-components";
import { logo } from "../../assets/images";
import { Ref as RefType } from "../../util/hooks";
import { SkpResponsiveImage } from "../SkpImage";
import { PageItem } from "./const";
import { ScrollNav } from "./ScrollNav";

interface InformationProps {
  refs: RefType<Record<string, RefType>>;
  pageItems: PageItem[]
}

const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4vw;
  padding: 1vw 0vw 2vw 0vw;
  background-color: #f9f9f9;
  box-shadow: 0px -0.5px 5px -3px black;
  > div:nth-child(2) {
    > div {
      font-size: 0.5vw;
      margin-bottom: 0.6vw;
    }
  }

  > div:nth-child(3) {
    display: flex;
    gap: 3vw;
    > div {
      width: 100%;
      font-size: 1vw;
      font-weight: 500;
    }
  }
`;

const InformationComponent = ({ refs, pageItems }: InformationProps) => {
  return (
    <Information>
      <div><SkpResponsiveImage img={logo} width={80} height={28} /></div>
      <div>
        <div>(48932) 부산광역시 중구 대청로 121-1, 102동 1309호(대청동1가, 코모도에스테이트) 주식회사 온택트헬스</div>
        <div>대표 장혁재 | 사업자등록번호 436-88-02020 | Email : cdh82@ontacthealth.com</div>
        <div>Tel : 02-362-9610 | Fax : 02-362-9611</div>
        <div>Copyright © 2022 주식회사 온택트헬스 ONTACT HEALTH Co.,Ltd. All rights reserved.</div>
      </div>
      <ScrollNav refs={refs} pageItems={pageItems} />
    </Information>
  )
};

export default InformationComponent;