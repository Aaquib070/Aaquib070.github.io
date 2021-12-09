import React, { useState } from 'react'
import Router from 'routes/Router'
import 'components/@vuexy/rippleButton/RippleButton'
import 'App.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import axios from 'axios'
import PopUp from 'utility/Popup'

const App = () => {
  const [manageFailure, setManageFailure] = useState(false)
  // axios.defaults.baseURL = 'http://localhost:5000'
  const backendUrl = process.env.REACT_APP_BACKEND_URL
  axios.defaults.baseURL = backendUrl
  axios.interceptors.response.use(
    (res) => res,
    (err) => {
      const status = err?.response?.status
      return status === 401 || status === 403
        ? setManageFailure(true)
        : Promise.reject(err)
    }
  )
  const handleConfirm = () => {
    sessionStorage.removeItem('logInUserData')
    setManageFailure(false)
    window.location.href = '/#/#/home/session'
    window.location.reload()
  }
  const msg = 'Your Session has expired, kindly login!!'
  return (
    <>
      {manageFailure && sessionStorage.getItem('logInUserData') && (
        <PopUp
          modalMessage={msg}
          handleConfirm={handleConfirm}
          warning={true}
          isOpen={manageFailure}
        />
      )}
      <Router />
    </>
  )
}

export default App
