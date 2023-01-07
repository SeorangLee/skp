import reset from "styled-reset";
import { createGlobalStyle, css } from "styled-components";

const globalStyle = css`
  ${reset};
  box-sizing: border-box;

  body {
    font-family: Noto Sans, Noto Sans KR;
    color: #02073e;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle};
  .bg-white {
    background-color: #ffffff !important;
  }

  .bg-black {
    background-color: #000000 !important;
  }

  .w-100 {
    width: 100% !important;
  }

  .h-100 {
    height: 100% !important;
  }

  .wh-100 {
    width: 100% !important;
    height: 100% !important;
  }

  .border-box {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
