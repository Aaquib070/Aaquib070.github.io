import React, { useEffect, useState } from 'react'
import { Row, Col } from 'reactstrap'
import Banner from './Banner'
import {
  Assets,
  Diary,
  Documents,
  Liability,
  Nominee,
  Portfolio,
  Sender,
  Spend,
  Vault
} from 'export'
import 'swiper/css/swiper.css'
import {
  Users,
  Briefcase,
  Share,
  FileMinus,
  Command,
  DollarSign,
  Lock,
  Archive,
  FileText
} from 'react-feather'
import 'assets/scss/plugins/extensions/swiper.scss'

import 'assets/scss/plugins/charts/apex-charts.scss'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//import 'assets/scss/plugins/extensions/toastr.scss'
import themeConfig from 'configs/themeConfig'
import DashboardCards from './DashboardCards'

import { connect } from 'react-redux'
import { changeLanguage } from 'redux/actions/customizer'

const mobileColor = '#ff7d00'
const desktopColor = themeConfig.theme === 'dark' ? '#757488' : 'white'

const LADashboard = (props) => {
  const [width, setwidth] = useState(window.innerWidth)
  const { messages } = props
  const columns = [
    {
      label: messages?.spends ? messages?.spends : 'Daily Spends',
      icon: <FileMinus color={mobileColor} className="danger" size="auto" />,
      path: '/spends'
    },
    {
      label: messages?.vault ? messages?.vault : 'Password Vault',
      icon: <Lock color={mobileColor} className="warning" size="auto" />,
      path: '/vault/password'
    },
    {
      label: messages?.diary ? messages?.diary : 'Secret Diary',
      icon: <FileText color={mobileColor} className="success" size="auto" />,
      path: '/diary'
    },
    {
      label: messages?.asset ? messages?.asset : 'Assets',
      icon: <DollarSign color={mobileColor} className="primary" size="auto" />,
      path: '/assets/add'
    },
    {
      label: messages?.liability ? messages?.liability : 'Liabilties',
      icon: <Command color={mobileColor} className="danger" size="auto" />,
      path: '/liability/add'
    },
    {
      label: messages?.nominees ? messages?.nominees : 'Nominees',
      icon: <Users color={mobileColor} className="warning" size="auto" />,
      path: '/nominee/list'
    },
    {
      label: messages?.documents ? messages?.documents : 'Documents',
      icon: <Archive color={mobileColor} className="primary" size="auto" />,
      path: '/vault/document'
    },
    {
      label: messages?.portfolio ? messages?.portfolio : 'Portfolio',
      icon: <Briefcase color={mobileColor} className="success" size="auto" />,
      path: '/portfolio'
    },
    {
      label: props?.sender?.heading ? props?.sender?.heading : 'Postman',
      icon: <Share color={mobileColor} className="success" size="auto" />,
      path: '/contactUs'
    }
  ]
  const dashboard = [
    {
      label: messages?.asset ? messages?.asset : 'Assets',
      description: messages?.assetText
        ? messages?.assetText
        : 'Bank Holdings, FD, RD, Insurance, Properties etc.',
      background: Assets,
      icon: <DollarSign color={desktopColor} className="primary" size="auto" />,
      path: '/assets/add'
    },
    {
      label: messages?.liability ? messages?.liability : 'Liabilties',
      description: messages?.liabilityText
        ? messages?.liabilityText
        : 'Loan, EMI, Cash borrowed etc with collateral details',
      background: Liability,
      icon: <Command color={desktopColor} className="danger" size="auto" />,
      path: '/liability/add'
    },
    {
      label: messages?.vault ? messages?.vault : 'Password Vault',
      description: messages?.vaultText
        ? messages?.vaultText
        : 'Save your passwords like cards, credentials in vault.',
      background: Vault,
      icon: <Lock color={desktopColor} className="warning" size="auto" />,
      path: '/vault/password'
    },
    {
      label: messages?.spends ? messages?.spends : 'Daily Spends',
      description: messages?.spendsText
        ? messages?.spendsText
        : 'Log your thoughts and analyze your daily spends.',
      background: Spend,
      icon: <FileMinus color={desktopColor} className="danger" size="auto" />,
      path: '/spends'
    },
    {
      label: messages?.nominees ? messages?.nominees : 'Nominees',
      description: messages?.nomineesText
        ? messages?.nomineesText
        : 'Manage your nominees for your assets & liabities',
      background: Nominee,
      icon: <Users color={desktopColor} className="warning" size="auto" />,
      path: '/nominee/list'
    },
    {
      label: messages?.documents ? messages?.documents : 'Documents',
      description: messages?.documentsText
        ? messages?.documentsText
        : 'Upload you documents, pics in your own secret vault',
      background: Documents,
      icon: <Archive color={desktopColor} className="primary" size="auto" />,
      path: '/vault/document'
    },
    {
      label: messages?.diary ? messages?.diary : 'Secret Diary',
      description: messages?.diaryText
        ? messages?.diaryText
        : 'Log your thoughts and secrets in a personal space',
      background: Diary,
      icon: <FileText color={desktopColor} className="success" size="auto" />,
      path: '/diary'
    },
    {
      label: messages?.portfolio ? messages?.portfolio : 'Portfolio',
      description: messages?.portfolioText
        ? messages?.portfolioText
        : 'View & analyze portfolio of saved assets and liabilties',
      background: Portfolio,
      icon: <Briefcase color={desktopColor} className="success" size="auto" />,
      path: '/portfolio'
    },
    {
      label: props?.sender?.heading ? props?.sender?.heading : 'Postman',
      description: props?.sender?.subHeading
        ? props?.sender?.subHeading
        : 'Save, schedule, send text, audio, video messages',
      background: Sender,
      icon: <Share color={desktopColor} className="success" size="auto" />,
      path: '/contactUs'
    }
  ]
  useEffect(() => {
    // props.changeLanguage('english')
    if (sessionStorage.getItem('logInGreeting')) {
      toast.success('Good to see you back !!!!!!!!')
      //toast.error('Abhi tak mare nhi');
      sessionStorage.removeItem('logInGreeting')
    }
    window.addEventListener('resize', updateWidthAndHeight)
    return () => window.removeEventListener('resize', updateWidthAndHeight)
  }, [])
  const updateWidthAndHeight = () => {
    setwidth(window.innerWidth)
  }

  const calcWidth = () => {
    if (width > 1100) {
      return '4'
    } else if (width > 900 && width <= 1100) {
      return '6'
    } else {
      return '12'
    }
  }

  const { loc } = props
  return (
    <div className="mobile_content">
      {!loc && (
        <>
          <div
            style={{
              width: '100%',
              marginLeft: width <= 500 ? '0px' : '-2px'
            }}
          >
            <Banner />
          </div>
        </>
      )}
      {width <= 500 && (
        <div className="menu_content mt-1">
          {columns.map((item, index) => {
            const id = `mob-menu-${index}`
            return (
              <div
                className="menu_options"
                id={id}
                key={index}
                onClick={() => {
                  props.history.push(item.path)
                }}
              >
                <div className="menu_icon">{item.icon}</div>
                <div className="menu_label">{item.label}</div>
              </div>
            )
          })}
        </div>
      )}
      {width > 500 && (
        <Row className="mt-2 px-2">
          {dashboard.map((item, index) => {
            return (
              <Col md={calcWidth()} sm="12" key={index}>
                <div
                  onClick={() => {
                    props.history.push(item.path)
                  }}
                  className="pointerCursor"
                >
                  <DashboardCards
                    size={width}
                    icon={item.icon}
                    background={item.background}
                    iconBg={desktopColor}
                    stat={item.label}
                    statTitle={item.description}
                    hideChart={true}
                    index={index}
                  />
                </div>
              </Col>
            )
          })}
        </Row>
      )}
    </div>
  )
}
const mapStateToProps = (state) => {
  const { customizer } = state?.customizer
  return {
    messages: customizer?.language?.Dashboard,
    sender: customizer?.language?.Sender
  }
}

export default connect(mapStateToProps, { changeLanguage })(LADashboard)
