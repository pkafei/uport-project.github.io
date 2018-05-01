import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  h2 {
    text-align: center;
    color: #fff;
    padding: 40px 0 20px  ;
  }
  .footer-menu {
    color: #fff;
    padding: 0 40px;
    h4 {
      font-size: 1.1em;
    }
    ul {
      padding-left: 0;
    }
    li {
      padding: 5px 0;
    }
    h4 {
      text-transform: uppercase;
    }
  }
  .button-wrap .Grid-cell:last-child {
   margin-left: 20px;
  }
`

class Footer extends React.Component {

  render () {
    return (
      <FooterContainer>
        <div className={'Grid Grid--gutters'}>
          <div className='Grid-cell'>
            <h2>Join A Network Of Developers Building on uPort</h2>
          </div>
        </div>
        <div className={'Grid Grid--gutters button-wrap'}>
          <div className='Grid-cell'>
            <a href='https://chat.uport.me/'><button>Join The Community</button></a>
          </div>
          <div className='Grid-cell'>
            <a href='https://github.com/uport-project'><button>Explore uPort Projects</button></a>
          </div>
        </div>
        <div className='footer-menu-wrap Grid'>
          <div className='footer-menu Grid-cell'>
            <h4>Apps</h4>
            <ul>
              <li><a href='https://itunes.apple.com/us/app/uport-id/id1123434510'>Wallet</a></li>
            </ul>
          </div>
          <div className='footer-menu Grid-cell'>
            <h4>Platform</h4>
            <ul>
              <li><a href='http://developer.uport.me/overview.html'>Overview</a></li>
              <li><a href='http://developer.uport.me/overview.html#protocols'>Protocols</a></li>
              <li><a href='http://developer.uport.me/overview.html#platform'>Platform</a></li>
            </ul>
          </div>
          <div className='footer-menu Grid-cell'>
            <h4>Solutions</h4>
            <ul>
              <li><a href='http://developer.uport.me/guides.html#private-chain-deployment'>Private Credentials</a></li>
              <li><a href='https://github.com/uport-project/uport-connect/'>Authentication</a></li>
              {/* <li><a href='#'>Ethereum Apps</a></li>  */}
              <li><a href='http://developer.uport.me/guides.html#signing-transactions'>Mobile Signing / 2FA</a></li>
            </ul>
          </div>
          <div className='footer-menu Grid-cell'>
            <h4>Guides</h4>
            <ul>
              {/* <li><a href='#'>Build a hybrid dapp</a></li> */}
              {/* <li><a href='#'>Authenticate Wallet</a></li> */}
              <li><a href='http://developer.uport.me/guides.html#attesting-credentials'>Issue Credentials</a></li>
            </ul>
          </div>
          <div className='footer-menu Grid-cell'>
            <h4>About</h4>
            <ul>
              {/* <li><a href='#'>Mission</a></li> */}
              {/* <li><a href='#'>Team</a></li> */}
              <li><a href='https://www.uport.me/job-listings'>Jobs (We're Hiring)</a></li>
              <li><a href='https://consensys.net'>ConsenSys</a></li>
            </ul>
        </div>
        </div>
      </FooterContainer>
    )
  }
}

export default Footer
