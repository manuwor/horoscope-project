import config from "@/config";
import styles from "./all-articles.module.scss";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import UtilityService from "@/util/utility";
import { Article } from "@/model/article.model";


const AllArticlesComponent = ({articles}: any) => {
    const [articleMod, setArticleMod] = React.useState<Article[]>();
    const router = useRouter();

    useEffect(() => {
        setArticleMod(articles);

    },[])
    const clickArticle = (item: Article) => {
        UtilityService().clickSendEvent(item.seo.title, "click");
        if(item.slug){
            router.push('/articles/' + item.slug);
        }else{
            router.push('/articles/' + item.uuid);
        }
    

    }
    const getAllArticle = async () => {
        const response = await fetch(config.url, { method: 'GET' })
        const article = await response.json();

        setArticleMod(article.result)

    }

    const openUrl = (url, name) => {
        UtilityService().clickSendEvent(name, "click");
        window.open(url, "_blank")
    }
    return (
        <>
            <div className={styles.allMain}>
                <div className={styles.allMainControl}>
                    
                    {
                        articleMod &&
                        <div className={styles.allMainCenter}>
                            <h1 className={styles.allHeader}>บทความทั้งหมด</h1>
                            {
                                articleMod.length > 0 &&
                                <div className={styles.allHeaderItem} onClick={() => clickArticle(articleMod[0])}>
                                    <img src={articleMod[0].seo.cover_img} className={styles.allHeaderItemImg}></img>
                                    <div className={styles.allHeaderItemCardControl}>

                                        <span className={styles.allHeaderItemCardTitle}>
                                            {articleMod[0].seo.title}
                                        </span>
                                        <span className={styles.allHeaderItemCardDesc}>
                                            {articleMod[0].seo.description}
                                        </span>
                                    </div>
                                </div>
                            }


                            <div className={styles.allListControl}>
                                {
                                    articleMod.map((item: PostArticleModel, index: number) => {

                                        return (
                                            index != 0 &&
                                            <div className={styles.allListItem} key={index} onClick={() => clickArticle(item)}>
                                                <img src={item.seo.cover_img} className={styles.itemImg}></img>
                                                <div className={styles.itemTextControl}>
                                                    <span className={styles.itemTitle}>{item.title}</span>
                                                    <span className={styles.itemDesc}>{item.seo.description}</span>
                                                </div>
                                            </div>

                                        )
                                    })
                                }

                            </div>
                        </div>
                    }
                    

                </div>

            </div>
        </>
    )
}

export default AllArticlesComponent;