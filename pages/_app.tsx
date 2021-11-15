import type { AppProps } from "next/app";
import "bootswatch/dist/slate/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
