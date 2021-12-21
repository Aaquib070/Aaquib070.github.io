import React, { useState } from 'react'
import { Row, Col, Button, Input, Label, FormGroup, Form } from 'reactstrap'
import axios from 'axios'
import Select from 'react-select'
import 'assets/scss/plugins/extensions/dropzone.scss'
import { toast } from 'react-toastify'

const contactUsOptions = [
  {
    value: 'Query',
    label: 'Query',
    color: '#00B8D9',
    isFixed: true
  },
  {
    value: 'Complain',
    label: 'Complain',
    color: '#00B8D9',
    isFixed: true
  },
  {
    value: 'Feedback',
    label: 'Feedback',
    color: '#00B8D9',
    isFixed: true
  }
]
const user = JSON.parse(sessionStorage.getItem('logInUserData'))

const UserAccountTab = (props) => {
  const [saveButtonText, setsaveButtonText] = useState('Submit')
  const [contactUsFormType, setcontactUsFormType] = useState('')
  const [contactUsDescription, setcontactUsDescription] = useState('')
  
  const selectCustomRef = React.createRef()
  const postContactUsForm = (e) => {
    e.preventDefault()
    setsaveButtonText('Submiting ... ')
    //axios.defaults.baseURL = 'http://localhost:5000'
    axios
      .post('/backendapi/contactus', {name:user.name, email:user.email, topic:contactUsFormType, msg:contactUsDescription}, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
        }
      })
      .then(() => {
        toast.success("Your "+contactUsFormType+" is successfully registed.")
        setsaveButtonText('Submit') 
        setcontactUsFormType('')
        setcontactUsDescription('')
      })
      .catch()
  }
  return (
    <>
    <Form>
      <Row xs="1">
        <FormGroup className="form-label-group">
          <Select
            id="optionSelect"
            className="React"
            ref={selectCustomRef}
            classNamePrefix="select"
            isClearable={true}
            options={contactUsOptions}
            placeholder="Choose a topic"
            value={contactUsOptions.filter(
              (option) =>
                option.value === contactUsFormType
            )}
            onChange={(e) => setcontactUsFormType(e ? e.value : '')}
          />{' '}
          <Label>Choose a topic *:</Label>
        </FormGroup>
      </Row>
      <Row>
        <Label className="mt-2">Description *</Label>
        <Input
          className="mt-50"
          type="textarea"
          placeholder="Description"
          rows="5"
          id="description"
          value={contactUsDescription}
          onChange={(e) => setcontactUsDescription(e.target.value)}
        />
      </Row>
      {/* <Row>
        <Label className="mt-2">Attachments</Label>
        <Input
          className="mt-50"
          type="File"
          placeholder="Attachments"
          rows="5"
          id="attachment"
        />
      </Row> */}

      <Col className="d-flex justify-content-end flex-wrap mt-2" sm="12">
        <Button.Ripple
          color="warning"
          disabled={!(contactUsDescription.length && contactUsFormType.length)}
          className="button-label"
          onClick={(e) => postContactUsForm(e)}
        >
          {saveButtonText}
        </Button.Ripple>
      </Col>
      </Form>
    </>
    
  )
}
export default UserAccountTab
