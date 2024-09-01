import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import CARD_DECK from "../../assets/json/card.json";
// Make sure to import the back image
import cardBack from '../../assets/images/0_Tarot_back.png';
import TarotCard from '../../model/card.model';
import "./tarot-card-wheel.scss";

const TarotCardWheel = ({ setSelectedCard, totalPick }: any) => {
  const CARD_COUNT = 78;
  const DISPLAY_COUNT = 39;
  const ANIMATION_DURATION = 2; // 300 milliseconds per card

  const WheelContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    margin-top: 20%;
    position: relative;

    @media (max-width: 552px) {
      margin-top: 20%;
    }
  `;

  const StyledCard = styled(Card) <{ angle: number; isSelected: boolean;  }>`
    position: absolute;
    width: 60px;
    height: 110px;
    transform: ${({ angle, isZoomed }) => isZoomed ? 'translate(-50%, -50%) scale(3)' : `rotate(${angle}deg) translate(190px) rotate(-${angle}deg)`};
    top: ${({ isZoomed }) => isZoomed ? '50%' : 'auto'};
    left: ${({ isZoomed }) => isZoomed ? '50%' : 'auto'};
    cursor: pointer;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, transform 0.6s;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    background-color: transparent;
    transform-style: preserve-3d;
    perspective: 1000px;

    .card-body {
      display: flex;
      justify-content: center;
      align-items: center;
      transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg)' : 'rotateY(0)')};
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }

    @media (max-width: 552px) {
      width: 50px;
      height: 70px;
      transform: ${({ angle, isZoomed }) =>
        isZoomed ? 'translate(-50%, -50%) scale(2)' : `rotate(${angle}deg) translate(120px) rotate(-${angle}deg)`};
    }
  `;

  const [cards, setCards] = useState<number[]>([]);
  const [cardsData, setCardsData] = useState<TarotCard[]>(CARD_DECK);
  const [selectCards, setSelectCards] = useState<TarotCard[]>([]);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [zoomedCard, setZoomedCard] = useState<number | null>(null);

  const shuffleCards = () => {
    setIsShuffling(true);
    const fullDeck = Array.from({ length: CARD_COUNT }, (_, i) => i + 1);
    const shuffledDeck = fullDeck.sort(() => Math.random() - 0.5).slice(0, DISPLAY_COUNT);
    setTimeout(() => {
      setCards(shuffledDeck);
      setIsShuffling(false);
    }, 1000);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      cards.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, index]);
        }, index * ANIMATION_DURATION);
      });
    }
  }, [cards]);

  const handleCardClick = (index: number) => {
    if (selectCards.length === totalPick) {
      console.log(selectCards);
      return;
    }

    if (selectCards.includes(cardsData[index])) {
      return; // prevent selecting the same card again
    }    
    const selectedCardData = cardsData.filter(card => card.id === cards[index]);
    setSelectCards([...selectCards, cardsData[index]]);
    setSelectedCard(selectedCardData);
   
  };

  const renderCards = () => {
    const angleIncrement = 180 / (cards.length - 1);
    return cards.map((card, index) => {
     
      const selectedCardData = cardsData.find(c => c.id === card);

      return (
        selectedCardData &&
        <StyledCard
          key={card}
          angle={360 - index * angleIncrement}
          isSelected={selectCards.includes(cardsData[index])}
          isVisible={visibleCards.includes(index)}
          onClick={() => handleCardClick(index)}
        >
          <Card.Body>
            <img
              className={ cardsData[index] == selectCards[0] ? "tarot-card-img-active" : "tarot-card-img"}
              src={cardBack}
              alt='card-back'
            />
          </Card.Body>
        </StyledCard>
      );
    });
  };

  return (
    <WheelContainer >
      {renderCards()}
    </WheelContainer>
  );
};

export default TarotCardWheel;
