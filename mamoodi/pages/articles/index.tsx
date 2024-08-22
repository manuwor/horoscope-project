import dynamic from "next/dynamic";
import { GetServerSidePropsContext } from "next";
import React, { useEffect } from "react";

import Head from "next/head";
import config from "@/config";
import AllArticlesComponent from "@/components/all-articles/all-articles";
import { db } from "@/util/firebase-config";

const AllArticlePage: React.FC = ({ articleModel }: any) => {

    const HeaderComponent = dynamic(() => import('../../components/header/header'));
    const FooterComponent = dynamic(() => import('../../components/footer/footer'));


    useEffect(() => {

    }, [])



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
                <title>บทความทั้งหมด - ScoutOut</title>
                <meta name="google-site-verification" content="beDc3cM2TX-JOmgv12qX4ACEqM4eYp4VHcGsfyd8yDg" />
                <meta name="description"
                    content="บทความทั้งหมด - ScoutOut" />
                <meta name="og:description" content="บทความทั้งหมด - ScoutOut" />
                <meta property="og:url" content="https://blog.scoutout.co/articles/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="บทความทั้งหมด - ScoutOut" />
                <meta property="og:image"
                    content="https://firebasestorage.googleapis.com/v0/b/scoutout-mang-test-e17bf.appspot.com/o/articles%2Fscoutout%2Fcover-so.jpg?alt=media" />
                <meta name="keywords"
                    content="บทความ" />
                <meta property="og:keywords"
                    content="บทความ" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderComponent></HeaderComponent>
            {
                articleModel && <AllArticlesComponent articles={articleModel}></AllArticlesComponent>
            }
            <FooterComponent></FooterComponent>
        </div>
    )
}

export default AllArticlePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const response = await fetch(config.api.url + "articles", { method: 'GET' })
    const article = await response.json();
    const articleModel = article.articles;
    return {
        props: {
            articleModel,
        },
    };
}
