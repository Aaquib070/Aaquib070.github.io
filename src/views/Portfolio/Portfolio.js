/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { ChevronDown } from 'react-feather'
import { Card, CardBody, Row, Col, FormGroup } from 'reactstrap'
import { LiabilityKeys, AssetKeys } from './AssetAccordion'
import Radio from 'common/RadioVuexy'
import DataTable from 'react-data-table-component'
import 'swiper/css/swiper.css'
import { decryptdata } from 'utility/context/SecurityTool'
import { getData } from 'redux/actions/data-list/'
import { connect } from 'react-redux'
import axios from 'axios'
const selectedStyle = {
  rows: {
    selectedHighlighStyle: {
      backgroundColor: 'rgba(115,103,240,.05)',
      color: '#7367F0 !important',
      boxShadow: '0 0 1px 0 #7367F0 !important',
      '&:hover': {
        transform: 'translateY(0px) !important'
      }
    }
  }
}
const Portfolio = (props) => {
  const columns = [
    {
      name: <b>Type</b>,
      selector: 'assetType',
      sortable: true
    },
    {
      name: <b>Nominated</b>,
      selector: 'nominees',
      sortable: true
    },
    {
      name: <b>Details</b>,
      selector: 'details',
      sortable: true
    },
    {
      name: <b>Value</b>,
      selector: 'value',
      sortable: true
    },
    {
      name: <b>Remarks</b>,
      selector: 'remarks',
      sortable: true
    }
  ]
  const columnsNomineeView = [
    {
      name: <b>Nominee</b>,
      selector: 'nomineeName',
      sortable: true,
      maxWidth: '240px'
    },
    {
      name: <b>Relation</b>,
      selector: 'relation',
      sortable: true,
      maxWidth: '170px'
    },
    {
      name: <b>Asset</b>,
      selector: 'assetTypeValue',
      maxWidth: '370px',
      sortable: true
    },
    {
      name: <b>Liability</b>,
      maxWidth: '335px',
      selector: 'liabilityTypeValue',
      sortable: true
    }
  ]
  const [activeTab, setactiveTab] = useState(true)

  const [nomList, setNomList] = useState([])
  const [liabilityList, setliabilityList] = useState([])
  const [assetList, setassetList] = useState([])
  const [type, setType] = useState('Asset')
  const { listLoading, nomineesListData, getData } = props
  useEffect(() => {
    !listLoading && getData()
  }, [])
  useEffect(() => {
    nomineesListData?.length && getAssets()
  }, [nomineesListData])
  useEffect(() => {
    !activeTab && getNominees()
  }, [activeTab])
  const getAssets = () => {
    const user = JSON.parse(sessionStorage.getItem('logInUserData'))
    axios
      .get(`/backendapi/user/assets/${user._id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
        }
      })
      .then((res) => {
        const temp = res ? res.data : []
        temp.splice(0, temp.length)
        user?.assets?.length &&
          user.assets.forEach((e, i) => {
            const x = {}
            if (e.id) {
              let nomin = ''
              e?.nominees?.length &&
                e.nominees.forEach((n, idx) => {
                  const sel = nomineesListData.filter((x) => x._id === n.id)
                  if (sel.length) {
                    if (idx === e.nominees.length - 1) {
                      nomin = nomin + sel[0].name
                    } else {
                      nomin = `${nomin + sel[0].name}, `
                    }
                  }
                })
              x.assetType = e.assetType
              x.nominees = nomin
              const len = e.assetDetails.length
              e.assetDetails.forEach((val, i) => {
                if (AssetKeys.includes(val.key)) {
                  i === 0 && (x.details = val.val)
                  val.key.includes('Amount') && (x.value = val.val)
                  i === len - 2 && (x.remarks = val.val)
                }
              })
              x.id = i + 1
              temp.push(x)
            }
          })
        setassetList(temp?.reverse())
      })
    axios
      .get(`/backendapi/user/liabilities/${user._id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
        }
      })
      .then((res) => {
        const liabilityList = res ? res.data : []
        liabilityList.splice(0, liabilityList.length)
        user?.liabilities?.length &&
          user.liabilities.forEach((e, i) => {
            const x = {}
            if (e.id) {
              let nomin = ''
              e?.nominees?.length &&
                e.nominees.forEach((n, idx) => {
                  const sel = nomineesListData.filter((x) => x._id === n.id)
                  if (sel.length) {
                    if (idx === e.nominees.length - 1) {
                      nomin = nomin + sel[0].name
                    } else {
                      nomin = `${nomin + sel[0].name}, `
                    }
                  }
                })
              x.assetType = e.liabilityType // intentionally done to rpevent extra lines
              x.nominees = nomin
              const len = e.liabilityDetails.length
              e.liabilityDetails.forEach((val, i) => {
                if (LiabilityKeys.includes(val.key)) {
                  i === 0 && (x.details = val.val)
                  val.key.includes('Amount') && (x.value = val.val)
                  i === len - 2 && (x.remarks = val.val)
                }
              })
              x.id = i + 1
              liabilityList.push(x)
            }
          })
        setliabilityList(liabilityList?.reverse())
      })
  }

  const getNominees = () => {
    const user = JSON.parse(sessionStorage.getItem('logInUserData'))
    axios
      .get(`/backendapi/nominee/list/${user._id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
        }
      })
      .then((res) => {
        const nomineesList = res ? res.data : []
        //nomineesList.splice(0, nomineesList.length)
        console.log('nomineesList', nomineesList)
        const noms = []

        nomineesList.forEach((nom) => {
          console.log('user?.assets', user?.assets)
          const ass =
            user?.assets?.length &&
            user?.assets.filter((a) => {
              return a.nominees.findIndex((x) => x.id === nom._id) > -1
            })
          const liab =
            user?.liabilities?.length &&
            user?.liabilities.filter((a) => {
              return a.nominees.findIndex((x) => x.id === nom._id) > -1
            })
          let assout = ''
          let liabout = ''
          ass.forEach((ao, i) => {
            assout += ` ${i + 1}-${ao.assetType}`
          })

          liab.forEach((lo, i) => {
            liabout += ` ${i + 1}-${lo.liabilityType}`
          })
          assout = assout.length > 2 ? assout : '-'
          liabout = liabout.length > 2 ? liabout : '-'
          noms.push({
            nomineeName: decryptdata(nom.name, true),
            relation: decryptdata(nom.relation, true),
            assetTypeValue: assout,
            liabilityTypeValue: liabout
          })
          console.log('liab', liab)
          console.log('ass', ass)
        })
        console.log('noms', noms)
        setNomList(noms)

        //      user?.liabilities?.length &&
        //			user.liabilities.forEach((e, i) => {
        //	setnomineesList(nomineesList?.reverse())
      })
  }
  return (
    <Card
      style={{
        maxHeight: 'calc(100vh - 145px)',
        marginBottom: '0px',
        overflow: 'hidden'
      }}
    >
      <CardBody>
        <Row className="position-relative">
          <Col
            md="6"
            sm="12"
            className={`d-flex justify-content-center ${
              activeTab && 'active-border'
            }`}
            onClick={() => setactiveTab(true)}
          >
            <h3 style={{ color: 'grey' }}>Default View</h3>
          </Col>
          <Col
            md="6"
            sm="12"
            className={`d-flex justify-content-center ${
              !activeTab && 'active-border'
            }`}
            onClick={() => setactiveTab(false)}
          >
            <h3 style={{ color: 'grey' }}>Nominee View</h3>
          </Col>
        </Row>
        <>
          {activeTab && (
            <FormGroup className="d-flex justify-content-center">
              <div className="d-inline-block mt-1 mr-1">
                <Radio
                  label="Asset"
                  color="warning"
                  defaultChecked={type === 'Asset'}
                  name="theme"
                  onChange={(e) => setType('Asset')}
                />
              </div>
              <div className="d-inline-block mt-1">
                <Radio
                  label="Liability"
                  color="warning"
                  defaultChecked={type === 'Liability'}
                  name="theme"
                  onChange={(e) => setType('Liability')}
                />
              </div>
            </FormGroup>
          )}
          <div style={{ height: 'calc(100vh - 275px)' }} id="scroll-y">
            {activeTab ? (
              <DataTable
                width="200"
                columns={activeTab ? columns : columnsNomineeView}
                data={
                  activeTab
                    ? type === 'Asset'
                      ? assetList?.length
                        ? assetList
                        : []
                      : liabilityList?.length
                      ? liabilityList
                      : []
                    : []
                }
                noHeader={true}
                responsive
                pointerOnHover
                selectableRowsHighlight
                customStyles={selectedStyle}
                sortIcon={<ChevronDown />}
              />
            ) : (
              <DataTable
                width="200"
                columns={activeTab ? columns : columnsNomineeView}
                data={nomList}
                noHeader={true}
                responsive
                pointerOnHover
                selectableRowsHighlight
                customStyles={selectedStyle}
                sortIcon={<ChevronDown />}
              />
            )}
          </div>
        </>
      </CardBody>
    </Card>
  )
}
const mapStateToProps = (state) => {
  return {
    state,
    nomineesListData: state?.dataList?.data ?? [],
    messages: state?.customizer?.language?.Liability,
    listLoading: state.dataList.totalRecordsLoading
  }
}
export default connect(mapStateToProps, { getData })(Portfolio)
