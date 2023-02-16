/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

const BoxNumber = ({ textContent }) => (
  <Container className="bg-secondary py-3 text-end">{textContent}</Container>
);

BoxNumber.propTypes = {
  textContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default BoxNumber;
