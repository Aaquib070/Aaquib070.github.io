/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Dark } from 'export'
import './typewriter.css'
import { Col } from 'reactstrap'

export const WhyUs = (props) => {
  const { msg1, msg2, msg3, msg4, msg5 } = props
  return (
    <div
      className="why-menu-option"
      id="whyUs"
      style={
        {
          // backgroundColor: Dark ? '#21212a' : 'white'
        }
      }
    >
      <div className="why-first">
        <div className="why-title common-shadow">
          <div>Why Us?</div>
        </div>
      </div>
      <div className="why-second">
        <Col className="messagegAlwayson h-100">
          <p className="mt-1" style={{ color: 'black' }}>
            {msg1 || `Last action before you bid good-bye`}
          </p>
          <p className="mt-2" style={{ color: 'black' }}>
            {msg2 || `You might not have control over your last moment,`}
            <br />
            {msg3 || `But now you can control your last acton in this world`}
          </p>
          <p className="mt-2" style={{ color: 'black' }}>
            {msg4 || `Leave behind a peaceful world, free from family disputes`}
          </p>
          <p className="mt-2" style={{ color: 'black' }}>
            {msg5 || `That's what we say, Rest In Peace`}
          </p>
        </Col>
      </div>
    </div>
  )
}
