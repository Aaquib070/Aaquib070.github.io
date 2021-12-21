import React, { useState, useEffect } from 'react'
import {
  Label,
  Input,
  FormGroup,
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap'
import { X, XCircle, Edit2 } from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'
import classnames from 'classnames'
import { Dark } from 'export'
import Select from 'react-select'
import { toast } from 'react-toastify'
import handleKeyMobileNumber from 'utility/context/InputTypeNum'

const relationDropDown = JSON.parse(
  sessionStorage.getItem('dropdowns')
).nomineeRelation

const NomineeSidebar = (props) => {
  const [relation, setrelation] = useState()
  const [relation1, setrelation1] = useState('')
  const [email, setemail] = useState('')
  const [address, setaddress] = useState('')
  const [contact1, setcontact1] = useState('')
  const [sameAsAbove, setsameAsAbove] = useState(true)
  const [contact2, setcontact2] = useState('')
  const [img, setimg] = useState('')
  const [id, setid] = useState('')
  const [name, setname] = useState('')
  const [addNew, setaddNew] = useState(false)
  const [errorrelation1, seterrorrelation1] = useState('')
  const [errorrelation, seterrorrelation] = useState('')
  const [erroremail, seterroremail] = useState('')
  const [errorcontact1, seterrorcontact1] = useState('')
  const [errorcontact2, seterrorcontact2] = useState('')
  const [errorname, seterrorname] = useState('')
  const [fname, setfname] = useState('')
  const [ftype, setftype] = useState('')
  const [secrets, setSecrets] = useState([])

  const [modal, setmodal] = useState(false)

  const [editID, setEditID] = useState('')

  const handleSecrets = () => {
    if (!editID) {
      const temp = [...secrets]
      temp.push({ id: temp?.length + 1, question: fname, answer: ftype })
      setSecrets([...temp])
    } else {
      const temp = [...secrets]
      const index = temp.findIndex((data) => data.id === editID)
      temp[index].question = fname
      temp[index].answer = ftype
      setSecrets([...temp])
      setEditID('')
    }
    setmodal(false)
    setfname('')
    setftype('')
  }
  const handleCross = (id) => {
    let temp = [...secrets]
    temp = temp.filter((data) => data.id !== id)
    if (temp?.length) {
      temp.forEach((data, id) => {
        data.id = id + 1
      })
    }
    setSecrets([...temp])
  }
  const clearCustomField = () => {
    setfname('')
    setftype('')
  }
  const toggleModal = () => {
    if (modal) {
      clearCustomField()
    }
    setmodal(!modal)
  }

  const editQues = (id) => {
    setEditID(id)
    setmodal(true)
    secrets.forEach((data) => {
      if (data.id === id) {
        setftype(data.answer)
        setfname(data.question)
      }
    })
  }

  useEffect(() => {
    if (props.data) {
      const {
        id,
        name,
        relation,
        address,
        email,
        primaryContact,
        secondaryContact
      } = props.data
      nullError()
      setid(id)
      setname(name)
      setrelation(relation)
      if (
        relation !== 'Collegue' &&
        relation !== 'Cousin' &&
        relation !== 'Daughter' &&
        relation !== 'Daughter-in-law' &&
        relation !== 'Friend' &&
        relation !== 'Husband' &&
        relation !== 'Son' &&
        relation !== 'Son-in-law' &&
        relation !== 'Wife'
      ) {
        setrelation('Others')
        setrelation1(relation)
      }
      setaddress(address)
      setemail(email)
      setcontact1(primaryContact)
      setcontact2(secondaryContact)
    } else if (props.data === null || addNew) {
      nullData()
      nullError()
    }
    setaddNew(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data])
  const setnameFunc = () => seterrorname('Enter Valid Name')
  const setemailFunc = () => seterroremail('Enter Valid Email')
  const setcontact1Func = () => seterrorcontact1('Enter Valid Contact No.')
  const setcontact2Func = () => seterrorcontact2('Enter Valid whatsapp No.')
  const setrelationFunc = () => seterrorrelation('Enter Valid Relation')
  const setrelation1Func = () => seterrorrelation1('Enter Valid Relation')
  const relationValue = (e) => {
    const value = e?.value
    setrelation(value)
    value !== 'Others' && seterrorrelation1('')
    !(!value?.length || !value.trim()) && seterrorrelation('')
  }
  const handleValue = (e) => {
    const { name } = e.target
    const value = e?.target?.value
    switch (name) {
      case 'name':
        setname(value)
        !value?.length || !value.trim() ? setnameFunc() : seterrorname('')
        break
      case 'email':
        setemail(value)
        // eslint-disable-next-line no-case-declarations
        const tempMAil = value.match(
          /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/
        )
        !value || !tempMAil || !value.trim()
          ? setemailFunc()
          : seterroremail('')
        break
      case 'address':
        setaddress(value.replace(/[\n\r]/g, ', '))
        break
      case 'phone':
        setcontact1(value)
        setcontact2(value)
        !value?.length || value.length !== 10 || !value.trim()
          ? setcontact1Func()
          : seterrorcontact1('')

        break
      case 'phoneC':
        setcontact2(value)
        value.length !== 10 || !value.trim()
          ? setcontact2Func()
          : seterrorcontact2('')
        !value?.length && seterrorcontact2('')
        break
      case 'relation':
        !value?.length || !value.trim()
          ? setrelationFunc()
          : seterrorrelation('')
        break
      case 'relation1':
        setrelation1(value)
        !value?.length || !value.trim()
          ? setrelation1Func()
          : seterrorrelation1('')
        break
      default:
        break
    }
  }
  const validateValues = () => {
    !name?.length && setnameFunc()
    !email?.length && setemailFunc()
    !contact1?.length && setcontact1Func()
    !contact2?.length && setcontact1Func()
    !relation?.length && setrelationFunc()
    relation === 'Others' && !relation1?.length && setrelation1Func()
    relation !== 'Others' && seterrorrelation1('')
    return (
      errorname ||
      !name?.length ||
      errorrelation ||
      !relation?.length ||
      errorrelation1 ||
      (relation === 'Others' && !relation1?.length) ||
      erroremail ||
      !email?.length ||
      // erroraddress ||
      // !address?.length ||
      errorcontact1 ||
      !contact1?.length ||
      errorcontact2
    )
  }
  const handleSubmit = () => {
    const inValid = validateValues()

    if (inValid) {
      toast.error('Kindly Fill Mandatory fields')
      return
    }
    if (props.isLoading) {
      props.data !== null
        ? toast.warning('Updating still in process')
        : toast.warning('Adding nominee in process')
      return
    }
    const obj = {
      relation: relation?.trim(),
      relation1: relation1?.trim(),
      email: email?.trim(),
      address: address?.trim(),
      contact1: contact1?.trim(),
      contact2: contact2?.trim(),
      id: id?.trim(),
      name: name?.trim(),
      secrets
    }
    if (props.data !== null) {
      obj._id = props.data._id
      obj.usage = props.data.usage
      props.updateData(obj)
    } else {
      setaddNew(true)
      props.addData(obj)
      nullData()
      nullError()
    }
  }

  const nullData = () => {
    setname('')
    setrelation('')
    setrelation1('')
    setemail('')
    setaddress('')
    setcontact1('')
    setcontact2('')
  }

  const nullError = () => {
    seterrorname('')
    seterrorcontact1('')
    seterrorcontact2('')
    seterroremail('')
    seterrorrelation1('')
  }
  const handleCheck = () => {
    sameAsAbove ? setcontact2('') : setcontact2(contact1)
    setsameAsAbove(!sameAsAbove)
  }
  const { show, handleSidebar, data } = props
  return (
    <div
      className={classnames('data-list-sidebar', {
        show
      })}
    >
      <div className="data-list-sidebar-header mt-2 px-2 d-flex justify-content-between">
        <h4 style={{ color: 'var(--warning)' }}>
          {data !== null ? 'UPDATE NOMINEE' : 'ADD NEW NOMINEE'}
        </h4>
        <X
          size={20}
          onClick={() => {
            handleSidebar(false, true)
            nullData()
            nullError()
          }}
        />
      </div>
      <PerfectScrollbar
        className="data-list-fields px-2 pt-2"
        options={{ wheelPropagation: false }}
      >
        <FormGroup className="form-label-group mb-0">
          <Input
            className="input-label"
            type="text"
            name="name"
            value={name}
            invalid={errorname}
            placeholder="Name*"
            onChange={handleValue}
            id="data-name"
            style={{ borderColor: errorname ? 'red' : '' }}
          />
          <Label className={Dark ? 'dark-label' : 'light-label'}>Name*</Label>

          {/* <FormFeedback invalid={errorname}>{errorname}</FormFeedback> */}
        </FormGroup>
        <FormGroup className="form-label-group mt-2">
          <Select
            id="data-category"
            name="relation"
            options={relationDropDown}
            value={relationDropDown?.filter(
              (option) => option.value === relation
            )}
            isClearable={true}
            placeholder={'Relation*'}
            onChange={(e) => relationValue(e)}
          />
          <Label
            className={
              Dark ? 'dark-label select-label' : 'light-label select-label'
            }
          >
            Relation*
          </Label>
        </FormGroup>
        {relation === 'Others' && (
          <FormGroup className="form-label-group mt-2 mb-0">
            <Input
              type="text"
              name="relation1"
              value={relation1}
              invalid={errorrelation1}
              placeholder="Relation Name*"
              onChange={handleValue}
              id="data-Relation"
              style={{ borderColor: errorrelation1 ? 'red' : '' }}
            />
            {/* <FormFeedback invalid={errorrelation1}>
              {errorrelation1}
            </FormFeedback> */}
          </FormGroup>
        )}

        <FormGroup className="form-label-group mt-2 mb-0">
          <Input
            className="input-label"
            type="email"
            name="email"
            value={email}
            invalid={erroremail}
            placeholder="Email*"
            onChange={handleValue}
            id="data-email"
            style={{ borderColor: erroremail ? 'red' : '' }}
          />
          <Label className={Dark ? 'dark-label' : 'light-label'}>Email*</Label>
          {/* <FormFeedback invalid={erroremail}>{erroremail}</FormFeedback> */}
        </FormGroup>
        <FormGroup className="form-label-group mt-2 mb-0">
          <Input
            className="input-label"
            type="type"
            maxLength={10}
            value={contact1}
            invalid={errorcontact1}
            name="phone"
            onChange={handleValue}
            onKeyPress={(e) => handleKeyMobileNumber(e)}
            id="data-price1"
            placeholder="Contact No.*"
            style={{ borderColor: errorcontact1 ? 'red' : '' }}
          />
          <Label className={Dark ? 'dark-label' : 'light-label'}>
            Contact No.
          </Label>
          {/* <FormFeedback invalid={errorcontact1}>{errorcontact1}</FormFeedback> */}
        </FormGroup>

        <FormGroup className="form-label-group mt-2 mb-0">
          <Input
            className="input-label"
            type="text"
            maxLength={10}
            value={contact2}
            name="phoneC"
            invalid={errorcontact2}
            disabled={sameAsAbove}
            onChange={handleValue}
            onKeyPress={(e) => handleKeyMobileNumber(e)}
            id="data-price"
            placeholder="WhatsApp"
          />
          <Label className={Dark ? 'dark-label' : 'light-label'}>
            Whatsapp
          </Label>
          {/* <FormFeedback invalid={errorcontact2}>{errorcontact2}</FormFeedback> */}
        </FormGroup>
        <FormGroup check inline className="p-0 ml-25 mt-25">
          <Input
            type="checkbox"
            className="w-max"
            checked={sameAsAbove}
            onChange={() => handleCheck()}
          />
          <Label check>Whatsapp same as contact no.</Label>
        </FormGroup>
        <FormGroup className="form-label-group mt-1 mb-0">
          <Input
            className="input-label "
            type="textarea"
            value={address}
            name="address"
            placeholder="Address"
            onChange={handleValue}
            id="data-Address"
          />
          <Label className={Dark ? 'dark-label' : 'light-label'}>Address</Label>
          {/* <FormFeedback invalid={erroraddress}>{erroraddress}</FormFeedback> */}
        </FormGroup>
        <div>
          {secrets.map((data) => {
            return (
              <>
                <FormGroup
                  className="form-label-group mt-1 mb-0"
                  style={{
                    border: '1px solid #d9d9d9',
                    borderRadius: '5px',
                    padding: '2px'
                  }}
                >
                  <b>{data.id}.</b>
                  <span
                    style={{
                      marginLeft: '5px'
                    }}
                  >
                    {data.question}
                  </span>
                  <b>
                    <XCircle
                      color="var(--warning)"
                      size="20"
                      className="float-right"
                      onClick={() => handleCross(data.id)}
                    />
                    <Edit2
                      color="#49b412"
                      size="20"
                      className="float-right"
                      onClick={() => editQues(data.id)}
                    />
                  </b>
                </FormGroup>
              </>
            )
          })}
        </div>
        <div className="d-flex justify-content-center mt-1">
          <Button
            color="white"
            outline
            disabled={secrets?.length === 3}
            onClick={toggleModal}
            className="add-button"
            id="addButton"
            style={{
              backgroundColor: 'var(--warning)'
            }}
          >
            +
          </Button>
          <div style={{ padding: '10px' }}>Secret Question</div>
        </div>
        {props.thumbView && img.length <= 0 ? (
          <label
            className="btn btn-primary"
            htmlFor="upload-image"
            color="primary"
          >
            Upload Image
            <input
              type="file"
              id="upload-image"
              hidden
              onChange={(e) => setimg(URL.createObjectURL(e.target.files[0]))}
            />
          </label>
        ) : null}
      </PerfectScrollbar>

      <div className="data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1">
        <Button.Ripple
          className="button-label"
          color="secondary"
          outline
          onClick={() => {
            nullData()
            nullError()
          }}
        >
          Reset
        </Button.Ripple>
        <Button.Ripple
          //disabled
          color="warning"
          type="reset"
          className="button-label"
          onClick={() => handleSubmit()}
        >
          {data !== null
            ? props.isLoading
              ? 'Updating'
              : 'Update'
            : props.isLoading
            ? 'Adding'
            : 'Add'}
        </Button.Ripple>
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
            Add a secret question
          </ModalHeader>
          <ModalBody>
            <FormGroup className="form-label-group">
              <Input
                type="text"
                name="Secret Question"
                value={fname}
                placeholder="Secret Question"
                onChange={(e) => {
                  setfname(e.target.value)
                }}
              />
              <Label>Question</Label>
            </FormGroup>

            <FormGroup className="form-label-group">
              <Input
                type="text"
                name="Answer"
                value={ftype}
                placeholder="Answer"
                onChange={(e) => {
                  setftype(e.target.value)
                }}
              />
              <Label>Question</Label>
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
                onClick={(e) => {
                  clearCustomField()
                }}
              >
                Reset
              </Button.Ripple>
              <Button.Ripple
                color="warning"
                disabled={fname === '' || ftype === ''}
                type="submit"
                className="button-label"
                onClick={handleSecrets}
              >
                {editID ? 'Update' : 'Add'}
              </Button.Ripple>
            </FormGroup>
          </ModalBody>
        </Modal>
      </div>
    </div>
  )
}
export default NomineeSidebar
