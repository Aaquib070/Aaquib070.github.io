// import React, {useState} from 'react'
import React from 'react'
import './typewriter.css'
import { Dark } from 'export'

export const Plans = (props) => {
  return (
    <div
      className="plan-menu-option"
      style={{
        backgroundColor: Dark ? '#21212a' : 'white'
      }}
      id="plan"
    >
      <table className={`plan-table ${Dark ? 'shadow-dark' : 'shadow-light'}`}>
        <tr>
          <th>Breakups</th>
          <th>Basic</th>
          <th>Premium</th>
          <th>Elite</th>
        </tr>
        <tr>
          <td>Attachments</td>
          <td>10 (1 MB each)</td>
          <td>25 (5 MB each)</td>
          <td>Unlimited (1 MB each)</td>
        </tr>
        <tr>
          <td>Recordings</td>
          <td>10 (2.5 MB each)</td>
          <td>25 (25 MB each)</td>
          <td>50 (50 MB each)</td>
        </tr>
        <tr>
          <td>Legal Will</td>
          <td>No</td>
          <td>No</td>
          <td>Supported</td>
        </tr>
        <tr>
          <td>Monthly Subscription Fees</td>
          <td>Free</td>
          {/* <td>&#8377; 149</td> */}
          {/* <td>&#8377; 249</td> */}
          <td>Coming Soon...</td>
          <td>Coming Soon...</td>
        </tr>
      </table>
    </div>
  )
}
