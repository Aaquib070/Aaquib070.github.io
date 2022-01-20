/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Slider1 } from 'export'

// import { Dark } from 'export'
// import './typewriter.css'
// import { Col } from 'reactstrap'

export const WhyUs = (props) => {
  // const { msg1, msg2, msg3, msg4, msg5 } = props
  return (
    <section className="right-image-wrap p-t-b-80 light-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-header mb-5">
            <h2 className="font-weight-bold">What Customer Love Most</h2>
          </div>
          <div className="col-md-12 col-lg-5 col-sm-12">
            <div>
              <div data-aos="fade-up" className="aos-init aos-animate">
                <img
                  alt="img"
                  className="img-responsive w-100 mb-4"
                  src={Slider1}
                />
              </div>
              <p className="mt-4">
                {' '}
                “Our story may have any number of ending but its start is a
                singular choice we make today.”{' '}
                <strong>
                  <br />- Faisal Khosa
                </strong>{' '}
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 col-sm-12 mb-4 mb-lg-0">
            <div className="row m-0">
              <div data-aos="fade-right" className="col-md-6 col-sm-6 mb-4">
                <div className="card">
                  <div className="card-body d-flex pt-4 pb-4">
                    <div className="mr-2">
                      <span className="eva eva-pie-chart-outline mr-1 text-36"></span>
                    </div>
                    <div className="">
                      <h4 className="card-title font-weight-bold">
                        Full Analytics
                      </h4>
                      <p className="m-0">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-left" className="col-md-6 col-sm-6 mb-4">
                <div className="card">
                  <div className="card-body d-flex pt-4 pb-4">
                    <div className="mr-2">
                      <span className="eva eva-clock-outline mr-1 text-36"></span>
                    </div>
                    <div className="">
                      <h4 className="card-title font-weight-bold">
                        24/7 Support
                      </h4>
                      <p className="m-0">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="col-md-6 col-sm-6 mb-4 mb-lg-0 mb-md-0 mb-sm-0"
              >
                <div className="card">
                  <div className="card-body d-flex pt-4 pb-4">
                    <div className="mr-2">
                      <span className="eva eva-lock-outline mr-1 text-36"></span>
                    </div>
                    <div className="">
                      <h4 className="card-title font-weight-bold">
                        Safe & Secure
                      </h4>
                      <p className="m-0">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="col-md-6 col-sm-6 mb-0 mb-lg-0 mb-md-0 mb-sm-0"
              >
                <div className="card">
                  <div className="card-body d-flex pt-4 pb-4">
                    <div className="mr-2">
                      <span className="eva eva-pricetags-outline mr-1 text-36"></span>
                    </div>
                    <div className="">
                      <h4 className="card-title font-weight-bold">
                        Best Pricing
                      </h4>
                      <p className="m-0">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div
    //   className="why-menu-option"
    //   id="whyUs"
    //   style={
    //     {
    //       // backgroundColor: Dark ? '#21212a' : 'white'
    //     }
    //   }
    // >
    //   <div className="why-first">
    //     <div className="why-title common-shadow">
    //       <div>Why Us?</div>
    //     </div>
    //   </div>
    //   <div className="why-second">
    //     <Col className="messagegAlwayson h-100">
    //       <p className="mt-1" style={{ color: 'black' }}>
    //         {msg1 || `Last action before you bid good-bye`}
    //       </p>
    //       <p className="mt-2" style={{ color: 'black' }}>
    //         {msg2 || `You might not have control over your last moment,`}
    //         <br />
    //         {msg3 || `But now you can control your last acton in this world`}
    //       </p>
    //       <p className="mt-2" style={{ color: 'black' }}>
    //         {msg4 || `Leave behind a peaceful world, free from family disputes`}
    //       </p>
    //       <p className="mt-2" style={{ color: 'black' }}>
    //         {msg5 || `That's what we say, Rest In Peace`}
    //       </p>
    //     </Col>
    //   </div>
    // </div>
  )
}
