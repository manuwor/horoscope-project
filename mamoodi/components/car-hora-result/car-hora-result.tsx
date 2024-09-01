import { useEffect, useState } from "react"
import styles from "./car-hora-result.module.scss";
import ShareButtons from "../share-button/share-button";
import config from "@/config";
import { Button } from "@mui/material";
import { CarHoraResultModel } from "@/model/result-car-hora.model";
import ShareButton from "@/services/share-button";
import { AdUnit } from "next-google-adsense";

const CarHoraResultComponent = ({ result }: any) => {

    const [resultItem, setResult] = useState<CarHoraResultModel>();


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
        window.open(config.app_url.car_hora, "_self");

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
                    <div className={styles.carHoraResult}>
                        <div className={styles.carHoraResultItem}>
                            <div className="d-flex">
                                <ShareButton url={config.url + "car-hora/result?id=" + resultItem.id} title={resultItem.result.title}></ShareButton>
                            </div>


                            {
                                resultItem.imageUrl ? <img src={resultItem.imageUrl} className={styles.carHoraResultCardImg}></img> :
                                    <div className={styles.carHoraResultCardIDControl}>
                                        <span className={styles.carHoraResultCardText}>{resultItem.result.car_id}</span>
                                    </div>

                            }

                            <div className={styles.carHoraResultSumControl}>
                                <h1 className={styles.carHoraResultSumText}>{resultItem.result.sum_car_id}</h1>
                            </div>
                            {/* Google AdSense */}
                            <div>

                                <AdUnit
                                    publisherId="pub-7304132375043084"
                                    slotId="5829918586"
                                    layout="display"
                                />
                            </div>
                            <div className={styles.carHoraResultCardControl}>
                                <span className={styles.carHoraResultCardTitle}>คำอธิบาย</span>
                                <span className={styles.carHoraResultCardDesc}>{resultItem.result.explanation.replaceAll("<br>", "")}</span>
                            </div>
                            <div className={styles.carHoraResultShareControl}>
                                <ShareButtons url={config.url + "car-hora/result?id=" + resultItem.id} title={resultItem.result.title}></ShareButtons>
                            </div>
                            <div className={styles.carHoraResultStartControl}>
                                <Button className={styles.carHoraResultStartButton} onClick={clickStart}>เริ่มตรวจทะเบียนรถ</Button>
                            </div>


                        </div>
                    </div>

                </div>
            }
        </>
    )
}

export default CarHoraResultComponent;