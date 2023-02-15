/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';

import {
  Button,
  Col,
  Container,
  Row,
} from 'react-bootstrap';

const Calculator = () => {
  const [number, setNumber] = useState(0);

  const handleChange = (e) => setNumber(e.target.value);

  const addNumber = ({ target }) => {
    if (number === 0) {
      setNumber(target.textContent);
      return;
    }

    setNumber(number + target.textContent);
  };

  const clearInput = () => setNumber(0);

  return (
    <>
      <Container>
        <Col md="5" className="mx-auto">
          <input type="number" className="w-100 bg-secondary text-end fw-bold text-white py-3 border-0" value={number} onChange={handleChange} />
          <Row className="m-0">
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="light" onClick={clearInput}>AC</Button>
            </Col>
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="light">+/-</Button>
            </Col>
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="light">%</Button>
            </Col>
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="warning">÷</Button>
            </Col>
          </Row>
          <Row className="m-0">
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="light" onClick={(e) => addNumber(e)}>7</Button>
            </Col>
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="light" onClick={(e) => addNumber(e)}>8</Button>
            </Col>
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="light" onClick={(e) => addNumber(e)}>9</Button>
            </Col>
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="warning">X</Button>
            </Col>
          </Row>
          <Row className="m-0">
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="light" onClick={(e) => addNumber(e)}>4</Button>
            </Col>
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="light" onClick={(e) => addNumber(e)}>5</Button>
            </Col>
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="light" onClick={(e) => addNumber(e)}>6</Button>
            </Col>
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="warning">-</Button>
            </Col>
          </Row>
          <Row className="m-0">
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="light" onClick={(e) => addNumber(e)}>1</Button>
            </Col>
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="light" onClick={(e) => addNumber(e)}>2</Button>
            </Col>
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="light" onClick={(e) => addNumber(e)}>3</Button>
            </Col>
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="warning">+</Button>
            </Col>
          </Row>
          <Row className="m-0">
            <Col xs={6} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="light" onClick={(e) => addNumber(e)}>0</Button>
            </Col>
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="light" onClick={(e) => addNumber(e)}>.</Button>
            </Col>
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="warning">=</Button>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default Calculator;
