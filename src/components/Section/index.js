import React from 'react';

import { Container,Content } from './styles';

function Section({variant,title,description}) {
  return (
    <Container className={variant}>
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
}

export default Section;