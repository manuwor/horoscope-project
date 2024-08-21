import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import styled, { css, keyframes } from 'styled-components';
import "./tarot-card-wheel.scss";

const TarotCardWheel = ({ setSelectedCard, totalPick }: any) => {


  const CARD_COUNT = 72;

  const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

  const WheelContainer = styled.div<{ isShuffling: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-top: 30vh;
  position: relative;

  ${({ isShuffling }) =>
      isShuffling &&
      css`
      animation: ${spin} 1s linear infinite;
    `}
`;



  const StyledCard = styled(Card) <{ angle: number; isSelected: boolean }>`
  position: absolute;
  width: 100px;
  height: 150px;
  transform: ${({ angle }) => `rotate(${angle}deg) translate(350px) rotate(-${angle}deg)`};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  background-color: ${({ isSelected }) => (isSelected ? '#FFD700' : 'white')}; // Set background based on selection

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
    transform: ${({ angle }) =>
      `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`};

    &:hover {
      transform: ${({ angle }) =>
      `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`};
    }
  }
`;
  const [cards, setCards] = useState<number[]>(Array.from({ length: CARD_COUNT }, (_, i) => i + 1));
  const [selectCards, setSelectCards] = useState<number[]>([]);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  
  const shuffleCards = () => {
    setIsShuffling(true);
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    console.log(shuffled);
    setTimeout(() => {
      setCards(shuffled);
      setIsShuffling(false);
    }, 1000); // Simulate the shuffle duration (1 second in this case)
  };

  useEffect(() => {

    shuffleCards();
  },[])

  const handleCardClick = (index: number) => {
    const selectCardMod = [...selectCards];
    console.log(totalPick , selectCardMod.length)
    if(selectCardMod.length == totalPick){
      alert("เลือกไพ่ครบแล้ว")
     
    }else{
      selectCardMod.push(index);
      setSelectCards(selectCardMod);
      setSelectedCard(cards[index]);
    }
 
  };

  const renderCards = () => {
    const angleIncrement = 360 / cards.length;
    return cards.map((card, index) => (
      <StyledCard
        key={card}
        angle={index * angleIncrement}
        isSelected={selectCards.includes(index)}
        onClick={() => handleCardClick(index)}>
        <Card.Body></Card.Body>
      </StyledCard>
    ));
  };

  return (
    <>
      {/* <Button className='tarot-card-button' onClick={shuffleCards}>สุ่มไพ่ใหม่</Button> */}
      <WheelContainer isShuffling={isShuffling}>
        {renderCards()}
      </WheelContainer>
    </>

  );
};

export default TarotCardWheel;
