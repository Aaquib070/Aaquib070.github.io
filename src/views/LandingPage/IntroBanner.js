import React from 'react'
import { ImgBanner } from 'export'

export const IntroBanner = () => {
  return (
    <div className="main-content-wrap">
      <section
        id="intro-wrap"
        className="intro-three-Wrap text-left text-white"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 intro-three-LeftSection pb-5">
              <h1 className="font-weight-bold text-white text-40 mb-3 t-shadow text-left">
                Life is like a song sing it till it last
              </h1>

              <div className="mb-5">
                <ul className="list-inline usp-pointer">
                  <li className="mb-3 text-20 text-warning">
                    <span className="eva eva-checkmark-outline mr-2 text-warning"></span>
                    Last action before you bid good-bye
                  </li>
                  <li className="mb-3 text-20 text-warning">
                    <span className="eva eva-checkmark-outline mr-2 text-warning"></span>
                    Leave behind a peaceful world, free from family disputes
                  </li>

                  <li className="mb-3 text-20 text-warning">
                    <span className="eva eva-checkmark-outline mr-2 text-warning"></span>
                    That&apos;s what we say, Rest In Peace
                  </li>
                </ul>
              </div>
              <div className="intro-three-Buttons">
                <button
                  id=""
                  className="btn btn-rounded btn-outline-white btn-lg pl-5 pr-5 pb-2 mr-3 mb-4 text-uppercase"
                >
                  Sign in
                </button>
                <button className="btn btn-rounded btn-outline-white btn-lg pl-5 pr-5 pb-2 mb-4 text-uppercase">
                  Sign up
                </button>
              </div>
            </div>
            <div className="col-md-6 intro-three-RightSection d-flex align-items-center">
              <div data-aos="fade-left" className="intro-three-ProductImage">
                <img src={ImgBanner} className="img-responsive" alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="overlay"></div>
      </section>
    </div>
  )
}
