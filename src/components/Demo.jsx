import React, {Component} from 'react'
import { createPortal } from "react-dom";
import styled from 'styled-components'
import {Connect, SimpleSigner} from 'uport-connect'
import jotted from 'jotted'
import kjua from 'kjua'

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
  }

  componentDidMount() {
    this.DemoUport();
  }

  loginRequest() {
    console.log(kjua);

    connect.requestCredentials({ requested: ['name', 'avatar', 'phone', 'country'],
                                 notifications: true },
                               (uri) => { this.setState({uri: uri, showImage: true});}

    ).then((userProfile) => {
      this.setState({showImage: false, showResult: true, profile: userProfile})
      console.log(JSON.stringify(userProfile))
    })


};

DemoUport() {
  /* $.getJSON('uport api')
   *  .then(({ results }) => this.setState({ person: results }));*/
  }

render() {
  return (
    <Container>
      <div className={`demo-wrapper`}>
        <div className={`banner-left-code`}>
          {(this.state.showImage === false && this.state.showResult === false) && (
             <pre className={`language-javascript demo`}>{`
// basic code to "log in" a user by
// requesting certain data attributes`}
               <code className={`language-javascript demo`}>
                 {`

connect.requestCredentials({
  requested: ['name', 'avatar'],
  notifications: true },
  (uri) => { // generate a QR with the uri
  }

              `}
               </code>
             </pre>
          )}
          {this.state.showResult && (
             <pre className={`language-javascript demo`}>{`
// the resulting payload can be used by
// traditional web apps (or dapps) for auth`}
             </pre>
          )}
          {this.state.showImage && (

             <pre className={`language-javascript demo`}>{`
// generate a QR with the resulting URI
// try scanning this with your uPort app
`}
               <code className={`language-javascript demo`}>
                 {`
<img src={kjua({
    text: this.state.uri,
    fill: '#5c50ca',
    size: 275,
    back: 'rgba(230, 224, 248)'}).src}/>
              `}
               </code>
             </pre>
          )}
        </div>

        <div className={`banner-right-demo`}>
          {this.state.showImage && (
          <div className={`demo-qr`}>
            <h3>Scan this QR with the uPort mobile app</h3>
            <img src={kjua({ text: this.state.uri,
            fill: '#5c50ca',
            size: 276,
            back: 'rgba(230, 224, 248)'}).src}
            className={`demo-qr`}
            />
            </div>
            )}
          {this.state.showResult && (
            <pre className={`language-json demo-json`}>
              <code className={`demo-json`}>
                {JSON.stringify(this.state.profile, null, 2)}
              </code>
            </pre>
            )}
            {(this.state.showImage === false && this.state.showResult === false) && (
            <ul className={`banner-list`}>
              <a href='' className={`banner-link`}>
                <li className={`banner-steps`}>
                  <div className={`step-wrap`}>
                    <div className={`step-title`}>
                      View sample uPort ID
                    </div>
                  </div>
                </li>
              </a>
              <a href='' className={`banner-link`} onClick={this.loginRequest}>
                <li className={`banner-steps`}>
                  <div className={`step-wrap`}>
                    <div className={`step-title`}>
                      Connect with your uPort ID
                    </div>
                  </div>
                </li>
              </a>
            </ul>
            )}
          </div>
        </div>
    </Container>
  )
 }
}

export default Demo
