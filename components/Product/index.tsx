import React from "react";
import styles from "./Product.module.scss";
import { products, solutions } from "./const";
import { sonixLogo, sonixUI1, sonixUI2 } from "../../assets/images";
import SkpImage from "../SkpImage";
import { ProductInformation } from "./ProductInformation";


const Product: React.FC = (props) => {

  return (
    <div>
      <div className={styles.product1}>
        <div className={styles.product1_img}>
          <div>
            <SkpImage img={sonixLogo} />
          </div>
        </div>
        <div>
          <div>❛ One-Click ❜ 심장 초음파 분석 솔루션</div>
          <div>심장의 형태학적, 기능적 평가를 위한 자동 정량화 기술 개발</div>
        </div>
        <div className={styles.product1_img_2}>
          <div><SkpImage img={sonixUI1} /></div>
          <div><SkpImage img={sonixUI2} /></div>
        </div>
      </div>
      <div className={styles.product2}>
        <div>AI 기반 심장초음파 영상 분석 솔루션</div>
        <div className={styles.solutions_container}>
          {solutions.map((solution) => {
            return (
              <>
                <div className={styles.product2_solutions}>
                  <div>{solution.id}</div>
                  <div>{solution.title}</div>
                  <div>
                    <div>{solution.img}</div>
                  </div>
                  <div>{solution.memo}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>기존 제품과의 차별성</div>
        <ProductInformation products={products} />
      </div>
    </div>
  );
};


export default Product;
