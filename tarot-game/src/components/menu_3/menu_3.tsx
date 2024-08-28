import { getGenerativeModel, getVertexAI } from "@firebase/vertexai-preview";
import "./menu_3.scss";
import {firebaseApp} from "../../utility/firebase-config";
import { safetySettings } from "../../utility/safe-settings";
import { geminiConfig } from "../../utility/gemini-config";
import { useState } from "react";
import MENU_LIST from "../../assets/json/menu.json";
import APIService from "../../services/api.services";
import { ResultMessageModel } from "../../model/result-post.model";
import { Button, Form, FormControl, Spinner } from "react-bootstrap";
import { generateImageFromText } from "../../services/image-service";
import { compressAndUploadImage } from "../../services/upload-image";

const Menu3Component = () => {

    const [carID, setCarID] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);


    function calculateThaiStringSum(input) {
        const charMap = {
            'ก': 1, 'ด': 1, 'ถ': 1, 'ท': 1, 'ภ': 1,
            'ข': 2, 'ช': 2, 'ง': 2, 'บ': 2, 'ป': 2,
            'ฆ': 3, 'ต': 3, 'ฑ': 3, 'ฒ': 3,
            'ค': 4, 'ธ': 4, 'ญ': 4, 'ร': 4, 'ษ': 4,
            'ฉ': 5, 'ฌ': 5, 'ณ': 5, 'น': 5, 'ม': 5, 'ห': 5, 'ฎ': 5, 'ฮ': 5, 'ฬ': 5,
            'จ': 6, 'ล': 6, 'ว': 6, 'อ': 6,
            'ซ': 7, 'ศ': 7, 'ส': 7,
            'ผ': 8, 'ฝ': 8, 'พ': 8, 'ฟ': 8, 'ย': 8, 'ฏ': 9, 'ฐ': 9
        };

        let sum = 0;

        for (const char of input) {
            if (charMap[char]) {
                sum += charMap[char];
            } else if (!isNaN(parseInt(char))) {
                sum += parseInt(char);
            }
        }

        return sum;
    }



    const submit = async () => {

        if (carID) {
            const vertexAI = getVertexAI(firebaseApp);

            setIsSubmitting(true);
            const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-flash", safetySettings: safetySettings, generationConfig: geminiConfig });

            const prompt = `ฉันอยากดูดวงทะเบียนรถ
    ทะเบียนรถคือ ${carID} และ ผลรวมคือ ${calculateThaiStringSum(carID)}
    ดูดวงจากผลรวม ${calculateThaiStringSum(carID)}
    Return JSON format only with key (sum_car_id (ผลลัพธ์ของเลข), summary (สั้นๆ ไม่เกิน 100 คำ),explanation (ดวงที่ได้จากผลลัพธ์ ขอยาวๆ), car_id (เลข ${carID}))`
            // To stream generated text output, call generateContentStream with the text input
            const result = await model.generateContent(prompt);
            console.log(result.response.text());
            const jsonObject = JSON.parse(result.response.text());
            console.log(jsonObject);
            jsonObject["title"] = "ผลลัพธ์เลขทะเบียน " + carID + " ของคุณคือ";
            const imageData = await generateImageFromText("ผลลัพธ์เลขทะเบียน", carID , jsonObject.summary);
            let uploadedImageUrl = "https://firebasestorage.googleapis.com/v0/b/horoscope-project-d3937.appspot.com/o/images%2Fshare-cover.jpg?alt=media";
            if (imageData) {
                uploadedImageUrl = await compressAndUploadImage(imageData, `image_${Date.now()}.jpg`);
            }
            const body = {
                menu_id: MENU_LIST[2].id,
                result: jsonObject,
            }
            body["imageUrl"] = uploadedImageUrl
           

            APIService().postResult(body).then((res: any) => {

                try {
                    if (res.status == 200) {
                        const result = res.data as ResultMessageModel;
                        window.open("https://mamoodi.com/car-hora/result?id=" + result.id, "_self");
                    }
                } catch (error) {

                }
            })
        }


    }
    const handleInputChange = (e) => {
        const value = e.target.value;

        // Only allow alphanumeric characters (letters and numbers), no whitespace or special characters
        const regex = /^[a-zA-Z0-9ก-ฮ]*$/;

        if (regex.test(value)) {
            setCarID(value);
        }
    };

    return (
        <>
            <div className="menu-3-control">
                <div className='menu-3-playing-control'>
                    <span className="menu-3-playing-title">ดูดวงทะเบียนรถของคุณ</span>
                    <span className="menu-3-playing-desc">
                        การดูดวงทะเบียนรถเป็นความเชื่อส่วนบุคคลที่หลายคนให้ความสำคัญ โดยเชื่อว่าตัวเลขในทะเบียนรถนั้นมีความหมายและสามารถส่งผลต่อชีวิตของผู้ขับขี่ได้ เช่น โชคลาภ ความปลอดภัย หรือความสำเร็จในด้านต่าง ๆ</span>

                    {
                        !isSubmitting ?

                            <>
                                <div className="menu-3-form-control">
                                    <span className="menu-3-form-label">ใส่ทะเบียนรถของคุณ</span>
                                    <Form.Control type="text" placeholder="ใส่ทะเบียนรถ" className="menu-3-form-input"
                                        value={carID} onChange={(e) => handleInputChange(e)}>

                                    </Form.Control>

                                    <span className="menu-3-form-warning">*ใส่ข้อมูลโดยไม่ต้องเว้นวรรค เช่น 1กก4413</span>
                                    {
                                        carID &&
                                        <Button className="menu-3-button" onClick={submit}>ตรวจเลขทะเบียน</Button>
                                    }
                                </div>

                            </> :

                            <>
                                <div className="menu-3-form-control">
                                    <div className="menu-3-form-loading">

                                        <Spinner className="menu-3-form-loading-spinner"></Spinner>
                                        <span className="menu-3-form-loading-text">กำลังตรวจสอบดวงของคุณ</span>
                                    </div>

                                </div>
                            </>
                    }

                </div>

            </div>

        </>
    )
}

export default Menu3Component;