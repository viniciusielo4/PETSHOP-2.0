import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import bannerUm from '../imagens/Banner-01.jpg';
import bannerDois from '../imagens/banner.jpg';
import bannerTres from '../imagens/banho-e-tosa.png'


function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
          <img className="carrosel" src={bannerDois} alt='banner petshop'/>
      </Carousel.Item>
      <Carousel.Item>
          <img className="carrosel" src={bannerUm} alt='banner petshop'/>
      </Carousel.Item>
      <Carousel.Item>
      <img className="carrosel" src={bannerTres} alt='banner petshop'/>
        </Carousel.Item>
    </Carousel>
  );
}

export default Banner