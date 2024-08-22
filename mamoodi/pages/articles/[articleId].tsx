import * as React from 'react';
import Head from 'next/head';
import styles from "./articles.module.scss";
import dynamic from 'next/dynamic';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LineIcon, LineShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'next-share';
import config from '@/config';
import { db } from '@/util/firebase-config';
import { Article } from '@/model/article.model';
import ArticleComponent from '@/components/article/article';
interface ContentData {
  title: string;
  raw_description: string;
  description: string;
  status: string;
  created_date: string;
}

const ArticlePage: React.FC = ({ articleModel }: any) => {
  const HeaderComponent = dynamic(() => import('../../components/header/header'));
  const FooterComponent = dynamic(() => import('../../components/footer/footer'));
  const [articleMod, setArticleMod] = React.useState<Article>();
  const router = useRouter();
  const { articleId } = router.query
  React.useEffect(() => {
    if (articleModel) {
      console.log(articleModel);
      setArticleMod(articleModel);
      // getArticle()
    }


  }, [articleModel])




  return (
    <div>

      <Head>
        {
          articleMod &&
          <>
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
            <title>{articleMod.title}</title>
            <meta name="google-site-verification" content="beDc3cM2TX-JOmgv12qX4ACEqM4eYp4VHcGsfyd8yDg" />
            <meta name="description"
              content={articleMod.shortDescription} />
            <meta name="og:description" content={articleMod.title} />
            <meta property="og:url" content={config.url + "articles/" + articleMod.id} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={articleMod.title} />
            <meta property="og:image"
              content={articleMod.imageUrl} />
             <meta name="keywords" content={articleMod.keywords.join(', ')} />
             <meta property="og:keywords" content={articleMod.keywords.join(', ')} />

            <link rel="icon" href="/favicon.ico" />
          </>
        }

      </Head>
      <HeaderComponent></HeaderComponent>
      {
        articleMod && <ArticleComponent article={articleMod}></ArticleComponent>
      }
      <FooterComponent></FooterComponent>

    </div>
  )

};
export default ArticlePage;


export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { articleId } = context.params || {}; // Handle empty params
  console.log(articleId);
  const response = await fetch(config.api.url + "articles/" + articleId, { method: 'GET' })
  const article = await response.json();
  const articleModel = article.article;
  return {
    props: {
      articleModel,
    },
  };
}