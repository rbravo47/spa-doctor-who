"use client";
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './page.module.css';

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false, // Desactivamos los dots automáticos de react-slick
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setActiveSlide(next),
  };

  const slides = [
    {
      image: './carrusel-1.webp',
      text: 'Allons-y!',
      buttonText: 'Ver ahora',
    },
    {
      image: './carrusel-2.jpg',
      text: 'The Giggle',
      buttonText: 'Ver ahora',
    },
  ];

  const dots = new Array(5).fill(0); // Creamos un array de 5 elementos para los dots

  return (
    <div className={styles['carousel-container']}>
      <Slider ref={sliderRef} {...settings}>
  {slides.map((slide, index) => (
    <div key={index} className={`${styles['carousel-slide']} ${index === activeSlide ? styles.active : ''}`}>
      <img src={slide.image} alt={`Slide ${index}`} className={styles.img} />
      <div className={styles.overlay}>
        <div className={styles.overlayContent}>
          <div className={styles.text}>{slide.text}</div>
          <button className={styles.button} onClick={() => alert(`Dios Mio!Como me ha costado hacer este Carousel ${index + 1}`)}>
            {slide.buttonText}
          </button>
        </div>
      </div>
    </div>
  ))}
</Slider>
      <div className={styles['navigation-dots']}>
        {dots.map((_, index) => ( // Aquí cambiamos 'slides' por 'dots'
          <div
            key={index}
            className={`${styles['dot']} ${index === activeSlide ? styles.activeDot : ''}`}
            onClick={() => {
              if (index < slides.length) {
                setActiveSlide(index);
                sliderRef.current.slickGoTo(index);
              }
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}