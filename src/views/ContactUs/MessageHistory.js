import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import {
  Row,
  Col,
  Collapse,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  FormText,
  Button,
  Modal,
  ModalBody,
  Spinner,
  ModalHeader
} from 'reactstrap'
import axios from 'axios'
import PopUp from 'utility/Popup'
import classnames from 'classnames'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Edit, Trash, ChevronDown } from 'react-feather'

const MsgHistory = (props) => {
  const [modal, setmodal] = useState(false)
  const [collapseID, setcollapseID] = useState('')
  const [status, setstatus] = useState('Closed')
  const [open, setopen] = useState('')
  const [loading, setloading] = useState(false)
  const [bloburl, setbloburl] = useState()
  const [video, setvideo] = useState(false)

  const [deleteID, setdeleteID] = useState('')
  const toggleModal = () => {
    setmodal(!modal)
  }

  const playVideo = (id, type) => {
    setloading(true)
    setvideo(type === 'Video' ? true : false)
    toggleModal()
    const token = sessionStorage.getItem('authtoken')
    axios
      .get('/backendapi/sender/msg/' + id, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res.data[0]?.media)
        const byteCharacters = atob(res.data[0]?.media?.split('base64,')[1])
        const byteNumbers = new Array(byteCharacters.length)
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i)
        }
        const byteArray = new Uint8Array(byteNumbers)
        const blob = new Blob([byteArray], {
          type: type === 'Video' ? 'audio/wav' : ''
        })
        const blobUrl = URL.createObjectURL(blob)
        setbloburl(blobUrl)
        setloading(false)
      })
  }

  const deletesender = (id) => {
    axios
      .delete(`/backendapi/sender/deletebyid/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
        }
      })
      .then((res) => {
        toast.success('Message deleted successfully!')
      })
      .catch()
  }
  const toggleCollapse = (collapseIDnew) => {
    setcollapseID(collapseID !== collapseIDnew ? collapseIDnew : '')
  }
  const onEntered = (id) => {
    id === collapseID && setstatus('Opened')
  }
  const onEntering = (id) => {
    id === collapseID && setstatus('Opening...')
  }
  const onExited = (id) => {
    id === collapseID && setstatus('Closed')
  }
  const onExiting = (id) => {
    id === collapseID && setstatus('Closing...')
  }
  const formatme = (val) => {
    const title = props.colorOption?.[val] ? props.colorOption[val] : val
    return title
  }
  const getContent = (e) => {
    // if (e.type === 'Video') {
    // 	console.log(e.msg);
    // 	const byteCharacters = atob(e.msg?.split('base64,')[1]);
    // 	const byteNumbers = new Array(byteCharacters.length);
    // 	for (let i = 0; i < byteCharacters.length; i++) {
    // 		byteNumbers[i] = byteCharacters.charCodeAt(i);
    // 	}
    // 	const byteArray = new Uint8Array(byteNumbers);
    // 	const blob = new Blob([byteArray], { type: 'video/mp4' });
    // 	var blobUrl = URL.createObjectURL(blob)

    // }

    let nomin = ''
    e?.nominees?.length &&
      e.nominees.forEach((n, idx) => {
        if (idx === e.nominees.length - 1) {
          nomin = nomin + n?.name
        } else {
          nomin = `${nomin + n?.name}, `
        }
      })
    const content = (
      <div>
        <Row>
          <Col md="5" sm="12">
            <FormText>
              <b> Type : </b> {e.type}
              <br />
              <b> Description : </b> {e.desc}
              <br />
              <b> Date : </b> {e?.date?.split('T')[0]}
              <b> Time : </b> {e?.time}
            </FormText>
            {(e.type === 'Video' || e.type === 'Voice') && (
              <Button.Ripple
                className="button-label"
                style={{ width: '100%', marginTop: '-2px' }}
                color="warning"
                icon="play-circle"
                onClick={() => {
                  playVideo(e.msg, e.type)
                }}
              >
                {e.type === 'Video' ? 'Play Video' : 'Play Audio'}
              </Button.Ripple>
            )}
          </Col>
          <Col md="5" sm="12">
            <FormText>
              <b>Status :</b>{' '}
              {e.status === 0 ? (
                <span style={{ color: 'var(--warning)' }}>Pending</span>
              ) : (
                <span style={{ color: 'green' }}>Delivered</span>
              )}{' '}
              <br />
              <b>Nominees :</b> {nomin}
            </FormText>
          </Col>
          <Col md="2" sm="12">
            <FormText>
              <b>
                {' '}
                <Edit
                  className="cursor-pointer mr-1"
                  size={window.screen.width < 500 ? 13 : 20}
                  onClick={() => {
                    props.editItem(e)
                  }}
                />
              </b>
              <br />
              <b>
                <Trash
                  className="cursor-pointer"
                  size={window.screen.width < 500 ? 13 : 20}
                  onClick={() => {
                    setdeleteID(e._id)
                    setopen(true)
                  }}
                />
              </b>
            </FormText>
          </Col>
        </Row>
      </div>
    )
    return content
  }
  const accordionMarginItems =
    props.collapseItems?.length > 0 ? (
      props.collapseItems.map((collapseItem) => {
        return (
          <div className="collapse-margin" key={collapseItem._id}>
            <PopUp
              handleConfirm={() => {
                deletesender(deleteID)
                setopen(false)
              }}
              isOpen={open}
              closeModal={() => setopen(false)}
            />
            <Card
              onClick={() => toggleCollapse(collapseItem._id)}
              className={classnames({
                'collapse-collapsed':
                  status === 'Closed' && collapseID === collapseItem._id,
                'collapse-shown':
                  status === 'Opened' && collapseID === collapseItem._id,
                closing:
                  status === 'Closing...' && collapseID === collapseItem._id,
                opening:
                  status === 'Opening...' && collapseID === collapseItem._id
              })}
            >
              <CardHeader>
                <CardTitle className="lead collapse-title collapsed">
                  {/* Message:{formatme(collapseItem.type)} Subject: */}
                  {formatme(collapseItem.title)}
                </CardTitle>
                <ChevronDown size={15} className="collapse-icon" />
              </CardHeader>
              <Collapse
                isOpen={collapseItem._id === collapseID}
                onEntering={() => onEntering(collapseItem._id)}
                onEntered={() => onEntered(collapseItem._id)}
                onExiting={() => onExiting(collapseItem._id)}
                onExited={() => onExited(collapseItem._id)}
              >
                <CardBody>{getContent(collapseItem)}</CardBody>
              </Collapse>
            </Card>
          </div>
        )
      })
    ) : (
      <span style={{ fontSize: '12px', marginTop: '-10px' }}>
        No Messages Found
      </span>
    )

  return (
    <React.Fragment>
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
          Message
        </ModalHeader>
        <ModalBody>
          {loading && <Spinner color="warning" size="sm" />}
          {!loading && video && (
            <video src={bloburl} controls autoplay width={500} height={300} />
          )}
          {!loading && !video && <ReactAudioPlayer src={bloburl} controls />}
        </ModalBody>
      </Modal>
      <Card
        style={{
          paddingBottom: '1.5rem',
          paddingRight: '0.5rem',
          marginBottom: props.page === 'portfolio' ? '2.2rem' : '1rem'
        }}
      >
        <CardHeader>
          <CardTitle>{props.heading}</CardTitle>
        </CardHeader>

        <CardBody
          className="card_body"
          style={{
            maxHeight:
              props.page === 'portfolio' ? '260px' : ' calc(100vh - 435px)'
          }}
        >
          <TabContent activeTab={'1'}>
            <TabPane tabId="1">
              <div className="vx-collapse">{accordionMarginItems}</div>
            </TabPane>
            <TabPane className="component-code" tabId="2">
              hey
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}
export default MsgHistory
