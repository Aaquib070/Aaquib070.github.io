import React from 'react'
import Swiper from 'react-id-swiper'
import {
  imgBanner1,
  imgBanner2,
  imgBanner3,
  imgBanner4,
  imgBanner5
} from 'export'

const params = {
  spaceBetween: 200,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
}

const Banner = () => {
  return (
    <div>
      <Swiper {...params}>
        <div>
          <img
            src={imgBanner1}
            alt="swiper 1"
            className="img-fluid"
            style={{ minHeight: '215px', marginBottom: '10px' }}
          />
        </div>
        <div>
          <img
            src={imgBanner2}
            alt="swiper 2"
            className="img-fluid"
            style={{ minHeight: '230px' }}
          />
        </div>
        <div>
          <img
            src={imgBanner3}
            alt="swiper 3"
            className="img-fluid"
            style={{ minHeight: '230px' }}
          />
        </div>
        <div>
          <img
            src={imgBanner4}
            alt="swiper 4"
            className="img-fluid"
            style={{ minHeight: '230px' }}
          />
        </div>
        <div>
          <img
            src={imgBanner5}
            alt="swiper 5"
            className="img-fluid"
            style={{ minHeight: '230px' }}
          />
        </div>
      </Swiper>
    </div>
  )
}
export default Banner
