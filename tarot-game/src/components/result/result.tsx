import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import TarotCard from '../../model/card.model';
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
    const [meaning, setMeaning] = useState("");
    useEffect(() => {

        console.log(selectedCards);
    }, [selectedCards]);


    const getMeaningInThai = async (cardName: string) => {
        const chatSession = model.startChat({
            generationConfig,
            safetySettings: safetySettings,
            // safetySettings: Adjust safety settings
            // See https://ai.google.dev/gemini-api/docs/safety-settings
            history: [
                {
                    role: "user",
                    parts: [
                        { text: "You are magician horoscope expert, I draw card from deck and card is " + cardName + " I need meaning of expert from my info (Birthday: 20 Sep 1990, Gender: Male) Please explain this card in Thai language, Return JSON format only" },
                    ],
                }
            ],

        });

        const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
        alert(result.response.text());

    }
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h1>Your Tarot Card Reading</h1>
            <Row className="w-100">
                {selectedCards && selectedCards.map((card: TarotCard, index: number) => (
                    <Col key={index} xs={12} md={6} className="mb-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>{`${card.name} (Card #${card.card_number})`}</Card.Title>
                                <Button onClick={() => getMeaningInThai(card.name)}>อ่านไพ่ใบนี้</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ResultPage;
