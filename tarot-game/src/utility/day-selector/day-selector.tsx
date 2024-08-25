import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import "./day-selector.scss";

const DaySelector = ({setSelectDate} : any) => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const daysOfWeek = ['จันทร์', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์', 'อาทิตย์'];

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
    setSelectDate(day);
  };

  return (
    <Container className="day-selector-control">
      <Form.Group>
        <Form.Label className='day-selector-label'>เลือกวันเกิดของคุณ:</Form.Label>
        <Row className="justify-content-center mt-2">
          {daysOfWeek.map((day) => (
            <Col xs="auto" key={day} className='day-selector-item-control'>
              <Button
                className={selectedDay === day ? 'day-selector-circle-active' : 'day-selector-circle'}
                style={{
                  width: '70px',
                  height: '70px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onClick={() => handleDayClick(day)}
              >
                {day}
              </Button>
            </Col>
          ))}
        </Row>
      </Form.Group>
    </Container>
  );
};

export default DaySelector;
