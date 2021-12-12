import React, { useState, useEffect } from 'react'
import {
  Row,
  Col,
  Card,
  FormGroup,
  Input,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  Label
} from 'reactstrap'
import { toast } from 'react-toastify'
import { encryptdata, decryptdata } from 'utility/context/SecurityTool'
import { Download, XSquare } from 'react-feather'
import Select from 'react-select'
import { useDropzone } from 'react-dropzone'
import txtFile from 'assets/img/icons/txt-file.png'
import pptFile from 'assets/img/icons/ppt-file.png'
import pdfFile from 'assets/img/icons/pdf-file.png'
import xlsFile from 'assets/img/icons/xls-file.png'
import docFile from 'assets/img/icons/doc-file.png'
import zipFile from 'assets/img/icons/zip-file.png'
import defFile from 'assets/img/icons/file.png'
import 'assets/scss/plugins/extensions/dropzone.scss'
import themeConfig from 'configs/themeConfig'
import axios from 'axios'
const colourOptions2 = [
  { value: 'All', label: 'All' },
  { value: 'Asset', label: 'Asset' },
  { value: 'Vault', label: 'Vault' },
  { value: 'Liability', label: 'Liability' },
  {
    value: 'Daily Spends',
    label: 'Daily Spends'
  },
  { value: 'Postman', label: 'Postman' }
]
const token = sessionStorage.getItem('authtoken')
const ProgrammaticallyDropzone = (props) => {
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps, open } = useDropzone({
    //accept: "image/*",
    //noClick: true,
    multiple: false,
    //noKeyboard: true,
    onDrop: (acceptedFiles) => {
      props.setfilesOndrop(acceptedFiles)
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
    }
  })

  const thumbs = files.map((file) => (
    <div className="dz-thumb" key={file.name}>
      <div className="dz-thumb-inner">
        <XSquare
          size={25}
          style={{ float: 'right' }}
          onClick={() => {
            setFiles([])
          }}
        />
        <img
          src={file.preview}
          className="dz-img"
          onError={(e) => {
            console.log(file)
            if (file.type === 'text/plain') {
              e.target.src = txtFile
            } else if (file.type === 'application/pdf') {
              e.target.src = pdfFile
            } else if (file.type === 'application/x-zip-compressed') {
              e.target.src = zipFile
            } else if (
              file.type ===
              'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            ) {
              e.target.src = docFile
            } else if (
              file.type ===
              'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            ) {
              e.target.src = xlsFile
            } else if (
              file.type ===
              'application/vnd.openxmlformats-officedocument.presentationml.presentation'
            ) {
              e.target.src = pptFile
            } else {
              e.target.src = defFile
            }
          }}
          alt={file.name}
        />
        {/* <br /> */}
        <span> {file.name}</span>
      </div>
    </div>
  ))

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  return (
    <section>
      <div {...getRootProps({ className: 'dropzone' })} onClick={open}>
        <input {...getInputProps()} />
        <p className="mx-1">
          Drag `n` drop some files here, or <b>Click to Select files</b>
        </p>
      </div>
      {thumbs.length > 0 && (
        <aside className="thumb-container-documents">{thumbs}</aside>
      )}
    </section>
  )
}
const user = JSON.parse(sessionStorage.getItem('logInUserData'))
const DocumentVault = () => {
  const [files, setfiles] = useState([])
  const [filter, setFilter] = useState([])

  const [reset, setreset] = useState(false)
  const [alias, setalias] = useState()
  const [expiry, setexpiry] = useState()
  const [desc, setdesc] = useState()
  const [documentList, setdocumentList] = useState([])

  const getDocuments = () => {
    axios
      .get(`/backendapi/documents/${user._id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        const resp = res.data
        for (let l = 0; l < resp.length; l = l + 1) {
          resp[l].desc = decryptdata(resp[l].desc)
          resp[l].id = l + 1
          resp[l].expiry = decryptdata(resp[l].expiry)
          resp[l].alias = decryptdata(resp[l].alias)
          resp[l].attachment = decryptdata(resp[l].attachment)
          resp[l].filename = decryptdata(resp[l].filename)
        }
        setdocumentList(resp)
      })
      .catch((err) => {
        console.log('err get docs', err)
      })
  }

  useEffect(() => {
    getDocuments()
  }, [])

  const setfilesOndrop = (data) => {
    setreset(false)
    setfiles(
      data.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    )
  }
  const handleFilter = (event) => {
    const Filter = []
    event?.length &&
      event.forEach((e) => {
        Filter.push({ id: e.value, name: e.label })
      })
    setFilter(Filter)
  }
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }
  const isDisabled = () => !files?.length || !expiry

  const resetDropzone = (e) => {
    e.preventDefault()
    setalias()
    setdesc()
    setexpiry()
    setreset(true)
  }
  const submitDropzone = (e) => {
    e.preventDefault()
    if (!files.length) {
      toast.error('No File Selected')
      return
    }
    getBase64(files[0])
      .then((attachment) => {
        const data = {}
        data.user = user._id
        data.type = 'Password Vault'
        data.alias = encryptdata(alias)
        data.filename = encryptdata(files[0].name)
        data.attachment = encryptdata(attachment)
        data.desc = encryptdata(desc)
        data.expiry = encryptdata(expiry)
        axios
          .post('/backendapi/documents/add', data, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then((res) => {
            // resetDropzone()
            toast.success('File uploaded successfully')
            getDocuments()
          })
          .catch((err) => {
            setalias()
            setdesc()
            setexpiry()
            setreset(true)
            console.log('err docs', err)
            toast.error('Something went wrong please try again')
          })
      })
      .catch()
  }

  return (
    <React.Fragment>
      <h2 className="warning spacing nodisplay">My Documents</h2>
      <div key={Math.random()}></div>
      <Row>
        <Col sm="12">
          <Card>
            <CardHeader>
              <CardTitle>Upload any file, scans, documents</CardTitle>
            </CardHeader>

            <CardBody>
              <Row>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <Input
                      type="text"
                      name="name"
                      id="nameMultiname"
                      value={alias}
                      placeholder="Attachment Name / Alias"
                      onChange={(e) => setalias(e.target.value)}
                    />
                    <Label
                      className={
                        themeConfig.theme === 'dark'
                          ? 'dark-label'
                          : 'light-label'
                      }
                      for="nameMultiname"
                    >
                      Attachment Name / Alias
                    </Label>
                  </FormGroup>

                  <FormGroup className="form-label-group">
                    <Input
                      className="input-label"
                      type="Date"
                      name="name"
                      value={expiry}
                      id="nameMultiExpiry"
                      placeholder="Expiry Date"
                      onChange={(e) => setexpiry(e.target.value)}
                    />
                    <Label
                      className={
                        themeConfig.theme === 'dark'
                          ? 'dark-label'
                          : 'light-label'
                      }
                      for="nameMultiExpiry"
                    >
                      Expiry Date
                    </Label>
                  </FormGroup>
                  <FormGroup className="form-label-group">
                    <Input
                      className="input-label"
                      type="textarea"
                      name="name"
                      value={desc}
                      id="nameMultiDescription"
                      placeholder="Description"
                      onChange={(e) => setdesc(e?.target?.value)}
                    />
                    <Label
                      className={
                        themeConfig.theme === 'dark'
                          ? 'dark-label'
                          : 'light-label'
                      }
                      for="nameMultiDescription"
                    >
                      Description
                    </Label>
                  </FormGroup>
                  <FormGroup
                    className="form-label-group last-row-form"
                    style={{ textAlign: 'right' }}
                  >
                    <Button.Ripple
                      outline
                      color="secondary"
                      type="reset"
                      className="button-label"
                      onClick={resetDropzone}
                    >
                      Reset
                    </Button.Ripple>{' '}
                    <Button.Ripple
                      color="warning"
                      type="reset"
                      className="button-label"
                      onClick={submitDropzone}
                      disable={isDisabled ? 'true' : 'false'}
                    >
                      Add
                    </Button.Ripple>
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <ProgrammaticallyDropzone
                    setfilesOndrop={setfilesOndrop}
                    resetDropzone={reset}
                  />
                </Col>
              </Row>
              <div style={{ marginTop: '70px' }}>
                <hr />
              </div>

              <Row>
                <Col sm="12">
                  <Card>
                    <div style={{ display: 'flex' }}>
                      <Col>
                        <CardTitle>Download Documents</CardTitle>
                      </Col>
                      <Col className="form-label-group">
                        <Select
                          isMulti
                          id="optionSelect"
                          className="React"
                          classNamePrefix="select"
                          isClearable={true}
                          value={filter.map((n) => {
                            const as = colourOptions2.filter((e) => {
                              return e.value === n.id
                            })
                            return {
                              value: as[0].value,
                              label: as[0].label
                            }
                          })}
                          options={colourOptions2}
                          placeholder="Field Type..."
                          onChange={(e) => {
                            handleFilter(e)
                          }}
                        />
                        <Label for="nameMulti">Field Type</Label>
                      </Col>
                    </div>
                    <CardBody>
                      <div className="vx-collapse">
                        <CardHeader>
                          <Col>
                            <b>Attachment Name / Alias</b>
                          </Col>
                          <Col>
                            <b>File Name</b>
                          </Col>
                          <Col>
                            <b>Created At</b>
                          </Col>
                          <Col>
                            <b>Document Type</b>
                          </Col>
                        </CardHeader>
                        <hr />
                        {documentList.map((collapseItem) => {
                          return (
                            <>
                              <CardHeader key={collapseItem.id}>
                                <Col>{collapseItem?.alias}</Col>
                                <Col>{collapseItem?.filename}</Col>
                                <Col>
                                  {collapseItem?.createdAt?.split('T')?.[0]}
                                </Col>
                                <Col>{collapseItem?.type}</Col>

                                <CardTitle>
                                  <a
                                    href={collapseItem.attachment}
                                    download={collapseItem?.filename}
                                    tabIndex="_balnk"
                                  >
                                    <Download
                                      size={15}
                                      className="collapse-icon"
                                    />
                                  </a>
                                </CardTitle>
                              </CardHeader>
                              <hr />
                            </>
                          )
                        })}
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}
export default DocumentVault
