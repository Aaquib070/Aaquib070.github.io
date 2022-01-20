/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { LandingFooter } from './LandingFooter'
import { ContactForm } from './ContactForm'
import { Plans } from './Plans'
import { WhyUs } from './WhyUs'
import { Features } from './Features'
import { LandingHeader } from './LandingHeader'
import { IntroBanner } from './IntroBanner' 
import { connect } from 'react-redux'
import 'assets/scss/pages/authentication.scss' 
const LandingPage = (props) => {
  const { download } = props 

  useEffect(() => {
    download &&
      document
        .getElementById('DownloadOptions')
        .scrollIntoView({ behavior: 'smooth' })
  }, [download])

  return (
    <div className="app-landing-wrap landing_wrap">
      <div id="landing_wrap" className="landing-gradient-meridian">
        <LandingHeader />
        <IntroBanner />
        <Features />
        <WhyUs />
        <Plans />
        <ContactForm />
        <LandingFooter />
      </div> 
    </div>
  )
}
const mapStateToProps = (state) => {
  const user = state.auth
  const { customizer } = state?.customizer
  return {
    messages: customizer?.language?.Dashboard,
    sender: customizer?.language?.Sender,
    user,
    plan: user?.login?.plan,
    why: user?.login?.why,
    download: user?.login?.download,
    feature: user?.login?.feature
  }
}
export default connect(mapStateToProps)(LandingPage)
