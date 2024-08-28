import React, { useEffect } from "react";
import { useRouter } from "next/router";
import config from "@/config";
import styles from "./article.module.scss";
import { Article } from "@/model/article.model";
import ShareButtons from "../share-button/share-button";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const ArticleComponent = ({ article }: any) => {
    const [articleMod, setArticleMod] = React.useState<Article>();
    const router = useRouter();

    useEffect(() => {
        console.log(article);
        setArticleMod(article);
    }, [article]);

    useEffect(() => {
        if (articleMod) {
            countUser();
        }
    }, [articleMod]);

    const countUser = async () => {
        if (articleMod && articleMod.id) {
            try {
                const response = await fetch(`${config.api.url}articles/${articleMod.id}/view`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to update view count');
                }

                const data = await response.json();
                console.log('View count updated:', data.viewCount);
            } catch (error) {
                console.error('Error updating view count:', error);
            }
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined" && window.adsbygoogle) {
            window.adsbygoogle.push({});
        }
    }, []);

    return (
        <div className={styles.bodyCustomMain}>
            <div className={styles.articleMain}>
                <div className={styles.articleItem}>
                    {articleMod && (
                        <>
                            <span className={styles.articleItemHeader}>{articleMod.title}</span>
                            <img
                                src={articleMod.imageUrl ? articleMod.imageUrl : "/assets/images/share-cover.jpg"}
                                className={styles.articleItemImg}
                            ></img>
                            <span
                                dangerouslySetInnerHTML={{ __html: articleMod.content }}
                                className={styles.articleItemDesc}
                            ></span>
                            <ShareButtons
                                url={config.url + "articles/" + articleMod.id}
                                title={articleMod.title}
                            ></ShareButtons>
                            <span className={styles.articleItemCount}>
                                คนเข้าชมเว็บไซด์ {articleMod.viewCount ? articleMod.viewCount : "0"} คน
                            </span>

                            {/* Google AdSense */}
                            <div>
                               
                                <ins
                                    className="adsbygoogle"
                                    style={{ display: "block", textAlign: "center" }}
                                    data-ad-layout="in-article"
                                    data-ad-format="fluid"
                                    data-ad-client="ca-pub-7304132375043084"
                                    data-ad-slot="5829918586"
                                ></ins>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ArticleComponent;
