import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../componets/BannerMain';
import Carousel from '../../componets/Carousel';
import Menu from '../../componets/Menu';
import Footer from '../../componets/Footer';

export default function Home() {
  return (
    <>
       <Menu />
       <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Seja muito bem-vindo a nossa igreja família."}
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
