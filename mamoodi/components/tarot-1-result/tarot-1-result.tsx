import { ResultTarot1Model } from "@/model/result-tarot-1.model";
import { useEffect, useState } from "react"
import styles from "./tarot-1-result.module.scss";
import ShareButtons from "../share-button/share-button";
import config from "@/config";
import { Button } from "@mui/material";

const Tarot1Result = ({ result }: any) => {

    const [resultItem, setResult] = useState<ResultTarot1Model>();


    useEffect(() => {
        if (result) {
            setResult(result);
        }

    }, [result])

    const clickStart = () => {
        window.open(config.app_url.tarot1 , "_self");

    }

    return (
        <>
            {
                resultItem &&


                <div className={styles.bodyCustomMain}>
                    <div className={styles.tarot1Result}>
                        <div className={styles.tarot1ResultItem}>

                            <h1 className={styles.tarot1ResultItemHeader}>{resultItem.result.title}</h1>
                            {
                                resultItem.result.overall &&
                                <div className={styles.tarot1ResultCardControl}>
                                    <span className={styles.tarot1ResultCardTitle}>ดวงโดยรวม</span>
                                    <span className={styles.tarot1ResultCardDesc}>{resultItem.result.overall}</span>
                                </div>

                            }
                            {
                                resultItem.result.job &&
                                <div className={styles.tarot1ResultCardControl}>
                                    <span className={styles.tarot1ResultCardTitle}>หน้าที่การงาน</span>
                                    <span className={styles.tarot1ResultCardDesc}>{resultItem.result.job}</span>
                                </div>

                            }
                            {
                                resultItem.result.love &&
                                <div className={styles.tarot1ResultCardControl}>
                                    <span className={styles.tarot1ResultCardTitle}>ความรัก</span>
                                    <span className={styles.tarot1ResultCardDesc}>{resultItem.result.love}</span>
                                </div>

                            }
                            {
                                resultItem.result.life &&
                                <div className={styles.tarot1ResultCardControl}>
                                    <span className={styles.tarot1ResultCardTitle}>ชีวิต</span>
                                    <span className={styles.tarot1ResultCardDesc}>{resultItem.result.life}</span>
                                </div>

                            }
                            {
                                resultItem.result.health &&
                                <div className={styles.tarot1ResultCardControl}>
                                    <span className={styles.tarot1ResultCardTitle}>สุขภาพ</span>
                                    <span className={styles.tarot1ResultCardDesc}>{resultItem.result.health}</span>
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