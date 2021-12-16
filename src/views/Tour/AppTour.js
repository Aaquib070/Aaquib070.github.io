import React from "react"
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button
} from "reactstrap"
import Joyride, { STATUS } from "react-joyride"
import { formLabelClasses } from "@mui/material";
//import "../../assets/scss/plugins/extensions/react-tour.scss"


const AppTour = () => {

  const [isTouropen, setisTouropen] = React.useState(true);
  

  const startTour = () => {
    setisTouropen(true)
  }

    const steps = [
      // {
      //   target: "#toggle-nav",
      //   content: "Click here to fix sidebar",
      //   disableBeacon: true
      // },
      
      {
        target: ".brand-logo",
        content: "Click here to go to home page",
        disableBeacon: true
      },
      {
        target: ".d-flex",
        content: "Click here to go to settings and user propfile",
        disableBeacon: true
      },
      {
        target: "#back-image-0",
        content: "Add All you assets and liabilities ",
        disableBeacon: true
      },
      {
        target: "#back-image-1",
        content: "Click here for user options",
        disableBeacon: true
      },
      {
        target: "#back-image-2",
        content: "Click here for user options",
        disableBeacon: true
      },
      {
        target: "#back-image-3",
        content: "Click here for user options",
        disableBeacon: true
      },
      {
        target: "#back-image-4",
        content: "Click here for user options",
        disableBeacon: true
      },
      {
        target: "#back-image-5",
        content: "Click here for user options",
        disableBeacon: true
      }






      // ,
      // {
      //   target: "#mob-menu-0",
      //   content: "This is Asset",
      //   disableBeacon: true
      // }
      // ,
      // {
      //   target: "#mob-menu-1",
      //   content: "This is Liability",
      //   disableBeacon: true
      // }
      // ,
      // {
      //   target: "#mob-menu-2",
      //   content: "this is Password vault",
      //   disableBeacon: true
      // }
      // ,
      // {
      //   target: "#mob-menu-3",
      //   content: "Click here for user options",
      //   disableBeacon: true
      // }
      // ,
      // {
      //   target: "#mob-menu-4",
      //   content: "Click here for user options",
      //   disableBeacon: true
      // }
      // ,
      // {
      //   target: "#mob-menu-5",
      //   content: "Click here for user options",
      //   disableBeacon: true
      // }

    ]

    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Joyride
             // disableOverlay
              steps={steps}
              run={isTouropen}
              continuous={true}
              showSkipButton={true}
              disableScrolling
              floaterProps={{ disableAnimation: true }}
              styles={{
                options: {
                  arrowColor: '#e3ffeb',
                  backgroundColor: '#e3ffeb',
                 overlayColor: 'rgba(79, 26, 0, 0.4)',
                  primaryColor: '#000',
                  textColor: '#004a14',
                  //spotlightShadow: '20px',
                  width: 500,
                  zIndex: 10000,
                  tooltipContainer: {
                    borderRadius: '20px'
                  }
                }
              }}
              callback={data => {
                if ([STATUS.FINISHED, STATUS.SKIPPED].includes(data.status)) {
                  setisTouropen(formLabelClasses)
                }
              }}
            />
            {/* <Card>
              <CardHeader>
                <CardTitle>Tour</CardTitle>
              </CardHeader>
              <CardBody>
                <Button color="primary" outline onClick={startTour}>
                  Start Tour
                </Button>
              </CardBody>
            </Card> */}
          </Col>
        </Row>
      </React.Fragment>
    )
  }

export default AppTour
