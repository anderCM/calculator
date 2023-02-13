/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  Button,
  Col,
  Container,
  Row,
} from 'react-bootstrap';

const Calculator = () => (
  <>
    <Container>
      <Col md="5" className="mx-auto">
        <input type="number" className="w-100 bg-secondary text-end fw-bold text-white py-3 border-0" />
        <Row className="m-0">
          <Col xs={3} className="p-0">
            <Button className="w-100 rounded-0 border py-3" variant="light">AC</Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button className="w-100 rounded-0 border py-3" variant="light">+/-</Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button className="w-100 rounded-0 border py-3" variant="light">%</Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button className="w-100 rounded-0 border py-3" variant="warning">+</Button>
          </Col>
        </Row>
        <Row className="m-0">
          <Col xs={3} className="p-0">
            <Button className="w-100 rounded-0 border py-3" variant="light">7</Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button className="w-100 rounded-0 border py-3" variant="light">8</Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button className="w-100 rounded-0 border py-3" variant="light">9</Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button className="w-100 rounded-0 border py-3" variant="warning">X</Button>
          </Col>
        </Row>
        <Row className="m-0">
          <Col xs={3} className="p-0">
            <Button className="w-100 rounded-0 border py-3" variant="light">4</Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button className="w-100 rounded-0 border py-3" variant="light">5</Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button className="w-100 rounded-0 border py-3" variant="light">6</Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button className="w-100 rounded-0 border py-3" variant="warning">-</Button>
          </Col>
        </Row>
        <Row className="m-0">
          <Col xs={3} className="p-0">
            <Button className="w-100 rounded-0 border py-3" variant="light">1</Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button className="w-100 rounded-0 border py-3" variant="light">2</Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button className="w-100 rounded-0 border py-3" variant="light">3</Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button className="w-100 rounded-0 border py-3" variant="warning">+</Button>
          </Col>
        </Row>
        <Row className="m-0">
          <Col xs={6} className="p-0">
            <Button className="w-100 rounded-0 border py-3" variant="light">0</Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button className="w-100 rounded-0 border py-3" variant="light">.</Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button className="w-100 rounded-0 border py-3" variant="warning">=</Button>
          </Col>
        </Row>
      </Col>
    </Container>
  </>
);

export default Calculator;
