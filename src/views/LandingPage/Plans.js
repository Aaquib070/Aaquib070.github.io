// import React, {useState} from 'react'
import React from 'react'
import './typewriter.css'
// import { Dark } from 'export'

export const Plans = (props) => {
  return (
    <section id="pricing-wrap" className="pricing-four p-t-b-80">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header col-md-12 mb-5">
              <h2 className="font-weight-bold">Choose Your Plan</h2>
            </div>
          </div>
          <div
            // data-aos="fade-right"
            className="col-md-6 mb-lg-0 col-lg-4 mb-4"
          >
            <div className="pricing-four__card">
              <div className="card">
                <div className="card-body">
                  <div className="pricing-four__contents">
                    <div className="pricing-four__titles text-center">
                      <h2 className="font-weight-bold mt-4 mb-4">Basic</h2>
                    </div>
                    <div className="pricing-four__values text-center mt-4 mb-4">
                      <p className="text-25">
                        $ <span className="text-50 font-weight-bold">Free</span>
                        / month
                      </p>
                    </div>

                    <ul className="list-group list-group-flush mt-5 text-center">
                      <li className="list-group-item bg-transparent border-0 pb-0">
                        <span className="font-weight-700">Attachment</span>
                        <br />
                        <span className="text-secondary">10 (1 MB Each)</span>
                      </li>
                      <li className="list-group-item bg-transparent border-0 pb-0">
                        <span className="font-weight-700">Recording</span>
                        <br />
                        <span className="text-secondary">10 (2.5 MB Each)</span>
                      </li>
                      <li className="list-group-item bg-transparent border-0 pb-0">
                        <span className="font-weight-700">Legal Will</span>
                        <br />
                        <span className="text-secondary">
                          <strike>No</strike>
                        </span>
                      </li>
                    </ul>

                    <div className="text-center">
                      <button className="btn btn-lg btn-outline-primary btn-rounded mt-5 mb-4 pr-5 pl-5">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            // data-aos="fade-up"
            className="col-md-6 mb-lg-0 col-lg-4 mb-4"
          >
            <div className="pricing-four__card">
              <div className="card overlay">
                <div className="card-body">
                  <div className="pricing-four__contents">
                    <div className="pricing-four__titles--white text-center">
                      <h2 className="font-weight-bold mt-4 mb-4 text-white">
                        Premium
                      </h2>
                    </div>
                    <div className="pricing-four__values text-center mt-4 mb-4 text-white">
                      <p className="text-25">
                        $ <span className="text-50 font-weight-bold">55</span> /
                        month
                      </p>
                    </div>

                    <ul className="list-group list-group-flush mt-5 text-white text-center">
                      <li className="list-group-item bg-transparent border-0 pb-0">
                        <span className="font-weight-700">Attachment</span>
                        <br />
                        <span>25 (5 MB Each)</span>
                      </li>
                      <li className="list-group-item bg-transparent border-0 pb-0">
                        <span className="font-weight-700">Recording</span>
                        <br />
                        <span>25 (25 MB Each)</span>
                      </li>
                      <li className="list-group-item bg-transparent border-0 pb-0">
                        <span className="font-weight-700">Legal Will</span>
                        <br />
                        <span>
                          <strike>No</strike>
                        </span>
                      </li>
                    </ul>

                    <div className="text-center">
                      <button className="btn btn-lg btn-outline-white btn-rounded mt-5 mb-4 pr-5 pl-5">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            // data-aos="fade-left"
            className="col-md-6 mb-lg-0 col-lg-4"
          >
            <div className="pricing-four__card">
              <div className="card">
                <div className="card-body">
                  <div className="pricing-four__contents">
                    <div className="pricing-four__titles text-center">
                      <h2 className="font-weight-bold mt-4 mb-4">Elite</h2>
                    </div>
                    <div className="pricing-four__values text-center mt-4 mb-4">
                      <p className="text-25">
                        $ <span className="text-50 font-weight-bold">99</span> /
                        month
                      </p>
                    </div>

                    <ul className="list-group list-group-flush mt-5 text-center">
                      <li className="list-group-item bg-transparent border-0 pb-0">
                        <span className="font-weight-700">Attachment</span>
                        <br />
                        <span className="text-secondary">
                          Unlimited (1 MB Each)
                        </span>
                      </li>
                      <li className="list-group-item bg-transparent border-0 pb-0">
                        <span className="font-weight-700">Recording</span>
                        <br />
                        <span className="text-secondary">50 (50 MB Each)</span>
                      </li>
                      <li className="list-group-item bg-transparent border-0 pb-0">
                        <span className="font-weight-700">Legal Will</span>
                        <br />
                        <span className="text-secondary">Supported</span>
                      </li>
                    </ul>

                    <div className="text-center">
                      <button className="btn btn-lg btn-outline-primary btn-rounded mt-5 mb-4 pr-5 pl-5">
                        Sign Up
                      </button>
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
    //   className="plan-menu-option"
    //   style={{
    //     backgroundColor: Dark ? '#21212a' : 'white'
    //   }}
    //   id="plan"
    // >
    //   <table className={`plan-table ${Dark ? 'shadow-dark' : 'shadow-light'}`}>
    //     <tr>
    //       <th>Breakups</th>
    //       <th>Basic</th>
    //       <th>Premium</th>
    //       <th>Elite</th>
    //     </tr>
    //     <tr>
    //       <td>Attachments</td>
    //       <td>10 (1 MB each)</td>
    //       <td>25 (5 MB each)</td>
    //       <td>Unlimited (1 MB each)</td>
    //     </tr>
    //     <tr>
    //       <td>Recordings</td>
    //       <td>10 (2.5 MB each)</td>
    //       <td>25 (25 MB each)</td>
    //       <td>50 (50 MB each)</td>
    //     </tr>
    //     <tr>
    //       <td>Legal Will</td>
    //       <td>No</td>
    //       <td>No</td>
    //       <td>Supported</td>
    //     </tr>
    //     <tr>
    //       <td>Monthly Subscription Fees</td>
    //       <td>Free</td>
    //       {/* <td>&#8377; 149</td> */}
    //       {/* <td>&#8377; 249</td> */}
    //       <td>Coming Soon...</td>
    //       <td>Coming Soon...</td>
    //     </tr>
    //   </table>
    // </div>
  )
}
