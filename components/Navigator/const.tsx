import { ReactElement } from "react";
import About from "../About";
import History from "../History";
import Product from "../Product";

export interface PageItem {
  name: string;
  refName: string;
  comp?: ReactElement<any, any>;
}

export const pageItems: PageItem[] = [
  { name: '회사소개', refName: 'about', comp: <About /> },
  { name: '주요연혁', refName: 'history', comp: <History /> },
  { name: '제품소개', refName: 'product', comp: <Product /> },
];
