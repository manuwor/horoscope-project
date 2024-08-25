import { getGenerativeModel, getVertexAI } from "@firebase/vertexai-preview";
import APIService from "../../services/api.services";
import firebaseApp from "../../utility/firebase-config";
import { useState } from "react";
import { safetySettings } from "../../utility/safe-settings";
import { geminiConfig } from "../../utility/gemini-config";
import MENU_LIST from "../../assets/json/menu.json";
import { ResultMessageModel } from "../../model/result-post.model";


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

            const prompt = `ฉันอยากดูดวงทะเบียนรถ
    ทะเบียนรถคือ ${telID} และ ผลรวมคือ ${sumTelephoneNumber(telID)}
    ดูดวงจากผลรวม ${sumTelephoneNumber(telID)}
    Return JSON format only with key (sum_tel_id (ผลลัพธ์ของเลข), explanation (ดวงที่ได้จากผลลัพธ์ ขอยาวๆ), tel_id (เลข ${telID}))`
            // To stream generated text output, call generateContentStream with the text input
            const result = await model.generateContent(prompt);
            console.log(result.response.text());
            const jsonObject = JSON.parse(result.response.text());
            console.log(jsonObject);
            jsonObject["title"] = "ผลลัพธ์เลขทะเบียน " + telID + " ของคุณคือ";

            const body = {
                menu_id: MENU_LIST[2].id,
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

    return (
        <></>
    )
}

export default Menu4Component;