import React from 'react'
//import PropTypes from 'prop-types'
import logo from 'assets/img/logo/LA.svg'
import 'assets/scss/components/app-loader.scss'
const SpinnerComponent = (props) => {
  return (
    <div className="fallback-spinner vh-100">
      <img className="fallback-logo" src={logo} alt="logo" />
      <svg width="100px" height="100px" viewBox="-3 -4 39 39">
        <polygon
          fill="#EFEFEF"
          stroke="#333333"
          strokeWidth="1"
          points="16,0 32,32 0,32"
        />
      </svg>
    </div>
  )
}

export default SpinnerComponent
