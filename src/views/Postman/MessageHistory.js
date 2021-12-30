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
  Input,
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
  const [searchresult, setsearchresult] = useState([])
  const [deleteID, setdeleteID] = useState('')
  const [searchtext, setsearchtext] = useState()
  const toggleModal = () => {
    setmodal(!modal)
  }

  const search = (value) => {
    setsearchtext(value)
    const result = props.collapseItems.filter((item) => {
      const startsWithCondition =
        item.desc.toLowerCase().startsWith(value.toLowerCase()) ||
        item.type.toLowerCase().startsWith(value.toLowerCase()) ||
        item.title.toLowerCase().startsWith(value.toLowerCase())

      const includesCondition =
        item.desc.toLowerCase().includes(value.toLowerCase()) ||
        item.type.toLowerCase().includes(value.toLowerCase()) ||
        item.title.toLowerCase().includes(value.toLowerCase())

      if (startsWithCondition || includesCondition) {
        return true
      }
      return false
    })
    setsearchresult(result)
  }

  const playVideo = (id, type) => {
    setloading(true)
    setvideo(type === 'Video' ? true : false)
    toggleModal()
    const token = sessionStorage.getItem('authtoken')
    axios
      .get(`/backendapi/sender/msg/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        const splits = res.data[0]?.media?.split('base64,');
            const type=splits[0].substring(5, splits[0].length -1);
        const byteCharacters = atob(splits[1])
        const byteNumbers = new Array(byteCharacters.length)
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i)
        }
        const byteArray = new Uint8Array(byteNumbers)
        const blob = new Blob([byteArray], {
          type: type
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
    id === collapseID && setstatus('Opening')
  }
  const onExited = (id) => {
    id === collapseID && setstatus('Closed')
  }
  const onExiting = (id) => {
    id === collapseID && setstatus('Closing')
  }
  const formatme = (val) => {
    const title = props.colorOption?.[val] ? props.colorOption[val] : val
    return title
  }
  const getContent = (e) => {
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
              ) : (e.status === 1 ?  (
                <span style={{ color: 'lightgreen' }}>Delivered</span>
              ) : (<span style={{ color: 'var(--warning)' }}>Failed : {e.failReason}</span>) )}{' '}
              <br />
              <b>Reciver Name :</b> {e.rname}
              <br />
              <b>Reciver Email :</b> {e.remail}
              <br />
              <b>Reciver Phone :</b> {e.rphone}

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
  const renderitem = searchtext?.length > 0 ? searchresult : props.collapseItems
  const accordionMarginItems =
    renderitem?.length > 0 ? (
      renderitem.map((collapseItem) => {
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
                  status === 'Closing' && collapseID === collapseItem._id,
                opening: status === 'Opening' && collapseID === collapseItem._id
              })}
            >
              <CardHeader>
                <CardTitle className="lead collapse-title collapsed">
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
            <video src={bloburl} controls autoPlay width="100%" height={300} />
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
        <CardHeader className="d-flex px-0">
          <CardTitle className="actions-left d-flex">{props.heading}</CardTitle>
          <CardTitle className="actions-right d-flex filter-section w-100 mt-2">
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
          </CardTitle>
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
