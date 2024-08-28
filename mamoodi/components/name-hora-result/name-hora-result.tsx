import { useEffect, useState } from "react"
import styles from "./name-hora-result.module.scss";
import ShareButtons from "../share-button/share-button";
import config from "@/config";
import { Button } from "@mui/material";
import { NameHoraResultModel } from "@/model/result-name-hora.model";
import ShareButton from "@/services/share-button";

const NameHoraResultComponent = ({ result }: any) => {

    const [resultItem, setResult] = useState<NameHoraResultModel>();
    const [imageData, setImageData] = useState<string | null>(null);

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
        window.open(config.app_url.name_hora, "_self");

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
                    <div className={styles.nameHoraResult}>
                        <div className={styles.nameHoraResultItem}>
                            <div className="d-flex">
                                <ShareButton url={config.url + "name-hora/result?id=" + resultItem.id} title={resultItem.result.title}></ShareButton>
                            </div>

                            {
                                resultItem.imageUrl ? <img src={resultItem.imageUrl} className={styles.nameHoraResultCardImg}></img> :
                                    <div className={styles.nameHoraResultCardIDControl}>

                                        <span className={styles.nameHoraResultCardText}>{resultItem.result.name_id}</span>
                                    </div>
                            }





                            <div className={styles.nameHoraResultCardControl}>
                                <span className={styles.nameHoraResultCardTitle}>คำอธิบาย</span>
                                <span className={styles.nameHoraResultCardDesc}>{resultItem.result.explanation.replaceAll("<br>", "")}</span>
                            </div>
                            <div className={styles.nameHoraResultShareControl}>
                                <ShareButtons url={config.url + "name-hora/result?id=" + resultItem.id} title={resultItem.result.title}></ShareButtons>
                            </div>
                            <div className={styles.nameHoraResultStartControl}>
                                <Button className={styles.nameHoraResultStartButton} onClick={clickStart}>เริ่มดูเช็คดวงด้วยชื่อ</Button>
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
                    </div>

                </div>
            }
        </>
    )
}

export default NameHoraResultComponent;