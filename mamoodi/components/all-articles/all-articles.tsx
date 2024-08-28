import config from "@/config";
import styles from "./all-articles.module.scss";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import UtilityService from "@/util/utility";
import { Article } from "@/model/article.model";


const AllArticlesComponent = ({isbg}) => {
    const [articleMod, setArticleMod] = React.useState<Article[]>();
    const router = useRouter();

    useEffect(() => {
        getAllArticle()

    },[])
    const clickArticle = (item: Article) => {
        UtilityService().clickSendEvent(item.title, "click");
        router.push('/articles/' + item.id);
    

    }
    const getAllArticle = async () => {
        const response = await fetch(config.api.url+"articles", { method: 'GET' })
        const article = await response.json();

        setArticleMod(article.articles)

    }

    const openUrl = (url, name) => {
        UtilityService().clickSendEvent(name, "click");
        window.open(url, "_blank")
    }

    const convertThDate = (dateString) : string=> {
        const date = new Date(dateString);
        const thaiDate = date.toLocaleDateString('th-TH', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });

          return thaiDate;
          
    }

    useEffect(() => {
        if (typeof window !== "undefined" && window.adsbygoogle) {
            window.adsbygoogle.push({});
        }
    }, []);
    return (
        <>
            <div className={!isbg ? styles.allMain : styles.allMainBG} >
                    
                    {
                        articleMod &&
                        <div className={!isbg ? styles.allMainCenterNoBG : styles.allMainCenterNoBG}>
                            <h1 className={styles.allHeader}>บทความทั้งหมด</h1>
                            <div className={styles.allListControl}>
                                {articleMod.length > 0 &&
                                    articleMod.sort((a, b) => {
                                        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                                      }).map((item: Article, index: number) => {

                                        return (
                                          
                                            <div className={styles.allListItem} key={index} onClick={() => clickArticle(item)}>
                                                <img src={item.imageUrl != null ? item.imageUrl : "/assets/images/share-cover.jpg"} className={styles.itemImg}></img>
                                                <div className={styles.itemTextControl}>
                                                    <span className={styles.itemTitle}>{item.title}</span>
                                                    <span className={styles.itemDesc}>{item.shortDescription}</span>
                                                    <span className={styles.itemDesc}>เผยแพร่ {convertThDate(item.createdAt)}</span>
                                                </div>
                                            </div>

                                        )
                                    })
                                }

                            </div>

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
                        </div>
                    }
                    


            </div>
        </>
    )
}

export default AllArticlesComponent;