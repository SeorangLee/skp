import Image from "next/dist/client/image";
import { click, report, share, SkpImageType } from "../../assets/images";

export const solutions = [
  {id:'01', title:'심장초음파 화질 개선 알고리즘',memo:'Input image', img:<Image src="/images/sonix01.png" alt="" width={10} height={10} layout="responsive" />},
  {id:'02', title:'영상 획득유도 및 분류 기술',memo:'Model specific DL', img:<Image src="/images/sonix02.png" alt="" width={10} height={10} layout="responsive" />},
  {id:'03', title:'심장 구조 분할 기술',memo:'Segmentation', img:<Image src="/images/sonix03.png" alt="" width={10} height={10} layout="responsive" />},
  {id:'04', title:'미세 근육 움직임 정량화 기술', memo:"Speckle Tracking",img:<Image src="/images/sonix04.png" alt="" width={10} height={10} layout="responsive" />},
  {id:'05', title:'Auto-Reporting',memo:'', img:<Image src="/images/sonix05.png" alt="" width={10} height={10} layout="responsive" />},
];

export interface Product {
  img: SkpImageType
  productInfo: {
    title: string;
    description: string;
  }
}

export const products: Product[] = [
  {
    img: share,
    productInfo: {
      title: '어디서나 접근 가능하며 분석결과 공유가 가능한 솔루션',
      description: 'Sonix Health는 Web기반으로 구현되어 있어 어디서나 접근 가능하며, 특별한 원내 시스템 구축이 없더라도 의료진간 분석결과 공유가 가능한 솔루션입니다.',
    }
  },
  {
    img: click,
    productInfo: {
      title: '검사자의 간단한 조작이 가능',
      description: '기존의 3차병원대상의 소프트웨어는 심도 있는 검사를 위해 국소적인 데이터 입력이 가능하도록 되어있어 검사분석에 높은 숙련도가 필요하지만, Sonix Health는 1, 2차병원에서 이용하는 소프트웨어로 기획되었으며 심장초음파의 중간검사의 역할에 집중하여 개발되었으며 주요한 심장기능을 평가하는 Routine검사위주로 구성된 솔루션으로 개발되었기 때문에 검사자의 간단한 조작이 가능합니다.'
    }
  },
  {
    img: report,
    productInfo: {
      title: 'AI 자동측정 기술로 영상획득이후 빠른 분석진행',
      description: 'AI 기술에 대해서는 3차 대학병원의 레퍼런스를 기반으로 개발된 자동측정 기술이며 이를 통해서 영상획득이후 빠른 분석진행이 가능할 것입니다. 이는 단위시간대비 더 많은 검사를 진행할 수 있게 하며 이를 통해 새로 검사를 도입하려는 1, 2차병원의 인건비문제를 최소화 할 수 있도록 개발중입니다.'
    }
  }
];
