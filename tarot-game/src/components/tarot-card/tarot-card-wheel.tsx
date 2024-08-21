// src/components/TarotCardWheel.tsx
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const CARD_COUNT = 72;

const WheelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const StyledCard = styled(Card)<{ angle: number }>`
  position: absolute;
  width: 100px;
  height: 150px;
  transform: ${({ angle }) => `rotate(${angle}deg) translate(350px) rotate(-${angle}deg)`};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: ${({ angle }) => `rotate(${angle}deg) translate(370px) rotate(-${angle}deg)`};
  }

  .card-body {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #4B0082;
  }

  @media (max-width: 552px) {
    width: 50px;
    height: 70px;
    transform: ${({ angle }) => `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`};

    &:hover {
      transform: ${({ angle }) => `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`};
    }
  }
`;

const TarotCardWheel = ({setSelectedCard}:any) => {
  const [cards, setCards] = useState<number[]>(Array.from({ length: CARD_COUNT }, (_, i) => i + 1));

  const handleCardClick = (index: number) => {
    setCards(cards.filter((_, i) => i !== index));
    setSelectedCard(index);
  };

  const renderCards = () => {
    const angleIncrement = 360 / cards.length;
    return cards.map((card, index) => (
      <StyledCard key={card} angle={index * angleIncrement} onClick={() => handleCardClick(index)}>
        <Card.Body></Card.Body>
      </StyledCard>
    ));
  };

  return <WheelContainer>{renderCards()}</WheelContainer>;
};

export default TarotCardWheel;
