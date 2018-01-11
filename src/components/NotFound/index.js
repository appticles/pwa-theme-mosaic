import React from 'react';
import { Header, Container } from 'semantic-ui-react';

import './style.css';

const NotFound = () => (
  <Container className="not-found">
    <Header as="h1"> Not found</Header>
  </Container>
);

export default NotFound;
