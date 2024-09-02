import { useEffect } from 'react';
import styles from "./ads-banner.module.scss";
const AdBanner = (props) => {
    const isShow = process.env.NEXT_PUBLIC_NODE_ENV == "production" ? true : false;
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (

        isShow &&
        <ins
            className={styles.adsBannerControl}
            style={{
                display: 'block',
                overflow: 'hidden',
            }}
            data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}
            {...props}
        />


    );
};
export default AdBanner;