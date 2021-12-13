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
import 'react-toastify/dist/ReactToastify.css'
//import 'assets/scss/plugins/extensions/toastr.scss'
import { encryptdata, decryptdata } from 'utility/context/SecurityTool'
import { Download, XSquare, Trash2, Eye, ChevronLeft, ChevronRight } from 'react-feather'
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
  const [modal, setmodal] = useState(false);
  const [selectedforpreview,setselectedforpreview] = useState();
  const [selecteddoc,setselecteddoc] = useState();
  const [selectedatt, setselectedatt] = useState([]);
  //const [previous, setprevious] = useState();
  //const [next, setnext] = useState();
  const [previdx, setprevidx] = useState(0);
  const [files, setfiles] = useState([])
  const [filter, setFilter] = useState([])
  const [loading, setloading] = useState(false)
  const [reset, setreset] = useState(false)
  const [alias, setalias] = useState()
  const [expiry, setexpiry] = useState()
  const [desc, setdesc] = useState()
  const [documentList, setdocumentList] = useState([])
  const [bloburl, setbloburl] = useState()

  const toggleModal = () => {
    setmodal(!modal)
  }


  const preview = (id) => {
    setloading(true)
    //setvideo(type === 'Video' ? true : false)
    
    const token = sessionStorage.getItem('authtoken')
    axios
      .get(`/backendapi/sender/msg/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        setselectedforpreview(res.data[0]);
        
        const attm = decryptdata(res.data[0]?.media);
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
        setbloburl(blobUrl)
        setloading(false)
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
    return prom;
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

  const deletemedia = (id) => {
    //axios.defaults.baseURL = 'http://localhost:5000'
    axios
      .delete(`/backendapi/document/media/deletebyid/${id}/${selecteddoc}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
        }
      })
      .then((res) => {
        
        preview(selectedatt[previdx-1]);
        previdx !== 0 ? setprevidx(previdx-1) : toggleModal()
        toast.success('Message deleted successfully!')
      })
      .catch()
  }

  const submitDropzone = async (e) => {
    e.preventDefault()
    if (!files.length) {
      toast.error('No File Selected')
      return
    }
    const attList = [];
    const data = {}
    data.user = user._id
    data.type = 'Document Vault'
    data.alias = encryptdata(alias)
    //data.attachment = encryptdata(attachment)
    data.desc = encryptdata(desc)
    data.expiry = encryptdata(expiry)

  

    for (let i = 0; i < files.length; i++) {
      const encf = await getBase64(files[i]);
      
      attList.push({
        media: encryptdata(encf),
        name: files[i].name,
        type: files[i].type,
      })
    }
    data.attachment = attList;
    //const attachment =  await getBase64(files[0])
    //console.log('attachment123',attachment);
    //.then((attachment) => {
      //axios.defaults.baseURL = 'http://localhost:5000'
    

      const resolveAfter3Sec = axios
        .post('/backendapi/documents/add', data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
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
    toast.promise(
      resolveAfter3Sec,
      {
        pending: 'Uploading ...',
        success: 'File uploaded successfully',
        error: 'Something went wrong'
      })

    // })
    // .catch()
  }

  const deletedoc = (id) => {
    //axios.defaults.baseURL = 'http://localhost:5000'
    axios.delete('/backendapi/document/deletebyid/' + id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      getDocuments();
      toast.success("Document Deleted Successfully")
    })
  }
  return (
    
    <React.Fragment>
      <Modal isOpen={modal} toggle={()=>{toggleModal();setprevidx()}} centered={true} size="lg">
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
          Preview {previdx + 1} of {selectedatt?.length}
        </ModalHeader>
        <ModalBody>
          {loading && <Spinner color="warning" size="sm" />}
          {!loading && <div >
            
            <a
             href={bloburl}
             //download
             download={selectedforpreview?.name}
             tabIndex="_balnk"
              style={{ margin: '10px' }}
            >
              <Download
                size={20}
                className="collapse-icon"
              />
            </a>
            {selectedatt.length > 1 && previdx !==0 && 
            <Trash2
              style={{ margin: '5px' }}
              size={20}
              className="collapse-icon"
              onClick={() => { deletemedia(selectedforpreview._id) }}
            />}
            
            {(selectedatt.length > previdx+1) &&
            <ChevronRight
              style={{ margin: '5px' , float: 'right'}}
              size={20}
              className="collapse-icon"
              //onClick={() => { preview(next); setprevious(selectedatt[previdx]); (selectedatt.length > previdx+1) ? (setnext(selectedatt[previdx+2])) : setnext();setprevidx(previdx+1); }}
              onClick={() => { preview(selectedatt[previdx+1]); setprevidx(previdx+1); }}
            />}

            { ( previdx > 0) && <ChevronLeft
              style={{ margin: '5px', float: 'right' }}
              size={20}
              className="collapse-icon"
              onClick={() => { preview(selectedatt[previdx-1]); setprevidx(previdx-1); }}
              //onClick={() => { preview(previous); setprevious((previdx-2) < 0 ? setprevious() : selectedatt[previdx-2]);setnext(selectedatt[previdx+2]);setprevidx(previdx-1); }}
            /> }
            <iframe
              style={{ height: '400px', width: '100%' }}
              title='Aaq'
              src={`${bloburl}#toolbar=0`}
            /></div>}
        </ModalBody>
      </Modal>
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
                        onClick={() => { resetDropzone() }}
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
                            <b>View</b>
                          </Col>
                          <Col>
                            <b>Name / Alias</b>
                          </Col>
                          <Col>
                            <b>Expiry</b>
                          </Col>
                          <Col>
                            <b>Created At</b>
                          </Col>
                          <Col>
                            <b>Document Type</b>
                          </Col>
                          <Col>
                            <b>Actions</b>
                          </Col>
                        </CardHeader>
                        <hr />
                        {documentList.map((collapseItem) => {
                          return (
                            <>
                              <CardHeader key={collapseItem.id}>
                                <Col width={10}><Eye
                                    style={{ margin: '5px' }}
                                    size={20}
                                   // className="collapse-icon"
                                    onClick={() =>{ setselecteddoc(collapseItem._id); setselectedatt(collapseItem.attachment); toggleModal(); preview(collapseItem.attachment[0]);}}
                                  /></Col>
                                <Col>{collapseItem?.alias} </Col>
                                <Col>{collapseItem?.expiry}</Col>
                                <Col>
                                  {collapseItem?.createdAt?.split('T')?.[0]}
                                </Col>
                                <Col>{collapseItem?.type}</Col>
                                <Col>
                                {/* <Eye
                                    style={{ margin: '5px' }}
                                    size={20}
                                    className="collapse-icon"
                                    onClick={() =>{ setselectedatt(collapseItem.attachment); toggleModal(); preview(collapseItem.attachment[0]); if(collapseItem.attachment.length > 1) setnext(collapseItem.attachment[1]) }}
                                  /> */}

                                  <a
                                    href={collapseItem.attachment}
                                    download={collapseItem?.filename}
                                    tabIndex="_balnk"
                                    style={{ margin: '10px' }}
                                  >
                                    <Download
                                      size={20}
                                      className="collapse-icon"
                                    />
                                  </a>

                                  <Trash2
                                    style={{ margin: '5px' }}
                                    size={20}
                                    className="collapse-icon"
                                    onClick={() => { deletedoc(collapseItem._id) }}
                                  />
                                  
                                  {/* <CardTitle>
                                     
                      <Button.Ripple
                      color="warning"
                      type="submit"
                      className="button-label"
                      //onClick={submitDropzone}
                      //disable={isDisabled ? 'true' : 'false'}
                    >
                      View 
                    </Button.Ripple>
                    
                                </CardTitle> */}
                                </Col>

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
