import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardBody, Button, Row, Col, Spinner,FormGroup } from 'reactstrap'
import { Download } from 'react-feather'
//axios.defaults.timeout = 10000;

const DocView = (props) => {
  const [success, setsuccess] = useState(false)
  const [downloaddis, setdownloaddis] = useState(true)
  const [bloblist, setbloblist] = useState([])
  const [doclist, setdoclist] = useState([])
  useEffect(() => {
    const userkey = props.match.params.userkey
    if (userkey !== '') {
      axios
        .get(
          '/backendapi/documentmail/getuserbykey/'+userkey
        )
        .then((res) => {
         // setsuccess(true)
         // seterr(false)
         const blobs = [];
         const attmList = res.data[0]?.docs
         setdownloaddis(res.data[0]?.allowdownload)
         setdoclist(attmList);
         
         attmList.forEach(element => {
         
         //http://localhost:3001/#/#/docview/b162fd00-64dc-11ec-a327-ddda9ce29fb2
          const attm=element.data;
         console.log(attm);
          if (attm) {
            const splits = attm?.split('base64,');
            const type=splits[0].substring(5, splits[0].length -1);
            
            const byteCharacters = atob(splits[1])
            const byteNumbers = new Array(byteCharacters.length)
            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i)
            }
            const byteArray = new Uint8Array(byteNumbers)
            const blob = new Blob([byteArray], {
              type
            })
            const blobUrl = URL.createObjectURL(blob)
            blobs.push(blobUrl);
           }
           
         });
         setbloblist(blobs);
         setsuccess(success);

        
        })
        .catch((e) => {
         // setsuccess(false)
         // seterr(true)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const downloadAll = () => {

    doclist.forEach(at => {

      console.log('atttt', at)

    
    const attm = at.data;
    const splits = attm?.split('base64,');
            const type=splits[0].substring(5, splits[0].length -1);
    const byteCharacters = atob(splits[1])
    const byteNumbers = new Array(byteCharacters.length)
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i)
    }
    const byteArray = new Uint8Array(byteNumbers)
    const blob = new Blob([byteArray], {
      type
    })
    const blobUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = blobUrl
    link.setAttribute('download', `${at.filename}`)

    // Append to html link element page
    document.body.appendChild(link)

    // Start download
    link.click()

    // Clean up and remove the link
    link.parentNode.removeChild(link)
    //setbloburl(blobUrl)
    //setloading(false)
  })
  }

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
                      <Button.Ripple
                        color="warning"
                        type="submit"
                        className="button-label"
                        style={{width:'300px'}}
                        onClick={downloadAll}
                        disabled={downloaddis}
                      >
                        <Download
              size={20}
              className="collapse-icon mr-1"
            /> Download All
                      </Button.Ripple>
                  </FormGroup>

    </Col>
      <Col sm="12">
        <Card className="auth-card bg-transparent shadow-none rounded-0 mb-0 w-100">
          <CardBody className="text-center">


            
          {success && (
              <Spinner
                style={{ marginLeft: '48%' }}
                color="warning"
                size="lg"
              />
            )}
            {!success && 
            
            bloblist.map(bloburl => {
            return (
              <div>
                <iframe
                  style={{ height: '400px', width: '100%' }}
                  className="myiframe"
                  title="Aaq"
                  src={`${bloburl}#zoom=200`}
                  //src={`${bloburl}#toolbar=0`}
                />
              </div>
            )
          })
          }

          </CardBody>
        </Card>
      </Col>
    </Row>
    </React.Fragment>
  )
}
export default DocView
