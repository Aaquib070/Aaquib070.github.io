import React from 'react'
import './typewriter.css'
import { Dark } from 'export'

export const DownloadOptions = () => {
  return (
    <div
      className="why-menu-option animate"
      id="DownloadOptions"
      style={{ backgroundColor: Dark ? '#21212a' : 'white' }}
    >
      <h3
        style={{
          textAlign: 'center',
          color: 'var(--warning)',
          paddingTop: '5px'
        }}
      >
        Download
      </h3>
    </div>
  )
}
