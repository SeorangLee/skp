import styled from "styled-components";
import { Flex } from "../../styles/components/layout";
import { generateKey } from "../../util";
import SkpImage from "../SkpImage";
import { Product } from "./const";

const ImageContainer = styled(Flex)`
  padding: 3vw;
  gap: 1vw;
  align-items: center;

  > div {
    position: unset !important;
  }
  > div:nth-child(1) {
    height: 4vw;
    width: 4vw;
    padding: 1.5vw;
    border-radius: 50%;
    box-shadow: 0px 0px 20px -10px gray;
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    width: 75%;
    gap: 0.5vw;

    > div:nth-child(1) {
      font-size: 1.5vw;
      font-weight: 500;
    }
    > div:nth-child(2) {
      font-size: 1.1vw;
      line-height: 280%;
    }
  }
`;

interface Props {
  products: Product[]
}

export const ProductInformation = ({ products }: Props) => {
  return <>
    {generateKey(products).map(it => <ProdocutItem key={it.key} img={it.img} productInfo={it.productInfo} />)}
  </>
}

const ProdocutItem = ({ img, productInfo }: Product) => {
  return (
    <ImageContainer>
      <div><SkpImage img={img} /></div>
      <div>
        <div>{productInfo.title}</div>
        <div>{productInfo.description}</div>
      </div>
  </ImageContainer>
  );
}