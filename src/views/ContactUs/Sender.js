/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  ModalBody,
  ModalHeader,
  Modal
} from 'reactstrap'
import Autocomplete from '@mui/material/Autocomplete'
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import ReactAudioPlayer from 'react-audio-player'

import Radio from 'common/RadioVuexy'
import Ccube from 'utility/Ccube'
import MsgHistory from './MessageHistory'

import { connect } from 'react-redux'
import Select from 'react-select'
import { ReactMediaRecorder } from 'react-media-recorder'
import { Mic, MicOff } from 'react-feather'
import 'react-voice-recorder/dist/index.css'
import classnames from 'classnames'
import {
  scheduleNewMessage,
  getScheduledMessages,
  editMessage
} from 'redux/actions/sender/index'
import { getData, addData } from 'redux/actions/data-list/'
import { Input, Button, FormGroup, Label, Spinner } from 'reactstrap'
import 'assets/scss/pages/data-list.scss'
import 'assets/scss/components/app-loader.scss'
import { toast } from 'react-toastify'
import Sidebar from '../Nominee/NomineeSidebar'

import themeConfig from 'configs/themeConfig'
const msgTypes = [
  {
    value: 'Attachment',
    label: 'Attachment',
    color: '#00B8D9',
    isFixed: true
  },
  {
    value: 'Text',
    label: 'Text',
    color: '#00B8D9',
    isFixed: true
  },
  {
    value: 'Voice',
    label: 'Voice',
    color: '#0052CC',
    isFixed: true
  },
  {
    value: 'Video',
    label: 'Video',
    color: '#0052CC',
    isFixed: true
  }
]
const currdt = new Date()
const disablePastDate = () => {
  const dd = String(currdt.getDate() + 1).padStart(2, '0')
  const mm = String(currdt.getMonth() + 1).padStart(2, '0') //January is 0!
  const yyyy = currdt.getFullYear()
  return `${yyyy}-${mm}-${dd}`
}

const ContactUs = (props) => {
  const selectNomineeRef = React.createRef()
  const [recVideo, setRecVideo] = useState()
  const selecttype = React.createRef()
  const [date, setdate] = useState(currdt.toISOString().substr(0, 10) + 1)
  const [sameAsAbove, setsameAsAbove] = useState(false)
  const [signature, setsignature] = useState('')
  const [desc, setdesc] = useState('')
  const [type, settype] = useState('')
  const [edititem, setedititem] = useState(false)
  const [edititemId, setedititemId] = useState(null)
  const [file, setfile] = useState('')
  const [sidebar, setsidebar] = useState(false)
  const [title, settitle] = useState('')
  const [addNew, setaddNew] = useState(false)
  const [currentData, setcurrentData] = useState(null)
  const [isLoading, setisLoading] = useState(false)
  const [nominees, setnominees] = useState([])
  const [nomineeslist, setnomineeslist] = useState([])
  const [modal, setmodal] = useState(false)
  const [fname, setfname] = useState('')
  const [fmail, setfmail] = useState('')
  const [fphone, setfphone] = useState('')
  const [rname, setrname] = useState('')
  const [remail, setremail] = useState('')
  const [rphone, setrphone] = useState('')
  const [nomineeOption2, setnomineeOption2] = useState([]);
  const [nomineeOption, setnomineeOption] = useState([
    {
      value: 'Add Nominee',
      label: 'Add Nominee',
      color: '#00B8D9',
      isFixed: false
    }
  ])
  const autocomp = (n) => {
    if(n?.value) {
      const nom = nomineeslist.filter(e=> {return e._id === n.value});
      setrname(nom[0].name);
      setrphone(nom[0].email);
      setremail(nom[0].primaryContact);
    } else {
      setrname(n);
      setrphone('');
      setremail('');
    }

  }
  const handleCheck = () => {
    !sameAsAbove && setdate()
    setsameAsAbove(!sameAsAbove)
  }
  const handleAddNew = () => {
    const arr = {
      fname,
      fmail,
      fphone
    }
    console.log('arr', arr)
  }
  const clearCustomField = () => {
    setfname('')
    setfmail('')
    setfphone('')
  }
  const toggleModal = () => {
    if (modal) {
      clearCustomField()
    }
    setmodal(!modal)
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
  useEffect(() => {
    props.getScheduledMessages()
    !props.listLoading && props.getData()
  }, [])
  const handleSidebar = (boolean, addNewTemp = false) => {
    setsidebar(boolean)
    if (addNewTemp) {
      setcurrentData(null)
      setaddNew(true)
    }
  }
  useEffect(() => {
    if (props.dataList.data.length) {
      const nomineeOptionTemp = nomineeOption
      const nomineeOptionTemp2 = nomineeOption2
      setnomineeslist( props.dataList.data);
      props.dataList.data.forEach((e) => {
        const temp = {
          value: e._id,
          label: `${e.name} - ${e.relation}`,
          color: '#00B8D9',
          isFixed: false
        }
        nomineeOptionTemp.push(temp)
        nomineeOptionTemp2.push(temp)
      })
      setnomineeOption(nomineeOptionTemp)
      setnomineeOption2(nomineeOptionTemp2)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.dataList.data])

  const addData = async (obj) => {
    setisLoading(true)
    try {
      await props.addData(obj)
      setrname();
      setrphone();
      setremail();
      setisLoading(false)
      handleSidebar(false, true)
    } catch {
      setisLoading(false)
      toast.error('Add Nominee Failed! Please contact admin')
    }
  }

  const editItem = (item) => {
    const { date, desc, nominees, signature, title, type, _id } = item
    setedititem(true)
    setedititemId(_id)
    setdate(date.split('T')[0])
    setdesc(desc)
    setnominees(nominees)
    setsignature(signature)
    settitle(title)
    settype(type)
  }
  return (
    <div
      className={`data-list ${props.thumbView ? 'thumb-view' : 'list-view'}`}
    >
      <Sidebar
        show={sidebar}
        data={currentData}
        updateData={props.addData}
        addData={addData}
        isLoading={isLoading}
        handleSidebar={handleSidebar}
        thumbView={props.thumbView}
        getData={props.getData}
        dataParams={props.parsedFilter}
        addNew={addNew}
      />
      <div
        className={classnames('data-list-overlay', {
          show: sidebar
        })}
        onClick={() => handleSidebar(false, true)}
      />
      <h2 className="warning spacing nodisplay">Sender</h2>
      <Card>
        <CardHeader>
          <CardTitle>Schedule a Message</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
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
                  Add New Receiver
                </ModalHeader>
                <ModalBody>
                  <FormGroup className="form-label-group">
                    <Input
                      name="fname"
                      id="fname"
                      value={fname}
                      placeholder="Name"
                      onChange={(e) => {
                        setfname(e.target.value)
                      }}
                    />
                    <Label for="EmailMulti">Name</Label>
                  </FormGroup>
                  <FormGroup className="form-label-group">
                    <Input
                      type="email"
                      name="fmail"
                      id="fmail"
                      value={fmail}
                      placeholder="Email"
                      onChange={(e) => {
                        setfmail(e.target.value)
                      }}
                    />
                    <Label for="EmailMulti">Email</Label>
                  </FormGroup>
                  <FormGroup className="form-label-group">
                    <Input
                      type="tel"
                      name="Contact"
                      id="Contact"
                      value={fphone}
                      placeholder="Contact"
                      onChange={(e) => {
                        setfphone(e.target.value)
                      }}
                    />
                    <Label for="EmailMulti">Contact</Label>
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
                      onClick={clearCustomField}
                    >
                      Cancel
                    </Button.Ripple>
                    <Button.Ripple
                      color="warning"
                      type="submit"
                      className="button-label"
                      onClick={handleAddNew}
                    >
                      Add
                    </Button.Ripple>
                  </FormGroup>
                </ModalBody>
              </Modal>
            </Col>
          </Row>
          <Row>
            <Col lg="8" md="6" sm="12">
              <Row className="match-height">
                <Col md="12">
                  <Row>
                    <Col sm="">
                      <FormGroup className="form-label-group">
                        <Input
                          type="text"
                          id="title"
                          className="input-label"
                          placeholder="Title"
                          value={title}
                          onChange={(e) => {
                            settitle(e.target.value)
                          }}
                        />
                        <Label
                          for="title"
                          className={
                            themeConfig.theme === 'dark'
                              ? 'dark-label'
                              : 'light-label'
                          }
                        >
                          Title
                        </Label>
                      </FormGroup>
                    </Col>
                   
                      <Col sm="">
                        <FormGroup className="form-label-group">
                          {/* <Select
                            isMulti
                            name="nominee"
                            options={nomineeOption}
                            value={nominees.map((n) => {
                              return { value: n.id, label: n.name }
                            })}
                            ref={selectNomineeRef}
                            className="React"
                            classNamePrefix="select"
                            placeholder="Nominee"
                            id="nominee"
                            onChange={changeNominee}
                          /> */}
                          
                          <Autocomplete
                          autoSelect
                          freeSolo
                            id="combo-box-demo"
                            options={nomineeOption2}
                            onChange={(e,n)=>{autocomp(n)}}
                           // sx={{ width: 300 }}
                            renderInput={(params) =>{
                              return (
                                <div ref={params.InputProps.ref}>
                                  <input id='rec' type="text" {...params.inputProps} placeholder='Reciver' className="input-label form-control" autoFocus />
                              </div>)
                            }} 
                            
                          />
                          {/* <Label for="rec">Select Nominee</Label> */}
                        </FormGroup>
                      </Col>
                      
                      
                      </Row>
                      <Row>

                    <Col sm="">
                      <FormGroup className="form-label-group">
                        <Input
                          type="text"
                          id="title"
                          className="input-label"
                          placeholder="Reciver Email"
                          value={remail}
                          onChange={(e) => {
                            setremail(e.target.value)
                          }}
                        />
                        <Label
                          for="title"
                          className={
                            themeConfig.theme === 'dark'
                              ? 'dark-label'
                              : 'light-label'
                          }
                        >
                          Reciver Email
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="">
                      <FormGroup className="form-label-group">
                        <Input
                          type="text"
                          id="title"
                          className="input-label"
                          placeholder="Reciver Phone"
                          value={rphone}
                          onChange={(e) => {
                            setrphone(e.target.value)
                          }}
                        />
                        <Label
                          for="title"
                          className={
                            themeConfig.theme === 'dark'
                              ? 'dark-label'
                              : 'light-label'
                          }
                        >
                          Reciver Phone
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="">
                      <FormGroup className="form-label-group">
                        <Select
                          className="React"
                          classNamePrefix="select"
                          name="color"
                          options={msgTypes}
                          ref={selecttype}
                          isClearable={true}
                          isDisabled={edititem}
                          placeholder={edititem ? type : 'Message Type'}
                          onChange={(e) => {
                            const val = e ? e.value : ''
                            settype(val)
                          }}
                        />
                      </FormGroup>
                    </Col>
                    {type && (
                      <Col sm="">
                        <FormGroup className="form-label-group">
                          <Input
                            type="date"
                            className="input-label"
                            name="date"
                            id="exampleDate"
                            style={{zIndex: 1}}
                            placeholder="Enter Date"
                            disabled={!!sameAsAbove}
                            onKeyDown={(e) => e.preventDefault()}
                            min={disablePastDate()}
                            onChange={(e) => setdate(e.target.value)}
                            value={date}
                          />
                          <Label
                            for="exampleDate"
                            className={
                              themeConfig.theme === 'dark'
                                ? 'dark-label'
                                : 'light-label'
                            }
                          >
                            Date *
                          </Label>
                        </FormGroup>
                      </Col>
                    )}
                  </Row>
                  {type === 'Attachment' && (
                    <FormGroup className="form-label-group">
                      <Input
                        type="file"
                        name="file"
                        id="exampleFile"
                        className="input-label form-control"
                        placeholder="File"
                        onChange={(e) => setfile(e.target.value)}
                        value={file}
                      />
                      <Label
                        for="exampleFile"
                        className={
                          themeConfig.theme === 'dark'
                            ? 'dark-label'
                            : 'light-label'
                        }
                      >
                        File *
                      </Label>
                    </FormGroup>
                  )}
                  {type === 'Video' && (
                    // <div className='video-recorder'>
                    // 	<VideoRecorder
                    // 		onRecordingComplete={videoBlob => {
                    // 			console.log('videoBlob', videoBlob)
                    // 		}}
                    // 	/>

                    // </div>
                    <RecordView recording={setRecVideo} />
                  )}

                  {type === 'Voice' && <AudioRec recording={setRecVideo} />}
                  {type && (
                    <>
                      <FormGroup className="form-label-group">
                        <Input
                          type="textarea"
                          placeholder="Description"
                          className="input-label"
                          rows="3"
                          id="description"
                          value={desc}
                          onChange={(e) => {
                            setdesc(e.target.value)
                          }}
                        />
                        <Label
                          for="description"
                          className={
                            themeConfig.theme === 'dark'
                              ? 'dark-label'
                              : 'light-label'
                          }
                        >
                          Description
                        </Label>
                      </FormGroup>
                      <Row>
                        <Col sm="">
                          <FormGroup className="form-label-group">
                            <Input
                              type="textarea"
                              placeholder="Signature"
                              className="input-label"
                              rows="1"
                              id="signature"
                              value={signature}
                              onChange={(e) => {
                                setsignature(e.target.value)
                              }}
                            />
                            <Label
                              for="description"
                              className={
                                themeConfig.theme === 'dark'
                                  ? 'dark-label'
                                  : 'light-label'
                              }
                            >
                              Signature
                            </Label>
                          </FormGroup>
                        </Col>{' '}
                        <Col sm="" className="d-flex">
                          <Col md="6" sm="12">
                            <FormGroup className="mt-75" check>
                              <Input
                                type="checkbox"
                                checked={sameAsAbove}
                                onChange={() => handleCheck()}
                              />
                              <Label check> Afterlife delivery</Label>
                            </FormGroup>
                          </Col>

                          <Col md="6" sm="12" style={{ display: 'flex' }}>
                            <Button
                              color="white"
                              outline
                              onClick={toggleModal}
                              className="add-button"
                              id="addButton"
                              onMouseEnter={() => animateLabel(true)}
                              onMouseLeave={() => animateLabel(false)}
                              style={{
                                backgroundColor: 'var(--warning)'
                              }}
                            >
                              +
                            </Button>
                            <div className="label-div">
                              <span id="buttonLabel" className="no-display">
                                Message Receiver
                              </span>
                            </div>
                          </Col>
                        </Col>
                      </Row>
                    </>
                  )}
                  <div
                    className="d-flex justify-content-end"
                    style={{ textAlign: 'right' }}
                  >
                    <Button.Ripple
                      outline
                      className="button-label"
                      color="secondary"
                      onClick={() => {
                        settitle('')
                        setedititem(false)
                        settype('')
                        setdesc('')
                        setdate('')
                        setsignature('')
                        setnominees([])
                      }}
                    >
                      {edititem ? 'Cancel' : 'Reset'}
                    </Button.Ripple>
                    <Button.Ripple
                      className="button-label"
                      color="warning"
                      onClick={() => {
                        edititem
                          ? props.editMessage({
                              _id: edititemId,
                              desc,
                              type,
                              title,
                              date,
                              signature,
                              nominees
                            })
                          : props.scheduleNewMessage({
                              desc,
                              type,
                              title,
                              date,
                              signature,
                              nominees,
                              rname,
                              remail,
                              rphone,
                              msg: recVideo
                            })

                        settitle('')
                        settype('')
                        setdesc('')
                        setdate('')
                        setsignature('')
                      }}
                      disabled={
                        !desc.trim().length ||
                        !type.trim().length ||
                        !title.trim().length ||
                        !date.trim().length ||
                        !signature.trim().length ||
                        !nominees.length
                      }
                    >
                      {edititem ? 'Update' : 'Add'}
                    </Button.Ripple>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  {props.loadingmsg && props.messages === null ? (
                    <Spinner color="warning" size="lg" />
                  ) : (
                    <MsgHistory
                      heading={'Messages History'}
                      collapseItems={props?.messages}
                      colorOption={props?.messages?.colorOption}
                      editItem={editItem}
                      handleFilter={() => {
                        console.log('Call filter function')
                      }}
                    />
                  )}
                </Col>
              </Row>
            </Col>
            <Ccube />
          </Row>
        </CardBody>
      </Card>
    </div>
  )
}

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream
    }
  }, [stream])
  if (!stream) {
    return null
  }
  return <video ref={videoRef} width={300} height={300} autoPlay controls />
}

const blobToBase64 = (blob) => {
  const reader = new FileReader()
  reader.readAsDataURL(blob)
  return new Promise((resolve) => {
    reader.onloadend = () => {
      resolve(reader.result)
    }
  })
}

const RecordView = (props) => {
  const [rec, setrec] = useState(false)
  const [mic, setmic] = useState(true)
  const [screenshare, setscreenshare] = useState(false)

  return (
    <div>
      <ReactMediaRecorder
        screen={screenshare}
        video={!screenshare}
        audio={mic}
        onStop={(blobUrl, blob) => {
          console.log(blob)
          blobToBase64(blob).then((bas) => {
            //console.log(bas);
            props.recording(bas)
          })
          //console.log('blob',blob);
          //console.log('bloburl',blobUrl);
        }}
        render={({
          status,
          startRecording,
          stopRecording,
          mediaBlobUrl,
          previewStream
        }) => (
          <div>
            <p>Status : {status}</p>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div className="d-inline-block mr-1">
                <Radio
                  label="Camera Video"
                  color="primary"
                  defaultChecked
                  name="recoption"
                  onChange={(e) => {
                    setscreenshare(false)
                  }}
                  value="rec"
                />
              </div>
              <div className="d-inline-block mr-1">
                <Radio
                  label="Screen Share"
                  color="primary"
                  name="recoption"
                  onChange={(e) => {
                    setscreenshare(true)
                  }}
                  value="screen"
                />
              </div>

              {mic ? (
                <Mic
                  className="danger"
                  size="30"
                  onClick={() => setmic(!mic)}
                />
              ) : (
                <MicOff
                  className="danger"
                  size="30"
                  onClick={() => setmic(!mic)}
                />
              )}
              <Button.Ripple
                className="button-label"
                style={{ width: '100%', marginTop: '-2px' }}
                color="warning"
                icon="play-circle"
                onClick={() => {
                  rec ? stopRecording() : startRecording()
                  setrec(!rec)
                }}
              >
                {rec ? 'Stop Recording' : 'Start Recording'}
              </Button.Ripple>
            </div>
            <div>
              {rec && previewStream && <VideoPreview stream={previewStream} />}
              {!rec && mediaBlobUrl && (
                <video
                  src={mediaBlobUrl}
                  controls
                  autoPlay
                  width={300}
                  height={300}
                />
              )}

              {/* <video src={mediaBlobUrl} controls autoplay loop width={600} /> */}
            </div>
            <div></div>
          </div>
        )}
      />
    </div>
  )
}

const AudioRec = (props) => {
  const [rec, setrec] = useState(false)
  const [recordstate, setrecordstate] = useState(RecordState.NONE)
  const [blobURL, setblobURL] = useState()

  const start = () => {
    console.log(recordstate)
    setrec(!rec)
    console.log('start')
    setrecordstate(RecordState.START)
  }

  const stop = () => {
    setrec(!rec)
    console.log('stop')
    setrecordstate(RecordState.STOP)
  }

  const onStop = (audioData) => {
    console.log(`audio data: ${audioData.url}`, audioData.blob)
    setblobURL(audioData.url)
    blobToBase64(audioData.blob).then((bas) => {
      //console.log(bas);
      props.recording(bas)
    })
    console.log(blobURL)
  }

  return (
    <div>
      <Button.Ripple
        className="button-label"
        style={{ width: '100%', marginTop: '-2px' }}
        color="warning"
        icon="play-circle"
        onClick={() => {
          rec ? stop() : start()
          setrec(!rec)
        }}
      >
        {rec ? 'Stop Recording' : 'Start Recording'}
      </Button.Ripple>

      <AudioReactRecorder state={recordstate} onStop={onStop} />
      {blobURL && <ReactAudioPlayer src={blobURL} controls />}
    </div>
  )
}

const mapStateToProps = (state) => {
  const { dataList, sender } = state
  const messages = sender?.getmesssages?.length
    ? sender.getmesssages.reverse()
    : []
  return {
    dataList,
    listLoading: dataList.totalRecordsLoading,
    messages,
    loadingmsg: sender.loadingmsg
  }
}
export default connect(mapStateToProps, {
  scheduleNewMessage,
  getData,
  editMessage,
  addData,
  getScheduledMessages
})(ContactUs)
