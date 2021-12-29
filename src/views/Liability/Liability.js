import React, { useState, useEffect, createRef, Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid'
import LZString from 'lz-string';
import Draggable from 'react-draggable'
import {
  Card,
  FormText,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  TabContent,
  TabPane,
  Label,
  Spinner
} from 'reactstrap'
import PopUp from 'utility/Popup'
import Ccube from 'utility/Ccube'
import AssetAccordion from '../Portfolio/AssetAccordion'
import axios from 'axios'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { Dark } from 'export'
import 'react-toastify/dist/ReactToastify.css'
import { Submit, Reset } from 'common/LAButtons'
import 'assets/scss/plugins/extensions/dropzone.scss'
import { getData, addData } from 'redux/actions/data-list/'
import Select from 'react-select'
import { Edit, Trash, Delete } from 'react-feather'

import { decryptdata, encryptdata } from 'utility/context/SecurityTool'
import 'assets/scss/pages/data-list.scss'
import 'assets/scss/components/app-loader.scss'
import 'assets/scss/plugins/extensions/dropzone.scss'
import Sidebar from '../Nominee/NomineeSidebar'
import handleKeyMobileNumber from 'utility/context/InputTypeNum'

const colourOptions2 = [
  { value: 'Text', label: 'Text', color: '#00B8D9', isFixed: true },
  { value: 'textarea', label: 'Text Area', color: '#0052CC', isFixed: true },
  { value: 'Date', label: 'Date', color: '#0052CC', isFixed: true },
  { value: 'Number', label: 'Number', color: '#0052CC', isFixed: true }
  // {value: 'File', label: 'File', color: '#0052CC', isFixed: true}
]

const AddLiability = (props) => {
  const liabOpts = JSON.parse(
    sessionStorage.getItem('dropdowns')
  ).liabilityOption
  const template = props.messages?.liabilityOption
    ? props.messages?.liabilityOption
    : liabOpts
  const liabiltyTypes = Object.keys(liabOpts).map((liab) => {
    return {
      value: liab,
      label: props.messages?.colorOption?.[liab]
        ? props.messages?.colorOption?.[liab]
        : liab,
      color: '#00B8D9',
      isFixed: true
    }
  })
  const selectAssetRef = createRef()
  const selectNomineeRef = createRef()
  const selectCustomRef = createRef()
  const [open, setopen] = useState(false)
  const [test, settest] = useState(false)
  const [deleteID, setdeleteID] = useState(null)
  const [fname, setfname] = useState('')
  const [ftype, setftype] = useState('')
  const [liabilityShow, setliabilityShow] = useState(true)
  const [liabilityList, setliabilityList] = useState([])
  const [liabilityType, setliabilityType] = useState('')
  const [sidebar, setsidebar] = useState(false)
  const [addNew, setaddNew] = useState(false)
  const [currentData, setcurrentData] = useState(null)
  const [isLoading, setisLoading] = useState(false)
  const [loading, setloading] = useState(false)
  const [prviewmodal, setprviewmodal] = useState(false)
  const [nominees, setnominees] = useState([])
  const [modal, setmodal] = useState(false)
  const [fileatt, setfileatt] = useState()
  const [selectedTemplate, setSelectedTemplate] = useState([])
  const [editItem, seteditItem] = useState(false)
  const [editId, seteditId] = useState('')
  const [isAddDisabled, setisAddDisabled] = useState(true)
  const [spinload, setspinload] = useState(false);
  const [bloburl, setbloburl] = useState()
  const [selectedforpreview, setselectedforpreview] = useState()
  const [nomineeOption, setnomineeOption] = useState([
    {
      value: 'Add Nominee',
      label: 'Add Nominee',
      color: '#00B8D9',
      isFixed: false
    }
  ])

  const user = JSON.parse(sessionStorage.getItem('logInUserData'))

  useEffect(() => {
    if (props.dataList.data.length) {
      const nomineeOption = [
        {
          value: 'Add Nominee',
          label: 'Add Nominee',
          color: '#00B8D9',
          isFixed: false
        }
      ]
      props.dataList.data.forEach((e) => {
        const temp = {
          value: e._id,
          label: `${e.name} - ${e.relation}`,
          color: '#00B8D9',
          isFixed: false
        }
        nomineeOption.push(temp)
      })
      setnomineeOption(nomineeOption)
      getAssets()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.dataList])

  useEffect(() => {
    !props.listLoading && props.getData()
    getAssets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleSidebar = (boolean, addNew = false) => {
    setsidebar(boolean)
    if (addNew === true) {
      setcurrentData(null)
      setaddNew(true)
    }
  }
  const addData = async (obj) => {
    setisLoading(true)
    try {
      await props.addData(obj)
      setisLoading(false)
      handleSidebar(false, true)
    } catch {
      setisLoading(false)
      toast.error('Add Nominee Failed! Please contact admin')
    }
  }
  const previewliab = (id) => {
    setprviewmodal(true);
    setloading(true)

    const token = sessionStorage.getItem('authtoken')
    axios
      .get(`/backendapi/sender/msg/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        setselectedforpreview(res.data[0])
        const med1 =res.data[0]?.media;
        const dec3=  LZString.decompressFromUTF16(med1);
        const attm = decryptdata(dec3)
        if (attm) {
          const byteCharacters = atob(attm?.split('base64,')[1])
          const byteNumbers = new Array(byteCharacters.length)
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i)
          }
          const byteArray = new Uint8Array(byteNumbers)
          const blob = new Blob([byteArray], {
            type: res.data[0]?.type
          })
          const blobUrl = URL.createObjectURL(blob)
          setbloburl(blobUrl)
          setloading(false)
        } else {
          setprviewmodal(!prviewmodal)
          toast.warning('Something went wrong')
        }
      })
  }

  const deletecus = (e) => {
    editItem && setisAddDisabled(false)
    const temp3 = selectedTemplate.filter((x) => {
      return e.key !== x.key
    })
    setSelectedTemplate(temp3)
  }
  const getAssets = () => {
    const user = JSON.parse(sessionStorage.getItem('logInUserData'))

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
            if (e.id) {
              let nomin = ''
              e?.nominees?.length &&
                e.nominees.forEach((n, idx) => {
                  const sel = props.dataList.data.filter((x) => x._id === n.id)
                  if (sel.length) {
                    if (idx === e.nominees.length - 1) {
                      nomin = nomin + sel[0].name
                    } else {
                      nomin = `${nomin + sel[0].name}, `
                    }
                  }
                })
              const cont = (
                <div>
                  <Row>
                    {e.liabilityDetails.map((x, i) => {
                      if (x.val !== '') {
                        let val = x.val;
                        if(x.type === 'File') {
                          const splitted = x.val.split('#~#');
                          val = <u><span style={{color:'blue'}} onClick={()=>{previewliab(splitted[2])}}>{splitted[0]}</span></u>
                        }  
                        return (
                          <Col md="5" sm="12" key={i + x.key}>
                            <FormText>
                              <span
                                className={`font-weight-bold upper-text ${
                                  Dark ? 'upper-text-dark' : 'upper-text'
                                }`}
                              >
                                {x.key && x.key.split('*')?.[0]} :
                              </span>{' '}
                              <span
                                className={`${
                                  Dark ? 'lower-text-dark' : 'lower-text'
                                }`}
                              >
                                {liabilityShow ? val : '***********'}
                              </span>
                            </FormText>
                          </Col>
                        )
                      } else return ''
                    })}
                    <Col md="5" sm="12">
                      <FormText>
                        <span
                          className={`font-weight-bold upper-text ${
                            Dark ? 'upper-text-dark' : 'upper-text'
                          }`}
                        >
                          Nominees :
                        </span>{' '}
                        <span
                          className={`${
                            Dark ? 'lower-text-dark' : 'lower-text'
                          }`}
                        >
                          {liabilityShow ? nomin : '*******************'}
                        </span>
                      </FormText>
                    </Col>
                    <Col md="2" sm="12">
                      <FormText>
                        <b>
                          <Edit
                            className="cursor-pointer mr-1"
                            size={window.screen.width < 500 ? 13 : 20}
                            onClick={() => {
                              editItemfunc(e)
                            }}
                          />
                        </b>
                        <b>
                          <Trash
                            className="cursor-pointer"
                            size={window.screen.width < 500 ? 13 : 20}
                            onClick={() => {
                              setdeleteID(e.id)
                              setopen(true)
                            }}
                          />
                        </b>
                      </FormText>
                    </Col>
                  </Row>
                </div>
              )
              const ast = {
                id: i + 1,
                title: e.liabilityType,
                content: cont
              }
              liabilityList.push(ast)
            }
          })
        setliabilityList(liabilityList?.reverse())
      })
  }
  const toggleModal = () => {
    setmodal(!modal)
  }
  const addAssetsButtonValidation = () => {
    let isAddDisabled = false
    selectedTemplate.forEach((f) => {
      if (f.mandatory && !f.val) {
        isAddDisabled = true
      }
    })
    setisAddDisabled(isAddDisabled)
  }
  const changeValue = (e, k,ev) => {
  	if(k.type==='File') {
      setfileatt(ev.target?.files[0]);
    }
    const selectedTemplateTemp = selectedTemplate
    const idx = selectedTemplateTemp.findIndex((x) => x.key === k.key)
    if (e.length < 50) {
      selectedTemplateTemp[idx].val = e
      setSelectedTemplate(selectedTemplateTemp)
      addAssetsButtonValidation()
      settest(!test)
    }
  }
  const deleteLiabilty = (id) => {
    const user = JSON.parse(sessionStorage.getItem('logInUserData'))
    const idx = user.liabilities.findIndex((el) => el.id === id)
    const deletednominee = []
    if (idx >= 0) {
      const fil = user.liabilities[idx].liabilityDetails.filter(m=>m.type === 'File');
      fil.forEach(filat=> {
        const sf = filat.val.split('#~#');
        axios
        .delete(`/backendapi/document/deletebyid/${sf[1]}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
          }
        })
      })
      user.liabilities[idx].nominees.forEach((n) => {
        n.objectid = user.liabilities[idx].id
        deletednominee.push(n)
      })
      user.liabilities.splice(idx, 1)
    } else return

    axios
      .post(
        '/backendapi/adddetails',
        {
          _id: user._id,
          liabilities: encryptdata(JSON.stringify(user.liabilities)),
          deletednominee
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
          }
        }
      )
      .then((res) => {
        props.getData(props.parsedFilter)
        getAssets()
      })
      .catch()
    sessionStorage.setItem('logInUserData', JSON.stringify(user))
    toast.warning('Liability deleted successfully!')
    clearLiability()
    clearCustomField()
    setisAddDisabled(true)
  }
  const getBase64 = (file) => {
    const prom = new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
    return prom
  }
  
  const fileUpload = async(f) => {
    const attList = []
    const data = {}
    data.user = user._id
    data.type = 'Liability'
    data.alias = encryptdata(f.name)
    //data.attachment = encryptdata(attachment)
    //data.desc = encryptdata(desc)
    //data.expiry = encryptdata(expiry)
    const encf = await getBase64(f)      
      const tobecom = encryptdata(encf);
      const compressed = LZString.compressToUTF16(tobecom);
      attList.push({
        media: compressed,
        name: f.name,
        type: f.type,
        user: user._id
      })
      data.attachment = attList
     // axios.defaults.baseURL = 'http://localhost:5000'
      const ans = await axios.post('/backendapi/documents/add', data, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
        }});
      return ans;
  }
  
  const savechanges = (e) => {
    setspinload(true);
    e.preventDefault()
    seteditItem(false)
    const user = JSON.parse(sessionStorage.getItem('logInUserData'))
    const as = {
      liabilityType,
      liabilityDetails: selectedTemplate,
      nominees,
      id: editId
    }

    const idx = user.liabilities.findIndex((el) => el.id === editId)
    if (idx >= 0) {
      user.liabilities.splice(idx, 1)
      user.liabilities.push(as)
    } else return

    sessionStorage.setItem('logInUserData', JSON.stringify(user))

    axios
      .post(
        '/backendapi/adddetails',
        {
          _id: user._id,
          liabilities: encryptdata(JSON.stringify(user.liabilities))
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
          }
        }
      )
      .then((res) => {
        toast.success('Edited successfully!')
        props.getData(props.parsedFilter)
        getAssets()
        setspinload(false);
      })
      .catch(()=>{setspinload(false);})

    clearLiability()
    clearCustomField()
    setisAddDisabled(true)
  }
  const callAddLiability = () => {
 
    const user = JSON.parse(sessionStorage.getItem('logInUserData'))
    
    const as = {
      liabilityType,
      liabilityDetails: selectedTemplate,
      nominees,
      id: uuidv4()
    }
    nominees.forEach((n) => {
      n.objectid = as.id
    })
    user.liabilities.push(as)
    axios
      .post(
        '/backendapi/adddetails',
        {
          _id: user._id,
          liabilities: encryptdata(JSON.stringify(user.liabilities))
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
          }
        }
      )
      .then((res) => {
        props.getData(props.parsedFilter)
        setspinload(false);
        getAssets()
      })
      .catch(()=>{setspinload(false);})
    sessionStorage.setItem('logInUserData', JSON.stringify(user))
    toast.success('Liability addedd successfully!')
    clearLiability()
    clearCustomField()
    setisAddDisabled(true)
  }
  
  const checkliab =()=> {
    setspinload(true);
    //e.preventDefault();
    if (user.liabilities.length > 10) {
      toast.error('Liabilities Limit of 10 Exceeded ! Please upgrade your plan')
      setspinload(false);
      return
    }
    //const selectedTemplate = selectedTemplate;
    const fileIdx = selectedTemplate.findIndex(e=>e.type === 'File');
    if(fileIdx >= 0) {
      const fileToup = selectedTemplate[fileIdx];
      if(fileToup.val !== '') {
        const ans = fileUpload(fileatt);
        ans.then(res => {
          selectedTemplate[fileIdx].val = `${decryptdata(res.data.alias)}#~#${res.data._id}#~#${res.data.attachment[0]}`
          setSelectedTemplate(selectedTemplate);
          callAddLiability();
        }).catch((err) => {
          setspinload(false);
          err?.response?.data && toast.error(err?.response?.data)
        })
        
      } else {
        callAddLiability();
      }
    } else {
      callAddLiability();
    }
    
  }
  
  const addfield = () => {
    if (liabilityType !== '') {
      const selectedTemplateTemp = selectedTemplate
      const size = selectedTemplateTemp.length
      let temp = ''
      const fig = selectedTemplateTemp.findIndex(
        (data) => data.key === fname + ftype
      )
      if (fig >= 0) {
        toast.error('Field Already Exist! Please add new field')
        return
      }
      if (selectedTemplate[size - 1].key === 'Attachments') {
        temp = selectedTemplateTemp[size - 1]
        selectedTemplateTemp[size - 1] = {
          key: fname + ftype,
          val: '',
          type: ftype,
          deletable: true
        }
        selectedTemplateTemp.push(temp)
        setSelectedTemplate(selectedTemplateTemp)
        setfname('')
        setftype('')
      } else {
        selectedTemplateTemp.push({
          key: fname + ftype,
          val: '',
          type: ftype,
          deletable: true
        })
        setSelectedTemplate(selectedTemplateTemp)
        setfname('')
        setftype('')
      }
      toggleModal()
    }
  }
  const changeNominee = (event) => {
    if (editItem) {
      setisAddDisabled(false)
    }
    const nominees = []
    event?.length &&
      event.forEach((e) => {
        e.value === 'Add Nominee'
          ? setsidebar(true)
          : nominees.push({ id: e.value, name: e.label })
      })
    !event && setisAddDisabled(true)
    setnominees(nominees)
  }
  const clearLiability = () => {
    selectAssetRef.current.select.clearValue()
    selectNomineeRef.current.select.clearValue()
    setliabilityType('')
    setSelectedTemplate([])
    setnominees([])
    editItem && setisAddDisabled(true)
  }
  const clearCustomField = () => {
    setfname('')
    setftype('')
    selectCustomRef.current && selectCustomRef.current.select.clearValue()
  }
  const handleChange = (e) => {
    setisAddDisabled(true)
    setfname('')
    setftype('')
    setliabilityType(e ? e.value : undefined)
    setSelectedTemplate(e ? template[e.value] : {})
  }
  const editItemfunc = (item) => {
    const { liabilityDetails, liabilityType, nominees } = item // item.id is left
    setliabilityType(liabilityType)
    seteditItem(true)
    seteditId(item.id)
    setSelectedTemplate(liabilityDetails)
    setnominees(nominees)
  }
  const animateLabel = (value) => {
    if (value) {
      document.getElementById('buttonLabel').classList.remove('no-display')
      document.getElementById('buttonLabel').classList.add('button-text')
    } else {
      document.getElementById('buttonLabel').classList.add('no-display')
      document.getElementById('buttonLabel').classList.remove('button-text')
    }
  }
  const { messages, thumbView, getData, parsedFilter } = props
  return (
    <Fragment>
    <Draggable>
        <Modal
          isOpen={prviewmodal}
          toggle={() => {
            setprviewmodal(!prviewmodal);
          }}
          centered={true}
          size="lg"
        >
          <ModalHeader
            toggle={() => {
              setprviewmodal(!prviewmodal);
            }}
            cssModule={{ 'modal-title': 'w-100 text-center' }}
          >
            <Row>

              <Col
                style={{
                  color: 'var(--warning)',
                  fontSize: '1.45rem',
                  fontWeight: 'bold',
                  letterSpacing: '1px'
                }}
              >
                Preview Liabiity Attachment
              </Col>

              
            </Row>
          </ModalHeader>

          <ModalBody className="justify-content-center">
            
            {loading && (
              <Spinner
                style={{ marginLeft: '48%' }}
                color="warning"
                size="lg"
              />
            )}
            {!loading && (
              <div>
                <iframe
                  style={{ height: '400px', width: '100%' }}
                  className="myiframe"
                  title="Aaq"
                  src={`${bloburl}#zoom=200`}
                  //src={`${bloburl}#toolbar=0`}
                />
              </div>
            )}
          </ModalBody>
        </Modal>
      </Draggable>
      <h2 className="warning spacing nodisplay">
        {messages?.heading ? messages.heading : 'Liabilties'}
      </h2>
      <Row>
        <Col sm="12">
          <div
            className={`data-list ${thumbView ? 'thumb-view' : 'list-view'}`}
          >
            <PopUp
              modalMessage={'Are you sure you want to delete this record?'}
              handleConfirm={() => {
                deleteLiabilty(deleteID)
                setopen(false)
              }}
              isOpen={open}
              closeModal={() => setopen(false)}
            />
            <Sidebar
              show={sidebar}
              data={currentData}
              updateData={props.updateData}
              addData={addData}
              isLoading={isLoading}
              handleSidebar={handleSidebar}
              thumbView={thumbView}
              getData={getData}
              dataParams={parsedFilter}
              addNew={addNew}
            />
            <div
              className={classnames('data-list-overlay', {
                show: sidebar
              })}
              onClick={() => handleSidebar(false, true)}
            />
            <Row>
              <Col lg="8" md="6" sm="12">
                <div
                  style={{
                    width: window.screen.width < 500 ? '100%' : '150%'
                  }}
                >
                  <Row>
                    <Col sm="12">
                      <TabContent activeTab="1">
                        <TabPane tabId="1">
                          <Row>
                            <Col lg="8" md="6" sm="12">
                              <Card>
                                <CardHeader>
                                  <CardTitle>
                                    {messages?.subHeading
                                      ? messages.subHeading
                                      : editItem
                                      ? 'Edit Liability Details'
                                      : 'Add New Liability'}
                                  </CardTitle>
                                </CardHeader>
                                <CardBody>
                                  <Form>
                                    <Row>
                                      <Col md="6" sm="12">
                                        <FormGroup className="form-label-group">
                                          <Select
                                            className="React"
                                            ref={selectAssetRef}
                                            name="color"
                                            options={liabiltyTypes}
                                            isClearable={true}
                                            theme={(theme) => ({
                                              ...theme,
                                              colors: {
                                                ...theme.colors,
                                                text: 'orangered',
                                                primary25: 'coral',
                                                primary: '#757488'
                                              }
                                            })}
                                            isDisabled={editItem}
                                            value={liabiltyTypes.filter(
                                              (option) =>
                                                option.value === liabilityType
                                            )}
                                            placeholder={
                                              messages?.liabilityOptionText
                                                ? messages?.liabilityOptionText
                                                : 'Liability Type'
                                            }
                                            onChange={(e) => {
                                              handleChange(e)
                                            }}
                                          />
                                          <Label>Liability Type</Label>
                                        </FormGroup>
                                      </Col>
                                      <Col md="6" sm="12">
                                        <FormGroup className="form-label-group">
                                          <Select
                                            styles={{
                                              control: (base) => ({
                                                ...base,
                                                borderColor:
                                                  liabilityType &&
                                                  !nominees?.length
                                                    ? 'red'
                                                    : 'hsl(0,0%,80%)'
                                              })
                                            }}
                                            theme={(theme) => ({
                                              ...theme,
                                              colors: {
                                                ...theme.colors,
                                                text: 'orangered',
                                                primary25: 'coral',
                                                primary: '#757488'
                                              }
                                            })}
                                            isMulti
                                            name="nominee"
                                            options={nomineeOption}
                                            value={nominees.map((n) => {
                                              const as = nomineeOption.filter(
                                                (e) => {
                                                  return e.value === n.id
                                                }
                                              )
                                              return {
                                                value: as[0].value,
                                                label: as[0].label
                                              }
                                            })}
                                            ref={selectNomineeRef}
                                            className="React"
                                            classNamePrefix="select"
                                            placeholder={
                                              messages?.nomineeOption
                                                ? messages?.nomineeOption
                                                : 'Nominee(s)'
                                            }
                                            id="nominee"
                                            onChange={(e) => {
                                              changeNominee(e)
                                            }}
                                          />
                                          <Label>
                                            {' '}
                                            {messages?.nomineeOption
                                              ? messages.nomineeOption
                                              : 'Nominee(s)'}
                                          </Label>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                    <Row>
                                      {Object.keys(template).includes(
                                        liabilityType
                                      ) &&
                                        selectedTemplate.length &&
                                        selectedTemplate.map((e, i) => {
                                          return (
                                            <Col md="6" sm="12" key={i}>
                                              <FormGroup className="form-label-group">
                                                {e.deletable && (
                                                  <Delete
                                                    style={{
                                                      position: 'absolute',
                                                      right: '-5px',
                                                      top: '-7px'
                                                    }}
                                                    className="primary"
                                                    size={15}
                                                    onClick={() => {
                                                      deletecus(e)
                                                    }}
                                                  />
                                                )}
                                                <Input
                                                  type={e.type}
                                                  onKeyPress={(event) =>
                                                    e.type === 'number' &&
                                                    handleKeyMobileNumber(event)
                                                  }
                                                  name={e.key}
                                                  id={e.id}
                                                  className="input-label"
                                                  placeholder={e.key}
                                                  value={e.type !== 'File' ? e.val: null}
                                                  onChange={(ev) => {
                                                    changeValue(
                                                      ev.target
                                                        ? ev.target.value
                                                        : ev.value,
                                                      e,ev
                                                    )
                                                  }}
                                                />
                                                <Label
                                                  for={e.id}
                                                  className={
                                                    Dark
                                                      ? 'dark-label'
                                                      : 'light-label'
                                                  }
                                                >
                                                  {e.key}
                                                </Label>
                                              </FormGroup>
                                            </Col>
                                          )
                                        })}
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                      <Col
                                        md="6"
                                        sm="12"
                                        style={{ display: 'flex' }}
                                      >
                                        {liabilityType && (
                                          <>
                                            <Button
                                              color="white"
                                              outline
                                              onClick={toggleModal}
                                              className="add-button"
                                              id="addButton"
                                              onMouseEnter={() =>
                                                animateLabel(true)
                                              }
                                              onMouseLeave={() =>
                                                animateLabel(false)
                                              }
                                              style={{
                                                backgroundColor:
                                                  'var(--warning)'
                                              }}
                                            >
                                              +
                                            </Button>
                                            <div className="label-div">
                                              <span
                                                id="buttonLabel"
                                                className="no-display"
                                              >
                                                Add a Custom Field
                                              </span>
                                            </div>
                                          </>
                                        )}
                                      </Col>
                                      <Col sm="6">
                                        <FormGroup
                                          className="action-right"
                                          style={{
                                            textAlign: 'right',
                                            marginBottom: '0px'
                                          }}
                                        >
                                          <Reset
                                            label={
                                              editItem
                                                ? 'Cancel'
                                                : messages?.resetButton
                                                ? messages?.resetButton
                                                : 'Reset'
                                            }
                                            handleClick={(e) => {
                                              seteditItem(false)
                                              clearLiability()
                                            }}
                                          />
                                          <Submit
                                            label={spinload ? <Spinner size="sm" color="white"/> : (
                                              editItem
                                              ? 'Update'
                                              : messages?.submitButton
                                              ? messages?.submitButton
                                              : 'Add'
                                           )}
                                            disabled={
                                              nominees.length === 0 ||
                                              !liabilityType ||
                                              isAddDisabled
                                            }
                                            handleClick={(e) => {
                                              editItem
                                                ? savechanges(e)
                                                : checkliab()
                                            }}
                                          />
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </Form>
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>

                          <Row>
                            <Col md="8">
                              <AssetAccordion
                                heading={
                                  messages?.subHeading
                                    ? messages.subHeading
                                    : 'Liabilities List'
                                }
                                isLoading={props.listLoading}
                                collapseItems={liabilityList}
                                show={() => {
                                  setliabilityShow(!liabilityShow)
                                  getAssets()
                                }}
                                assetShow={liabilityShow}
                                handleFilter={() => {
                                  console.log('Call filter function')
                                }}
                              />
                            </Col>
                          </Row>
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Ccube />{' '}
            </Row>

            <Row>
              {/* To add a */}
              <Col sm="12">
                <Modal isOpen={modal} toggle={toggleModal} centered={true}>
                  <ModalHeader
                    toggle={toggleModal}
                    tag="div"
                    style={{
                      color: 'var(--warning)',
                      fontSize: '1.45rem',
                      fontWeight: 'bold',
                      letterSpacing: '1px',
                      justifyContent: 'center'
                    }}
                  >
                    Add Custom Field
                  </ModalHeader>
                  <ModalBody>
                    <FormGroup className="form-label-group">
                      <Input
                        type="email"
                        name="Email"
                        disabled={liabilityType === ''}
                        id="EmailMulti"
                        value={fname}
                        placeholder="Enter Field Name"
                        onChange={(e) => {
                          setfname(e.target.value)
                        }}
                      />
                      <Label>Enter Field Name</Label>
                    </FormGroup>
                    <FormGroup
                      className="form-label-group"
                      disabled={liabilityType === undefined}
                    >
                      <Select
                        className="React"
                        ref={selectCustomRef}
                        disabled={liabilityType === undefined}
                        classNamePrefix="select"
                        isClearable={true}
                        name="color"
                        options={colourOptions2}
                        placeholder="Field Type..."
                        onChange={(e) => setftype(e ? e.value : ' ')}
                      />
                      <Label>Field Type</Label>
                    </FormGroup>
                    <FormGroup
                      className="form-label-group mb-0"
                      style={{ textAlign: 'right' }}
                    >
                      <Button.Ripple
                        outline
                        color="secondary"
                        type="reset"
                        className="mb-1 button-label"
                        disabled={liabilityType === undefined}
                        onClick={(e) => {
                          clearCustomField()
                        }}
                      >
                        {messages?.resetButton
                          ? messages?.resetButton
                          : 'Reset'}
                      </Button.Ripple>
                      <Button.Ripple
                        color="warning"
                        disabled={fname === '' || ftype === ''}
                        type="submit"
                        className="button-label"
                        onClick={(e) => addfield()}
                      >
                        {messages?.submitButton
                          ? messages?.submitButton
                          : 'Add'}
                      </Button.Ripple>
                    </FormGroup>
                  </ModalBody>
                </Modal>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    dataList: state.dataList,
    messages: state?.customizer?.language?.Liability,
    listLoading: state.dataList.totalRecordsLoading
  }
}
export default connect(mapStateToProps, { getData, addData })(AddLiability)
