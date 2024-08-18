import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import TarotCard from '../../model/card.model';
import Carousel from "react-multi-carousel";
import Slider from '@ant-design/react-slick';
import "react-multi-carousel/lib/styles.css";
import "./result.scss";
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
    const [meaning, setMeaning] = useState("");
    const [cardSelect, selectCard] = useState<TarotCard>();
    const [showMeaning, setShowMeaning] = useState(false);
    useEffect(() => {
        console.log(birthday);
        console.log(gender);
        console.log(selectedCards);
    }, [selectedCards]);


    const getMeaningInThai = async (card: TarotCard) => {
        selectCard(card);
        setMeaning("");
        setShowMeaning(true);
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
                            text: `You are magician horoscope expert, I draw card from deck and card is ${card.name}
                         I need meaning of expert from my info 
                         (Birthday: ${birthday}, Gender: ${gender}) and Today is ${new Date()}
                         Please explain this card in Thai language, Return JSON format only with key description` },
                    ],
                }
            ],

        });

        const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
        const jsonObject = JSON.parse(result.response.text());
        setMeaning(jsonObject.description);
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
    return (
        <div className="result-control">
            <div className='result-item-control'>
                <div className={`result-item-carousel-control`}>
                    <span className='result-item-header'>ไพ่ที่คุณเลือกทั้งหมด</span>
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
                                <div key={index} className="d-flex flex-column justify-content-center align-items-center result-card-item">
                                    <span className='result-card-number'>#{card.card_number}</span>
                                    <span className='result-card-name'>{card.name}</span>
                                    <div className='result-card-button-control'>

                                        <span className='result-card-desc'>{card.meaning}</span>
                                        <Button className='result-card-button' onClick={() => getMeaningInThai(card)}>View More</Button>
                                    </div>

                                </div>
                            ))}
                        </Carousel>
                    )}
                </div>
                {showMeaning && (
                    <div className='result-meaning-control'>
                        {
                            !meaning &&
                            <div className='result-meaning-loading-control'>
                                <span className='result-meaning-loading-text'>กำลังเปิดคำทำนาย</span>
                                <Spinner className='result-meaning-loading-spinner'></Spinner>
                            </div>
                        }

                        {
                            meaning && cardSelect &&
                            <div className='result-meaning-item-control'>
                                <span className='result-meaning-item-header'>
                                    {cardSelect.name}
                                </span>
                                <span className='result-meaning-item-desc'>
                                    {meaning}
                                </span>
                            </div>
                        }

                    </div>
                )}
            </div>

        </div>
    );
};

export default ResultPage;
