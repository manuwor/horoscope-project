import config from "@/config";
import styles from "./article.module.scss";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import UtilityService from "@/util/utility";
import { Article } from "@/model/article.model";
import ShareButtons from "../share-button/share-button";


const ArticleComponent = ({ article }: any) => {
    const [articleMod, setArticleMod] = React.useState<Article>();
    const router = useRouter();

    useEffect(() => {
        console.log(article);
        setArticleMod(article);

    }, []);

    useEffect(() => {

        if(articleMod){
            countUser();
        }
    },[articleMod])

    const countUser = async() => {

        ///articles/:id/view
        if(articleMod && articleMod.id){
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
        
    }

    return (
        <div className={styles.bodyCustomMain}>
            <div className={styles.articleMain}>

                <div className={styles.articleItem}>

                    {
                        articleMod &&
                        <>
                      
                            <span className={styles.articleItemHeader}>{articleMod.title}</span>
                            <img src={articleMod.imageUrl ? articleMod.imageUrl : "/assets/images/share-cover.jpg"} className={styles.articleItemImg}></img>
                            <span dangerouslySetInnerHTML={{__html: articleMod.content}} className={styles.articleItemDesc}></span>
                            <ShareButtons url={config.url+"articles/"+articleMod.id} title={articleMod.title} ></ShareButtons>
                            <span className={styles.articleItemCount}>คนเข้าชมเว็บไซด์ {articleMod.viewCount ? articleMod.viewCount : "0"} คน</span>
                        </>

                    }
                </div>
            </div>
        </div>
    )
}

export default ArticleComponent;