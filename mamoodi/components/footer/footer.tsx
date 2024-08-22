import styles from "./footer.module.scss";


const FooterComponent = () => {

    const clickLogo = () => {
    }
    const clickPrivacy = () => {
    }
    const clickTerms = () => {
    }
    return (

        <>
            <div className={styles.footerMain}>
                <img src="/assets/images/logo.jpg" onClick={clickLogo} className={styles.footerLogo}></img>
                <div className={styles.footerTextControl}>

                    <span className={styles.footerText} onClick={clickPrivacy}>นโยบายความเป็นส่วนตัว</span>
                    <span className={styles.footerText} onClick={clickTerms}>ข้อกำหนดและเงื่อนไข</span>
                </div>
            </div>
        </>
    )
}

export default FooterComponent;