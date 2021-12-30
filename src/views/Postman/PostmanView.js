import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardBody, Button, Row, Col, Spinner,FormGroup } from 'reactstrap'
import { Download } from 'react-feather'
//axios.defaults.timeout = 10000;

const PostmanView = (props) => {
  const [success, setsuccess] = useState(false)
  const [downloaddis, setdownloaddis] = useState(true)
  const [bloburl, setbloburl] = useState()
  const [msg, setmsg] = useState([])
  useEffect(() => {
    const userkey = props.match.params.userkey
    if (userkey !== '') {
      axios.get(`/backendapi/sender/msg/getbyid/${userkey}`)
      .then((msg) => {
        if(msg.data.length > 0) {

        
        setmsg(msg.data[0])
      axios.get(`/backendapi/sender/msg/${msg.data[0].msg}`)
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
        setsuccess(true);
      })
        .catch((e) => {
         setsuccess(false)
         // seterr(true)
        })
      } else {
        alert('Invalid Or Expired link');
      }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const downloadAll = () => {

  //   doclist.forEach(at => {

  //     console.log('atttt', at)

    
  //   const attm = at.data;
  //   const splits = attm?.split('base64,');
  //           const type=splits[0].substring(5, splits[0].length -1);
  //   const byteCharacters = atob(splits[1])
  //   const byteNumbers = new Array(byteCharacters.length)
  //   for (let i = 0; i < byteCharacters.length; i++) {
  //     byteNumbers[i] = byteCharacters.charCodeAt(i)
  //   }
  //   const byteArray = new Uint8Array(byteNumbers)
  //   const blob = new Blob([byteArray], {
  //     type
  //   })
  //   const blobUrl = URL.createObjectURL(blob)
  //   const link = document.createElement('a')
  //   link.href = blobUrl
  //   link.setAttribute('download', `${at.filename}`)

  //   // Append to html link element page
  //   document.body.appendChild(link)

  //   // Start download
  //   link.click()

  //   // Clean up and remove the link
  //   link.parentNode.removeChild(link)
  //   //setbloburl(blobUrl)
  //   //setloading(false)
  // })
  // }

  return (
    <React.Fragment>
      <br />
      <br />
      <br />
      <br />
    <Row >
    <Col sm="12" className="text-center">
      {/* <Row style={{marginLeft:'40%'}}>
    <Download
              size={30}
              className="collapse-icon mr-1"
              onClick={() => {
               // downloadAll(row.attachment)
              }}
            /> <h2>Download All</h2>
           </Row> */}

            <FormGroup className="form-label-group">
            
                      <h1 style={{marginTop:'-70px'}}>{msg?.title}</h1>
                      <h3>{msg?.desc}</h3>
                      <h3>{msg?.signature ? 'From : '+msg.signature : ''}</h3>
                  </FormGroup>

    </Col>
      <Col sm="12">
        <Card className="auth-card bg-transparent shadow-none rounded-0 mb-0 w-100">
          <CardBody className="text-center">


            
          {!success && (
              <Spinner
                //style={{ marginLeft: '48%' }}
                color="warning"
                size="lg"
              />
            )}
            {success && 
            
           
              <div>
                <iframe
                  style={{ height: '400px', width: '100%' }}
                  className="myiframe"
                  title="Aaq"
                  src={`${bloburl}#zoom=200`}
                  //src={`${bloburl}#toolbar=0`}
                />
              </div>
            
          }

          </CardBody>
        </Card>
      </Col>
    </Row>
    </React.Fragment>
  )
}
export default PostmanView
