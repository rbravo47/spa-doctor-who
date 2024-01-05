"use client";
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './page.module.css';

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Asegúrate de que las flechas estén habilitadas
    beforeChange: (current, next) => setActiveSlide(next),
  };


  const slides = [
    {
      image: 'carrusel-1.webp',
      text: 'Allons-y!',
      buttonText: 'Ver ahora',
    },
    {
      image: 'carrusel-2.jpg',
      text: 'The Giggle',
      buttonText: 'Ver ahora',
    },
  ];
  return (
    <div className={styles['carousel-container']}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={`${styles['carousel-slide']} ${index === activeSlide ? styles.active : ''}`}>
            <img src={slide.image} alt={`Slide ${index}`} className={styles.img} />
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <div className={styles.text}>{slide.text}</div>
                <button className={styles.button} onClick={() => alert(`Click en botón del slide ${index + 1}`)}>
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
 }