import dynamic from "next/dynamic";
import React, { useEffect } from "react";

import Head from "next/head";
import config from "@/config";
import AllArticlesComponent from "@/components/all-articles/all-articles";
import { GetServerSidePropsContext } from "next";
import LottoComponent from "@/components/lotto/lotto";

const LottoListPage = ({result}) => {
    const HeaderComponent = dynamic(() => import('../../components/header/header'));
    const FooterComponent = dynamic(() => import('../../components/footer/footer'));


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
                <title>ตรวจสลากกินแบ่งรัฐบาลงวดล่าสุด | เช็คผลหวยงวดล่าสุดที่นี่</title>
                <meta name="description"
                    content="ตรวจผลสลากกินแบ่งรัฐบาลงวดล่าสุดได้ที่นี่ รู้ผลทันใจ อัปเดตทุกงวด พร้อมข้อมูลรางวัลที่ 1 และรางวัลอื่นๆ ครบถ้วน ไม่พลาดทุกการตรวจหวย" />
                <meta name="og:description" content="ตรวจผลสลากกินแบ่งรัฐบาลงวดล่าสุดได้ที่นี่ รู้ผลทันใจ อัปเดตทุกงวด พร้อมข้อมูลรางวัลที่ 1 และรางวัลอื่นๆ ครบถ้วน ไม่พลาดทุกการตรวจหวย" />
                <meta property="og:url" content="https://mamoodi.com/lotto/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="ตรวจสลากกินแบ่งรัฐบาลงวดล่าสุด | เช็คผลหวยงวดล่าสุดที่นี่" />
                <meta property="og:image"
                    content="https://mamoodi.com/assets/images/lotto-pre.png" />
                <meta name="keywords"
                    content="ตรวจสลากกินแบ่งงวดล่าสุด, ผลสลากกินแบ่งรัฐบาลล่าสุด, ตรวจหวยล่าสุด, ผลหวยล่าสุด, ผลสลากกินแบ่งวันนี้, ตรวจลอตเตอรี่งวดนี้" />
                <meta property="og:keywords"
                    content="ตรวจสลากกินแบ่งงวดล่าสุด, ผลสลากกินแบ่งรัฐบาลล่าสุด, ตรวจหวยล่าสุด, ผลหวยล่าสุด, ผลสลากกินแบ่งวันนี้, ตรวจลอตเตอรี่งวดนี้" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderComponent></HeaderComponent>
            <LottoComponent resultList={result}></LottoComponent>
        </div>
    )
}

export default LottoListPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const response = await fetch(config.api_lotto.base_url + config.api_lotto.latest , { method: 'GET' })
    const result = await response.json();
    return {
      props: {
        result
      },
    };
  }