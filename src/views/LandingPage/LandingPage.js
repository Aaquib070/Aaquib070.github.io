/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Google from './../../assets/img/icons/google.png'
import Apple from './../../assets/img/icons/apple.png'
import {
  // Card,
  // CardTitle,
  // CardBody,
  Row
  // Col,
  // Form,
  // Input,
  // FormGroup,
  // Label,
  // Button
} from 'reactstrap'
import { connect } from 'react-redux'
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Youtube
  // PhoneCall
} from 'react-feather'
import 'assets/scss/pages/authentication.scss'
import AlwaysOn from './AlwaysOn'
// import useWindowSize from 'utility/context/useWindowSize'
const LandingPage = (props) => {
  const { download } = props
  const [plan, setplan] = useState(false)
  const [why, setwhy] = useState(true)
  const [feature, setfeature] = useState(false)
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

  const logos = [
    {
      type: 'facebook',
      icon: <Facebook />
    },
    {
      type: 'linkedin',
      icon: <Linkedin />
    },
    {
      type: 'instagram',
      icon: <Instagram />
    },
    {
      type: 'twitter',
      icon: <Twitter />
    },
    // {
    //   type: 'caller',
    //   icon: <PhoneCall onClick={()=>{window.location.href = '/#/caller'}}/>
    // },
    {
      type: 'youtube',
      icon: <Youtube />
    }
  ]

  const content = [
    'About us',
    //contact us in about us and in contact 2 options - feedback or querry
    'Privacy policy',
    'Terms of use',
    'Copyright',
    'Advertise with us'
  ]

  useEffect(() => {
    download &&
      document
        .getElementById('DownloadOptions')
        .scrollIntoView({ behavior: 'smooth' })
  }, [download])

  return (
    <div>
      <Row className="d-flex align-items-center justify-content-center m-0">
        <div className="w-100">
          <div
            className="w-100 d-block"
            style={{
              minHeight: '0px',
              marginTop: '0px',
              overflow: 'hidden'
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
          {/* <Row className="w-100 m-0">
            <Col className={plan || why || feature ? 'mt-0' : 'mt-2'}>
              <Card className="mb-0">
                <CardTitle style={{ textAlign: 'center', paddingTop: '10px' }}>
                  <h3>You can access your account from any platform</h3>
                </CardTitle>
                <CardBody className="text-center">
                  <div className="divider"></div>
                  <Row className="mt-3">
                    <Col className="text-center justify-content-center">
                      <Smartphone size="35" />
                      <h5>Android</h5>
                    </Col>
                    <Col className="text-center justify-content-center">
                      <Tablet size="35" />
                      <h5>iOS</h5>
                    </Col>
                    <Col className="text-center justify-content-center">
                      <Monitor size="35" />
                      <h5>Web</h5>
                    </Col>
                  </Row>
                  <div className="divider">
                    <span className="divider-text">
                      <h5>Query/Feedback</h5>
                    </span>
                  </div>
                  <Form>
                    <FormGroup className="form-label-group mt-2">
                      <Input
                        placeholder="Email"
                        className="text-center mb-1"
                        onChange={handlingemail}
                      />
                      <Label>Email</Label>
                      <Input
                        placeholder="ContactNo."
                        className="text-center mb-1"
                        onChange={handlingContact}
                      />
                      <Label>Contact Number</Label>

                      <Input
                        placeholder="Query/Suggestion"
                        className="text-center"
                        onChange={handlingq}
                      />
                      <Label>Query/Suggestion</Label>
                    </FormGroup>
                  </Form>
                  <Button.Ripple
                    block
                    color={email && q ? 'warning' : 'primary'}
                    className="btn-block"
                  >
                    Submit
                  </Button.Ripple>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
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
                  return item.icon
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
                    {item}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
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
