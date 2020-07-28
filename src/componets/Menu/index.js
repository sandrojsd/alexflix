import React from 'react';
import logo from  '../../assets/logo.png';
import './menu.css';
import Button from '../Button';

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
      <img src={logo} className="Logo" alt="AlexFlix" />
      </a>
      <Button to="/cadastro/video" className="ButtonLink"> Novo Vídeo</Button>
    </nav>
  )
}
