import React, { useState, useEffect } from 'react'
import {
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap'
import Select from 'react-select'
import { NavLink, useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Sun,
  Moon,
  User,
  ArrowUpCircle,
  Mail,
  Bell,
  Power,
  Menu,
  Download,
  Settings
} from 'react-feather'
import { Logo, Dark } from 'export'
import { connect } from 'react-redux'
import { avatar1, avatar2 } from 'export'
import { Redirect } from 'react-router-dom'
import { changeLanguage } from 'redux/actions/customizer'
import { IntlContext } from 'utility/context/Internationalization'
import ReactCountryFlag from 'react-country-flag'

const user1 = JSON.parse(sessionStorage.getItem('logInUserData'))
const colortext = Dark ? '#ebeefd' : '#757488'
const MyNav = (props) => {
  const [theme, setTheme] = useState(
    sessionStorage.getItem('theme') === 'light' ? false : true
  )
  const history = useHistory()
  const [gear, setgear] = useState(false)
  const [logout, setLogout] = useState(false)
  const [language, setLanguage] = useState(false)
  const languages = [
    {
      value: 'عرب',
      label: 'Arabi',
      flag: 'sa',
      switch: 'sa'
    },
    {
      value: '中国人',
      label: 'Chinese',
      flag: 'ch',
      switch: 'ch'
    },
    {
      value: 'English',
      label: 'English',
      flag: 'us',
      switch: 'us'
    },
    {
      value: 'français',
      label: 'French',
      flag: 'fr',
      switch: 'fr'
    },
    {
      value: 'Deutsche',
      label: 'German',
      flag: 'de',
      switch: 'de'
    },
    {
      value: 'हिंदी',
      label: 'Hindi',
      flag: 'in',
      switch: 'in'
    },
    {
      value: 'русский',
      label: 'Russian',
      flag: 'rs',
      switch: 'rs'
    },
    {
      value: 'испанский',
      label: 'Spanish',
      flag: 'es',
      switch: 'es'
    },
    {
      value: 'اردو',
      label: 'Urdu',
      flag: 'pk',
      switch: 'ur'
    }
  ]

  const customOptions = ({ value, flag }) => {
    return (
      <div className="d-flex">
        <ReactCountryFlag className="country-flag" countryCode={flag} svg />
        <div
          style={{
            marginLeft: '20px',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            fontSize: '1.2rem'
          }}
        >
          {value}
        </div>
      </div>
    )
  }

  const editProfile = (value) => {
    const url = `/user/${value}`
    history.push({ pathname: url, state: { property: value } })
  }

  useEffect(() => {
    if (logout) {
      return <Redirect to="/#/home" />
    }
  }, [logout])

  const UserDropdown = (props) => {
    return (
      <DropdownMenu style={{ transform: 'translate3d(-85px, -290px, 0px)' }}>
        <DropdownItem onClick={() => editProfile('profile')}>
          <User size={14} className="mr-50" />
          <span className="align-middle">Edit Profile</span>
        </DropdownItem>
        <DropdownItem onClick={() => editProfile('Upgrade')}>
          <ArrowUpCircle size={14} className="mr-50" />
          <span className="align-middle">Subscription</span>
        </DropdownItem>
        <DropdownItem onClick={() => editProfile('feed')}>
          <Mail size={14} className="mr-50" />
          <span className="align-middle">Contact Us</span>
        </DropdownItem>
        <DropdownItem onClick={() => editProfile('notify')}>
          <Bell size={14} className="mr-50" />
          <span className="align-middle">Notifications</span>
        </DropdownItem>

        <DropdownItem divider />
        <DropdownItem
          tag="div"
          href="#"
          onClick={(e) => {
            e.preventDefault()
            sessionStorage.removeItem('logInUserData')
            props.logout()
          }}
        >
          <div
            onClick={() => {
              props.logout()
            }}
          >
            <Power size={14} className="mr-50" />
            <span className="align-middle">Log Out</span>
          </div>
        </DropdownItem>
      </DropdownMenu>
    )
  }

  const updatetheme = () => {
    if (theme) {
      sessionStorage.setItem('theme', 'light')
    } else {
      sessionStorage.setItem('theme', 'dark')
    }
    setTheme(!theme)
    window.location.reload()
  }

  const logout2 = () => {
    setLogout(true)
    sessionStorage.setItem('theme', 'light')
    window.location.reload()
  }
  const handleGear = () => setgear(!gear)

  const handleLangDropdown = () => {
    setLanguage(!language)
  }
  const DropdownLang = () => {
    return (
      <Modal
        isOpen={language}
        toggle={handleLangDropdown}
        className="modal-dialog-centered"
        backdrop={true}
      >
        <ModalHeader toggle={handleLangDropdown}>Select Language</ModalHeader>
        <IntlContext.Consumer>
          {(context) => {
            return (
              <ModalBody style={{ minHeight: '380px' }}>
                <Select
                  options={languages}
                  menuIsOpen
                  className="select-dropdown"
                  placeholder="Find Language . . ."
                  styles={{
                    menu: () => ({
                      boxShadow: 'none',
                      marginTop: '1rem'
                    })
                  }}
                  formatOptionLabel={customOptions}
                  onChange={(e) => {
                    context.switchLanguage(e.switch)
                    props.changeLanguage(e.label)
                  }}
                ></Select>
              </ModalBody>
            )
          }}
        </IntlContext.Consumer>
      </Modal>
    )
  }

  return (
    <div>
      {window.screen.width <= 500 && <DropdownLang />}

      <div className="fixed-bottom-svg">
        <svg
          viewBox="0 0 465.97994 150.59663"
          width="500px"
          height="100%"
          style={{
            transform: 'rotate(180deg)'
          }}
        >
          <g id="layer1" transform="translate(95.406706,-21.009959)">
            <path
              style={{
                fill: Dark ? '#21212a' : '#ffffff',
                stroke: 'var(--warning)',
                strokeWidth: '10px',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeOpacity: 1
              }}
              transform="matrix(0.26458333,0,0,0.26458333,-95.406642,21.010023)"
              d="M 0.59179688,0.59179688 V 500.5918 H 680.5918 703.16323 c 106.22049,0 18.28593,-137.79432 178.28571,-137.18276 160.00026,0.61157 74.35502,137.18276 181.14286,137.18276 h 18 680 V 0.59179688 Z M 880.5918,392.5918 c -99.99978,2.4e-4 -85.99978,74.00024 -85.99978,114.00024 0,20 5.99976,61.99976 85.99978,61.99976 79.99997,0 86.00022,-43.99976 86.00022,-63.99976 0,-40 14,-112.00048 -86.00022,-112.00024 z"
            />
          </g>
        </svg>
      </div>

      <nav
        className="fixed-bottom navbar-dark"
        role="navigation"
        style={{
          background: 'transparent'
        }}
      >
        <Nav
          className="w-100"
          style={{
            height: '3rem'
          }}
        >
          <div className=" d-flex flex-row justify-content-around w-100">
            {user1 ? (
              <NavItem
                style={{ width: '20px' }}
                onClick={() => {
                  props.toggle()
                }}
                className="nav-link"
              >
                <div className="row d-flex flex-column justify-content-center align-items-center">
                  <Menu />
                </div>
              </NavItem>
            ) : (
              <NavItem style={{ width: '20px' }}>
                <Dropdown isOpen={gear} toggle={handleGear} data-tour="gear">
                  <DropdownToggle tag="div">
                    <Settings
                      size="28"
                      color={colortext}
                      style={{ margin: '5px' }}
                    />
                  </DropdownToggle>
                  <DropdownMenu
                    right
                    style={{
                      background: Dark
                        ? 'rgba(0,0,0,0.8)'
                        : 'rgba(255,255,255,0.8)',
                      backdropFilter: 'blur(5px)'
                    }}
                  >
                    <DropdownItem
                      className="w-100"
                      tag={'a'}
                      style={{
                        color: colortext,
                        fontSize: '0.95rem',
                        fontWeight: '500'
                      }}
                    >
                      Download App
                      <Download
                        size="15"
                        className="ml-50"
                        stroke={colortext}
                      />
                    </DropdownItem>
                    <DropdownItem
                      className="w-100"
                      tag={'a'}
                      style={{
                        color: colortext,
                        fontSize: '0.95rem',
                        fontWeight: '500'
                      }}
                      onClick={() => {
                        updatetheme()
                      }}
                    >
                      {theme ? (
                        <>
                          <>Light Theme</>
                          <Sun
                            className="ml-50"
                            size={15}
                            fill="true"
                            stroke={colortext}
                          />
                        </>
                      ) : (
                        <>
                          <>Dark Theme</>
                          <Moon
                            className="ml-50"
                            fill="true"
                            size={15}
                            stroke={colortext}
                          />
                        </>
                      )}
                    </DropdownItem>
                    <DropdownItem
                      className="w-100"
                      tag={'a'}
                      style={{
                        color: colortext,
                        fontSize: '0.95rem',
                        fontWeight: '500'
                      }}
                      onClick={handleLangDropdown}
                    >
                      Language
                    </DropdownItem>
                    <DropdownItem
                      className="w-100"
                      tag={'a'}
                      style={{
                        color: colortext,
                        fontSize: '0.95rem',
                        fontWeight: '500'
                      }}
                      href="/"
                    >
                      Contact Us
                    </DropdownItem>
                    <DropdownItem
                      className="w-100"
                      tag={'a'}
                      style={{
                        color: colortext,
                        fontSize: '0.95rem',
                        fontWeight: '500'
                      }}
                      href="/#/#/privacy"
                    >
                      Privacy Policy
                    </DropdownItem>

                    <DropdownItem
                      className="w-100"
                      tag={'a'}
                      style={{
                        color: colortext,
                        fontSize: '0.95rem',
                        fontWeight: '500'
                      }}
                      href="/#/#/terms_conditions"
                    >
                      Terms & Conditions
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            )}
            {user1 && (
              <NavItem style={{ width: '20px' }}>
                <div
                  onClick={() => {
                    updatetheme()
                  }}
                  style={{ paddingTop: '3px' }}
                >
                  {theme ? (
                    <Sun size={28} fill="true" stroke="#c2c6dc" />
                  ) : (
                    <Moon fill="true" size={27} />
                  )}
                </div>
              </NavItem>
            )}
            <NavItem
              className="nav-link"
              style={{ width: '20px', position: 'relative' }}
            >
              <NavLink
                to="/dashboard"
                activeClassName="active"
                style={{ position: 'relative' }}
              >
                <div className="sidebar_open">
                  <div
                    style={{
                      backgroundImage: `url(${Logo})`,
                      height: '100%',
                      width: '100%',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}
                  />
                </div>
              </NavLink>
            </NavItem>
            <NavItem style={{ width: '20px' }} onClick={handleLangDropdown}>
              <IntlContext.Consumer>
                {(context) => {
                  return (
                    <div>
                      <ReactCountryFlag
                        className="country-flag-selector"
                        countryCode={
                          context.state.locale === 'en'
                            ? 'us'
                            : context.state.locale
                        }
                        svg
                      />
                    </div>
                  )
                }}
              </IntlContext.Consumer>
            </NavItem>
            {user1 && (
              <NavItem
                className="nav-link"
                style={{ padding: '0.357rem 0rem', width: '20px' }}
              >
                <UncontrolledDropdown tag="div" className="dropdown-user">
                  <DropdownToggle tag="a" className="dropdown-user-link">
                    <span data-tour="user">
                      <img
                        src={
                          JSON.parse(sessionStorage.getItem('logInUserData')) &&
                          JSON.parse(sessionStorage.getItem('logInUserData'))
                            .salutation === 'Mr'
                            ? avatar2
                            : avatar1
                        }
                        className="round"
                        height="28"
                        width="28"
                        alt="avatar"
                      />
                    </span>
                  </DropdownToggle>
                  <UserDropdown logout={logout2} />
                </UncontrolledDropdown>
              </NavItem>
            )}
          </div>
        </Nav>
      </nav>
    </div>
  )
}
const mapStateToProps = (state) => {
  const { customizer } = state?.customizer
  return {
    messages: customizer?.language?.Dashboard,
    sender: customizer?.language?.Sender
  }
}

export default connect(mapStateToProps, { changeLanguage })(MyNav)
