import React from 'react'
import ToU from './../../assets/pdf/Last Arzi - Terms of use.pdf'
import Coockies from './../../assets/pdf/Last Arzi - Cookies.pdf'
import Copyright from './../../assets/pdf/Last Arzi - Copyright.pdf'
import PPol from './../../assets/pdf/Last Arzi - Privacy policy.pdf'
import { Facebook, Linkedin, Twitter, Instagram, Youtube } from 'react-feather'
import { Logo } from 'export'

export const LandingFooter = () => {
  const logos = [
    {
      type: 'facebook',
      icon: <Facebook />,
      link: 'https://www.facebook.com/lastarzi'
    },
    {
      type: 'linkedin',
      icon: <Linkedin />,
      link: '#'
    },
    {
      type: 'instagram',
      icon: <Instagram />,
      link: 'https://www.instagram.com/last_arzi/'
    },
    {
      type: 'twitter',
      icon: <Twitter />,
      link: '#'
    },
    {
      type: 'youtube',
      icon: <Youtube />,
      link: '#'
    }
  ]

  const content = [
    {
      pdf: Coockies,
      label: 'About us'
    },
    //contact us in about us and in contact 2 options - feedback or querry
    {
      pdf: PPol,
      label: 'Privacy policy'
    },
    {
      pdf: ToU,
      label: 'Terms of use'
    },
    {
      pdf: Copyright,
      label: 'Copyright'
    },
    {
      pdf: Coockies,
      label: 'Advertise with us'
    }
  ]

  return (
    <>
      <div className="flex-grow-1"></div>

      <section className="footer_wrap pb-0" id="footer-wrap">
        <div className="container">
          <div className="row">
            <div
              //   data-aos="fade-right"
              className="col-md-12 mb-4"
            >
              <div className="o-hidden text-center">
                <h2 className="font-weight-bold text-30">
                  <img
                    alt="img"
                    src={Logo}
                    className="d-inline"
                    style={{ width: 50 }}
                  />{' '}
                  Last Arzi
                </h2>
                <h6
                  className="text-18 position-relative"
                  style={{ color: ' #154197' }}
                >
                  <strong>The Privacy Company</strong>
                </h6>
                <h6
                  className="text-16 position-relative"
                  style={{ color: '#159175' }}
                >
                  Fully Encrypted Content Services
                </h6>
                <p className="text-light mb-0">
                  © 2022 Last Arzi. All Right Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: '#2B2D39', padding: 15 }}>
          <div className="container">
            <p className="text-center footer-link">
              {content.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                )
              })}
            </p>
            <p className="text-center social-icon">
              {logos.map((item) => {
                return (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item}
                    className="eva d-inline-flex s-icon"
                  >
                    {item.icon}
                  </a>
                )
              })}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
