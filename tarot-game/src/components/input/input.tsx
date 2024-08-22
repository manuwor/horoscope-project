import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TAROT_INPUT_IMG from "../../assets/images/input.jpg"
import "./input.scss";
const InputPage: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const minDate = `${currentYear - 90}-01-01`; // 90 years ago from the current year
  const maxDate = `${currentYear}-12-31`; // End of the current year

  const [birthday, setBirthday] = useState(maxDate); // Set initial value to the minimum date
  const [gender, setGender] = useState('');
  const [cardPick, setCardPick] = useState<number>(1);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/tarot-1/play', { state: { birthday, gender, cardPick } });
  };

  return (
    <div className="input-control">
      <Form onSubmit={handleSubmit} className='input-item-control'>
        <h1 className='input-item-header'>ระบุข้อมูลเบื้องต้น</h1>
        <img src={TAROT_INPUT_IMG} className='input-item-img'></img>
        <Form.Group controlId="formBirthday" className='input-item-group-control'>
          <Form.Label className='input-item-title'>Birthday</Form.Label>
          <Form.Control
            type="date"
            className='input-item-input'
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
            min={minDate}
            max={maxDate}
          />
        </Form.Group>
        <Form.Group controlId="formGender" className='input-item-group-control'>
          <Form.Label className='input-item-title'>Gender</Form.Label>
          <Form.Control
            as="select"
            className='input-item-input'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formCardPick" className='input-item-group-control'>
          <Form.Label className='input-item-title'>Number of Cards to Pick</Form.Label>
          <Form.Control
            as="select"
            className='input-item-input'
            value={cardPick}
            onChange={(e) => setCardPick(Number(e.target.value))}
            required
          >
            <option value={1}>1</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit" className='input-item-button'>
          เริ่มเลือกไพ่
        </Button>
      </Form>
    </div>
  );
};

export default InputPage;
