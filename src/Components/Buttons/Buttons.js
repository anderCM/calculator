import React, { useState } from 'react';
import {
  Button,
  Col,
  Row,
} from 'react-bootstrap';
import calculate from '../../logic/calcute';
import BoxNumber from '../BoxNumber.js/BoxNumber';

const buttons = [
  {
    ac: {
      text: 'AC', size: 'w-25', color: 'light', type: 'calculate',
    },
    plusminus: {
      text: '+/-', size: 'w-25', color: 'light', type: 'calculate',
    },
    modulo: {
      text: '%', size: 'w-25', color: 'light', type: 'calculate',
    },
    divide: {
      text: '÷', size: 'w-25', color: 'warning', type: 'operation',
    },
  },
  {
    seven: {
      text: 7, size: 'w-25', color: 'light', type: 'number',
    },
    eight: {
      text: 8, size: 'w-25', color: 'light', type: 'number',
    },
    nine: {
      text: 9, size: 'w-25', color: 'light', type: 'number',
    },
    multiply: {
      text: 'x', size: 'w-25', color: 'warning', type: 'operation',
    },
  },
  {
    four: {
      text: 4, size: 'w-25', color: 'light', type: 'number',
    },
    five: {
      text: 5, size: 'w-25', color: 'light', type: 'number',
    },
    six: {
      text: 6, size: 'w-25', color: 'light', type: 'number',
    },
    minus: {
      text: '-', size: 'w-25', color: 'warning', type: 'operation',
    },
  },
  {
    one: {
      text: 1, size: 'w-25', color: 'light', type: 'number',
    },
    two: {
      text: 2, size: 'w-25', color: 'light', type: 'number',
    },
    three: {
      text: 3, size: 'w-25', color: 'light', type: 'number',
    },
    plus: {
      text: '+', size: 'w-25', color: 'warning', type: 'operation',
    },
  },
  {
    zero: {
      text: 0, size: 'w-50', color: 'light', type: 'number',
    },
    dot: {
      text: '.', size: 'w-25', color: 'light', type: 'number',
    },
    equal: {
      text: '=', size: 'w-25', color: 'warning', type: 'calculate',
    },
  },
];
const Buttons = () => {
  const [result, setResult] = useState(0);

  const handleClick = ({ target }) => {
    setResult((prevState) => calculate(prevState, target.innerText));
  };

  return (
    <>
      <BoxNumber textContent={result.next || result.total || 0} />
      {buttons.map((btn) => (
        <Row key={Math.random()} className="p-0 m-0">
          <Col className="p-0">
            {Object.values(btn).map((name) => (
              <Button
                key={name.text}
                className={[name.size, 'rounded-0 border py-4']}
                variant={name.color}
                onClick={handleClick}
                number={name.text}
              >
                {name.text}
              </Button>
            ))}
          </Col>
        </Row>
      ))}
    </>
  );
};

export default Buttons;
