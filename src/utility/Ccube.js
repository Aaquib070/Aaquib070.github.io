/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Col } from 'reactstrap'
import 'swiper/css/swiper.css'
import { img1, img2, img3, img4, img5 } from 'export'
import 'assets/scss/plugins/extensions/swiper.scss'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
const params = {
  effect: 'cube',
  grabCursor: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true
  },
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94
  },
  pagination: {
    el: '.swiper-pagination'
  }
}

const Portfolio = () => {
  return (
    <Col lg="4" md="6" sm="12">
      <div className="swipermobile">
        <Swiper {...params}>
          <div
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: 'contain'
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${img2})`,
              backgroundSize: 'contain'
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${img3})`,
              backgroundSize: 'contain'
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${img4})`,
              backgroundSize: 'contain'
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${img5})`,
              backgroundSize: 'contain'
            }}
          ></div>
        </Swiper>
      </div>
    </Col>
  )
}

export default Portfolio
