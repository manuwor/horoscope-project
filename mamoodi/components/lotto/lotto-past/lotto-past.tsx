
import { useEffect, useState } from "react";
import styles from "./lotto-past.module.scss";
import { LottoListModel } from "@/model/lotto-list.model";
import { LottoDetailModel } from "@/model/lotto-detail.model";
import APIService from "@/services/api.service";
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import LottoDropdown from "../lotto-dropdown";
import { TextField } from "@mui/material";
import AdBanner from "@/services/ads-banner";
import config from "@/config";


const LottoPastComponent = () => {
    const [lottoList, setLottoList] = useState<LottoListModel>();
    const [lottoDetail, setLottoDetail] = useState<LottoDetailModel>();
    const [searchNumber, setSearchNumber] = useState('');
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState(null || '');
    useEffect(() => {
        getLottoList();
    }, [])



    const handleChangeSearch = (value) => {
        setResult(null);
        console.log(value);
        setSearchNumber(value);
    }
    const getLottoList = () => {

        APIService().getLottoPage().then((res: any) => {

            try {
                if (res.status == 200) {
                    const result = res.data as LottoListModel;
                    setLottoList(result);

                }
            } catch (error) {

            }

        })
    }
    const getLottoDetail = (id) => {
        APIService().getLottoCurrent(id).then((res: any) => {
            try {

                if (res.status == 200) {
                    const result = res.data as LottoDetailModel;
                    console.log(result);
                    setLottoDetail(result);
                }
            } catch (error) {

            }

        })
    }
    const handleSearch = () => {
        if (searchNumber.length !== 6) {
            setError('กรุณากรอกหมายเลข 6 หลัก');
            setResult('');
            return;
        }

        let found = false;
        if (lottoDetail) {



            // Check if the number matches any of the prizes
            const arrayResult: any[] = [];

            lottoDetail.response.prizes.forEach(prize => {
                console.log(prize);
                if (prize.number.includes(searchNumber)) {
                    console.log(searchNumber);
                    arrayResult.push({ name: prize.name, reward: prize.reward });
                    found = true;
                }
            });


            // Check if the number matches any of the running numbers
            if (!found) {
                lottoDetail.response.runningNumbers.forEach(runningNumber => {
                    if (runningNumber.number.includes(searchNumber.slice(-3)) || runningNumber.number.includes(searchNumber.slice(-2))) {
                        arrayResult.push({ name: runningNumber.name, reward: runningNumber.reward });
                        found = true;
                    }
                });
            }
            setResult(arrayResult);
            console.log(arrayResult);
            if (!found) {
                setError('ไม่พบหมายเลขของท่านในรางวัล');
                setResult(null);
            } else {
                setError('');
            }
        }
    };
    const handleSelect = (selectedId: string) => {
        getLottoDetail(selectedId);
    };
    return (
        <>
            <div className={styles.lottoControl}>
                <div className={styles.lottoItemControl}>
                    <div className={styles.lottoCurrentControl}>
                        <div className={styles.lottoCurrentHeaderControl}>
                        </div>
                        <span className={styles.lottoCurrentHeader}>ตรวจสลากกินแบ่งรัฐบาล</span>

                        {
                            lottoList &&
                            <LottoDropdown lottoList={lottoList} onSelect={handleSelect} />
                        }
                        {lottoDetail && (
                            <div className={styles.lottoFlexControl}>
                                <div>

                                    <Form className={styles.lottoFlexControl}>
                                        <span className={styles.lottoCurrentHeader}>
                                            งวดประจำวันที่ {lottoDetail.response.date}
                                        </span>
                                        <Form.Group controlId="formLottoNumber" className={styles.lottoCurrentFormGroup}>
                                            <Form.Label className={styles.lottoCurrentInputLabel}>
                                                กรอกหมายเลขสลากของท่าน (6 หลัก)
                                            </Form.Label>
                                            <div className={styles.lottoCurrentSearchControl}>
                                                <TextField
                                                    type="text"
                                                    placeholder="เช่น 095867"
                                                    value={searchNumber}
                                                    onChange={(e) => handleChangeSearch(e.target.value)}
                                                    inputProps={{ maxLength: 6 }}
                                                    fullWidth
                                                    variant="outlined" // You can choose "outlined", "filled", or "standard"
                                                />
                                                <Button
                                                    className={styles.lottCurrentSearchButton}
                                                    onClick={handleSearch}
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    ตรวจหวย
                                                </Button>
                                            </div>
                                        </Form.Group>
                                    </Form>
                                    {error && (
                                        <div className={styles.lottoCurrentFailedControl}>
                                            {error !== "กรุณากรอกหมายเลข 6 หลัก" && (
                                                <span className={styles.lottoCurrentFailedSubHeader}>เสียใจด้วย</span>
                                            )}
                                            <span className={styles.lottoCurrentFailedHeader}>{error}</span>
                                        </div>
                                    )}
                                    {result && (
                                        <div className={styles.lottoCurrentSuccessControl}>
                                            <span className={styles.lottoCurrentSuccessSubHeader}>ยินดีด้วย</span>
                                            <span className={styles.lottoCurrentSuccessHeader}>{result.name}</span>
                                            <span className={styles.lottoCurrentSuccessSubHeader}>
                                                {result && result.length > 0 && (
                                                    <div className={styles.lottoCurrentSuccessHeaderControl}>
                                                        <span className={styles.lottoCurrentSuccessHeader}>{searchNumber}</span>
                                                        หมายเลขของท่านถูกรางวัล
                                                        {result.map((item, index) => (
                                                            <span key={index}>- {item.name}: {Number(item.reward).toLocaleString()} บาท</span>
                                                        ))}
                                                    </div>
                                                )}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <AdBanner
                                    data-ad-slot={config.ads.ads_1_id}
                                    data-ad-format="auto"
                                    data-full-width-responsive="true"
                                />
                                <div className={styles.lottoCurrentShowAllControl}>
                                    <span className={styles.lottoCurrentShowAllTitle}>รางวัลที่ 1</span>
                                    <span className={styles.lottoCurrentShowAllValue1}>
                                        {lottoDetail.response.prizes[0].number}
                                    </span>
                                    <div className={styles.lottoCurrentShowAllDivider}></div>
                                    <div className={styles.lottoCurrentShowAllRunningControl}>
                                        {lottoDetail.response.runningNumbers &&
                                            lottoDetail.response.runningNumbers.map((item, index) => (
                                                <div className={styles.lottoCurrentShowAllRunningItem} key={index}>
                                                    <span className={styles.lottoCurrentShowAllTitle}>{item.name}</span>
                                                    {item.number.map((innerItem, innerIndex) => (
                                                        <span className={styles.lottoCurrentShowAllValue1} key={innerIndex}>
                                                            {innerItem}
                                                        </span>
                                                    ))}
                                                </div>
                                            ))}
                                    </div>
                                    <div className={styles.lottoCurrentShowAllDivider}></div>
                                    {lottoDetail.response.prizes &&
                                        lottoDetail.response.prizes
                                            .filter((item) => item.id !== "prizeFirst")
                                            .map((item, index) => (
                                                <div className={styles.lottoCurrentShowAllOtherControl} key={index}>
                                                    <span className={styles.lottoCurrentShowAllOtherTitle}>{item.name}</span>
                                                    <span className={styles.lottoCurrentShowAllOtherSubTitle}>
                                                        {item.amount} รางวัล รางวัลละ {Number(item.reward).toLocaleString()} บาท
                                                    </span>
                                                    <div className={styles.lottoCurrentShowAllOtherValueControl}>
                                                        {item.number.map((innerItem, innerIndex) => (
                                                            <span className={styles.lottoCurrentShowAllOtherValue} key={innerIndex}>
                                                                {innerItem}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className={styles.lottoCurrentShowAllDivider}></div>
                                                </div>
                                            ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}


export default LottoPastComponent;