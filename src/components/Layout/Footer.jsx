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
  .button-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 40px;
    button {
      padding: 12px 20px 12px 22px;
      border-radius: 4px;
      color: #5c50ca;
      font-weight: 700;
    }
    button:first-child {
      margin-right: 40px;
    }
  }
  .footer-menu-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
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
`

class Footer extends React.Component {

  render () {
    return (
      <FooterContainer>
        <h2>Join A Network Of Developers Building on uPort</h2>
        <div className='button-wrap'>
          <button>Join The Community</button>
          <button>Explore uPort Projects</button>
        </div>
        <div className='footer-menu-wrap'>
          <div className='footer-menu'>
            <h4>Apps</h4>
            <ul>
              <li>Wallet</li>
            </ul>
          </div>
          <div className='footer-menu'>
            <h4>Platform</h4>
            <ul>
              <li>Overview</li>
              <li>Protocols</li>
              <li>Platform</li>
            </ul>
          </div>
          <div className='footer-menu'>
            <h4>Solutions</h4>
            <ul>
              <li>Private Credentials</li>
              <li>Authentication</li>
              <li>Ethereum Apps</li>
              <li>Mobile Signing / 2FA</li>
            </ul>
          </div>
          <div className='footer-menu'>
            <h4>Guides</h4>
            <ul>
              <li>Build a hybrid dapp</li>
              <li>Authenticate Wallet</li>
              <li>Issue Credentials</li>
            </ul>
          </div>
          <div className='footer-menu'>
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
