import React from "react"
import { Row, Col } from "reactstrap"
import StatisticsCard from "./StatisticsCard"
import { Users, CreditCard, ShoppingCart, Package } from "react-feather"
import { subscribersGained, subscribersGainedSeries,
  revenueGenerated,
  revenueGeneratedSeries, 
  quaterlySales,
  quaterlySalesSeries,
  ordersReceived,
  ordersReceivedSeries
} from "./StatisticsData"

import NewUserGraph from "./NewUserGraph"
import GoalOverview from "./GoalOverview"
import BrowserStats from "./BrowserStatistics"
import UserRetention from "./UserRetention"
import SessionByDevice from "./SessionByDevice"
import UserRetention2 from "./UserRetention2"
import Axios from "axios"
//import ChatWidget from "../../../components/@vuexy/chatWidget/ChatWidget"

//import "../../../assets/scss/plugins/charts/apex-charts.scss"

let $primary = "#7367F0",
  $success = "#28C76F",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $stroke_color = "#b9c3cd",
  $label_color = "#e7eef7"

const AdminDashboard =()=> {
  const [usercount, setusercount] = React.useState(0);

  React.useEffect(()=>{
    Axios.get('/backendapi/admin/usercount',
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
      }
    }).then(res => {
      console.log('resssssssssss', res.data);
      setusercount(res.data);

    })
  },[])
    return (
      <React.Fragment>
        <Row className="match-height">
          <Col lg="3" md="6" sm="6">
          <StatisticsCard
        icon={<Users className="primary" size={22} />}
        stat={usercount}
        statTitle="Total Users"
        options={subscribersGained}
        series={subscribersGainedSeries}
        type="area"
      />
          </Col>
          <Col lg="3" md="6" sm="6">
          <StatisticsCard
        icon={<CreditCard className="success" size={22} />}
        iconBg="success"
        stat={usercount}
        statTitle="Basic Users"
        options={revenueGenerated}
        series={revenueGeneratedSeries}
        type="area"
      />
          </Col>
          <Col lg="3" md="6" sm="6">
          <StatisticsCard
        icon={<ShoppingCart className="danger" size={22} />}
        iconBg="danger"
        stat={0}
        statTitle="Premium Users"
        options={quaterlySales}
        series={quaterlySalesSeries}
        type="area"
      />
          </Col>
          <Col lg="3" md="6" sm="6">
          <StatisticsCard
        icon={<Package className="warning" size={22} />}
        iconBg="warning"
        stat={0}
        statTitle="Elite Users"
        options={ordersReceived}
        series={ordersReceivedSeries}
        type="area"
      />
          </Col>
        </Row>
        <Row className="match-height">
          <Col lg="8" md="6" sm="12">
            <NewUserGraph
              primary={$primary}
              dangerLight={$danger_light}
              strokeColor={$stroke_color}
              labelColor={$label_color}
            />
          </Col>
          <Col lg="4" md="6" sm="12">
            <GoalOverview strokeColor={$stroke_color} success={$success} />
          </Col>
        </Row>
        <Row className="match-height">
          <Col lg="4" md="6" sm="12">
            <BrowserStats />
          </Col>
          <Col lg="8" md="6" sm="12">
            <UserRetention
              strokeColor={$stroke_color}
              primary={$primary}
              danger={$danger}
              labelColor={$label_color}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="12">
            <SessionByDevice
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
            />
          </Col>
          {/* <Col lg="4" md="12" className="text-center align-middle">
            <ChatWidget></ChatWidget>
          </Col> */}
          <Col lg="4" md="12" className="text-center align-middle">
            <UserRetention2
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
            />
          </Col>
        </Row>
      </React.Fragment>
    )
  }

export default AdminDashboard
