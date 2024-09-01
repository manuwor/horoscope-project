import { useEffect, useState } from "react";
import TarotCard from "../../model/card.model";
import deck from '../../assets/json/card.json';
import "./menu_1.scss";
import DaySelector from "../../utility/day-selector/day-selector";
import TarotCardWheel from "../tarot-card/tarot-card-wheel";
import { Button, Spinner } from "react-bootstrap";
import { getGenerativeModel, getVertexAI } from "@firebase/vertexai-preview";
import {firebaseApp} from "../../utility/firebase-config";
import { safetySettings } from "../../utility/safe-settings";
import { geminiConfig } from "../../utility/gemini-config";
import MENU_LIST from "../../assets/json/menu.json";
import APIService from "../../services/api.services";
import { ResultMessageModel } from "../../model/result-post.model";
import { generateImageFromText } from "../../services/image-service";
import { compressAndUploadImage } from "../../services/upload-image";
import config from "../../config";

const Menu1Component = () => {

    const [isShuffling, setIsShuffling] = useState(true);
    const [shuffledDeck, setShuffledDeck] = useState<TarotCard[]>([]);
    const [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);
    const [showButtonReady, setShowButtonReady] = useState(false);
    const [dateSelected, setSelectDateItem] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    useEffect(() => {
        shuffleDeck(deck);

    }, []);


    const shuffleDeck = (deck: TarotCard[]) => {
        setIsShuffling(true);
        const shuffled = [...deck].sort(() => Math.random() - 0.5);
        setTimeout(() => {
            setShuffledDeck(shuffled);

        }, 1000); // Simulate shuffle animation delay
    };
    const setCardSelection = (cardId: TarotCard[]) => {
        if(cardId != null){
            setSelectedCards(cardId);
        }else{
            setSelectedCards(new Array());
        }
       
    };


    const setSelectDate = (date: string) => {
        setSelectDateItem(date);
    }

    const submit = async () => {

        // Initialize the Vertex AI service
        if (dateSelected && selectedCards.length > 0) {
            const vertexAI = getVertexAI(firebaseApp);

            setIsSubmitting(true);
            const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-flash", safetySettings: safetySettings, generationConfig: geminiConfig });

            let cardName = "";
            selectedCards.map((card: TarotCard, index: number) => {

                if (index == selectedCards.length - 1) {
                    cardName += card.name
                } else {
                    cardName += card.name + ", "
                }
            })
            console.log(cardName);

            const prompt = `คุณคือนักดูดวงที่แม่นที่สุด ฉันหยิบได้ไพ่ ${cardName} และ ฉันเกิดในวัน ${dateSelected} ฉันอยากรู้ดวงของฉันวันนี้, 
                         Please explain this card in Thai language about (overall, love, job, life) and suggest number 2 digit for matching with this card,
                          Return JSON format only with key (overall (สั้นๆ ระหว่าง 40-50 คำ โดยไม่ต้องทวนชื่อไพ่ word break by "<br>"), love,job,life, number)`
            // To stream generated text output, call generateContentStream with the text input
            const result = await model.generateContent(prompt);
            const jsonObject = JSON.parse(result.response.text());
            jsonObject["overall"] = jsonObject.overall.replaceAll("<br>","");
            jsonObject["title"] = "ดูดวงประจำวันของคุณ";
            jsonObject["card_url"] = config.app.home + config.app.image_path + "/tarot-cards/"+ selectedCards[0].card_img
            const imageData = await generateImageFromText("ผลลัพธ์จากไพ่", cardName , jsonObject.overall, 1, true, selectedCards[0].card_img);
            let uploadedImageUrl = "https://firebasestorage.googleapis.com/v0/b/horoscope-project-d3937.appspot.com/o/images%2Fshare-cover.jpg?alt=media";
            if (imageData) {
                uploadedImageUrl = await compressAndUploadImage(imageData, `image_${Date.now()}.jpg`);
            }
            const body = {
                menu_id: MENU_LIST[0].id,
                result: jsonObject,
            }
            console.log(body);
            body["imageUrl"] = uploadedImageUrl

            APIService().postResult(body).then((res: any) => {

                try {
                    if (res.status == 200) {
                        console.log(res);
                        const result = res.data as ResultMessageModel;
                        window.open("https://mamoodi.com/tarot-1/result?id=" + result.id, "_self");
                    }
                } catch (error) {

                }
            })
        }


    }
    return (
        <>
            <div className="menu-1-control">
                <div className='menu-1-playing-control'>
                    <span className="menu-1-playing-title">ดูดวงประจำวันของคุณ</span>
                    <span className="menu-1-playing-desc">อยากรู้ว่าวันนี้จะเกิดอะไรขึ้นบ้าง? ดูดวงรายวันฟรีด้วยไพ่ยิปซีเพียงใบเดียว พร้อมเจาะลึกความหมายที่ซ่อนอยู่ เลือกไพ่ตามวันเกิดของคุณ และค้นพบคำตอบที่คุณตามหา</span>
                    {
                        !isSubmitting ?

                            <>
                                <div className="menu-1-form-control">
                                    <span className='menu-1-form-label'> กรุณาเลือกไพ่ 1 ใบ</span>
                                    <div className="menu-1-tarot-control">
                                        <TarotCardWheel setSelectedCard={setCardSelection} totalPick={1} ></TarotCardWheel>
                                    </div>

                                    <DaySelector setSelectDate={setSelectDate}></DaySelector>
                                </div>

                                {
                                    dateSelected && selectedCards && selectedCards.length > 0 &&

                                    <Button className="menu-1-button" onClick={submit}>เริ่มดูดวง</Button>
                                }
                            </> :
                            <>
                                <div className="menu-1-form-control">
                                    <div className="menu-1-form-loading">

                                        <Spinner className="menu-1-form-loading-spinner"></Spinner>
                                        <span className="menu-1-form-loading-text">กำลังตรวจสอบดวงของคุณ</span>
                                    </div>

                                </div>
                            </>
                    }



                </div>

            </div>
        </>
    )
}

export default Menu1Component;