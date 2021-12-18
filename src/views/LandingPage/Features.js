/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { Row, Col, Card } from 'reactstrap'

import {
  Assets,
  Diary,
  Documents,
  Liability,
  Nominee,
  Portfolio,
  Sender,
  Spend,
  Vault,
  Dark
} from 'export'

import './typewriter.css'

export const Features = (props) => {
  const {
    asset,
    assetText,
    liability,
    liabilityText,
    vault,
    vaultText,
    nominees,
    nomineesText,
    spends,
    spendsText,
    documents,
    documentsText,
    diary,
    diaryText,
    portfolio,
    portfolioText
  } = props
  const [dashboard, setDashboard] = useState([
    {
      id: 0,
      label: asset ? asset : 'Assets',
      description: assetText
        ? assetText
        : 'Bank Holdings, FD, RD, Insurance, Properties etc.',
      background: Assets,
      selected: false,
      path: '/assets/add'
    },
    {
      id: 1,
      label: liability ? liability : 'Liabilties',
      description: liabilityText
        ? liabilityText
        : 'Loan, EMI, Cash borrowed etc with collateral details',
      background: Liability,
      selected: false,
      path: '/liability/add'
    },
    {
      id: 2,
      label: vault ? vault : 'Password Vault',
      description: vaultText
        ? vaultText
        : 'Save your passwords like cards, credentials in vault.',
      background: Vault,
      selected: false,
      path: '/vault/password'
    },
    {
      id: 3,
      label: spends ? spends : 'Daily Spends',
      description: spendsText
        ? spendsText
        : 'Log your thoughts and analyze your daily spends.',
      background: Spend,
      selected: false,
      path: '/spends'
    },
    {
      id: 4,
      label: nominees ? nominees : 'Nominees',
      description: nomineesText
        ? nomineesText
        : 'Manage your nominees for your assets & liabities',
      background: Nominee,
      selected: false,
      path: '/nominee/list'
    },
    {
      id: 5,
      label: documents ? documents : 'Documents',
      description: documentsText
        ? documentsText
        : 'Upload you documents, pics in your own secret vault',
      background: Documents,
      selected: false,
      path: '/vault/document'
    },
    {
      id: 6,
      label: diary ? diary : 'Secret Diary',
      description: diaryText
        ? diaryText
        : 'Log your thoughts and secrets in a personal space',
      background: Diary,
      selected: false,
      path: '/diary'
    },
    {
      id: 7,
      label: portfolio ? portfolio : 'Portfolio',
      description: portfolioText
        ? portfolioText
        : 'View & analyze portfolio of saved assets and liabilties',
      background: Portfolio,
      selected: false,
      path: '/portfolio'
    },
    {
      id: 8,
      label: props?.sender?.heading ? props?.sender?.heading : 'Postman',
      description: props?.sender?.subHeading
        ? props?.sender?.subHeading
        : 'Save, schedule, send text, audio, video messages',
      background: Sender,
      selected: false,
      path: '/contactUs'
    }
  ])

  const calcWidth = () => {
    if (window.innerWidth > 1100) {
      return '4'
    } else if (window.innerWidth > 900 && window.innerWidth <= 1100) {
      return '6'
    } else {
      return '12'
    }
  }

  const setFlip = (index) => {
    setDashboard(
      dashboard.map((item) => {
        return item.id === index ? { ...item, selected: !item.selected } : item
      })
    )
  }

  return (
    <div
      id="feature"
      className="feature-menu-option"
      style={{ backgroundColor: Dark ? '#21212a' : 'white' }}
    >
      {/* <h3
        style={{
          textAlign: 'center',
          color: 'var(--warning)',
          paddingTop: '5px'
        }}
      >
        Features
      </h3> */}
      <div style={{ overflowX: window.innerWidth <= 500 ? 'overlay' : 'none' }}>
        <Row
          className="px-2"
          style={{
            flexWrap: window.innerWidth <= 500 ? 'nowrap' : 'wrap',
            width: window.innerWidth <= 500 ? '3100px' : ''
          }}
        >
          {dashboard?.map((item, index) => {
            return (
              <Col
                md={calcWidth()}
                sm="12"
                key={index}
                className={window.innerWidth <= 500 ? 'mr-1 px-0' : 'px-0'}
                style={{
                  width: window.innerWidth <= 500 ? '340px' : ''
                }}
              >
                <div className="pointerCursor" onClick={() => setFlip(index)}>
                  <Card
                    id={`card-${index}`}
                    className={
                      item.selected ? 'whole-card card-rotate' : 'whole-card'
                    }
                    style={{
                      maxWidth: window.innerWidth <= 500 ? '340px' : '380px',
                      margin: window.innerWidth <= 500 ? '17px 0px' : ''
                    }}
                  >
                    <div
                      id={`back-image-${index}`}
                      className={
                        Dark
                          ? 'back-image-dark back-image-dark-normal'
                          : 'back-image back-image-normal'
                      }
                      style={{
                        backgroundImage: `url(${item.background})`,
                        backgroundSize: (() => {
                          if (item.label === 'Assets') {
                            return '220px'
                          } else if (item.label === 'Password Vault') {
                            return '220px'
                          } else if (item.label === 'Nominees') {
                            return '185px'
                          } else if (item.label === 'Daily Spends') {
                            return window.innerWidth <= 500 ? '155px' : '185px'
                          } else if (item.label === 'Documents') {
                            return window.innerWidth <= 500 ? '170px' : '210px'
                          } else if (item.label === 'Postman') {
                            return window.innerWidth <= 500 ? '225px' : '250px'
                          } else if (item.label === 'Secret Diary') {
                            return window.innerWidth <= 500 ? '175px' : ''
                          }
                        })(),
                        backgroundPosition: (() => {
                          if (item.label === 'Password Vault') {
                            return window.innerWidth <= 500 ? '95px' : '125px'
                          } else if (item.label === 'Nominees') {
                            return window.innerWidth <= 500 ? '135px' : '165px'
                          } else if (item.label === 'Daily Spends') {
                            return window.innerWidth <= 500 ? '165px' : '175px'
                          } else if (item.label === 'Secret Diary') {
                            return window.innerWidth <= 500 ? '155px' : '165px'
                          } else if (item.label === 'Postman') {
                            return window.innerWidth <= 500 ? '95px' : '110px'
                          } else if (item.label === 'Assets') {
                            return window.innerWidth <= 500 ? '105px' : '125px'
                          } else if (item.label === 'Liabilties') {
                            return window.innerWidth <= 500 ? '125px' : '150px'
                          } else if (item.label === 'Portfolio') {
                            return window.innerWidth <= 500 ? '120px' : ''
                          }
                        })()
                      }}
                    />
                    <div className="card-title-div" id={`card-title-${index}`}>
                      <span
                        id={`card-title-no-${index}`}
                        style={{ color: Dark ? 'white' : 'black' }}
                        className="card_title"
                      >
                        {item.label}
                      </span>
                    </div>
                  </Card>
                  <Card
                    id={`card-back-${index}`}
                    className={
                      item.selected
                        ? 'card-back-rotate whole-card-back'
                        : 'whole-card-back'
                    }
                    style={{
                      maxWidth: window.innerWidth <= 500 ? '340px' : '380px',
                      margin: window.innerWidth <= 500 ? '17px 0px' : ''
                    }}
                  >
                    <div
                      id={`back-image-${index}`}
                      className={
                        Dark ? 'back-image-dark-revert' : 'back-image-revert'
                      }
                      style={{
                        backgroundImage: `url(${item.background})`,
                        backgroundPosition: 'center'
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '0',
                        width: '100%',
                        height: '100%',
                        color: 'white',
                        fontSize: '2rem',
                        textAlign: 'center'
                      }}
                    >
                      {item.label}
                    </div>
                  </Card>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
}
