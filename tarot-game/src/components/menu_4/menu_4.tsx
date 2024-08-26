import { getGenerativeModel, getVertexAI } from "@firebase/vertexai-preview";
import APIService from "../../services/api.services";
import firebaseApp from "../../utility/firebase-config";
import { useState } from "react";
import { safetySettings } from "../../utility/safe-settings";
import { geminiConfig } from "../../utility/gemini-config";
import MENU_LIST from "../../assets/json/menu.json";
import { ResultMessageModel } from "../../model/result-post.model";
import { Button, Form, Spinner } from "react-bootstrap";
import "./menu_4.scss";


const Menu4Component = () => {
    const [telID, setTelID] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    function sumTelephoneNumber(phoneNumber: string): number {
        // Split the string into individual characters, convert them to numbers, and sum them up
        return phoneNumber
            .split('')       // Split the string into an array of characters
            .map(Number)     // Convert each character to a number
            .reduce((sum, digit) => sum + digit, 0);  // Sum all the digits
    }
    const submit = async () => {

        if (telID) {
            const vertexAI = getVertexAI(firebaseApp);

            setIsSubmitting(true);
            const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-flash", safetySettings: safetySettings, generationConfig: geminiConfig });

            const prompt = `ฉันอยากดูดวงเบอร์โทรศัพท์
    เลขโทรศัพท์คือ ${telID} และ ผลรวมคือ ${sumTelephoneNumber(telID)}
    ดูดวงจากผลรวม ${sumTelephoneNumber(telID)}
    Return JSON format only with key (sum_tel_id (ผลลัพธ์ของเลข), explanation (ดวงที่ได้จากผลลัพธ์ ขอยาวๆ), tel_id (เลข ${telID}))`
            // To stream generated text output, call generateContentStream with the text input
            const result = await model.generateContent(prompt);
            console.log(result.response.text());
            const jsonObject = JSON.parse(result.response.text());
            console.log(jsonObject);
            jsonObject["title"] = "ผลลัพธ์เลขโทรศัพท์ " + telID + " ของคุณคือ";

            const body = {
                menu_id: MENU_LIST[3].id,
                result: jsonObject,
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/horoscope-project-d3937.appspot.com/o/images%2Fshare-cover.jpg?alt=media'
            }

            APIService().postResult(body).then((res: any) => {

                try {
                    if (res.status == 200) {
                        console.log(res);
                        const result = res.data as ResultMessageModel;
                        window.open("https://mamoodi.com/tel-hora/result?id=" + result.id, "_self");
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