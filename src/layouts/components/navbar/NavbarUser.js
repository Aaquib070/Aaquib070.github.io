import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'
import { connect } from 'react-redux'
import { Dark, colortext } from 'export'
import { setSection } from 'redux/actions/auth/loginActions'
import { changeLanguage } from 'redux/actions/customizer'
import { IntlContext } from 'utility/context/Internationalization'
import { Submit, Reset, SubmitMob, ResetMob } from 'common/LAButtons'
import {
  UncontrolledDropdown,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap'
import {
  Settings,
  Download,
  User,
  ArrowUpCircle,
  Mail,
  Bell,
  Power,
  Sun,
  Moon
} from 'react-feather'
import './badge.scss'
import Select from 'react-select'

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

const UserDropdown = (props) => {
  return (
    <DropdownMenu right>
      <DropdownItem onClick={(e) => props.editMyProfile('profile')}>
        <User size={14} className="mr-50" />
        <span className="align-middle">Edit Profile</span>
      </DropdownItem>
      <DropdownItem onClick={(e) => props.editMyProfile('Upgrade')}>
        <ArrowUpCircle size={14} className="mr-50" />
        <span className="align-middle">Subscription</span>
      </DropdownItem>
      <DropdownItem onClick={(e) => props.editMyProfile('feed')}>
        <Mail size={14} className="mr-50" />
        <span className="align-middle">Contact Us</span>
      </DropdownItem>
      <DropdownItem onClick={(e) => props.editMyProfile('notify')}>
        <Bell size={14} className="mr-50" />
        <span className="align-middle">Notifications</span>
      </DropdownItem>

      <DropdownItem divider />
      <DropdownItem
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
const user1 = sessionStorage.getItem('logInUserData')
const NavbarUser = (props) => {
  const beforeInstallPromptHandler = (e) => {
    console.log('pppppppppppppppppppp', e)
    const button = document.getElementById('download-app')
    console.log(button)
    let deferredPrompt
    e.preventDefault()
    deferredPrompt = e
    button.addEventListener(
      'click',
      (e) => {
        console.log('hey')
        deferredPrompt && deferredPrompt.prompt()
        deferredPrompt &&
          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt')
            } else {
              console.log('User dismissed the A2HS prompt')
            }
            deferredPrompt = null
          })
      },
      false
    )
  }

  React.useEffect(() => {
    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler)
    //   return () => {
    //     window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
    // };
  }, [beforeInstallPromptHandler])

  const [themeCheck, setthemeCheck] = useState(
    sessionStorage.getItem('theme') === 'light' ? false : true
  )
  const [down, setdown] = useState(false)
  // const [notificationCount, setnotificationCount] = useState(
  //   sessionStorage.getItem('notList')
  //     ? JSON.parse(sessionStorage.getItem('notList')).length
  //     : 0
  // )
  const [notList, setnotList] = useState(
    sessionStorage.getItem('notList')
      ? JSON.parse(sessionStorage.getItem('notList'))
      : []
  )
  const [langDropdown, setlangDropdown] = useState(false)
  const [gear, setgear] = useState(false)
  const history = useHistory()
  const handleDownload = (e) => {
    e.preventDefault()
    setdown(!down)
  }
  const updatetheme = () => {
    if (themeCheck) {
      sessionStorage.setItem('theme', 'light')
    } else {
      sessionStorage.setItem('theme', 'dark')
    }
    setthemeCheck(!themeCheck)
    window.location.reload()
  }
  const setnot = (event) => {
    notList.push(event.detail.data)
    sessionStorage.setItem('notList', JSON.stringify(notList))
    setnotList(notList)
    // setnotificationCount(notList.length)
  }
  window.addEventListener('newnot', setnot)

  const editprofile = (value) => {
    const url = `/user/${value}`
    history.push(url)
  }

  const logout2 = () => {
    sessionStorage.setItem('theme', 'light')
    window.location.reload()
  }
  useEffect(() => {
    down ? props.setSection('download') : props.setSection('undownload')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [down])

  const handleLangDropdown = () => setlangDropdown(!langDropdown)
  const handleGear = () => setgear(!gear)
  const DropdownLang = () => {
    return (
      <Modal
        isOpen={langDropdown}
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
    <div className="d-flex">
      <div style={{ marginTop: '8px', marginRight: '10px' }}>
        <input
          style={{ width: '105px', fontSize: '10px', marginRight: '-24px' }}
          type="button"
          id="download-app"
          value="Download App"
        />
        <Download
          style={{ paddingRight: '5px' }}
          size="18"
          className="ml-50"
          stroke={colortext}
        />
      </div>
      {window.screen.width > 500 && <DropdownLang />}

      {window.screen.width > 500 && (
        <div
          className={'navbar-brand'}
          data-badge=""
          style={{
            cursor: 'pointer'
          }}
        >
          <Dropdown isOpen={gear} toggle={handleGear} data-tour="gear">
            <DropdownToggle tag="div">
              <Settings size="25" color={colortext} style={{ margin: '0px' }} />
            </DropdownToggle>
            <DropdownMenu
              right
              style={{
                background: Dark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(5px)'
              }}
            >
              {/* <DropdownItem
                className="w-100"
                // tag={'button'}
                // id='download-app4'
                style={{
                  color: colortext,
                  fontSize: '0.95rem',
                  fontWeight: '500'
                }}
                //onClick={e=>{console.log(e)}}
              >
                Download App
                <Download size="15" className="ml-50" stroke={colortext} />
              </DropdownItem> */}
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
                {themeCheck ? (
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
                href="/#/user/feed"
              >
                Contact Us
              </DropdownItem>
              {/* <DropdownItem
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
              </DropdownItem> */}
            </DropdownMenu>
          </Dropdown>
        </div>
      )}
      {!user1 ? (
        window.screen.width <= 500 ? (
          <div className="button__div">
            <ResetMob
              label={'SIGNUP'}
              handleClick={() => {
                props.toggleLoginModal('SignUp')
              }}
            />
            <SubmitMob
              label={'LOGIN'}
              handleClick={() => {
                props.toggleLoginModal('SignIn')
              }}
            />
          </div>
        ) : (
          <>
            <Reset
              label={'SIGNUP'}
              handleClick={() => {
                props.toggleLoginModal('SignUp')
              }}
            />
            <Submit
              label={'LOGIN'}
              handleClick={() => {
                props.toggleLoginModal('SignIn')
              }}
            />
          </>
        )
      ) : (
        window.screen.width > 500 && (
          <UncontrolledDropdown className="dropdown-user nav-item">
            <DropdownToggle
              tag="div"
              className="dropdown-user-link d-flex justify mt-1"
            >
              <div className="">
                <span
                  className="user-name text-bold-600"
                  style={{ fontSize: '1.14rem', marginRight: '.5rem' }}
                >
                  Hi, {props.userName}
                </span>
              </div>
            </DropdownToggle>
            <UserDropdown
              {...props}
              editMyProfile={editprofile}
              themeCheck={themeCheck}
              updateTheme={updatetheme}
              logout={logout2}
            />
          </UncontrolledDropdown>
        )
      )}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: (state) => dispatch(changeLanguage(state)),
    setSection: (state) => dispatch(setSection(state))
  }
}
export default connect(null, mapDispatchToProps)(NavbarUser)
