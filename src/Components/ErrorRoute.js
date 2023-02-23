import React from 'react';
import { Container } from 'react-bootstrap';

import NotFound from '../assets/images/broken-link.svg';

const ErrorRoute = () => (
  <>
    <Container className="text-center">
      <h1 className="text-center fw-bold text-white my-3">Page not found</h1>
      <img src={NotFound} alt="Page not Found" className="w-25 h-25 my-3" />
    </Container>
  </>
);

export default ErrorRoute;
