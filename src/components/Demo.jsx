import React, {Component} from 'react'
import styled from 'styled-components'
import {Connect, SimpleSigner} from 'uport-connect'
import "../layouts/css/demo.css"

const QRCode = require('qrcode.react');



const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 100%;
`

const connect = new Connect('uPort Demo', {
  clientId: '0x2bede7ae69a9aa7684c373ae33fb21162e565e52',
  signer: SimpleSigner('d2942f08d12611429c0ab9ea39eeda128253553d356b4c9f9f17f95e141cafc8')
})

class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = { uri: {},
                   profile: {},
                   showImage: false,
                   showResult: false,
                   showExample: false,
                   showProfile: false};
    this.loginRequest = this.loginRequest.bind(this)
    this.resetDemo = this.resetDemo.bind(this)
  }

  componentDidMount() {
    this.DemoUport();
  }

  loginRequest(e) {
    connect.requestCredentials({ requested: ['name', 'avatar', 'phone', 'country'],
                                 notifications: true },
                               (uri) => { this.setState({uri: uri, showImage: true, showResult: false});}
    ).then((userProfile) => {
      this.setState({showImage: false, showResult: true, profile: userProfile})
      console.log(JSON.stringify(userProfile))
    })
    e.preventDefault();
  };

  resetDemo(e) {
    this.setState( { uri: {},
                     profile: {},
                     showImage: false,
                     showResult: false,
                     showExample: false,
                     showProfile: false } );
    e.preventDefault();
  }

  DemoUport() {
    /* $.getJSON('uport api')
     *  .then(({ results }) => this.setState({ person: results }));*/
  }

  render() {
    return (
      <Container>
        <div className={`demo-wrapper`}>
          <div className={`banner-left-code`}>

            <p>Decide where your cloud lives. Maybe he lives right in here. It's important to me that you're happy. This painting comes right out of your heart. These trees are so much fun. I get started on them and I have a hard time stopping. We can always carry this a step further. There's really no end to this. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe. Paint anything you want on the canvas. Create your own world. It just happens - whether or not you worried about it or tried to plan it. Don't kill all your dark areas - you need them to show the light. See there, told you that would be easy. A beautiful little sunset. Put it in, leave it alone. That's why I paint - because I can create the kind of world I want - and I can make this world as happy as I want it. You can do anything your heart can imagine. We might as well make some Almighty mountains today as well, what the heck.</p>

          </div>
          <div className={`banner-right-demo`}>
            <div className={`demo-code`}>
              <div>
                <h4>Request user credentials</h4>
                {(this.state.showImage === false && this.state.showResult === false) && (
                   <pre style={{background: "#FFFFFF"}} className={`language-javascript demo`}>
                     <code style={{background: "#FFFFFF"}} className={`language-javascript demo`}>
                       {`
// basic code to "log in" a user by
// requesting certain data attributes

connect.requestCredentials({
  requested: ['name', 'avatar'],
  notifications: true }, (uri) => {

    // do something with the uri

}).then((payload) => {

  // login the user
  console.log(JSON.stringify(payload))
})
                    `}
                     </code>
                   </pre>
                )}
              </div>
              {/* {this.state.showResult && (
                  <pre style={{background: "#FFFFFF"}} className={`language-javascript demo`}>
                  <code style={{background: "#FFFFFF"}} className={`language-javascript demo demo-code`}>{`
                  // the resulting payload can be used by
                  // traditional web apps (or dapps) for auth`}
                  </code>
                  </pre>
                  )} */}
              {(this.state.showImage && this.state.showResult === false) && (
                 <pre style={{background: "#FFFFFF"}} className={`language-javascript demo`}>
                   <code style={{background: "#FFFFFF"}} className={`language-javascript demo`}>
                     {`
// Here we use qrcode.react to generate a QR
// from the resulting URI

<QRCode value=uri
        size=260
        bgColor=rgba(230, 224, 248)
        fgColor=#5c50ca />
                  `}
                   </code>
                 </pre>
              )}
            </div>
            {/* {(this.state.showImage === false && this.state.showResult === false) && ( */ /* )}*/}
            <div className={`demo-buttons`}>
              {(this.state.showImage) && (
                 <h4>Scan to recieve the response</h4>
              )}
              {(this.state.showImage === false && this.state.showResult === false) && (
                 <a href='' className={`demo-banner-link demo-banner-steps demo-step-wrap left-btn`} onClick={(e) => {this.loginRequest(e)}}>
                   <div className={`demo-step-title`}>
                     Login with uPort
                   </div>
                 </a>
              )}
              {(this.state.showImage || this.state.showResult) && (
                 <a href='' className={`demo-banner-link demo-banner-steps demo-step-wrap left-btn`} onClick={(e) => {this.resetDemo(e)}}>
                   <div className={`demo-step-title`}>
                     Start Over
                   </div>
                 </a>
              )}

              <a href='' className={`demo-banner-link demo-banner-steps demo-step-wrap right-btn`} onClick={(e) => {this.resetDemo(e)}}>
                <div className={`demo-step-title`}>
                  Simulate Login
                </div>
              </a>
            </div>
            <div className={`demo-results-wrapper`}>
              {(this.state.showImage && this.state.showResult === false) && (
                 <div className={`demo-qr-text`}>
                   <h6>(click it from a mobile device)</h6>
                   <a href={this.state.uri}>
                     <QRCode
                     className={`demo-qr`}
                     value={this.state.uri}
                     size={`260`}
                     bgColor={`#f9f9fa`}
                     fgColor={`#5c50ca`}
                     />
                   </a>
                 </div>
              )}
              <div className={`demo-results`}>
                {(this.state.showResult === false && this.state.showImage === false) && (
                   <pre className={`language-json demo-json`}>
                     <code className={`demo-json`}>{`
{
  "@context": "http://schema.org",
  "@type": "Person",
  "publicKey": "0x044c31ed1499dce76ee7711c72388fda86e6c1d4f9ecc105c4abe2f63cfe79638822dcf21b7c29b3d208fc01d4e0506d4e8f6234a912727a36cf347e61956d5f2f",
  "publicEncKey": "Py+NXzHgacNMTzj9Ufe4S2KPuzR39dDMd1o+rWBJnmM=",
  "name": "First Last"
}
                    `}
                     </code>
                   </pre>
                )}
                {this.state.showResult && (
                   <pre className={`language-json demo-json`}>
                     <code className={`demo-json`}>
                       {JSON.stringify(this.state.profile, null, 2)}
                     </code>
                   </pre>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    )
 }
}

export default Demo
