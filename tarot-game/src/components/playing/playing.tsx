import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import deck from '../../assets/json/card.json';
import "./playing.scss";

import TAROT_WAITING_IMG from "../../assets/images/waiting-img.jpg";
import TarotCardWheel from '../tarot-card/tarot-card-wheel';
import TarotCard from '../../model/card.model';


const PlayingPage: React.FC = () => {
  const location = useLocation();
  const { cardPick } = location.state || { cardPick: 1 };
  const { birthday } = location.state || { birthday: "01/01/1990" };
  const { gender } = location.state || { gender: "NONE" };
  const [shuffledDeck, setShuffledDeck] = useState<TarotCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);
  const [showButtonReady, setShowButtonReady] = useState(false);
  const [isShuffling, setIsShuffling] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    shuffleDeck(deck);

  }, []);


  const shuffleDeck = (deck: TarotCard[]) => {
    setIsShuffling(true);
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setTimeout(() => {
      setShuffledDeck(shuffled);
      setShowButtonReady(true);
    }, 1000); // Simulate shuffle animation delay
  };

  const clickReady = () => {
    setIsShuffling(false);
  }

  const handleCardSelect = (card: TarotCard) => {
    if (selectedCards.length < cardPick && !selectedCards.includes(card)) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const handleViewResult = () => {
    if (selectedCards.length === cardPick) {
      navigate('/tarot-1/result', { state: { selectedCards: selectedCards, birthday, gender } });
    }
  };

  const setCardSelection = (cardId: number) => {
    const filteredDeck = shuffledDeck.find(card => card.id === cardId);
    if (filteredDeck) {
      const selectedCardMod = [...selectedCards, filteredDeck] as TarotCard[];
      setSelectedCards(selectedCardMod);
    } else {
      console.log(`Card with id ${cardId} not found in shuffledDeck`);
    }
  };

  return (
    <Container className="playing-page d-flex flex-column justify-content-center align-items-center vh-100">
      {isShuffling ? (
        <div className='shuffle-card-control'>
          <span className='shuffle-card-text'>
            ได้โปรดตั้งจิตอธิษฐาน ตั้งนะโม 3 จบไว้ในใจ แล้วกด ปุ่ม พร้อม
          </span>
          <img src={TAROT_WAITING_IMG} className='shuffle-card-img'></img>
          {
            showButtonReady &&
            <Button className='shuffle-card-button' onClick={clickReady}>พร้อมเลือกไพ่</Button>
          }

        </div>

      ) : (
        <>
          <div className='playing-control'>
            <span className='playing-title'> กรุณาเลือกไพ่ {cardPick} ใบ</span>
            {/* <Row className="cards-grid w-100">
              {shuffledDeck.map((card, index) => (
                <Col
                  key={index}
                  xs={4}
                  sm={3}
                  md={2}
                  className="mb-2 card-col"
                  onClick={() => handleCardSelect(card)}
                >
                  <div
                    className={`card-item ${selectedCards.includes(card) ? 'selected' : ''
                      } ${selectedCards.length === cardPick && !selectedCards.includes(card) ? 'disabled' : ''}`}
                  >
                    <div className="card-back"></div>
                    {selectedCards.includes(card) && (
                      <div className="card-info">
                        <span className='card-title'>การ์ดใบที่คุณเลือก</span>
                        <p className="card-number">#{Number(index+1)}</p>
                      </div>
                    )}
                  </div>
                </Col>
              ))}
            </Row> */}
            <TarotCardWheel setSelectedCard={setCardSelection} 
            totalPick={cardPick}/>
            {/* <div className='cards-scroll-control'>
              <span className='cards-scroll-text'>เลื่อนลงเพื่อดูการ์ดที่เหลือ</span>
            </div> */}
            {selectedCards.length > 0 && (
              <div className='selected-card-control'>
                <div className='selected-card-title-control'>
                  <span className='selected-card-title'>จำนวนไพ่ที่เลือก</span>
                  <span className='selected-card-value'>{selectedCards.length} ใบ</span>
                </div>
                {
                  selectedCards.length === cardPick &&
                  <Button
                    onClick={handleViewResult}
                    className="playing-card-button"
                  >
                    ดูผลลัพธ์
                  </Button>
                }


              </div>
            )}
          </div>
        </>
      )}
    </Container>
  );
};

export default PlayingPage;
