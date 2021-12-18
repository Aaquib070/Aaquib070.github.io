import React, { useState, useEffect } from 'react'
import {
  Row,
  Col,
  Card,
  FormGroup,
  Form,
  Input,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  Modal,
  ModalBody,
  Spinner,
  ModalHeader
} from 'reactstrap'
import { toast } from 'react-toastify'
import PopUp from 'utility/Popup'
import 'react-toastify/dist/ReactToastify.css'
import DataTable from 'react-data-table-component'
import { encryptdata, decryptdata } from 'utility/context/SecurityTool'
import {
  Download,
  XSquare,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from 'react-feather'
import Select from 'react-select'
import { useDropzone } from 'react-dropzone'
import Draggable from 'react-draggable'
import {
  txtFileIcon,
  pptFileIcon,
  pdfFileIcon,
  xlsFileIcon,
  docFileIcon,
  zipFileIcon,
  defFileIcon
} from 'export'
import 'assets/scss/plugins/extensions/dropzone.scss'
import themeConfig from 'configs/themeConfig'
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
    multiple: true,
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
            if (file.type === 'text/plain') {
              e.target.src = txtFileIcon
            } else if (file.type === 'application/pdf') {
              e.target.src = pdfFileIcon
            } else if (file.type === 'application/x-zip-compressed') {
              e.target.src = zipFileIcon
            } else if (
              file.type ===
              'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            ) {
              e.target.src = docFileIcon
            } else if (
              file.type ===
              'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            ) {
              e.target.src = xlsFileIcon
            } else if (
              file.type ===
              'application/vnd.openxmlformats-officedocument.presentationml.presentation'
            ) {
              e.target.src = pptFileIcon
            } else {
              e.target.src = defFileIcon
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
  const columns = [
    {
      name: 'View',
      sortable: false,
      minWidth: '110px',
      cell: function EditComp(row) {
        return (
          <Eye
            style={{ cursor: 'pointer' }}
            size={20}
            onClick={() => {
              // setselecteddoc(row._id)
              setselectedatt(row.attachment)
              toggleModal()
              preview(row.attachment[0])
            }}
          />
        )
      }
    },
    {
      name: 'Name / Alias',
      selector: 'alias',
      sortable: true
    },
    {
      name: 'Expiry',
      selector: 'expiry',
      sortable: true
    },
    {
      name: 'Created At',
      sortable: true,
      cell: function EditComp(row) {
        return row?.createdAt?.split('T')?.[0]
      }
    },
    {
      name: 'Type',
      selector: 'type',
      sortable: true
    },
    {
      name: 'Action',
      sortable: false,
      cell: function EditComp(row) {
        return (
          <>
            <Download
              size={20}
              className="collapse-icon mr-1"
              onClick={() => {
                downloadAll(row.attachment)
              }}
            />
            <Trash2
              //style={{ cursor: 'pointer' }}
              size={20}
              className="collapse-icon csp"
              onClick={() => {
                setDeleteId(row._id)
                setopen(true)
              }}
            />
          </>
          // <a
          //   href={row.attachment}
          //   download={row?.filename}
          //   tabIndex="_blank"
          //   style={{
          //     margin: '10px',
          //     cursor: 'pointer'
          //   }}
          // >

          // </a>
        )
      }
    }
    // {
    //   name: 'Delete',
    //   sortable: false,
    //   cell: function EditComp(row) {
    //     return (
    //       <Trash2
    //         style={{ margin: '5px', cursor: 'pointer' }}
    //         size={20}
    //         className="collapse-icon"
    //         onClick={() => {
    //           setDeleteId(row._id)
    //           setopen(true)
    //         }}
    //       />
    //     )
    //   }
    // }
  ]
  const [modal, setmodal] = useState(false)
  const [selectedforpreview, setselectedforpreview] = useState()
  // const [selecteddoc, setselecteddoc] = useState()
  const [selectedatt, setselectedatt] = useState([])
  //const [previous, setprevious] = useState();
  //const [next, setnext] = useState();
  const [previdx, setprevidx] = useState(0)
  const [files, setfiles] = useState([])
  const [filter, setFilter] = useState([])
  const [loading, setloading] = useState(false)
  const [reset, setreset] = useState(false)
  const [alias, setalias] = useState()
  const [expiry, setexpiry] = useState()
  const [desc, setdesc] = useState()
  const [documentList, setdocumentList] = useState([])
  const [searchresult, setsearchresult] = useState([])
  const [bloburl, setbloburl] = useState()
  const [open, setopen] = useState(false)
  const [deleteId, setDeleteId] = useState(false)

  const search = (value) => {
    const result = documentList.filter((item) => {
      const startsWithCondition =
        item.desc.toLowerCase().startsWith(value.toLowerCase()) ||
        item.alias.toLowerCase().startsWith(value.toLowerCase())

      const includesCondition =
        item.desc.toLowerCase().includes(value.toLowerCase()) ||
        item.alias.toLowerCase().includes(value.toLowerCase())

      if (startsWithCondition || includesCondition) {
        return true
      }
      return false
    })
    setsearchresult(result)
  }
  const toggleModal = () => {
    setmodal(!modal)
  }

  const preview = (id) => {
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

        const attm = decryptdata(res.data[0]?.media)

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
          toggleModal()
          toast.warning('Something went wrong')
        }
      })
  }

  const downloadAll = (ids) => {
    // setloading(true)

    ids.forEach((id) => {
      const token = sessionStorage.getItem('authtoken')
      axios
        .get(`/backendapi/sender/msg/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          //setselectedforpreview(res.data[0])

          const attm = decryptdata(res.data[0]?.media)
          const byteCharacters = atob(attm.split('base64,')[1])
          const byteNumbers = new Array(byteCharacters.length)
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i)
          }
          const byteArray = new Uint8Array(byteNumbers)
          const blob = new Blob([byteArray], {
            type: res.data[0]?.type
          })
          const blobUrl = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = blobUrl
          link.setAttribute('download', `${res.data[0]?.name}`)

          // Append to html link element page
          document.body.appendChild(link)

          // Start download
          link.click()

          // Clean up and remove the link
          link.parentNode.removeChild(link)
          //setbloburl(blobUrl)
          //setloading(false)
        })
    })
  }

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
          //resp[l].filename = decryptdata(resp[l].filename)
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
    const prom = new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
    return prom
  }
  const isDisabled = () => !files?.length || !expiry

  const resetDropzone = () => {
    //e?.preventDefault()
    setalias()
    setdesc()
    setexpiry()
    setfiles()
    setreset(true)
  }

  // const deletemedia = (id) => {
  //   //axios.defaults.baseURL = 'http://localhost:5000'
  //   axios
  //     .delete(`/backendapi/document/media/deletebyid/${id}/${selecteddoc}`, {
  //       headers: {
  //         Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
  //       }
  //     })
  //     .then((res) => {
  //       getDocuments()
  //       preview(selectedatt[previdx - 1])
  //       previdx !== 0 ? setprevidx(previdx - 1) : toggleModal()
  //       toast.success('Message deleted successfully!')
  //     })
  //     .catch()
  // }

  const submitDropzone = async (e) => {
    e.preventDefault()
    if (!files?.length) {
      toast.error('No File Selected')
      return
    }
    const attList = []
    const data = {}
    data.user = user._id
    data.type = 'Document Vault'
    data.alias = encryptdata(alias)
    //data.attachment = encryptdata(attachment)
    data.desc = encryptdata(desc)
    data.expiry = encryptdata(expiry)

    for (let i = 0; i < files.length; i++) {
      const encf = await getBase64(files[i])

      attList.push({
        media: encryptdata(encf),
        name: files[i].name,
        type: files[i].type
      })
    }
    data.attachment = attList
    //const attachment =  await getBase64(files[0])
    //console.log('attachment123',attachment);
    //.then((attachment) => {
    //axios.defaults.baseURL = 'http://localhost:5000'

    const resolveAfter3Sec = axios.post('/backendapi/documents/add', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    resolveAfter3Sec
      .then((res) => {
        resetDropzone()
        //toast.success('File uploaded successfully')
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
    toast.promise(resolveAfter3Sec, {
      pending: 'Uploading ...',
      success: 'File uploaded successfully',
      error: 'Something went wrong'
    })

    // })
    // .catch()
  }

  const deletedoc = () => {
    //axios.defaults.baseURL = 'http://localhost:5000'
    axios
      .delete(`/backendapi/document/deletebyid/${deleteId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        getDocuments()
        toast.success('Document Deleted Successfully')
      })
  }
  return (
    <React.Fragment>
      <PopUp
        handleConfirm={() => {
          deletedoc()
          setopen(false)
        }}
        isOpen={open}
        closeModal={() => setopen(false)}
      />
      <Draggable>
        <Modal
          isOpen={modal}
          toggle={() => {
            toggleModal()
            setprevidx(0)
          }}
          centered={true}
          size="lg"
        >
          <ModalHeader
            toggle={() => {
              toggleModal()
              setprevidx(0)
            }}
            cssModule={{ 'modal-title': 'w-100 text-center' }}
          >
            <Row>
              <Col>
                {!loading && (
                  <a
                    href={bloburl}
                    download={selectedforpreview?.name}
                    tabIndex="_balnk"
                    style={{ margin: '10px', cursor: 'pointer' }}
                  >
                    <Download size={25} className="collapse-icon" />
                  </a>
                )}
                {!loading && selectedatt.length > 1 && previdx !== 0 && (
                  <Trash2
                    style={{ margin: '5px', cursor: 'pointer' }}
                    size={25}
                    className="collapse-icon"
                    onClick={() => {
                      //deletemedia(selectedforpreview._id)
                      setDeleteId(selectedforpreview._id)
                      setopen(true)
                    }}
                  />
                )}
              </Col>
              <Col
                style={{
                  color: 'var(--warning)',
                  fontSize: '1.45rem',
                  fontWeight: 'bold',
                  letterSpacing: '1px'
                }}
              >
                Preview {previdx + 1} of {selectedatt?.length}
              </Col>

              <Col
                style={{
                  justifyContent: 'center'
                }}
              >
                {previdx > 0 && !loading && (
                  <ChevronLeft
                    style={{ cursor: 'pointer' }}
                    size={25}
                    onClick={() => {
                      preview(selectedatt[previdx - 1])
                      setprevidx(previdx - 1)
                    }}
                  />
                )}
                {selectedatt.length > previdx + 1 && !loading && (
                  <ChevronRight
                    size={25}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      preview(selectedatt[previdx + 1])
                      setprevidx(previdx + 1)
                    }}
                  />
                )}
              </Col>
            </Row>
          </ModalHeader>

          <ModalBody className="justify-content-center">
            <PopUp
              handleConfirm={() => {
                deletedoc()
                setopen(false)
              }}
              isOpen={open}
              closeModal={() => setopen(false)}
            />
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
                  <Form>
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
                        type="text"
                        name="name1"
                        value={desc}
                        id="nameMultiDescription1"
                        placeholder="Description"
                        onChange={(e) => setdesc(e?.target?.value)}
                      />
                      <Label
                        className={
                          themeConfig.theme === 'dark'
                            ? 'dark-label'
                            : 'light-label'
                        }
                        for="nameMultiDescription1"
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
                        onClick={() => {
                          resetDropzone()
                        }}
                      >
                        Reset
                      </Button.Ripple>{' '}
                      <Button.Ripple
                        color="warning"
                        type="submit"
                        className="button-label"
                        onClick={submitDropzone}
                        disable={isDisabled ? 'true' : 'false'}
                      >
                        Add
                      </Button.Ripple>
                    </FormGroup>
                  </Form>
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
                        <h3 className="mt-1">Documents List</h3>
                      </Col>
                      <Col>
                        <Input
                          type="text"
                          style={{
                            height: '75%',
                            borderRadius: '5rem',
                            fontSize: '1rem'
                          }}
                          onChange={(e) => search(e.target.value)}
                          placeholder="Search"
                          className="placeholder"
                        />
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
                      <DataTable
                        width="200"
                        columns={columns}
                        data={
                          searchresult.length > 0 ? searchresult : documentList
                        }
                        noHeader={true}
                        responsive
                        pointerOnHover
                        selectableRowsHighlight
                        customStyles={selectedStyle}
                        sortIcon={<ChevronDown />}
                      />
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
