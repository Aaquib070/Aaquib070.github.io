import React, { useState } from 'react'
import Router from 'routes/Router'
import 'common/RippleButton'
import {Button} from 'reactstrap';
import 'App.css'
//import './views/Caller/Caller.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import axios from 'axios'
import * as serviceWorker from "./serviceWorker";
import PopUp from 'utility/Popup'
import Tour from 'views/Tour/AppTour';

const App = () => {
  const [manageFailure, setManageFailure] = useState(false)
  const [waitingWorker, setwaitingWorker] = useState({})
  const [newVersionAvailable, setnewVersionAvailable] = useState(false)
  const backendUrl = process.env.REACT_APP_BACKEND_URL
  //axios.defaults.baseURL = backendUrl
  axios.interceptors.response.use(
    (res) => res,
    (err) => {
      const status = err?.response?.status
      return status === 401 || status === 403
        ? setManageFailure(true)
        : Promise.reject(err)
    }
  )

  const UpdateAvailable = () => {

    return (
      <div className='bodyMe' style={{display: 'block'}}>
      <div className="updateAvailableContainer">
        <div className="updateAvailable ">
          <div><h5 style={{color: 'red'}}>New Update Avaialable!</h5></div>
          <div className="incomingCallButtons flex">
          <Button.Ripple
                    block
                    color='warning'
                    className="btn-block"
                    onClick={()=>{updateServiceWorker()}}
                  >
                    Update Now
                  </Button.Ripple>
          </div>
        </div>
      </div>
      </div>
    )
  }

  const onServiceWorkerUpdate = registration => {
    //toast.sucess('Heyyyyyyyy');
    console.log('heyyyyyyyyyyyyyyyyyyyyyyyyyy')
    setwaitingWorker(registration && registration.waiting)
    setnewVersionAvailable(true)
  }

  const updateServiceWorker = () => {
    waitingWorker && waitingWorker.postMessage({ type: 'SKIP_WAITING' })
    setnewVersionAvailable(false);
    window.location.reload();
  }


  React.useEffect(() => {

    if (process.env.NODE_ENV === 'production') {
      serviceWorker.register({ onUpdate: onServiceWorkerUpdate });
    }

    if (newVersionAvailable) {
      updateServiceWorker()
    }

  }, [])


  // React.useEffect(() => {

  //   if (newVersionAvailable) {
      
  //   }
  // }, [newVersionAvailable])

  const handleConfirm = () => {
    sessionStorage.removeItem('logInUserData')
    setManageFailure(false)
    window.location.href = '/#/#/home/session'
    window.location.reload()
  }
  const msg = 'Your Session has expired, kindly login!!'
  return (
    <>
      {/* <Tour /> */}
      
      {newVersionAvailable && <UpdateAvailable />}
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
