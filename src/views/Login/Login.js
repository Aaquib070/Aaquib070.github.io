import React, { useState } from 'react'
import { Input, Form } from 'reactstrap'
import './Login.css'
import 'swiper/css/swiper.css'
import 'assets/scss/plugins/extensions/swiper.scss'
import crypto from 'crypto'
import { Dark } from 'export'
import 'assets/scss/pages/authentication.scss'
import axios from 'axios'
import { decryptdata, encryptdata } from 'utility/context/SecurityTool'
import '../Register/Register.css'
//
//axios.defaults.baseURL = 'http://localhost:5000'

const Register = (props) => {
  const { setloggedIn } = props
  const [password, setpassword] = useState('')
  const [mobileNo, setmobileNo] = useState('')
  const [errorMsg, seterrorMsg] = useState('')
  const [loginText, setloginText] = useState('Sign In')
  const handleChangeUsername = (event) => {
    setmobileNo(event.target.value)
  }

  const handleChangePassword = (event) => {
    setpassword(event.target.value)
  }

  const hashPassword2 = async (password) => {
    const salt = '0e09ca7a4644c68c6c002ed1338bb40b'
    const hash = await crypto
      .pbkdf2Sync(password, salt, 1000, 20, `sha512`)
      .toString(`hex`)
    return hash
  }
  const subscribe = (email) => {
    console.log('###############################start')
    try {
      axios
        .post('/backendapi/subscribe', {
          token: localStorage.getItem('fcmtoken'),
          topic: email
        })
        .then((res) => {})
    } catch (e) {
      console.log('###############################star4', e)
    }
  }
  const handleSubmit = (e) => {
    seterrorMsg('')
    setloginText('Signing In')
    if (mobileNo === '' || password === '') {
      seterrorMsg('Invalid Credentials !')
    } else {
      hashPassword2(password).then((encpassword) => {
        const newPassword = encryptdata(password, true)
        axios
          .post('/backendapi/user/login', {
            user: mobileNo.trim(),
            password: newPassword
          })
          .then((res, err) => {
            if (
              res?.data?.length > 0 &&
              res?.data[0]?.status !== 'emailNotConfirmed'
            ) {
              const resp = res.data[0]
              const secrKey = decryptdata(resp.password, false, password)

              sessionStorage.setItem('secretkey', secrKey)
              resp.name = decryptdata(resp.name)
              //resp.mobile = decryptdata(resp.mobile)
              resp.dob = decryptdata(resp.dob)
              resp.secondarymobile = decryptdata(resp.secondarymobile)
              resp.address = decryptdata(resp.address)

              resp.assets =
                resp.assets.length > 0
                  ? JSON.parse(decryptdata(resp.assets[0]))
                  : []
              resp.liabilities =
                resp.liabilities.length > 0
                  ? JSON.parse(decryptdata(resp.liabilities[0]))
                  : []
              resp.docs = decryptdata(resp.docs)
              seterrorMsg('')
              sessionStorage.setItem('logInUserData', JSON.stringify(resp))
              sessionStorage.setItem('authtoken', res.headers.authtoken)

              sessionStorage.setItem('logInGreeting', true)
              sessionStorage.setItem('theme', resp.theme ? resp.theme : 'light')
              axios.get('/backendapi/dropdowns').then((drop) => {
                console.log(drop)
                if (drop.data?.length > 0) {
                  sessionStorage.setItem(
                    'dropdowns',
                    JSON.stringify(drop.data[0])
                  )
                }

                setloggedIn(true)
              })
              subscribe(resp.email)
            } else if (res?.data[0]?.status === 'emailNotConfirmed') {
              const userkey =
                props.routerProps && props.routerProps.match.params.userkey
              if (res.data[0].status === userkey) {
                const resp = res.data[0]
                seterrorMsg('')
                setloggedIn(true)
                sessionStorage.setItem('logInUserData', JSON.stringify(resp))
                sessionStorage.setItem('logInGreeting', true)
                subscribe(resp.email)
                setloggedIn(true)
                axios
                  .post('/backendapi/update/login', res.data[0], {
                    headers: {
                      Authorization: `Bearer ${sessionStorage.getItem(
                        'authtoken'
                      )}`
                    }
                  })
                  .then((res) => {})
                window.location.reload()
              } else {
                seterrorMsg('Please confirm your email for log in !! ')
                setloginText()
              }
            } else {
              seterrorMsg('Inavlid Credentials')
              setloginText('Sign In')
            }
          })
          .catch((error) => {
            if (error.response && error.response.status === 401) {
              seterrorMsg('Inavlid Credentials')
              setloginText('Sign In')
            } else {
              seterrorMsg('Something went Wrong ! Contact Your admin')
              setloginText('Sign In')
            }
          })
      })
    }
  }

  return (
    <>
      <h2>Welcome !</h2>

      <Form onSubmit={(e) => handleSubmit(e)}>
        {errorMsg && <h5 style={{ color: 'red' }}>{errorMsg}</h5>}
        <div className="form-group">
          <Input
            type="text"
            className="form-control form-control-lg"
            name="user"
            placeholder="Phone or Email"
            onChange={handleChangeUsername}
          />
          {/* <Label className={Dark ? 'dark-label' : 'light-label'}>
              Username
            </Label> */}
        </div>
        <div className="form-group">
          <Input
            className="form-control form-control-lg"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChangePassword}
          />
          {/* <Label className={Dark ? 'dark-label' : 'light-label'}>
              Password
            </Label> */}
        </div>
        <div className="form-group">
          <Input
            className="form-control form-control-lg"
            type="text"
            name="scanner"
            placeholder="Scan the QR code to login"
            // onChange={handleChangePassword}
          />
          {/* <Label className={Dark ? 'dark-label' : 'light-label'}>
              Password
            </Label> */}
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Keep me logged in
              </label>
            </div>
          </div>
          <div className="col-6 text-right">
            <span id="anchor" onClick={props.forgotClick}>
              {' '}
              Forgot password
            </span>
          </div>
        </div>
        <div className="form-group mt-4">
          <button
            disabled={
              password === '' || mobileNo === '' || loginText === 'Signing In'
            }
            onClick={(e) => handleSubmit(e)}
            className="btn btn-lg btn-block btn-warning gradient-btn"
          >
            Log In
          </button>
        </div>
        <div className="from-group">
          <p className="text-center text-light">
            Don&apos;t have account yet?{' '}
            <span id="anchor" onClick={props.createClick}>
              Create Account
            </span>
          </p>
        </div>
      </Form>
    </>
  )
}
export default Register
