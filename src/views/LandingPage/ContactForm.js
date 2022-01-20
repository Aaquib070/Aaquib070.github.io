import React from 'react'
import { Form, Input } from 'reactstrap'
import { ContactLogo } from 'export'

export const ContactForm = () => {
  return (
    <section
      id="contacts-wrap"
      className="contact-form-wrap light-gray p-t-b-80"
    >
      <div className="container">
        <div className="row">
          <div
            // data-aos="fade-right"
            className="form-wrap col-md-6 mb-4"
          >
            <div className="section-header mb-5">
              <h2 className="font-weight-bold">Get in Touch With Us !</h2>
            </div>

            <Form className="form row">
              <div className="form-group mb-4 col-md-6">
                <label htmlFor="">
                  <span className="eva eva-person-outline"></span>
                </label>
                <Input
                  type="text"
                  name="Name"
                  id=""
                  //   className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group mb-4 col-md-6">
                <label htmlFor="">
                  <span className="eva eva-email-outline"></span>
                </label>
                <Input
                  type="email"
                  required
                  name="email"
                  //   className="form-control"
                  placeholder="Your email"
                />
              </div>
              <div className="form-group mb-4 col-md-12">
                <label htmlFor="">
                  <span className="eva eva-edit-2-outline"></span>
                </label>
                <Input
                  type="text"
                  required
                  name="subject"
                  //   className="form-control"
                  placeholder="Your subject here"
                />
              </div>

              <div className="form-group mb-4 col-md-12">
                <label htmlFor="">
                  <span className="eva eva-edit-outline"></span>
                </label>
                <textarea
                  className="form-control"
                  placeholder="Your message here"
                  required
                  name="message"
                  rows="5"
                ></textarea>
              </div>

              <div className="form-group col-md-12">
                <button
                  type="submit"
                  className="btn btn-block btn-rounded form-submit-button btn-large gradient-btn"
                >
                  Send message
                </button>
              </div>
            </Form>
          </div>
          <div
            // data-aos="fade-left"
            className="col-md-6 align-items-center"
          >
            <div className="right-contact-wrap ml-5">
              <img
                src={ContactLogo}
                className="img-responsive zoom-fade"
                alt="img"
              />

              <p>
                “There is no real ending. It&aps;s just the place where you stop
                the story.”<strong>- Frank Herbert</strong>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
