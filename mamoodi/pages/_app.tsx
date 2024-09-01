import config from "@/config";
import GDPRConsent from "@/services/gdpr-consent";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import ReactGA from "react-ga4";
import { GoogleAdSense } from "next-google-adsense";
export default function App({ Component, pageProps }: AppProps) {
  return (

    <>
    <GDPRConsent />
    <GoogleAdSense publisherId="pub-7304132375043084" /> 
    <Component {...pageProps} />
    </>
  )
  
  
}



ReactGA.initialize([
  {
    trackingId: config.ga_4,
  }
]);
