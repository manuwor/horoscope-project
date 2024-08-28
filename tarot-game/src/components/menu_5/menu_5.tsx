import { getGenerativeModel, getVertexAI } from "@firebase/vertexai-preview";
import APIService from "../../services/api.services";
import { useState } from "react";
import { safetySettings } from "../../utility/safe-settings";
import { geminiConfig } from "../../utility/gemini-config";
import MENU_LIST from "../../assets/json/menu.json";
import { ResultMessageModel } from "../../model/result-post.model";
import { Button, Form, Spinner } from "react-bootstrap";
import "./menu_5.scss";
import { generateImageFromText } from "../../services/image-service";
import { compressAndUploadImage } from "../../services/upload-image";
import { firebaseApp } from "../../utility/firebase-config";


const Menu5Component = () => {
    const [name, setName] = useState("");
    const [surname, setSurName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [imgData, setImgData] = useState<any>("" || null);

    const submit = async () => {
        if (name && surname) {
            const vertexAI = getVertexAI(firebaseApp);

            setIsSubmitting(true);
            const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-flash", safetySettings: safetySettings, generationConfig: geminiConfig });

            const prompt = `ฉันอยากดูดวงด้วยชื่อ
    ชื่อของฉันคือ ${name} และนามสกุลคือ ${surname} 
    Return JSON format only with key (summary (สั้นๆ ไม่เกิน 50 คำ), explanation (ดวงที่ได้จากผลลัพธ์ ขอยาวๆ), name_id (ชื่อ ${name} และ นามสกุล ${surname}))`
            // To stream generated text output, call generateContentStream with the text input
            const result = await model.generateContent(prompt);
            const jsonObject = JSON.parse(result.response.text());
            jsonObject["title"] = "ผลลัพธ์จากชื่อ " + name + " และนามสกุล " + surname + " ของคุณคือ";
            const imageData = await generateImageFromText("ดวงจากชื่อ ", name + " " + surname, jsonObject.summary);
            let uploadedImageUrl = "https://firebasestorage.googleapis.com/v0/b/horoscope-project-d3937.appspot.com/o/images%2Fshare-cover.jpg?alt=media";
            setImgData(imageData);
            if (imageData) {
                uploadedImageUrl = await compressAndUploadImage(imageData, `image_${Date.now()}.jpg`);
            }
            const body = {
                menu_id: MENU_LIST[4].id,
                result: jsonObject,
            }
            body["imageUrl"] = uploadedImageUrl
            APIService().postResult(body).then((res: any) => {

                try {
                    if (res.status == 200) {
                        const result = res.data as ResultMessageModel;
                        window.open("https://mamoodi.com/name-hora/result?id=" + result.id, "_self");
                    }
                } catch (error) {

                }
            })


        }


    }

    const handleInputChange = (e) => {
        const value = e.target.value;

        // Allow alphanumeric characters (letters and numbers), Thai consonants, vowels, and tone marks
        const regex = /^[a-zA-Z0-9ก-ฮะ-ูเ-ไ็่้๊๋์]*$/;

        if (regex.test(value)) {
            setName(value);
        }
    };
    const handleInputChangeSurname = (e) => {
        const value = e.target.value;

        // Allow alphanumeric characters (letters and numbers), Thai consonants, vowels, and tone marks
        const regex = /^[a-zA-Z0-9ก-ฮะ-ูเ-ไ็่้๊๋์]*$/;

        if (regex.test(value)) {
            setSurName(value);
        }
    };

    return (
        <>
            <div className="menu-5-control">
                <div className='menu-5-playing-control'>
                    <span className="menu-5-playing-title">ดูดวงจากชื่อของคุณ</span>
                    <span className="menu-5-playing-desc">
                        อยากรู้ว่าชื่อของคุณมีความหมายอย่างไร? ดูดวงด้วยชื่อ เลขศาสตร์ และตัวอักษร เพื่อค้นหาความลับที่ซ่อนอยู่ในชื่อของคุณ พร้อมเจาะลึกบุคลิกภาพ ความสามารถ และโชคชะตา</span>

                    {
                        !isSubmitting ?

                            <>
                                <div className="menu-5-form-control">
                                    <div className="menu-5-form-control-item">
                                        <span className="menu-5-form-label">ชื่อจริง</span>
                                        <Form.Control type="text" placeholder="ระบุชื่อของคุณ" className="menu-5-form-input"
                                            value={name} onChange={(e) => handleInputChange(e)}>

                                        </Form.Control>

                                        <span className="menu-5-form-warning">*ใส่ข้อมูลโดยไม่ต้องเว้นวรรค เช่น อังศนา</span>
                                    </div>
                                    <div className="menu-5-form-control-item">
                                        <span className="menu-5-form-label">นามสกุล</span>
                                        <Form.Control type="text" placeholder="ระบุนามสกุลของคุณ" className="menu-5-form-input"
                                            value={surname} onChange={(e) => handleInputChangeSurname(e)}>

                                        </Form.Control>

                                        <span className="menu-5-form-warning">*ใส่ข้อมูลโดยไม่ต้องเว้นวรรค เช่น อังศนา</span>

                                    </div>
                                    {

                                        <Button className="menu-5-button" onClick={submit}>ตรวจชื่อของคุณ</Button>
                                    }
                                </div>

                            </> :

                            <>
                                <div className="menu-5-form-control">
                                    <div className="menu-5-form-loading">

                                        <Spinner className="menu-5-form-loading-spinner"></Spinner>
                                        <span className="menu-5-form-loading-text">กำลังตรวจสอบดวงของคุณ</span>
                                    </div>

                                </div>
                            </>
                    }

                </div >

            </div >
        </>
    )
}

export default Menu5Component;