import React from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Buttons from '../../Buttons/Buttons';
import './Calculator.css';

const Calculator = () => (
  <>
    <Row className="container-fluid m-0 p-0">
      <Col md="3" className="mx-auto">
        <h4 className="text-white text-center text-md-start">Lets do some Math</h4>
      </Col>
      <Col md="9" className="mx-auto">
        <Col md="6" className="mx-auto">
          <Buttons />
        </Col>
      </Col>
    </Row>
  </>
);

export default Calculator;
