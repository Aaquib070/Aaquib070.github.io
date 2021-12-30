
import React, { useState, useEffect } from 'react'
import { Modal, ModalBody, Button } from 'reactstrap'
import { Clock } from 'react-feather';



const SessionWatcher = () => {
    const [showLogout, setshowLogout] = useState(false);

    const toggleLoginModal = () => {
        setshowLogout(!showLogout);
    }

    const logOut = () => {
        if (!showLogout && sessionStorage.getItem('logInUserData') !== null) {
            setshowLogout(true);
            sessionStorage.clear();
        }
    }

    const timeOuts = [];


    const setTime = () => {
        timeOuts.forEach(e => {
            clearTimeout(e);
        })
        const timeout = setTimeout(logOut, 300000);
        timeOuts.push(timeout);
    }

    React.useEffect(() => {
        window.addEventListener('mousemove', setTime);
        window.addEventListener('scroll', setTime);
        window.addEventListener('keydown', setTime);

    }, [])

    return (
        <>
            <Modal
                isOpen={showLogout}
                toggle={toggleLoginModal}
                centered={true}
            >


                <ModalBody>
                    <div style={{ height: '300px', textAlign: 'center' }}>

                        <Clock color="var(--warning)" size="70" style={{ marginTop: '10px' }} />
                        {/* <img src={Timer} style={{height: '170px'}} /> */}


                        <h1 style={{ marginTop: '-40px' }}>
                            Hello?
                        </h1>
                        <br />
                        <h1 style={{ marginTop: '10px' }}>
                            Anybody There?
                        </h1>
                        <p style={{ marginTop: '120px' }}>
                            Your session has timed out
                        </p>

                        <Button.Ripple
                            type="submit"
                            color="warning"

                        onClick={(e) => window.location.reload()}
                        >
                            Start Over
                        </Button.Ripple>

                        {/* <div className="loginModalDiv_head">
                          Haven`t registered ...
                          <span style={{ color: 'var(--warning)' }}>
                            SignUp!!
                          </span>
                        </div> */}

                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}


export default SessionWatcher;