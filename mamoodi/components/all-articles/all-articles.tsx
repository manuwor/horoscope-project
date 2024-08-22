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
        console.log(articles);
        setArticleMod(articles);

    },[])
    const clickArticle = (item: Article) => {
        UtilityService().clickSendEvent(item.title, "click");
        router.push('/articles/' + item.id);
    

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
                    
                    {
                        articleMod &&
                        <div className={styles.allMainCenter}>
                            <h1 className={styles.allHeader}>บทความทั้งหมด</h1>
                            <div className={styles.allListControl}>
                                {articleMod.length > 0 &&
                                    articleMod.map((item: Article, index: number) => {

                                        return (
                                          
                                            <div className={styles.allListItem} key={index} onClick={() => clickArticle(item)}>
                                                <img src="/assets/images/share-cover.jpg" className={styles.itemImg}></img>
                                                <div className={styles.itemTextControl}>
                                                    <span className={styles.itemTitle}>{item.title}</span>
                                                    <span className={styles.itemDesc}>{item.shortDescription}</span>
                                                </div>
                                            </div>

                                        )
                                    })
                                }

                            </div>
                        </div>
                    }
                    


            </div>
        </>
    )
}

export default AllArticlesComponent;