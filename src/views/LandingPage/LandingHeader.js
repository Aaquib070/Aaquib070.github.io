import React from 'react'
import { Logo } from 'export'

export const LandingHeader = () => {
  return (
    <div className="main-header header-fixed-default" id="home-header">
      <nav className="navbar container w-100 navbar-expand-lg navbar-transparent bg-transparent">
        <div className="logo">
          <img src={Logo} alt="Last Arzi" />
          Last Arzi
        </div>

        <div
          className="menu-toggle navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="m-auto"></div>

          <div className="header-part-right">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <a className="scroll-to nav-link m-2 " href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="scroll-to nav-link m-2" href="#features-wrap">
                  Features
                </a>
              </li>

              <li className="nav-item">
                <a className="scroll-to nav-link m-2" href="#pricing-wrap">
                  Pricing
                </a>
              </li>

              <li className="nav-item">
                <a className="scroll-to nav-link m-2" href="#contacts-wrap">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
