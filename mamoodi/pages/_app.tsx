import config from "@/config";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import ReactGA from "react-ga4";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}



ReactGA.initialize([
  {
    trackingId: config.ga_4,
  }
]);
