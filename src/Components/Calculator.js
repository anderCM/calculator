/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import {
  Button,
  Col,
  Container,
  Row,
} from 'react-bootstrap';

import operate from '../logic/operate';

const Calculator = () => {
  const [number, setNumber] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (number1 !== 0 && number2 !== 0) {
      const calculateResult = operate(number1, number2, operation);
      setResult(calculateResult);
      setNumber(calculateResult);
    }
  }, [number1, number2, operation]);

  const handleChangeInput = (e) => {
    setNumber(e.target.value);
  };

  const addNumber = ({ target }) => {
    if (number === 0) {
      setNumber(target.textContent);
      return;
    }

    setNumber(number + target.textContent);
  };

  const handleClear = () => {
    setNumber(0);
    setNumber1(0);
    setNumber2(0);
    setOperation('+');
    setResult(0);
  };

  const handleOperationSelect = ({ target }) => {
    setOperation(target.textContent);
    setNumber1(Number(number));
    setNumber(0);
  };

  const handleCalculate = () => {
    setNumber2(Number(number));
    const calculatedResult = operate(number1, number2, operation);
    setResult(calculatedResult);
    setNumber(result);
  };

  return (
    <>
      <Container>
        <Col md="5" className="mx-auto">
          <input type="number" className="w-100 bg-secondary text-end fw-bold text-white py-3 border-0" value={number} onChange={handleChangeInput} />
          <Row className="m-0">
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="light" onClick={handleClear}>AC</Button>
            </Col>
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="light" onClick={(e) => handleOperationSelect(e)}>+/-</Button>
            </Col>
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="light">%</Button>
            </Col>
            <Col xs={3} className="p-0">
              <Button className="w-100 rounded-0 border py-3" variant="warning" onClick={(e) => handleOperationSelect(e)}>÷</Button>
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
              <Button className="w-100 rounded-0 border py-3" variant="warning" onClick={(e) => handleOperationSelect(e)}>x</Button>
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
              <Button className="w-100 rounded-0 border py-3" variant="warning" onClick={(e) => handleOperationSelect(e)}>-</Button>
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
              <Button className="w-100 rounded-0 border py-3" variant="warning" onClick={(e) => handleOperationSelect(e)}>+</Button>
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
              <Button className="w-100 rounded-0 border py-3" variant="warning" onClick={handleCalculate}>=</Button>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default Calculator;
