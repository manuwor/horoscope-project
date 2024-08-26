import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const TarotCardWheel = ({ setSelectedCard, totalPick }: any) => {
  const CARD_COUNT = 72;
  const DISPLAY_COUNT = 36;
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

  const StyledCard = styled(Card) <{ angle: number; isSelected: boolean; isVisible: boolean }>`
    position: absolute;
    width: 60px;
    height: 110px;
    transform: ${({ angle }) => `rotate(${angle}deg) translate(190px) rotate(-${angle}deg)`};
    cursor: pointer;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    background-color: ${({ isSelected }) => (isSelected ? '#FFD700' : 'white')};
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};

   
    .card-body {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #4B0082;
    }

    @media (max-width: 552px) {
      width: 50px;
      height: 70px;
      transform: ${({ angle }) =>
      `rotate(${angle}deg) translate(120px) rotate(-${angle}deg)`};

      &:hover {
        transform: ${({ angle }) =>
      `rotate(${angle}deg) translate(120px) rotate(-${angle}deg)`};
      }
    }
  `;

  const [cards, setCards] = useState<number[]>([]);
  const [selectCards, setSelectCards] = useState<number[]>([]);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

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
    const selectCardMod = [...selectCards];
    if (selectCardMod.length === totalPick) {

      if (selectCardMod[0] == index) {
        setSelectCards(new Array());
        setSelectedCard(null);
      } else {
        alert('เลือกไพ่ครบแล้ว');
      }
   
    } else {
      selectCardMod.push(index);
      setSelectCards(selectCardMod);
      setSelectedCard(cards[index]);
    }
  };

  const renderCards = () => {
    const angleIncrement = 180 / (cards.length - 1);
    return cards.map((card, index) => (
      <StyledCard
        key={card}
        angle={360 - index * angleIncrement}
        isSelected={selectCards.includes(index)}
        isVisible={visibleCards.includes(index)}
        onClick={() => handleCardClick(index)}
      >
        <Card.Body></Card.Body>
      </StyledCard>
    ));
  };

  return (
    <WheelContainer >
      {renderCards()}
    </WheelContainer>
  );
};

export default TarotCardWheel;
