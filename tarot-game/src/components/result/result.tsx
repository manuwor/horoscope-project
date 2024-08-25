import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import TarotCard from '../../model/card.model';
import "react-multi-carousel/lib/styles.css";
import { getVertexAI, getGenerativeModel, HarmCategory, HarmBlockThreshold, SafetySetting, HarmBlockMethod } from "firebase/vertexai-preview";
import "./result.scss";
import { ResultModel } from '../../model/result.model';
import firebaseApp from '../../utility/firebase-config';
import { safetySettings } from '../../utility/safe-settings';
import { geminiConfig } from '../../utility/gemini-config';




const ResultPage: React.FC = () => {
    const location = useLocation();
    const { selectedCards } = location.state || { selectedCards: [] };
    const { birthday } = location.state || { birthday: "01/01/1990" };
    const { gender } = location.state || { gender: "NONE" };
    const [meaning, setMeaning] = useState<ResultModel>();
    const [cardSelect, selectCard] = useState<TarotCard>();
    const [showMeaning, setShowMeaning] = useState(false);
    const navigate = useNavigate();
    const stringMock = `{"overall": "ไพ่ The High Priestess บ่งบอกถึงสัญชาตญาณ ความลับที่ซ่อนอยู่ และปัญญาภายใน ในฐานะผู้ชายที่เกิดวันที่ 20 กันยายน 1990  ไพ่ใบนี้กระตุ้นให้คุณเชื่อมั่นในสัญชาตญาณของตัวเองและมองหาความจริงที่ซ่อนอยู่  อาจมีบางสิ่งที่คุณมองข้ามไปหรือยังไม่เข้าใจอย่างถ่องแท้  ใช้เวลาไตร่ตรองอย่างเงียบๆ เพื่อเชื่อมต่อกับตัวเองในระดับที่ลึกซึ้งยิ่งขึ้น", "love": "หากคุณกำลังมีความสัมพันธ์  ไพ่ใบนี้แนะนำให้คุณใส่ใจกับสัญชาตญาณของคุณเกี่ยวกับคู่ของคุณมากขึ้น  อาจมีบางอย่างที่ซ่อนอยู่หรือยังไม่ได้พูดออกมา  ใช้เวลาอยู่ด้วยกันอย่างเงียบๆ เพื่อเสริมสร้างความผูกพันทางอารมณ์  สำหรับคนโสด  ไพ่ใบนี้อาจบ่งบอกถึงช่วงเวลาแห่งการปลีกวิเวกเพื่อทำความเข้าใจความต้องการของตนเองก่อนที่จะเริ่มต้นความสัมพันธ์ครั้งใหม่", "job": "ในเรื่องหน้าที่การงาน ไพ่ใบนี้บ่งบอกว่าคุณอาจจำเป็นต้องใช้สัญชาตญาณและความคิดสร้างสรรค์ของคุณในการแก้ปัญหา  เชื่อมั่นในความรู้สึกของคุณและอย่ากลัวที่จะคิดนอกกรอบ  อาจมีโอกาสใหม่ๆ ที่ซ่อนอยู่  จงเปิดใจรับและมองหาความหมายที่ลึกซึ้งเบื้องหลังสถานการณ์ต่างๆ", "life": "ในภาพรวม ไพ่ The High Priestess แนะนำให้คุณใช้ชีวิตอย่างมีสติและใส่ใจกับสัญชาตญาณภายในของคุณ  ปล่อยวางความต้องการที่จะควบคุมทุกสิ่งและเชื่อมั่นในกระบวนการของชีวิต  ความสงบและความอดทนจะเป็นกุญแจสู่การเติบโตและการเปลี่ยนแปลงในเชิงบวก", "number": "11"}`
    useEffect(() => {
        getMeaningInThai()
    }, [selectedCards, gender, birthday]);
    // Initialize FirebaseApp

    // Initialize the Vertex AI service
    const vertexAI = getVertexAI(firebaseApp);
    

    const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-flash", safetySettings: safetySettings, generationConfig: geminiConfig });

    const getMeaningInThai = async () => {

        let cardName = "";
        selectedCards.map((card: TarotCard, index: number) => {

            if (index == selectedCards.length - 1) {
                cardName += card.name
            } else {
                cardName += card.name + ", "
            }

        })
        console.log(cardName);

        const prompt = `You are magician horoscope expert, I draw card from deck and I got this cards ${cardName}
                         I need meaning of expert from my info 
                         (Birthday: ${birthday}, Gender: ${gender}) and Today is ${new Date()}
                         Please explain this card in Thai language about (overall, love, job, life) and suggest number 2 digit for matching with this card, Return JSON format only with key overall, love,job,life, number`
        // To stream generated text output, call generateContentStream with the text input
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
        const jsonObject = JSON.parse(result.response.text());
        console.log(jsonObject);
        setMeaning(jsonObject);
        setShowMeaning(true);
    }
   

    return (
        <div className="result-control">
            

        </div>
    );
};

export default ResultPage;
