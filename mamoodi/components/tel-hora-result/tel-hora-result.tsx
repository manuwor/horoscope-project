import { useEffect, useState } from "react"
import styles from "./tel-hora-result.module.scss";
import ShareButtons from "../share-button/share-button";
import config from "@/config";
import { Button } from "@mui/material";
import { TelHoraResultModel } from "@/model/result-tel-hora.model";

const TelHoraResultComponent = ({ result }: any) => {

    const [resultItem, setResult] = useState<TelHoraResultModel>();


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
        window.open(config.app_url.tel_hora, "_self");

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
                    <div className={styles.telHoraResult}>
                        <div className={styles.telHoraResultItem}>
                            <span className={styles.telHoraResultItemHeaderDesc}>ผลลัพธ์จากเบอร์โทรศัพท์ </span>

                            {
                                resultItem.imageUrl ? <img src={resultItem.imageUrl} className={styles.telHoraResultCardImg}></img> :
                                    <div className={styles.telHoraResultCardIDControl}>

                                        <span className={styles.telHoraResultCardText}>{resultItem.result.tel_id}</span>
                                    </div>

                            }


                            <div className={styles.telHoraResultSumControl}>
                                <h1 className={styles.telHoraResultSumText}>{resultItem.result.sum_tel_id}</h1>

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
                            <div className={styles.telHoraResultCardControl}>
                                <span className={styles.telHoraResultCardTitle}>คำอธิบาย</span>
                                <span className={styles.telHoraResultCardDesc}>{resultItem.result.explanation}</span>
                            </div>
                            <div className={styles.telHoraResultShareControl}>
                                <ShareButtons url={config.url + "tel-hora/result?id=" + resultItem.id} title={resultItem.result.title}></ShareButtons>
                            </div>
                            <div className={styles.telHoraResultStartControl}>
                                <Button className={styles.telHoraResultStartButton} onClick={clickStart}>เริ่มดูเช็คดวงด้วยเบอร์</Button>
                            </div>
                        </div>
                    </div>

                </div>
            }
        </>
    )
}

export default TelHoraResultComponent;