import dynamic from "next/dynamic";
import { GetServerSidePropsContext } from "next";
import React, { useEffect } from "react";
import Head from "next/head";
import config from "@/config";
import AllArticlesComponent from "@/components/all-articles/all-articles";
import styles from "./home.module.scss";
const HomePage: React.FC = ({ articleModel }: any) => {
  const HeaderComponent = dynamic(() => import('../components/header/header'));
  const FooterComponent = dynamic(() => import('../components/footer/footer'));

  const startLotto = () => {
    window.open(config.app_url.lotto, "_self")
  }
  const startCarHora = () => {
    window.open(config.app_url.car_hora, "_self")
  }
  const startTarot = () => {
    window.open(config.app_url.tarot1, "_self")
  }
  return (
    <div>
      <Head>

        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <title>{config.seo.title}</title>
        <meta name="description"
          content={config.seo.description} />
        <meta name="og:description" content={config.seo.description} />
        <meta property="og:url" content="https://mamoodi.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.seo.description} />
        <meta name="google-adsense-account" content="ca-pub-7304132375043084"></meta>
        <meta property="og:image"
          content="/share-cover.jpg" />
        <meta name="keywords"
          content={config.seo.keyword} />
        <meta property="og:keywords"
          content={config.seo.keyword} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent></HeaderComponent>
      <div className={styles.bodyCustomMain}>
        <div className={styles.landingControl}>
          <div className={styles.landingItemControl}>
            <div className={styles.landingItemListControl} onClick={startLotto}>
              <img src="/assets/images/lotto.jpg" className={styles.landingItemListImgControl} />
              <div className={styles.landingItemListContentControl}>
                <span className={styles.landingItemTextHeader}>ตรวจสลากกินแบ่งรัฐบาล</span>
                <span className={styles.landingItemTextDesc}>เช็คผลรางวัลลอตเตอรี่ งวดนี้คุณจะรวยหรือเปล่า เช็คเลขได้ง่ายๆ รวดเร็ว ไม่ต้องรอ ให้คุณรู้ผลได้ทันที พร้อมลุ้นและสนุกไปกับการเสี่ยงโชค!</span>
              </div>

            </div>
            <div className={styles.landingItemListControl} onClick={startTarot}>
              <img src="/assets/images/daily-horos.jpg" className={styles.landingItemListImgControl} />
              <div className={styles.landingItemListContentControl}>
                <span className={styles.landingItemTextHeader}>ดูดวงรายวัน</span>
                <span className={styles.landingItemTextDesc}>การทำนายดวงแต่ละวันแบบชิลๆ ไม่ว่าจะเป็นเรื่องงาน เงิน ความรัก หรือสุขภาพ มาเช็คดวงประจำวันเพื่อเตรียมตัวให้พร้อม สนุกๆ ไม่เครียด รู้แนวทางในแต่ละวันได้ที่นี่!</span>
              </div>
            </div>
            <div className={styles.landingItemListControl} onClick={startCarHora}>
              <img src="/assets/images/car-hora.jpg" className={styles.landingItemListImgControl} />
              <div className={styles.landingItemListContentControl}>
                <span className={styles.landingItemTextHeader}>ดูดวงทะเบียนรถ</span>
                <span className={styles.landingItemTextDesc}>การดูดวงทะเบียนรถเป็นความเชื่อส่วนบุคคลที่หลายคนให้ความสำคัญ โดยเชื่อว่าตัวเลขในทะเบียนรถนั้นมีความหมายและสามารถส่งผลต่อชีวิตของผู้ขับขี่ได้ เช่น โชคลาภ ความปลอดภัย หรือความสำเร็จในด้านต่าง ๆ</span>
              </div>

            </div>
            <div className={styles.landingItemArticleControl} >
              <AllArticlesComponent></AllArticlesComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
