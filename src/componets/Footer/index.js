import React from 'react';
import { FooterBase } from './styles';
import logo from '../../assets/logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={logo} alt="Alexflix" style={{height:'50px'}} />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/" >
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
