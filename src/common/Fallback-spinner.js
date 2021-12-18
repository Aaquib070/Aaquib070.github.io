import React from 'react'
//import PropTypes from 'prop-types'
import logo from 'assets/img/logo/LA.svg'
import 'assets/scss/components/app-loader.scss'
const SpinnerComponent = (props) => {
  return (
    <div className="fallback-spinner vh-100">
      <img className="fallback-logo" src={logo} alt="logo" />
      <svg className="loader" viewBox="-3 -4 105 105">
        <defs>
          <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="coral" />
            <stop offset="100%" stopColor="#49b412" />
          </linearGradient>
        </defs>
        <polygon
          points="50 15, 100 100, 0 100"
          className="triangle"
          stroke="url(#linear)"
        />
      </svg>
    </div>
  )
}

export default SpinnerComponent
