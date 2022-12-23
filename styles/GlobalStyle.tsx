import reset from 'styled-reset';
import { createGlobalStyle, css} from "styled-components";

const globalStyle = css`
${reset};
box-sizing : border-box;

body{
  font-family : Noto Sans, Noto Sans KR;
  
}

`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle};
`

export default GlobalStyle ;
