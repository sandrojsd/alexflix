import React from 'react';
import Menu from './componets/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './componets/BannerMain';
import Carousel from './componets/Carousel';
import Footer from './componets/Footer';

function App() {
  return (
    <>
       <Menu />
       <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área"}
      />  

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Footer />
    </>
  );
}

export default App;
