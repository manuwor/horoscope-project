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
            lottoDetail.response.prizes.forEach(prize => {
                if (prize.number.includes(searchNumber)) {
                    setResult({ name: prize.name, reward: prize.reward });
                    found = true;
                }
            });

            // Check if the number matches any of the running numbers
            if (!found) {
                lottoDetail.response.runningNumbers.forEach(runningNumber => {
                    if (runningNumber.number.includes(searchNumber.slice(-3)) || runningNumber.number.includes(searchNumber.slice(-2))) {
                        setResult({ name: runningNumber.name, reward: runningNumber.reward });
                        found = true;
                    }
                });
            }

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
                        <span className="lotto-current-header">ตรวจสลากกินแบ่งงวดล่าสุด</span>
                        <div>
                            <Row>
                                <Col md={{ span: 6, offset: 3 }}>
                                    <Form>
                                        <Form.Group controlId="formLottoNumber" className="lotto-current-form-group">
                                            <Form.Label className="lotto-current-input-label">กรอกหมายเลขสลากของท่าน (6 หลัก)</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="เช่น 095867"
                                                value={searchNumber}
                                                onChange={(e) => setSearchNumber(e.target.value)}
                                                maxLength={6}
                                            />
                                        </Form.Group>
                                        <Button variant="primary" onClick={handleSearch}>
                                            ตรวจหวย
                                        </Button>
                                    </Form>
                                    {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                                    {result && (
                                        <Card className="mt-3">
                                            <Card.Body>
                                                <Card.Title>{result.name}</Card.Title>
                                                <Card.Text>
                                                    หมายเลข {searchNumber} ของท่านถูกรางวัล {result.name} รับเงินรางวัล {result.reward} บาท
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    )}
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LottoComponent;