/* eslint-disable radix */
import React, { useState, useEffect } from 'react'
import XLSX from 'xlsx'
import { Dark } from 'export'
import Select from 'react-select'
import { encryptdata } from 'utility/context/SecurityTool'
import {
  Input,
  Card,
  Row,
  Col,
  CardBody,
  Button,
  Label,
  FormGroup
} from 'reactstrap'
import PopUp from 'utility/Popup'
import { toast } from 'react-toastify'
import DataTable from 'react-data-table-component'
import classnames from 'classnames'
// import { history } from 'history'
import { Edit, Info, Trash, ChevronDown, Download } from 'react-feather'
import { connect } from 'react-redux'
import Spinner from 'common/Fallback-spinner'
import {
  getSpendData,
  deleteSpendData,
  updateData,
  addData,
  filterSpendData
} from 'redux/actions/data-list'
import 'react-toastify/dist/ReactToastify.css'
import Sidebar from './SpendSidebar'
import axios from 'axios'

import 'assets/scss/plugins/extensions/react-paginate.scss'
import 'assets/scss/pages/data-list.scss'

const dailySpendsLabels = JSON.parse(
  sessionStorage.getItem('dropdowns')
).dailySpendsLabels

const yearData = [
  { label: 'Last 3 month', value: 3 },
  { label: 'Last 6 month', value: 6 },
  { label: 'Last 1 year', value: 12 },
  { label: 'Last 3 years', value: 36 }
]

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
const EditComponent = (props) => {
  return (
    <div className="data-list-action">
      {window.screen.width > 500 ? (
        <Edit
          className="cursor-pointer mr-1"
          size={window.screen.width < 500 ? 13 : 20}
          onClick={() => {
            return props.currentData(props.row)
          }}
        />
      ) : (
        <Info
          className="cursor-pointer mr-1"
          size={window.screen.width < 500 ? 13 : 20}
          onClick={() => {
            return props.currentData(props.row)
          }}
        />
      )}
    </div>
  )
}

const DeleteComponent = (props) => {
  return (
    <div className="data-list-action">
      <Trash
        style={{
          cursor: 'pointer'
        }}
        size={window.screen.width < 500 ? 13 : 20}
        onClick={() => props.setRow()}
      />
    </div>
  )
}

const formatDate = (dt) => {
  const d = new Date(dt)
  let month = `${d.getMonth() + 1}`
  if (month.length === 1) {
    month = `0${month}`
  }
  let day = `${d.getDate()}`
  if (day.length === 1) {
    day = `0${day}`
  }
  return [d.getFullYear(), month, day].join('-')
}

const exportToExcel = (e, splitdata, key = null) => {
  e.preventDefault()
  //console.log(splitdata)
  const wb = XLSX.utils.book_new()
  let fileName = 'Spenditure_Report.xlsx'

  if (key) {
    const data = []
    splitdata[key].forEach((d) => {
      data.push({
        Month: d.seperator,
        Date: d.date,
        Label: d.label,
        Item: d.item,
        Amount: `₹${d.amount}`,
        Description: d.desc,
        'Created At': formatDate(d.updatedAt)
      })
    })
    const ws = XLSX.utils.json_to_sheet(data)
    const wscols = [
      { wch: 14 },
      { wch: 10 },
      { wch: 25 },
      { wch: 20 },
      { wch: 7 },
      { wch: 25 },
      { wch: 10 }
    ]

    ws['!cols'] = wscols
    ws['A1'].s = {
      font: {
        //name: '宋体',
        sz: 24,
        bold: true,
        color: { rgb: 'FFAA00' }
      }
    }
    console.log(ws)
    XLSX.utils.book_append_sheet(wb, ws, key)
    fileName = `Spediture_Report-${key}.xlsx`
  } else {
    Object.keys(splitdata).forEach((key) => {
      const data = []
      splitdata[key].forEach((d) => {
        data.push({
          Month: d.seperator,
          Date: d.date,
          Label: d.label,
          Item: d.item,
          Amount: d.amount,
          Description: d.desc,
          'Created At': formatDate(d.updatedAt)
        })
      })
      const ws = XLSX.utils.json_to_sheet(data)
      const wscols = [
        { wch: 14 },
        { wch: 10 },
        { wch: 25 },
        { wch: 20 },
        { wch: 7 },
        { wch: 25 },
        { wch: 10 }
      ]

      ws['!cols'] = wscols

      // console.log(ws)
      // Object.keys(ws).forEach(i=>{
      //   console.log('hereee',i)
      //   if(i.startsWith("!")) {
      //     console.log('bingo',i)
      //   }
      // })

      //   Object.keys(ws).forEach(i=>{
      //     //if (typeof(ws[i]) != "object") continue;
      //     let cell = XLSX.utils.decode_cell(i);
      //     console.log('here',i)
      //     if(!i.startsWith("!")) {
      //     ws[i].s = { // styling for all cells
      //         font: {
      //             name: "arial"
      //         },
      //         alignment: {
      //             vertical: "center",
      //             horizontal: "center",
      //             wrapText: '1', // any truthy value here
      //         },
      //         border: {
      //             right: {
      //                 style: "thin",
      //                 color: "000000"
      //             },
      //             left: {
      //                 style: "thin",
      //                 color: "000000"
      //             },
      //         }
      //     };

      //     if (cell.c == 0) { // first column
      //         ws[i].s.numFmt = "DD/MM/YYYY HH:MM"; // for dates
      //         ws[i].z = "DD/MM/YYYY HH:MM";
      //     } else {
      //         ws[i].s.numFmt = "00.00"; // other numbers
      //     }

      //     if (cell.r == 0 ) { // first row
      //         ws[i].s.border.bottom = { // bottom border
      //             style: "thin",
      //             color: "000000"
      //         };
      //     }

      //     if (cell.r % 2) { // every other row
      //         ws[i].s.fill = { // background color
      //             patternType: "solid",
      //             fgColor: { rgb: "b2b2b2" },
      //             bgColor: { rgb: "b2b2b2" }
      //         };
      //     }
      //   }
      // })
      XLSX.utils.book_append_sheet(wb, ws, key)
    })
  }

  /* generate XLSX file and send to client */
  XLSX.writeFile(wb, fileName)
}
const CustomHeader = (props) => {
  return (
    <div
      style={{ height: '150%', marginBottom: '30px' }}
      className="data-list-header d-flex justify-content-between "
    >
      <div className="actions-left d-flex">
        <Button.Ripple
          color="warning"
          type="reset"
          className="button-label"
          outline
          onClick={() => props.handleSidebar(true, true)}
        >
          <span className="align-middle">Add</span>
        </Button.Ripple>

        <Button.Ripple
          color="warning"
          type="reset"
          className="button-label"
          outline
          onClick={(e) => exportToExcel(e, props.splitdata)}
        >
          <Download />
        </Button.Ripple>

        {/* <DropdownToggle
          color="white"
          className="sort-dropdown mx-50"
          style={{
            height: '75%',
            backgroundColor: 'var(--warning)',
            fontWeight: 'bold'
          }}
          outline
          onClick={() => props.handleSidebar(true, true)}
        >
          <span className="align-middle">Add</span>
        </DropdownToggle> */}
      </div>
      <div className="actions-right d-flex">
        <div className="filter-section">
          <Input
            type="text"
            style={{
              height: '75%',
              borderRadius: '5rem',
              fontSize: '1rem',
              width: '300px'
            }}
            onChange={(e) => props.handleFilter(e)}
            placeholder="Search"
            className="placeholder"
          />
        </div>
      </div>
      {/* <div className="actions-right d-none">
        <UncontrolledDropdown className="data-list-rows-dropdown d-md-block d-none">
          <DropdownToggle
            color=""
            className="sort-dropdown"
            style={{ height: '75%' }}
          >
            <span className="align-middle mx-50">Count : {props.total}</span>
          </DropdownToggle>
        </UncontrolledDropdown>
      </div> */}
    </div>
  )
}
// const conditionalRowStyles = [
//   {
//     when: (row) => new Date(row.date) < new Date(),
//     style: {
//       backgroundColor: '#adadad',
//       color: ''
//       // '&:hover': {
//       //   cursor: 'pointer'
//       // }
//     }
//   }
// You can also pass a callback to style for additional customization
// {
//   when: (row) => row.calories < 300,
//   style: (row) => ({
//     backgroundColor: row.isSpecia ? 'pink' : 'inerit'
//   })
// }
// ]
const DataListConfig = (props) => {
  const [label, setlabel] = useState([])
  const [year, setyear] = useState()
  const [total, settotal] = useState(0)
  const [filters, setfilters] = useState({})
  // const [data, setdata] = useState([])
  const [open, setopen] = useState(false)
  const [deleteThisRow, setDeleteRow] = useState('')
  // const [currentPage, setcurrentPage] = useState(0)
  // const [allData, setallData] = useState([])
  // const [value, setvalue] = useState('')
  const [rowsPerPage, setrowsPerPage] = useState(4)
  const [sidebar, setsidebar] = useState(false)
  const [currentData, setcurrentData] = useState(null)
  const [totalRecords, settotalRecords] = useState(0)
  const [sortIndex, setsortIndex] = useState([])
  const [addNew, setaddNew] = useState('')
  const [splitdata, setsplitdata] = useState({})
  const [isLoading, setisLoading] = useState(false)
  const columns = [
      {
        name: 'Edit',
        cell: function temp(row) {
          return (
            <EditComponent
              row={row}
              getSpendData={props.getSpendData}
              parsedFilter={props.parsedFilter}
              currentData={handleCurrentData}
            />
          )
        }
      },
      {
        name: 'Item',
        selector: 'item',
        sortable: true,
        minWidth: '200px',
        cell: function temp(row) {
          return (
            <p title={row.item} className="text-truncate text-bold-500 mb-0">
              {row.item}
            </p>
          )
        }
      },
      {
        name: 'Description',
        selector: 'desc',
        minWidth: '200px',
        sortable: true
        //cell: row => `$${row.price}`
      },
      {
        name: 'Label',
        selector: 'label',
        sortable: true
      },
      {
        name: 'Date',
        selector: 'date',
        minWidth: '50px',
        sortable: true
      },
      {
        name: 'Amount',
        selector: 'amount',
        minWidth: '50px',
        sortable: true
        //cell: row => `$${row.price}`
      },
      {
        name: 'Delete',
        cell: function temp(row) {
          return (
            <DeleteComponent
              row={row}
              setRow={() => {
                setDeleteRow(row)
                setopen(true)
              }}
              getSpendData={props.getSpendData}
              parsedFilter={props.parsedFilter}
            />
          )
        }
      }
    ],
    mobilecolumns = [
      {
        name: 'Info',
        width: '50px',
        cell: function temp(row) {
          return (
            <EditComponent
              row={row}
              getData={props.getSpendData}
              parsedFilter={props.parsedFilter}
              currentData={handleCurrentData}
            />
          )
        }
      },
      {
        name: 'Item',
        selector: 'item',
        sortable: true,
        minWidth: '50px',
        cell: function temp(row) {
          return (
            <p
              style={{ fontSize: '10px' }}
              title={row.item}
              className="text-truncate text-bold-500 mb-0"
            >
              {row.item}
            </p>
          )
        }
      },
      {
        name: 'Amount',
        selector: 'amount',
        maxWidth: '50px',
        sortable: true,
        cell: function temp(row) {
          return (
            <p
              style={{ fontSize: '10px' }}
              title={row.amount}
              className="text-truncate text-bold-500 mb-0"
            >
              {row.amount}
            </p>
          )
        }
      },
      {
        name: 'Trash',
        width: '50px',
        cell: function temp(row) {
          return (
            <DeleteComponent
              row={row}
              getSpendData={props.getSpendData}
              parsedFilter={props.parsedFilter}
              setRow={() => {
                setopen(true)
                setDeleteRow(row)
              }}
            />
          )
        }
      }
    ]

  const groupBy = (arr, property) => {
    return arr.reduce((memo, x) => {
      if (!memo[x[property]]) {
        memo[x[property]] = []
      }
      memo[x[property]].push(x)
      return memo
    }, {})
  }
  useEffect(() => {
    if (props?.data) {
      // setdata(props?.data)
      const tempData = props.dataList.allData
      tempData &&
        tempData.forEach((element, i) => {
          if (element.date) {
            const d = new Date(element.date)
            const ye = new Intl.DateTimeFormat('en', {
              year: 'numeric'
            }).format(d)
            const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(
              d
            )
            tempData[i].seperator = `${mo}, ${ye}`
          }
        })
      const newTemp = groupBy(tempData, 'seperator')

      //   const vm = {};
      //   vm.dec = props.dataList.allData.filter(item => /(.*)-12-(.*)/.test(item.date));
      // vm.nov = props.dataList.allData.filter(item => /(.*)-11-(.*)/.test(item.date));
      // vm.oct = props.dataList.allData.filter(item => /(.*)-10-(.*)/.test(item.date));
      // vm.sep = props.dataList.allData.filter(item => /(.*)-09-(.*)/.test(item.date));
      // console.log('vm', vm);
      setsplitdata(newTemp)
      //totalPages(props.dataList.totalPages)
      // setcurrentPage(parseInt(props.parsedFilter?.page) - 1)
      setrowsPerPage(parseInt(props.parsedFilter?.perPage))
      settotalRecords(props.dataList.totalRecords)
      setsortIndex(props.dataList.sortIndex)
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data])

  useEffect(() => {
    props.getSpendData(props.parsedFilter, filters)
    let userData = sessionStorage.getItem('logInUserData')
      ? JSON.parse(sessionStorage.getItem('logInUserData'))
      : {}
    axios
      .get('/backendapi/spend/count/' + userData._id, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
        }
      })
      .then((res) => {
        settotal(res?.data)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleFilter = (e) => {
    props.filterSpendData(e.target.value)
  }

  const handleRowsPerPage = (value) => {
    // let { parsedFilter, getSpendData } = props
    // let page = parsedFilter.page !== undefined ? parsedFilter.page : 1
    // history.push(`/nominee/list?page=${page}&perPage=${value}`)
    // setrowsPerPage(value)
    // getSpendData({ page: parsedFilter.page, perPage: value })
  }

  const handleSidebar = (boolean, addNew = false) => {
    setsidebar(boolean)
    if (addNew === true) {
      setcurrentData(null)
      setaddNew(true)
    }
  }

  const handleDelete = () => {
    props.deleteSpendData(deleteThisRow)
    props.getSpendData(props.parsedFilter)
  }
  const addData = (obj) => {
    if (
      obj.name === '' ||
      (obj.relation1 === '' && obj.relation === 'others') ||
      obj.relation === '' ||
      obj.email === '' ||
      obj.date === '' ||
      obj.contact1 === '' ||
      obj.address === ''
    ) {
      toast.error('Please Fill All Mandatory Details')
    } else {
      setisLoading(true)
      const userData = sessionStorage.getItem('logInUserData')
        ? JSON.parse(sessionStorage.getItem('logInUserData'))
        : {}
      const nominee = {
        userId: userData._id,
        // item: encryptdata(obj.name),
        // label: encryptdata(obj.relation),
        // date: obj.date,
        // amount: encryptdata(obj.contact1),
        // desc: encryptdata(obj.address)
        item: obj.name,
        label: obj.relation,
        date: obj.date,
        amount: obj.contact1,
        desc: obj.address
      }
      if (obj.relation === 'others' && obj.relation1)
        nominee.relation = encryptdata(obj.relation1, true)
      //axios.defaults.baseURL = 'http://localhost:5000'
      axios
        .post('/backendapi/spend/add', nominee, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
          }
        })
        .then((res) => {
          setisLoading(false)
          toast.success('Spend Added Successfully')
          handleSidebar(false, true)

          props.getSpendData(props.parsedFilter)
        })
        .catch((e) => {
          setisLoading(false)
          toast.error('Add Spend Failed! Please contact admin')
        })
    }
  }
  const updateData = (obj) => {
    if (
      obj.name === '' ||
      (obj.relation1 === '' && obj.relation === 'others') ||
      obj.relation === '' ||
      obj.email === '' ||
      obj.date === '' ||
      obj.contact1 === '' ||
      obj.address === ''
    ) {
      toast.error('Please Fill All Mandatory Details')
    } else {
      setisLoading(true)
      const userData = sessionStorage.getItem('logInUserData')
        ? JSON.parse(sessionStorage.getItem('logInUserData'))
        : {}
      const nominee = {
        _id: obj._id,
        userId: userData._id,
        item: obj.name,
        label: obj.relation1,
        date: obj.date,
        amount: obj.contact1,
        desc: obj.address
      }
      axios
        .post('/backendapi/spend/update', nominee, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
          }
        })
        .then((res) => {
          setisLoading(false)
          toast.success('Spend Updated Successfully')
          handleSidebar(false, true)

          props.getSpendData(props.parsedFilter)
        })
        .catch((e) => {
          setisLoading(false)
          toast.error('Add Nominee Failed! Please contact admin')
        })
    }
  }

  const changelabelFilter = (event) => {
    const labels = []
    event?.length &&
      event.forEach((e) => {
        labels.push(e)
      })
    console.log(labels)
    setlabel(labels)
  }

  const handleCurrentData = (obj) => {
    obj.name = obj.item
    obj.relation1 = obj.label
    obj.relation = obj.label
    obj.address = obj.desc
    obj.primaryContact = obj.amount
    setcurrentData(obj)

    handleSidebar(true)
  }
  if (props.listLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner color="warning" size="lg" />
      </div>
    )
  }
  return (
    <>
      <div
        className={`data-list ${props.thumbView ? 'thumb-view' : 'list-view'}`}
      >
        <PopUp
          handleConfirm={() => {
            handleDelete()
            setopen(false)
          }}
          isOpen={open}
          closeModal={() => setopen(false)}
        />
        {/* <DataTable
        width="200"
        columns={window.screen.width < 500 ? mobilecolumns : columns}
        data={value.length ? data : allData}
        noHeader
        subHeader
        selectableRows={window.screen.width < 500 ? false : false}
        responsive
        pointerOnHover
       // selectableRowsHighlight
       // conditionalRowStyles={conditionalRowStyles}
        // onSelectedRowsChange={(data) => setselected(data.selectedRows)}
        customStyles={selectedStyle}
        subHeaderComponent={
          <CustomHeader
            handleSidebar={handleSidebar}
            handleFilter={handleFilter}
            handleRowsPerPage={handleRowsPerPage}
            rowsPerPage={rowsPerPage}
            total={totalRecords}
            index={sortIndex}
          />
        }
        sortIcon={<ChevronDown />}
      /> */}

        <CustomHeader
          handleSidebar={handleSidebar}
          handleFilter={handleFilter}
          handleRowsPerPage={handleRowsPerPage}
          rowsPerPage={rowsPerPage}
          total={totalRecords}
          index={sortIndex}
          splitdata={splitdata}
        />

        <Sidebar
          show={sidebar}
          data={currentData}
          updateData={updateData}
          addData={addData}
          isLoading={isLoading}
          handleSidebar={handleSidebar}
          thumbView={props.thumbView}
          getSpendData={props.getSpendData}
          dataParams={props.parsedFilter}
          addNew={addNew}
        />
        <div
          className={classnames('data-list-overlay', {
            show: sidebar
          })}
          onClick={() => handleSidebar(false, true)}
        />
      </div>
      <React.Fragment>
        <Card>
          <CardBody>
            <Row>
              <Col sm="5">
                <FormGroup className="form-label-group mt-2 mb-2">
                  <Select
                    isMulti
                    id="data-category"
                    name="label"
                    options={dailySpendsLabels}
                    // value={dailySpendsLabels?.filter(
                    //   (option) => option.value === label
                    // )}
                    value={label?.map((n) => {
                      const as = dailySpendsLabels.filter((e) => {
                        return e.value === n.value
                      })
                      return {
                        value: as[0].value,
                        label: as[0].label
                      }
                    })}
                    isClearable={true}
                    placeholder={'Label Filter'}
                    onChange={(e) => changelabelFilter(e)}
                    //onBlur={handleValueBlur}
                  />
                  <Label
                    className={
                      Dark
                        ? 'dark-label select-label'
                        : 'light-label select-label'
                    }
                  >
                    Label Filter
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="5">
                <FormGroup className="form-label-group mt-2 mb-2">
                  <Select
                    id="data-category"
                    name="label"
                    options={yearData}
                    value={yearData?.filter((option) => option.value === year)}
                    isClearable={true}
                    placeholder={'Date range filter'}
                    onChange={(e) => setyear(e?.value)}
                    //onBlur={handleValueBlur}
                  />
                  <Label
                    className={
                      Dark
                        ? 'dark-label select-label'
                        : 'light-label select-label'
                    }
                  >
                    Date range filter
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="2">
                <FormGroup>
                  <Button.Ripple
                    style={{ marginTop: '20px' }}
                    color="warning"
                    //disabled={ label.length === 0}
                    type="reset"
                    className="button-label"
                    onClick={(e) => {
                      setfilters({
                        labels: label.map((e) => e.value).join(','),
                        year
                      })
                      props.getSpendData(props.parsedFilter, {
                        labels: label.map((e) => e.value).join(','),
                        year
                      })
                    }}
                  >
                    Apply
                  </Button.Ripple>
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
        {Object.keys(splitdata).map((key, id) => {
          const sum = splitdata[key]
            ?.map((item) => Number(item.amount))
            .reduce((prev, next) => prev + next)
          return (
            <Card key={id + 1}>
              <CardBody>
                <Download
                  style={{ float: 'right' }}
                  onClick={(e) => {
                    exportToExcel(e, splitdata, key)
                  }}
                />
                <h4 style={{ textAlign: 'center' }}>{key}</h4>
                <hr style={{ width: '40%' }} />
                <h5 style={{ textAlign: 'center' }}>
                  Total Spends : <b style={{ color: 'coral' }}>₹ {sum}</b>
                </h5>
                <hr />
                <DataTable
                  style={{ marginTop: '-53px' }}
                  width="200"
                  columns={window.screen.width < 500 ? mobilecolumns : columns}
                  data={splitdata[key]}
                  noHeader
                  subHeader
                  selectableRows={window.screen.width < 500 ? false : false}
                  responsive
                  pointerOnHover
                  selectableRowsHighlight
                  customStyles={selectedStyle}
                  sortIcon={<ChevronDown />}
                />
              </CardBody>
            </Card>
          )
        })}
        <Row>
          Showing {total} of {total}
        </Row>
      </React.Fragment>
    </>
  )
}

const mapStateToProps = (state) => {
  const { dataList } = state
  const { data } = dataList
  data.map((data) => {
    const dateTemp = data?.date?.split('T')
    data.date = dateTemp?.[0]
    return data
  })
  return {
    dataList: state.dataList,
    listLoading: state.dataList.spendLoading,
    data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSpendData: (state) => dispatch(deleteSpendData(state)),
    getSpendData: (state, st) => dispatch(getSpendData(state, st)),
    addData: (state) => dispatch(addData(state)),
    updateData: (state) => dispatch(updateData(state)),
    filterSpendData: (data) => dispatch(filterSpendData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataListConfig)
