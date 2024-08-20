import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import TarotCard from '../../model/card.model';
import Carousel from "react-multi-carousel";
import Slider from '@ant-design/react-slick';
import "react-multi-carousel/lib/styles.css";
import "./result.scss";
import { ResultModel } from '../../model/result.model';
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = "AIzaSyB0cRjh4rzadQ89T4ri5zRR93PoVYFEasc";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};
const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    }
];


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
        const chatSession = model.startChat({
            generationConfig,
            safetySettings: safetySettings,
            // safetySettings: Adjust safety settings
            // See https://ai.google.dev/gemini-api/docs/safety-settings
            history: [
                {
                    role: "user",
                    parts: [
                        {
                            text: `You are magician horoscope expert, I draw card from deck and I got this cards ${cardName}
                         I need meaning of expert from my info 
                         (Birthday: ${birthday}, Gender: ${gender}) and Today is ${new Date()}
                         Please explain this card in Thai language about (overall, love, job, life) and suggest number 2 digit for matching with this card, Return JSON format only with key overall, love,job,life, number` },
                    ],
                }
            ],

        });

        const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
        console.log(result.response.text());
        const jsonObject = JSON.parse(result.response.text());
        console.log(jsonObject);
        setMeaning(jsonObject);
        setShowMeaning(true);
        // alert(result.response.text());

    }
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,

        }
    };

    const backToHome = () => {
        navigate("/")
    }
    return (
        <div className="result-control">
            <div className='d-flex'>
                <span className='result-back-to-home-header' onClick={backToHome}>ย้อนกลับ</span>
            </div>
            <div className='result-item-control'>
                <div className={`result-item-carousel-control`}>
                    <span className='result-item-header'>ไพ่ที่คุณเลือก</span>
                    {selectedCards && (
                        <Carousel
                            responsive={responsive}
                            swipeable={true}
                            draggable={true}
                            showDots={false}
                            ssr={true} // means to render carousel on server-side.
                            infinite={false}
                            centerMode={true}
                            arrows={true}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass={selectedCards.length > 1 ? 'carousel-container' : 'carousel-container carousel-container-center'}
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px single-card-center"

                        >
                            {selectedCards.map((card: TarotCard, index: number) => (
                                <div key={index} className="result-card-item">
                                    <span className='result-card-name'>{card.name}</span>
                                    <div className='result-card-button-control'>

                                        <span className='result-card-desc'>{card.meaning}</span>

                                    </div>

                                </div>
                            ))}
                        </Carousel>
                    )}
                </div>
                {
                    !meaning && !showMeaning &&
                    <div className='result-meaning-control'>
                        <div className='result-meaning-loading-control'>
                            <span className='result-meaning-loading-text'>กำลังเปิดคำทำนาย</span>
                            <Spinner className='result-meaning-loading-spinner'></Spinner>
                        </div>

                    </div>
                }
                {showMeaning && (
                    <div className='result-meaning-control'>
                        {
                            meaning ?
                                <div className='result-meaning-item-control'>
                                    {
                                        meaning.overall &&
                                        <div className='result-meaning-item'>
                                            <span className='result-meaning-item-header'>
                                                ตัวเลขที่แนะนำ : {meaning.number}
                                            </span>

                                        </div>
                                    }
                                    {
                                        meaning.overall &&
                                        <div className='result-meaning-item'>
                                            <span className='result-meaning-item-header'>
                                                ภาพรวม
                                            </span>
                                            <span className='result-meaning-item-desc'>
                                                {meaning.overall}
                                            </span>
                                        </div>
                                    }
                                    {
                                        meaning.love &&
                                        <div className='result-meaning-item'>
                                            <span className='result-meaning-item-header'>
                                                ความรัก
                                            </span>
                                            <span className='result-meaning-item-desc'>
                                                {meaning.love}
                                            </span>
                                        </div>
                                    }
                                    {
                                        meaning.life &&
                                        <div className='result-meaning-item'>
                                            <span className='result-meaning-item-header'>
                                                ชีวิต
                                            </span>
                                            <span className='result-meaning-item-desc'>
                                                {meaning.life}
                                            </span>
                                        </div>
                                    }
                                    {
                                        meaning.job &&
                                        <div className='result-meaning-item'>
                                            <span className='result-meaning-item-header'>
                                                งาน
                                            </span>
                                            <span className='result-meaning-item-desc'>
                                                {meaning.job}
                                            </span>
                                        </div>
                                    }
                                </div> :
                                <div className='d-flex'>
                                    <Button className='result-card-button' onClick={getMeaningInThai}>ดูผลทำนายอีกครั้ง</Button>
                                </div>
                        }
                        <div className='d-flex'>

                            <span className='result-back-to-home' onClick={backToHome}>กลับหน้าหลัก</span>
                        </div>


                    </div>
                )}
            </div>

        </div>
    );
};

export default ResultPage;
