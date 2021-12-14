import React, { useState } from 'react'
import {
  Collapse,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  Input,
  TabPane,
  Spinner
} from 'reactstrap'
import classnames from 'classnames'
import { ChevronDown } from 'react-feather'

const AssetAccordion = (props) => {
  const [collapseID, setcollapseID] = useState('')
  const assets = JSON.parse(sessionStorage.getItem('logInUserData'))?.assets
  const liabilities = JSON.parse(sessionStorage.getItem('logInUserData'))?.liabilities
  const [status, setstatus] = useState('Closed')
  const [searchresult,setsearchresult] = useState([]);
  const [searchtext,setsearchtext]=useState()
  const { collapseItems, colorOption } = props

  const toggleCollapse = (collapseIDnew) => {
    setcollapseID(collapseID !== collapseIDnew ? collapseIDnew : '')
  }

  const onEntered = (id) => {
    if (id === collapseID) setstatus('Opened')
  }
  const onEntering = (id) => {
    if (id === collapseID) setstatus('Opening')
  }

  const onExited = (id) => {
    if (id === collapseID) setstatus('Closed')
  }
  const onExiting = (id) => {
    if (id === collapseID) setstatus('Closing')
  }
  const formatme = (val) => {
    const title = colorOption?.[val] ? colorOption[val] : val
    return title
  }

  let  renderitem = searchtext?.length > 0 ? searchresult: collapseItems;
  const accordionMarginItems =
  renderitem.length > 0 ? (
    renderitem.map((collapseItem) => {
        return (
          <div className="collapse-margin" key={collapseItem.id}>
            <Card
              onClick={() => toggleCollapse(collapseItem.id)}
              className={classnames({
                'collapse-collapsed':
                  status === 'Closed' && collapseID === collapseItem.id,
                'collapse-shown':
                  status === 'Opened' && collapseID === collapseItem.id,
                closing: status === 'Closing' && collapseID === collapseItem.id,
                opening: status === 'Opening' && collapseID === collapseItem.id
              })}
            >
              <CardHeader>
                <CardTitle className="lead collapse-title collapsed">
                  {formatme(collapseItem.title)}
                </CardTitle>
                <ChevronDown size={15} className="collapse-icon" />
              </CardHeader>
              <Collapse
                isOpen={collapseItem.id === collapseID}
                onEntering={() => onEntering(collapseItem.id)}
                onEntered={() => onEntered(collapseItem.id)}
                onExiting={() => onExiting(collapseItem.id)}
                onExited={() => onExited(collapseItem.id)}
              >
                <CardBody>{collapseItem.content}</CardBody>
              </Collapse>
            </Card>
          </div>
        )
      })
    ) : props.isLoading ? (
      <div className="d-flex justify-content-center">
        <Spinner color="warning" size="lg" />
      </div>
    ) : (
      <span style={{ fontSize: '12px', marginTop: '-10px' }}>
        No Asset Found
      </span>
    )

    
  const search = (value) => {
    setsearchtext(value);
    const result = collapseItems.filter(item => {
  const ser2 = props.assetShow ? liabilities[item.id -1]?.liabilityDetails : assets[item.id -1]?.assetDetails

      const search2 = ser2.filter(i=>{
        let	startsWithCondition =
							i.val.toLowerCase().startsWith(value.toLowerCase()) 

          let	includesCondition =
							i.val.toLowerCase().includes(value.toLowerCase()) 

					if (startsWithCondition || includesCondition) { 
            return true
          } 
      })
					let	startsWithCondition =
							item.title.toLowerCase().startsWith(value.toLowerCase()) 

          let	includesCondition =
							item.title.toLowerCase().includes(value.toLowerCase()) 

					if (startsWithCondition || includesCondition || search2.length > 0) { 
            return true
          } 


    })
    setsearchresult(result);
  }

  return (
    <React.Fragment>
      <Card
        style={{
          paddingBottom: '1.5rem',
          paddingRight: '0.5rem',
          marginBottom: props.page === 'portfolio' ? '2.2rem' : '1rem'
        }}
      >
        <CardHeader className="d-flex ">
          <CardTitle className="actions-left d-flex">{props.heading}</CardTitle>
          <CardTitle className="actions-right d-flex filter-section">
            <Input
              type="text"
              style={{
                height: '75%',
                borderRadius: '5rem',
                fontSize: '1rem'
              }}
              onChange={(e) => search(e.target.value)}
              placeholder="Find"
              className="placeholder"
            />
          </CardTitle>
        </CardHeader>
        <CardBody
          className="card_body"
          style={{
            maxHeight:
              props.page === 'portfolio' ? '260px' : ' calc(100vh - 165px)'
          }}
        >
          <TabContent activeTab={'1'}>
            <TabPane tabId="1">
              <div className="vx-collapse">{accordionMarginItems}</div>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}
export default AssetAccordion
export const LiabilityKeys = [
  'Lendor Details',
  'Card Details *',
  'Account Details',
  'EMI Details *',
  'Loan Details*',
  'Scheme Details',
  'Payments Details *',
  'Amount',
  'Amount *',
  'Liability Name',
  'Scheme Details *',
  'Remarks'
]

export const AssetKeys = [
  'Bank Name',
  'Debtor Name',
  'Details',
  'Currency Details',
  'Depositor',
  'Depositor *',
  'Account Details',
  'Account Details *',
  'Bank Name *',
  'Debtor Name *',
  'Investment Firm *',
  'Policy Number *',
  'Amount *',
  'Amount / Quantity',
  'Policy Number',
  'Property Type',
  'Property Area',
  'Retirals Details *',
  'Amount',
  'Remarks'
]
