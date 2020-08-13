import React from 'react';

import { Container,Content,HeaderWrapper,Header,DropboxLogo } from './styles';

function Section({variant,title,description}) {
  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo/>
            <span>Dropbox</span>
          </h1>
          <button>Interagir</button>
        </Header>
      </HeaderWrapper>
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
}

export default Section;