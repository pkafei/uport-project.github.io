import React, {Component} from 'react'
import styled from 'styled-components'
import {Connect, SimpleSigner} from 'uport-connect'
import "../layouts/css/demo.css"

const QRCode = require('qrcode.react');

const Container = styled.section`
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;

   h1 {
    padding-top: 80px;
    position: relative;
   }

   p {
    width: 52vw;
    margin: auto;
    position: relative;
   }

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
                               (uri) => { this.setState({ uri: uri, showImage: true, showResult: false});}
    ).then((userProfile) => {
      this.setState({showImage: false, showResult: true, profile: userProfile})
      console.log(JSON.stringify(userProfile))
    })
    e.preventDefault();
  };

  showSample(e) {
    console.log("sample");
    this.setState( { showExample: true } );
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
      <Container className='demo'>
        <h1>A Focus On Developers</h1>
        <div className={`demo-container`}>
          <div className={`demo-wrapper`}>
            <div className={`left-demo`}>
              <div className={`demo-code`}>
                {(this.state.showImage === false && this.state.showResult === false && this.state.showExample === false) && (
                   <div>
                     <pre>
                       <code style={{background: "#FFFFFF"}} className={`language-javascript`}>
                         {`
    // basic code to "log in" a user by requesting a name

    // 1...  construct a link or QR with the URI
    // 2...  use the payload for authentication

    connect.requestCredentials({ requested: ['name']}, (uri) => {
      //1...
    }).then((payload) => {
      //2...
      console.log(JSON.stringify(payload))
    })
                      `}
                       </code>
                     </pre>
                   </div>
                )}
                {/* {this.state.showResult && (
                    <pre style={{background: "#FFFFFF"}} className={`language-javascript demo`}>
                    <code style={{background: "#FFFFFF"}} className={`language-javascript demo demo-code`}>{`
                    // the resulting payload can be used by
                    // traditional web apps (or dapps) for auth`}
                    </code>
                    </pre>
                    )} */}
                {(this.state.showImage && this.state.showResult === false && this.state.showExample === false) && (
                   <pre>
                     <code style={{background: "#FFFFFF"}} className={`language-javascript`}>
                       {`

    // 1...
    // here we use the qrcode.react library to generate
    // a QR from the URI string

    // scanning with the uport app opens a dialogue requesting
    // information that is shared when approved

    <QRCode value = uri
            size = 260
            bgColor = rgba(230, 224, 248)
            fgColor = #5c50ca />


                    `}
                     </code>
                   </pre>
                )}
        </div>
        <div className={`demo-results-wrapper`}>
          <div className={`demo-results`}>
            {(this.state.showExample && this.state.showResult === false) && (
               <pre className={`demo-json`}>
                 <code style={{background: "#FFFFFF"}} className={`language-json`}>{`



 {

   "@context": "http://schema.org",
   "@type": "Person",
   "publicKey": "0x044c31ed1499dce76ee7711c72388fda86e6c1d4f9ecc105c4abe2f63cfe79638822dcf21b7c29b3d208fc01d4e0506d4e8f6234a912727a36cf347e61956d5f2f",
   "publicEncKey": "Py+NXzHgacNMTzj9Ufe4S2KPuzR39dDMd1o+rWBJnmM=",
   "name": "First Last"

 }

`}
                   <br/>
                 </code>
               </pre>
            )}
            {this.state.showResult && (
               <pre className={`demo-json`}>
                 <code style={{background: "#FFFFFF"}} className={`language-json`}>
                   {`
 // 2...
 // this is your data returned by the credential request,
 // which some dApps may find useful for authentication

${JSON.stringify(this.state.profile, null, 2)}
`}
                 </code>
               </pre>
            )}
          </div>
        </div>
        </div>
        <div className={`v-separator`} />
        <div className={`right-demo`}>
          {(this.state.showImage && this.state.showResult === false) && (
             <div className={`demo-qr-container`}>
               <h4>Scan to provide credentials</h4>
               <a href={this.state.uri}>
                 <QRCode
                 className={`demo-qr`}
                 value={this.state.uri}
                 size={`230`}
                 bgColor={`#f9f9fa`}
                 fgColor={`#5c50ca`}
                 />
               </a>
               <div className={`demo-button`}>
                 <a href='' onClick={(e) => {this.resetDemo(e)}}>
                   Reset
                 </a>
               </div>
             </div>
          )}
          {(this.state.showImage === false) && (
             <div className={`demo-button-container`}>
               {this.state.showResult === false && (<h2>Test The uPort Login</h2>)}
               <div className={`demo-step-wrap`}>
                 <div className={`demo-button`}>
                   <a href='' className={`demo-banner-link left-btn`} onClick={(e) => { this.state.showResult ? this.resetDemo(e) : this.loginRequest(e)}}>
                     {this.state.showResult === false && (`Connect with uPort`)}
                     {this.state.showResult && (`Reset`)}
                   </a>
                 </div>
                 <div className={`demo-button`}>
                   <a href='' className={`demo-banner-link right-btn`} onClick={(e) => {this.showSample(e)}}>
                     See Sample Login
                   </a>
                 </div>
               </div>
             </div>
          )}
        </div>
        </div>
        </div>
      </Container>
    )
 }
}

export default Demo
