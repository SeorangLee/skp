import App from "next/app";
import { AppContext, AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import Navigator from "../components/Navigator";

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Navigator {...pageProps} />
      <Component {...pageProps} />
    </>
  );
};

app.getInitialProps = async (context: AppContext) => {
  const appInitialProps = await App.getInitialProps(context);
  console.log(context.ctx.req?.headers.cookie);
  return { ...appInitialProps };
};

export default app;
