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
            <button>Join The Community</button>
          </div>
          <div className='Grid-cell'>
            <button>Explore uPort Projects</button>
          </div>
        </div>
        <div className='footer-menu-wrap Grid'>
          <div className='footer-menu Grid-cell'>
            <h4>Apps</h4>
            <ul>
              <li>Wallet</li>
            </ul>
          </div>
          <div className='footer-menu Grid-cell'>
            <h4>Platform</h4>
            <ul>
              <li>Overview</li>
              <li>Protocols</li>
              <li>Platform</li>
            </ul>
          </div>
          <div className='footer-menu Grid-cell'>
            <h4>Solutions</h4>
            <ul>
              <li>Private Credentials</li>
              <li>Authentication</li>
              <li>Ethereum Apps</li>
              <li>Mobile Signing / 2FA</li>
            </ul>
          </div>
          <div className='footer-menu Grid-cell'>
            <h4>Guides</h4>
            <ul>
              <li>Build a hybrid dapp</li>
              <li>Authenticate Wallet</li>
              <li>Issue Credentials</li>
            </ul>
          </div>
          <div className='footer-menu Grid-cell'>
            <h4>About</h4>
            <ul>
              <li>Mission</li>
              <li>Team</li>
              <li>Jobs (We're Hiring)</li>
              <li>ConsenSys</li>
            </ul>
        </div>
        </div>
      </FooterContainer>
    )
  }
}

export default Footer
