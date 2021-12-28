import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { IntlProviderWrapper } from 'utility/context/Internationalization'
import { Layout } from 'utility/context/Layout'
import * as serviceWorker from 'serviceWorker'
import 'react-toastify/dist/ReactToastify.css'
import { store } from 'redux/storeConfig/store'
import Spinner from 'common/Fallback-spinner'
import 'index.scss'
// import configureAxios from 'config/AxiosConfig.js'

import reportWebVitals from 'reportWebVitals'
import ReactGA from 'react-ga'
ReactGA.initialize('G-41BKL5ZTN4')
const LazyApp = lazy(() => import('App'))

// configureDatabase()
const renderReactDom = () => {
  // configureAxios()
  ReactDOM.render(
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <Layout>
          <IntlProviderWrapper>
            <LazyApp />
          </IntlProviderWrapper>
        </Layout>
      </Suspense>
    </Provider>,
    document.getElementById('root')
  )
  reportWebVitals()
}

if (window.cordova) {
  document.addEventListener(
    'deviceready',
    () => {
      renderReactDom()
    },
    false
  )
} else {
  renderReactDom()
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
