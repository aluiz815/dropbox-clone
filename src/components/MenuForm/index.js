import React from 'react';

import { Container,Navigation,DropboxLogo,Form } from './styles';

function MenuForm() {
  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo/>
          <span>Dropbox</span>
        </h1>
        <button className='action--close'>✕</button>
      </Navigation>
      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">Preencha o formulario abaixo</span>
        <input type="text" placeholder="Nome"/>
        <input type="text" placeholder="Sobrenome"/>
        <input type="email" placeholder="E-mail"/>
        <input type="password" placeholder="Password"/>
        <button>Prosseguir</button>
        <span className="terms">
          Esta pagina esta sujeita a politica de privacidade e aos Termos de serviço.
        </span>
      </Form>
    </Container>
  );
}

export default MenuForm;