import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TAROT_COVER from "../../assets/images/tarot-cover.jpg";
import "./landing.scss";
const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/input');
  };

  return (
    <div className="landing-control">
      <div className='landing-item-control'>
        <h1 className='landing-item-title'>ดูดวงแบบสับสับ</h1>
        <span className='landing-item-desc'>รับคำทำนายดวงชะตาแบบมืออาชีพผ่านไพ่ทาโรต์ เช็คดวงประจำวันของคุณและรับคำแนะนำในการดำเนินชีวิตอย่างสมดุล ไม่ว่าจะเรื่องใด คุณก็สามารถทราบอนาคตล่วงหน้าได้ง่าย ๆ</span>
        <img src={TAROT_COVER} className='landing-item-img'></img>
        <Button onClick={startGame} className='landing-item-button'>
          เริ่มดูดวง
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
