/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
//import PropTypes from 'prop-types'
import { Art } from 'export'
import './typewriter.css'
// import { Plans } from './Plans'
import { Features } from './Features'
// import { DownloadOptions } from './DownloadOptions'
import { WhyUs } from './WhyUs'
import { connect } from 'react-redux'

const AlwaysOn = (props) => {
  // const deviceWidth = useWindowSize().width
  // const deviceWidth = window.innerWidth

  const { msgAlwayson, featuresDashboard } = props

  return (
    <div
      className=""
      id="AlwaysOn"
      style={{
        textAlign: 'center',
        height: 'fit-content'
      }}
    >
      <img
        alt="logo"
        style={{
          width: '100%',
          height: '560px',
          objectFit: 'contain',
          background: 'black',
          marginTop: '4rem'
        }}
        //	className='brand-logo'
        //height=''
        src={Art}
      />
      {window.screen.width > 500 && (
        <div style={{ maxWidth: '1280px', width: '100%', margin: 'auto' }}>
          <WhyUs {...msgAlwayson} />
          <Features {...featuresDashboard} />
          {/* <Plans {...msgAlwayson} /> */}
          {/* <DownloadOptions {...msgAlwayson} /> */}
        </div>
      )}
    </div>
  )
}
const mapStateToProps = (state) => {
  const {
    customizer: { language: { AlwaysOn = {}, Dashboard = {} } = {} }
  } = state?.customizer
  return {
    msgAlwayson: AlwaysOn ? AlwaysOn : {},
    featuresDashboard: Dashboard ? Dashboard : {}
  }
}
export default connect(mapStateToProps)(AlwaysOn)
