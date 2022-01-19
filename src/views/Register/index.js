import React, { useState } from 'react'
import VerifyMobile from './VerifyMobile'
import RegisterationForm from './RegisterationForm'

const confirmmsg = () => (
  <p className="px-2 auth-title mb-0" style={{ color: 'green' }}>
    A confirmation email has been sent to your email. Please confirm your email.
    If not confirmed already.
  </p>
)
const errormsg = (err) => (
  <p className="px-2 auth-title mb-0" style={{ color: 'red' }}>
    {err}
  </p>
)
const Register = ({ isLoading, setisLoading, loginClick }) => {
  const [errMsg, seterrMsg] = useState('')
  const [successRegister, setsuccessRegister] = useState()
  const [mobile, setmobile] = useState('')
  // const [validmobile, setvalidMobile] = useState(false)

  return (
    <>
      {errMsg && errormsg(errMsg)}
      {successRegister && confirmmsg()}
      {mobile ? (
        <RegisterationForm
          isLoading={isLoading}
          setisLoading={setisLoading}
          seterrMsg={seterrMsg}
          mobile={mobile}
          setsuccessRegister={setsuccessRegister}
        />
      ) : (
        <VerifyMobile
          mobile={mobile}
          setmobile={setmobile}
          loginClick={loginClick}
          // setvalidMobile={setvalidMobile}
        />
      )}
    </>
  )
}
export default Register
