import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import styles from './styles.module.css'

const imagesPath: string[] = ['../../../bus1.jpg',
'../../../bus2.jpg',
'../../../bus3.jpg',
'../../../excursiones.jpg',
'../../../busBoda.jpeg',
'../../../rutas.png',
'../../../taxi.jpg',
'../../../viajes.jpg'];

function Swipper() {
  const [picture, setPicture] = useState<number>(0);

  return (
    <div className={styles.swiper__Height}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        height={50}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      {
        imagesPath.map((image:string, index) => {
          return(
            <SwiperSlide key={index} >
              <img src={`${image}`} alt={`${image}`} className={styles.image__Hero}/>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
  </div>
  )
}

export default Swipper