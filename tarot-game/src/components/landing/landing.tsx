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
  const startLotto = () => {
    navigate('/lotto');
  };
  return (
    <div className="landing-control">
      <div className='landing-item-control'>
        <div className='landing-item-list-control' onClick={startLotto}>
          <span className='landing-item-text-header'>ตรวจสลากกินแบ่งรัฐบาล</span>
          <span className='landing-item-text-desc'>เช็คผลรางวัลลอตเตอรี่ งวดนี้คุณจะรวยหรือเปล่า เช็คเลขได้ง่ายๆ รวดเร็ว ไม่ต้องรอ ให้คุณรู้ผลได้ทันที พร้อมลุ้นและสนุกไปกับการเสี่ยงโชค!</span>
        </div>
        <div className='landing-item-list-control' onClick={startGame}>
          <span className='landing-item-text-header'>ดูดวงรายวัน</span>
          <span className='landing-item-text-desc'>การทำนายดวงแต่ละวันแบบชิลๆ ไม่ว่าจะเป็นเรื่องงาน เงิน ความรัก หรือสุขภาพ มาเช็คดวงประจำวันเพื่อเตรียมตัวให้พร้อม สนุกๆ ไม่เครียด รู้แนวทางในแต่ละวันได้ที่นี่!</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
