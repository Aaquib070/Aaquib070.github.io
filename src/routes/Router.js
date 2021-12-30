import React from 'react'
import { Switch, Redirect, HashRouter } from 'react-router-dom'
import Toaster from 'common/Toaster'
import PrivateRoute from 'routes/RouterConfig'
import {
  Dashboard,
  NomineeList,
  Spends,
  Vault,
  PwdVault as PasswordVault,
  License,
  Diary,
  MailConfirm,
  DocView,
  Portfolio,
  Postman,
  Privacy,
  Terms_C,
  AddLiability,
  UpdateProfile,
  Subscription,
  home,
  PostmanView,
  AddAssets,
  AdminDashboard,
  Caller
} from 'routes/genericImport'

import ReactGA from 'react-ga';

const AppRouter = (props) => {
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  },[props]);
  return (
    // Set the directory path if you are deploying in sub-folder
    <HashRouter basename="/#">
      <Toaster />
      <Switch>
        <PrivateRoute path="/terms_conditions" component={Terms_C} />
        <PrivateRoute path="/license" component={License} />
        <PrivateRoute path="/privacy" component={Privacy} />

        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/nominee/list" component={NomineeList} />
        <PrivateRoute path="/spends" component={Spends} />
        <PrivateRoute path="/assets/add" component={AddAssets} />
        <PrivateRoute path="/vault/document" component={Vault} />
        <PrivateRoute path="/caller" component={Caller} fullLayout/>
        <PrivateRoute path="/vault/password" component={PasswordVault} />
        <PrivateRoute
          path="/docview/:userkey"
          component={DocView}
         fullLayout
        />
        <PrivateRoute
          path="/postmanview/:userkey"
          component={PostmanView}
         fullLayout
        />
        <PrivateRoute
         path="/emailconfirmation/:userkey"
          component={MailConfirm}
          fullLayout
        />
        <PrivateRoute path="/diary" component={Diary} />
        <PrivateRoute path="/diary/:filter" component={Diary} />
        <PrivateRoute
          path="/diary"
          exact
          component={() => <Redirect to="/diary" />}
        />
        <PrivateRoute path="/portfolio" component={Portfolio} />
        <PrivateRoute path="/admin" component={AdminDashboard} />
        <PrivateRoute path="/postman" component={Postman} />
        <PrivateRoute path="/liability/add" component={AddLiability} />
        <PrivateRoute
          exact
          path="/user/profile"
          component={(props) => <UpdateProfile {...props} />}
        />
        <PrivateRoute
          exact
          path="/user/feed"
          component={(props) => <UpdateProfile {...props} />}
        />
        <PrivateRoute
          exact
          path="/user/notify"
          component={(props) => <UpdateProfile {...props} />}
        />
        <PrivateRoute
          exact
          path="/user/upgrade"
          component={(props) => <UpdateProfile {...props} />}
        />
        <PrivateRoute
          path="/pages/subscription"
          component={Subscription}
          fullLayout
        />
        <PrivateRoute path="/home" component={home} />
        <PrivateRoute path="/home/session" component={home} />
        <PrivateRoute path="/" component={home} />
      </Switch>
    </HashRouter>
  )
}

export default AppRouter
