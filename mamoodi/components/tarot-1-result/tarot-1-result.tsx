import { ResultTarot1Model } from "@/model/result-tarot-1.model";
import { useEffect, useState } from "react"
import styles from "./tarot-1-result.module.scss";
import ShareButtons from "../share-button/share-button";
import config from "@/config";
import { Button } from "@mui/material";
import ShareButton from "@/services/share-button";
import AdBanner from "@/services/ads-banner";


const Tarot1Result = ({ result }: any) => {

    const [resultItem, setResult] = useState<ResultTarot1Model>();


    useEffect(() => {
        if (result) {
            setResult(result);
        }

    }, [result])
    useEffect(() => {
        if (resultItem) {
            incrementResultViewCount(resultItem.id)
        }

    }, [resultItem])


    const incrementResultViewCount = async (resultId: string) => {
        try {
            const response = await fetch(`${config.api.url}results/${resultId}/increment-view`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to increment view count');
            }

            const data = await response.json();
            console.log('New view count:', data.newViewCount);
        } catch (error) {
            console.error('Error incrementing view count:', error);
        }
    };
    const clickStart = () => {
        window.open(config.app_url.tarot1, "_self");

    }

    useEffect(() => {
        if (typeof window !== "undefined" && window.adsbygoogle) {
            window.adsbygoogle.push({});
        }
    }, []);
    return (
        <>
            {
                resultItem &&


                <div className={styles.bodyCustomMain}>
                    <div className={styles.tarot1Result}>
                        <div className={styles.tarot1ResultItem}>

                            <div className={styles.tarot1ResultItemShareControl}>
                                <ShareButton url={config.url + "tarot-1/result?id=" + resultItem.id} title={resultItem.result.title}></ShareButton>
                            </div>
                            <img src={resultItem.result.card_url} className={styles.tarot1ResultCardImg}></img>
                            {
                                resultItem.result.overall &&
                                <div className={styles.tarot1ResultCardControl}>
                                    <span className={styles.tarot1ResultCardTitle}>ดวงโดยรวม</span>
                                    <span className={styles.tarot1ResultCardDesc}>{resultItem.result.overall.replaceAll("<br>", "")}</span>
                                </div>

                            }

                            {/* Google AdSense */}
                            <div>
                                <AdBanner
                                    data-ad-slot={config.ads.ads_1_id}
                                    data-ad-format="auto"
                                    data-full-width-responsive="true"
                                />
                            </div>
                            {
                                resultItem.result.job &&
                                <div className={styles.tarot1ResultCardControl}>
                                    <span className={styles.tarot1ResultCardTitle}>หน้าที่การงาน</span>
                                    <span className={styles.tarot1ResultCardDesc}>{resultItem.result.job.replaceAll("<br>", "")}</span>
                                </div>

                            }
                            {
                                resultItem.result.love &&
                                <div className={styles.tarot1ResultCardControl}>
                                    <span className={styles.tarot1ResultCardTitle}>ความรัก</span>
                                    <span className={styles.tarot1ResultCardDesc}>{resultItem.result.love.replaceAll("<br>", "")}</span>
                                </div>

                            }
                            {
                                resultItem.result.life &&
                                <div className={styles.tarot1ResultCardControl}>
                                    <span className={styles.tarot1ResultCardTitle}>ชีวิต</span>
                                    <span className={styles.tarot1ResultCardDesc}>{resultItem.result.life.replaceAll("<br>", "")}</span>
                                </div>

                            }
                            {
                                resultItem.result.health &&
                                <div className={styles.tarot1ResultCardControl}>
                                    <span className={styles.tarot1ResultCardTitle}>สุขภาพ</span>
                                    <span className={styles.tarot1ResultCardDesc}>{resultItem.result.health.replaceAll("<br>", "")}</span>
                                </div>

                            }
                            <div className={styles.tarot1ResultShareControl}>
                                <ShareButtons url={config.url + "tarot-1/result?id=" + resultItem.id} title={resultItem.result.title}></ShareButtons>
                            </div>
                            <div className={styles.tarot1ResultStartControl}>
                                <Button className={styles.tarot1ResultStartButton} onClick={clickStart}>เริ่มดูดวงวันนี้</Button>
                            </div>
                        </div>
                    </div>

                </div>
            }
        </>
    )
}

export default Tarot1Result;