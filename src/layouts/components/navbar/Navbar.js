/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Navbar } from 'reactstrap'
import { connect, useDispatch } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import NavbarUser from './NavbarUser'
import { avatar1, avatar2, Dark } from 'export'
import { useLocation } from 'react-router-dom'
import { Logo } from 'export'
// import './loginModalDiv.scss'
import LoginNew from 'views/Login/Login'
import ForgotPassword from 'views/Login/ForgotPassword'
import Register from 'views/Register'
import 'assets/scss/pages/authentication.scss'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
const user1 = JSON.parse(sessionStorage.getItem('logInUserData'))

const UserName = (props) => {
  const username = user1 ? (user1.name ? user1.name : user1.username) : null
  return username
}
const ThemeNavbar = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const location = useLocation()
  const [mobileTitle, setMobileTitle] = useState('Last Arzi')
  const [pwdChanged, setpwdChanged] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [forgotPassword, setforgotPassword] = useState(false)
  const [isSignInSelected, setIsSignInSelected] = useState(true)
  const [loggedIn, setloggedIn] = useState(false)
  const toggleLoginModal = (data) => {
    setShowLoginModal(!showLoginModal)
    setforgotPassword(false)
    dispatch({ type: 'RESET_RECOVERY_ID' })
    dispatch({ type: 'RESET_OTP' })
    data === 'SignIn' ? setIsSignInSelected(true) : setIsSignInSelected(false)
  }
  useEffect(() => {
    if (loggedIn) {
      toggleLoginModal()
      history.push('/dashboard')
      window.location.reload()
    }
  }, [loggedIn])
  useEffect(() => {
    props.pwdChanged && setpwdChanged(props.pwdChanged)
  }, [props.pwdChanged])

  useEffect(() => {
    if (location?.pathname) {
      const path = location?.pathname
      switch (path) {
        case '/diary':
          setMobileTitle('Secret Diary')
          break
        case '/spends':
          setMobileTitle('Daily Spends')
          break
        case '/vault/password':
          setMobileTitle('Password Vault')
          break
        case '/portfolio':
          setMobileTitle('Portfolio')
          break
        case '/assets/add':
          setMobileTitle('Assets')
          break
        case '/liability/add':
          setMobileTitle('Liabilities')
          break
        case '/nominee/list':
          setMobileTitle('Nominees')
          break
        case '/vault/document':
          setMobileTitle('Documents')
          break
        case '/postman':
          setMobileTitle('Postman')
          break
        case '/home/session':
          toggleLoginModal('SignIn')
          break
        default:
          setMobileTitle('Last Arzi')
          break
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])
  // const handleFooter = () => {
  //   'RESET_OTP'
  // }

  useEffect(() => {
    const header = document.getElementById('header')
    const handleScroll = () => {
      if (header) {
        if (window.pageYOffset > 520) {
          header.classList.add(Dark ? 'drop-shadow-dark' : 'drop-shadow-light')
        } else {
          header.classList.remove(
            Dark ? 'drop-shadow-dark' : 'drop-shadow-light'
          )
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <React.Fragment>
      <div className="content-overlay" />
      <Navbar
        id="header"
        style={{
          background: Dark ? '#21212a' : 'rgba(255,255,255)'
        }}
        className={`${
          props.collapsedContent ? (user1 ? 'full-width' : '') : 'fixed-width'
        } header-navbar navbar-container`}
      >
        <div
          className={`w-100 d-flex  align-items-center ${
            window.screen.width > 500 || !user1
              ? 'justify-content-between'
              : 'justify-content-end mr-1'
          }`}
          cla="true"
          id="navbar-mobile"
        >
          <div className="bookmark-wrapper d-flex">
            {props.collapsedContent && window.screen.width > 500 && (
              <NavLink
                to="/dashboard"
                className="navbar-brand d-flex"
                style={{ alignItems: 'center' }}
              >
                {!user1 && (
                  <img
                    alt="logo"
                    className="brand-logo"
                    height="35"
                    src={Logo}
                  />
                )}
                <h2
                  className="brand-text mb-0 ml-50"
                  style={{
                    fontWeight: '500',
                    color: 'coral',
                    // Dark
                    //   ? '#ebeefd !important'
                    //   : '#757488',
                    fontSize: '2.2rem'
                  }}
                >
                  {mobileTitle}
                </h2>
              </NavLink>
            )}
            {window.screen.width <= 500 && (
              <div style={{ display: 'flex' }}>
                <h3
                  className="brand-text mb-0 ml-50"
                  style={{
                    fontWeight: '600',
                    color: 'coral',
                    textAlign: 'center',
                    paddingTop: '9px'
                  }}
                >
                  {mobileTitle}
                </h3>
              </div>
            )}
          </div>
          {props.horizontal ? (
            <div className="logo d-flex align-items-center">
              <div className="brand-logo mr-50"></div>
              <h2 className="text-primary brand-text mb-0">Last Arzi2</h2>
            </div>
          ) : null}
          {/* {window.screen.width > 500 && ( */}
          <NavbarUser
            handleAppOverlay={props.handleAppOverlay}
            changeCurrentLang={props.changeCurrentLang}
            userName={<UserName {...props} />}
            userImg={
              JSON.parse(sessionStorage.getItem('logInUserData')) &&
              JSON.parse(sessionStorage.getItem('logInUserData')).salutation ===
                'Mr'
                ? avatar2
                : avatar1
            }
            loggedInWith={
              props.user !== undefined && props.user.login.values !== undefined
                ? props.user.login.values.loggedInWith
                : null
            }
            toggleLoginModal={toggleLoginModal}
            loggedIn={loggedIn}
            setloggedIn={setloggedIn}
            {...props}
          />
          <Modal
            isOpen={showLoginModal}
            toggle={toggleLoginModal}
            centered={true}
          >
            <ModalHeader toggle={toggleLoginModal} tag="div">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {isSignInSelected
                  ? 'Log In to your account'
                  : forgotPassword
                  ? 'Recover Password'
                  : isLoading
                  ? 'Registering'
                  : 'Create your account'}
              </h5>
            </ModalHeader>

            <ModalBody>
              <div className="login-section-form w-100 p-2">
                {forgotPassword ? (
                  <>
                    {pwdChanged === 'success' && (
                      <div
                        className="loginModalDiv_head"
                        style={{ paddingBottom: '10px' }}
                        onClick={() => {
                          setIsSignInSelected(true)
                          setforgotPassword(false)
                        }}
                      >
                        Password Changed successfully...
                        <span style={{ color: 'var(--warning)' }}>
                          {' '}
                          SignIn !!
                        </span>
                      </div>
                    )}
                    <ForgotPassword
                      backtoLogin={() => {
                        setforgotPassword(false)
                        setIsSignInSelected(true)
                        setpwdChanged('')
                      }}
                    />
                    {pwdChanged === 'failure' && (
                      <div style={{ color: 'red', textAlign: 'center' }}>
                        Something went wrong!!!
                      </div>
                    )}
                  </>
                ) : isSignInSelected ? (
                  <>
                    <LoginNew
                      loggedIn={loggedIn}
                      setloggedIn={setloggedIn}
                      forgotClick={() => {
                        dispatch({ type: 'RESET_OTP' })
                        setforgotPassword(true)
                      }}
                      createClick={() => {
                        setIsSignInSelected(false)
                        dispatch({ type: 'RESET_OTP' })
                      }}
                      {...props}
                    />
                  </>
                ) : (
                  <>
                    <Register
                      loggedIn={loggedIn}
                      setloggedIn={setloggedIn}
                      isLoading={isLoading}
                      setisLoading={setisLoading}
                      loginClick={() => setIsSignInSelected(true)}
                      {...props}
                    />
                  </>
                )}
              </div>
            </ModalBody>
          </Modal>
        </div>
      </Navbar>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  const { auth } = state
  const { phoneotp, user } = auth

  return {
    user,
    pwdChanged: phoneotp?.pwdChanged,
    plan: user?.login?.plan,
    why: user?.login?.why,
    feature: user?.login?.feature
  }
}

export default connect(mapStateToProps)(ThemeNavbar)
