/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { LandingFooter } from './LandingFooter'
import { ContactForm } from './ContactForm'
import { Plans } from './Plans'
import { WhyUs } from './WhyUs'
import { Features } from './Features'
import { LandingHeader } from './LandingHeader'
import { IntroBanner } from './IntroBanner'

// import Google from './../../assets/img/icons/google.png'
// import Apple from './../../assets/img/icons/apple.png'

import { connect } from 'react-redux'
import 'assets/scss/pages/authentication.scss'
// import AlwaysOn from './AlwaysOn'
// import useWindowSize from 'utility/context/useWindowSize'
const LandingPage = (props) => {
  const { download } = props
  // const deviceWidth = window.screen.width
  // const deviceWidth = useWindowSize().width
  // const [email, setEmail] = useState('')
  // const handlingemail = e => {
  // 	e.preventDefault()
  // 	setEmail(e.target.value)
  // }
  // const handlingContact = e => {
  // 	e.preventDefault()
  // 	setEmail(e.target.value)
  // }
  // const handlingq = e => {
  // 	e.preventDefault()
  // 	setQ(e.target.value)
  // }

  useEffect(() => {
    download &&
      document
        .getElementById('DownloadOptions')
        .scrollIntoView({ behavior: 'smooth' })
  }, [download])

  return (
    <div className="app-landing-wrap landing_wrap">
      <div id="landing_wrap" className="landing-gradient-meridian">
        <LandingHeader />
        <IntroBanner />
        <Features />
        <WhyUs />
        <Plans />
        <ContactForm />
        <LandingFooter />
      </div>

      {/* <Row className="d-flex align-items-center justify-content-center m-0">
        <div className="w-100">
          <div
            className="w-100 d-block"
            style={{
              minHeight: '0px',
              marginTop: '0px',
              overflow: 'visible'
            }}
          >
            <AlwaysOn
              plan={plan}
              setplan={setplan}
              why={why}
              setwhy={setwhy}
              feature={feature}
              setfeature={setfeature}
              download={download}
            />
          </div>
        </div>
      </Row>
      {window.screen.width <= 1024 ? (
        <div className="mobile-foooter">
          <div
            style={{
              width: '250px',
              display: 'flex',
              justifyContent: 'space-between',
              margin: 'auto'
            }}
          >
            {logos.map((item) => {
              return item.icon
            })}
          </div>
          <div
            style={{
              width: '150px',
              height: 'max-content',
              display: 'block',
              margin: '15px auto'
            }}
          >
            <div style={{ fontSize: '35px' }}>Last Arzi</div>
          </div>
        </div>
      ) : (
        <div className="foooter">
          <div
            style={{
              height: '60px',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <div
              style={{ width: 'max-content', height: '100%', display: 'block' }}
            >
              <div
                style={{
                  fontSize: '2.1rem',
                  fontWeight: '500',
                  padding: '10px 0 0 5px'
                }}
              >
                Last Arzi
              </div>
            </div>
            <div
              style={{ width: 'max-content', height: '100%', display: 'flex' }}
            >
              <div
                style={{
                  width: '170px',
                  backgroundImage: `url(${Google})`,
                  marginRight: '20px',
                  backgroundSize: '175px',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              <div
                style={{
                  width: '140px',
                  backgroundImage: `url(${Apple})`,
                  backgroundSize: '240px',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </div>
          </div>
          <div
            style={{
              height: '30px',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <div
              style={{
                height: 'max-content',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '7px'
              }}
            >
              <div
                style={{
                  width: '200px',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                {logos.map((item) => {
                  return (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={item}
                    >
                      {item.icon}
                    </a>
                  )
                })}
              </div>
            </div>
            <div
              style={{
                height: '100%',
                width: 'max-content',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end'
              }}
            >
              {content.map((item) => {
                return (
                  <div
                    style={{
                      marginLeft: '1.8rem',
                      fontSize: '15px',
                      cursor: 'pointer',
                      height: 'max-content'
                    }}
                    key={item}
                  >
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )} */}
    </div>
  )
}
const mapStateToProps = (state) => {
  const user = state.auth
  const { customizer } = state?.customizer
  return {
    messages: customizer?.language?.Dashboard,
    sender: customizer?.language?.Sender,
    user,
    plan: user?.login?.plan,
    why: user?.login?.why,
    download: user?.login?.download,
    feature: user?.login?.feature
  }
}
export default connect(mapStateToProps)(LandingPage)
