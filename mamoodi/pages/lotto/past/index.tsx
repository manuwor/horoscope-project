import dynamic from "next/dynamic";
import React, { useEffect } from "react";

import Head from "next/head";
import config from "@/config";
import AllArticlesComponent from "@/components/all-articles/all-articles";
import { GetServerSidePropsContext } from "next";
import LottoComponent from "@/components/lotto/lotto";
import LottoPastComponent from "@/components/lotto/lotto-past/lotto-past";

const LottoPastPage = ({result}) => {
    const HeaderComponent = dynamic(() => import('../../../components/header/header'));
    const FooterComponent = dynamic(() => import('../../../components/footer/footer'));


    useEffect(() => {
        if(result){
            console.log(result);
        }
    }, [result])


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
                <title>ตรวจสลากกินแบ่งย้อนหลัง | เช็คผลรางวัลสลากกินแบ่งรัฐบาลย้อนหลัง</title>
                <meta name="description"
                    content="ตรวจผลสลากกินแบ่งรัฐบาลย้อนหลังได้ง่ายๆ ค้นหาผลรางวัลสลากกินแบ่งย้อนหลังทุกงวด สะดวก รวดเร็ว พร้อมสถิติหวยย้อนหลัง เพื่อให้คุณไม่พลาดโอกาสรวย" />
                <meta name="og:description" content="ตรวจผลสลากกินแบ่งรัฐบาลย้อนหลังได้ง่ายๆ ค้นหาผลรางวัลสลากกินแบ่งย้อนหลังทุกงวด สะดวก รวดเร็ว พร้อมสถิติหวยย้อนหลัง เพื่อให้คุณไม่พลาดโอกาสรวย" />
                <meta property="og:url" content="https://mamoodi.com/lotto/past" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="ตรวจสลากกินแบ่งย้อนหลัง | เช็คผลรางวัลสลากกินแบ่งรัฐบาลย้อนหลัง" />
                <meta property="og:image"
                    content="https://mamoodi.com/assets/images/share-cover.jpg" />
                <meta name="keywords"
                    content="ตรวจสลากกินแบ่งย้อนหลัง, ผลสลากกินแบ่งย้อนหลัง, ตรวจหวยย้อนหลัง, สถิติหวย, ผลรางวัลสลากกินแบ่งรัฐบาล, ตรวจลอตเตอรี่ย้อนหลัง" />
                <meta property="og:keywords"
                    content="ตรวจสลากกินแบ่งย้อนหลัง, ผลสลากกินแบ่งย้อนหลัง, ตรวจหวยย้อนหลัง, สถิติหวย, ผลรางวัลสลากกินแบ่งรัฐบาล, ตรวจลอตเตอรี่ย้อนหลัง" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderComponent></HeaderComponent>
            <LottoPastComponent ></LottoPastComponent>
        </div>
    )
}

export default LottoPastPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  
    return {
      props: {
      },
    };
  }