import { getGenerativeModel, getVertexAI } from "@firebase/vertexai-preview";
import APIService from "../../services/api.services";
import { firebaseApp } from "../../utility/firebase-config";
import { useState } from "react";
import { safetySettings } from "../../utility/safe-settings";
import { geminiConfig } from "../../utility/gemini-config";
import MENU_LIST from "../../assets/json/menu.json";
import { ResultMessageModel } from "../../model/result-post.model";
import { Button, Form, Spinner } from "react-bootstrap";
import "./menu_4.scss";
import { generateImageFromText, maskText } from "../../services/image-service";
import { compressAndUploadImage } from "../../services/upload-image";
import { APITelHoraModel } from "../../model/api-tel-hora.model";


const Menu4Component = () => {
    const [telID, setTelID] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [imgData, setImgData] = useState<any>("" || null);
    function sumTelephoneNumber(phoneNumber: string): number {
        // Split the string into individual characters, convert them to numbers, and sum them up
        return phoneNumber
            .split('')       // Split the string into an array of characters
            .map(Number)     // Convert each character to a number
            .reduce((sum, digit) => sum + digit, 0);  // Sum all the digits
    }
    const submit = async () => {

        if (telID) {

            const res = await APIService().getResultNumber(sumTelephoneNumber(telID));
            if (res) {
                try {
                    if (res.status == 200) {
                        const result = res.data as APITelHoraModel;

                        const jsonObject = {
                            sum_tel_id: sumTelephoneNumber(telID),
                            summary: result.summary[0],
                            explanation: result.explanation[0],
                            tel_id: telID,
                            title: result.seo_title
                        }

                        jsonObject["title"] = "ผลลัพธ์เลขโทรศัพท์ " + maskText(telID) + " ของคุณคือ";
                        jsonObject["summary"] = result.summary[0].replaceAll("<br>","").replaceAll(telID, "");
                        jsonObject["explanation"] = result.explanation[0].replaceAll("<br>","").replaceAll(telID, "")
                        const body = {
                            menu_id: MENU_LIST[3].id,
                            result: jsonObject,
                        }
                        const imageData = await generateImageFromText("ผลดูดวงจากเบอร์ของคุณ ", telID, jsonObject.summary,4);
                        let uploadedImageUrl = "https://firebasestorage.googleapis.com/v0/b/horoscope-project-d3937.appspot.com/o/images%2Fshare-cover.jpg?alt=media";
                        if (imageData) {
                            setImgData(imageData);
                            uploadedImageUrl = await compressAndUploadImage(imageData, `image_${Date.now()}.jpg`);
                            // if(uploadedImageUrl){
                            //     setImgData(imageData);
                            // }
                        }
                        body["imageUrl"] = uploadedImageUrl

                        APIService().postResult(body).then((res: any) => {

                            try {
                                if (res.status == 200) {
                                    const result = res.data as ResultMessageModel;
                                    window.open("https://mamoodi.com/tel-hora/result?id=" + result.id, "_self");
                                }
                            } catch (error) {

                            }
                        })


                    }
                } catch (error) {
                    AICompute();
                }

            } else {
                AICompute();
            }


        }


    }

    const AICompute = async () => {
        const vertexAI = getVertexAI(firebaseApp);

        setIsSubmitting(true);
        const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-flash", safetySettings: safetySettings, generationConfig: geminiConfig });

        const prompt = `ฉันอยากดูดวงเบอร์โทรศัพท์
                เลขโทรศัพท์คือ ${telID} และ ผลรวมคือ ${sumTelephoneNumber(telID)}
                ดูดวงจากผลรวม ${sumTelephoneNumber(telID)}
                Return JSON format only with key (sum_tel_id (ผลลัพธ์ของเลข), summary (สั้นๆ ระหว่าง 40-50 คำ โดยไม่ต้องทวนเบอร์ word break by "<br>"), tel_id (เลข ${telID}))`
        // To stream generated text output, call generateContentStream with the text input
        const result = await model.generateContent(prompt);
        const jsonObject = JSON.parse(result.response.text());
        jsonObject["title"] = "ผลลัพธ์เลขโทรศัพท์ " + maskText(telID) + " ของคุณคือ";
        jsonObject["summary"] = jsonObject.summary.replaceAll("<br>","").replaceAll(telID, "");
        const imageData = await generateImageFromText("ผลดูดวงจากเบอร์ของคุณ ", telID, jsonObject.summary,4);
        let uploadedImageUrl = "https://firebasestorage.googleapis.com/v0/b/horoscope-project-d3937.appspot.com/o/images%2Fshare-cover.jpg?alt=media";
        if (imageData) {
            uploadedImageUrl = await compressAndUploadImage(imageData, `image_${Date.now()}.jpg`);
        }
        const body = {
            menu_id: MENU_LIST[3].id,
            result: jsonObject,
        }
        body["imageUrl"] = uploadedImageUrl

        APIService().postResult(body).then((res: any) => {

            try {
                if (res.status == 200) {
                    const result = res.data as ResultMessageModel;
                    window.open("https://mamoodi.com/tel-hora/result?id=" + result.id, "_self");
                }
            } catch (error) {

            }
        })
    }

    const handleInputChange = (e) => {
        const value = e.target.value;

        // Only allow alphanumeric characters (letters and numbers), no whitespace or special characters
        const regex = /^[a-zA-Z0-9ก-ฮ]*$/;

        if (regex.test(value)) {
            setTelID(value);
        }
    };


    return (
        <>
            <div className="menu-4-control">
                <div className='menu-4-playing-control'>
                    <span className="menu-4-playing-title">ดูดวงเบอร์โทรศัพท์ของคุณ</span>
                    <span className="menu-4-playing-desc">
                        การดูดวงเบอร์โทรศัพท์เชื่อว่าเบอร์ที่มงคลสามารถเสริมดวงชะตา ความมั่นใจ และนำโชคลาภมาให้เจ้าของเบอร์ได้ โดยพลังงานจากตัวเลขในเบอร์ถูกมองว่ามีอิทธิพลต่อชีวิตประจำวัน.</span>

                    {
                        !isSubmitting ?

                            <>
                                <div className="menu-4-form-control">
                                    <span className="menu-4-form-label">ใส่เบอร์โทรศัพท์ของคุณ</span>
                                    <Form.Control type="text" placeholder="ระบุเบอร์โทรศัพท์" className="menu-4-form-input"
                                        value={telID} onChange={(e) => handleInputChange(e)}>

                                    </Form.Control>

                                    <span className="menu-4-form-warning">*ใส่ข้อมูลโดยไม่ต้องเว้นวรรค เช่น 0911234567</span>

                                    {/* {
                                        imgData && 
                                        <img src={imgData} className="menu-4-form-img-data" />
                                    } */}
                                    {
                                        telID &&
                                        <Button className="menu-4-button" onClick={submit}>ตรวจชะตา</Button>
                                    }
                                </div>

                            </> :

                            <>
                                <div className="menu-4-form-control">
                                    <div className="menu-4-form-loading">

                                        <Spinner className="menu-4-form-loading-spinner"></Spinner>
                                        <span className="menu-4-form-loading-text">กำลังตรวจสอบดวงของคุณ</span>
                                    </div>

                                </div>
                            </>
                    }

                </div>

            </div>
        </>
    )
}

export default Menu4Component;