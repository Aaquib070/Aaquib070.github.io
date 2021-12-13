import React from 'react'
import { ToastContainer } from 'react-toastify'

const Toaster = () => {
  return <ToastContainer position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  theme={sessionStorage.getItem('theme') === 'dark' ? 'dark' : 'light'}
  draggable
  pauseOnHover />
}
export default Toaster
