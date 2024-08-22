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

    }, [])

    return (
        <>
            <div className={styles.articleMain}>

                <div className={styles.articleItem}>

                    {
                        articleMod &&
                        <>
                            <span className={styles.articleItemHeader}>{articleMod.title}</span>
                            <span dangerouslySetInnerHTML={{__html: articleMod.content}} className={styles.articleItemDesc}></span>
                            <ShareButtons />
                        </>

                    }
                </div>
            </div>
        </>
    )
}

export default ArticleComponent;