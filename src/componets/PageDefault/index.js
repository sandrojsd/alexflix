import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import { Main } from './styles';


export default function PageDefault({children}) {
  return (
    <>
      <Menu />
      <Main>
          {children}
      </Main>
      <Footer />
    </>
  )
}
