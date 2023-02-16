import React from 'react';
import {
  Col,
  Container,
} from 'react-bootstrap';
import Buttons from './Buttons/Buttons';

const Calculator = () => (
  <>
    <Container>
      <Col md="4" className="mx-auto">
        <Buttons />
      </Col>
    </Container>
  </>
);

export default Calculator;
