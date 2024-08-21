import { useEffect, useState } from "react";
import "./lotto.scss";
import APIService from "../../services/api.services";
import { LottoListModel } from "../../model/lotto-list.model";
import { LottoDetailModel } from "../../model/lotto-detail.model";
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
const LottoComponent = () => {
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

        APIService().getLottoPage(1).then((res: any) => {

            try {

                if (res.status == 200) {
                    const result = res.data as LottoListModel;
                    getLottoDetail(result.response[0].id);
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

    return (
        <>
            <div className="lotto-control">
                <div className="lotto-item-control">
                    <div className="lotto-current-control">
                        <span className="lotto-current-header">ตรวจสลากกิน</span>
                        {
                            lottoDetail &&
                            <div className="d-flex flex-column">
                                <span className="lotto-current-header">งวดประจำวันที่ {lottoDetail.response.date}</span>
                                <div>
                                    <Form>
                                        <Form.Group controlId="formLottoNumber" className="lotto-current-form-group">
                                            <Form.Label className="lotto-current-input-label">กรอกหมายเลขสลากของท่าน (6 หลัก)</Form.Label>
                                            <div className="lotto-current-search-control">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="เช่น 095867"
                                                    value={searchNumber}
                                                    onChange={(e) => handleChangeSearch(e.target.value)}
                                                    maxLength={6}
                                                />
                                                <Button className="lott-current-search-button" onClick={handleSearch}>
                                                    ตรวจหวย
                                                </Button>
                                            </div>
                                        </Form.Group>

                                    </Form>
                                    {error && <div className="lotto-current-failed-control">
                                        {
                                            error != "กรุณากรอกหมายเลข 6 หลัก" && <span className="lotto-current-failed-sub-header">เสียใจด้วย</span>
                                        }

                                        <span className="lotto-current-failed-header">{error}</span>

                                    </div>}
                                    {result && (
                                        <div className="lotto-current-success-control">
                                            <span className="lotto-current-success-sub-header">ยินดีด้วย</span>
                                            <span className="lotto-current-success-header">{result.name}</span>
                                            <span className="lotto-current-success-sub-header">
                                                {
                                                    result && result.length > 0 &&

                                                    <div className="d-flex flex-column">
                                                        <span className="lotto-current-success-header">{searchNumber}</span>
                                                        หมายเลขของท่านถูกรางวัล

                                                        {
                                                            result.map((item, index) => {

                                                                return (
                                                                    <span>- {item.name}: {Number(item.reward).toLocaleString()} บาท</span>
                                                                )

                                                            })
                                                        }
                                                    </div>

                                                }

                                            </span>

                                        </div>
                                    )}
                                </div>

                                <div className="lotto-current-show-all-control">
                                    <span className="lotto-current-show-all-title">
                                        รางวัลที่ 1
                                    </span>
                                    <span className="lotto-current-show-all-value-1">
                                        {lottoDetail.response.prizes[0].number}
                                    </span>
                                    <div className="lotto-current-show-all-divider"></div>
                                    <div className="lotto-current-show-all-running-control">
                                        {
                                            lottoDetail.response.runningNumbers && lottoDetail.response.runningNumbers.map((item, index) => {


                                                return (
                                                    <div className="lotto-current-show-all-running-item" key={index}>
                                                        <span className="lotto-current-show-all-title">{item.name}</span>
                                                        {
                                                            item.number.map((innerItem, innerIndex) => {
                                                                return (
                                                                    <span className="lotto-current-show-all-value-1" key={innerIndex}>
                                                                        {innerItem}
                                                                    </span>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="lotto-current-show-all-divider"></div>

                                    {
                                        lottoDetail.response.prizes && lottoDetail.response.prizes.filter((item) => item.id != "prizeFirst").map((item, index) => {
                                            return (
                                                <div className="lotto-current-show-all-other-control">
                                                    <span className="lotto-current-show-all-other-title">
                                                        {item.name}
                                                    </span>
                                                    <span className="lotto-current-show-all-other-sub-title">
                                                        {item.amount} รางวัล รางวัลละ {Number(item.reward).toLocaleString()} บาท
                                                    </span>
                                                    <div className="lotto-current-show-all-other-value-control">
                                                        {
                                                            item.number.map((innerItem, innerIndex) => {

                                                                return (
                                                                    <span className="lotto-current-show-all-other-value">
                                                                        {innerItem}
                                                                    </span>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    <div className="lotto-current-show-all-divider"></div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default LottoComponent;