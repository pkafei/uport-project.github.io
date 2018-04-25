import React, {Component} from 'react'
import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    align-self: center;
    background-color: #fff;
    padding: 60px 0;

    h2 {
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
    }

    div:first-child {
      max-width: 95vw;
      margin: auto;
    }

    .building-blocks-left {
      float:left;
    } 
    .building-blocks-right {
      float: right;
    }
    h3, h4 {
      color: #8986A0;
      font-size: 24px;
      line-height: 32px;
    }
    h4 {
      color: #5C50CA;
    }
    p {
      max-width: 80%;
    }
    .code-block {
      background-color: #f9f9fa;
      padding: 12px 16px;
      margin-left: -5px;
      max-width: 80%;
      font-family: Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace;
      color: #3db77d;
    }
    @media (max-width: 900px) {
      .building-blocks-left {
        float:none;
      } 
      .building-blocks-right {
        float: none;
    }
  }


`

class BuildingBlocks extends Component {
  render () {
    return (
      <Container>
        <div>
          <h2>Identity Building Blocks</h2>
          <div>
            <div className={'building-blocks-left'}>
              <h3>Libraries</h3>
              <div>
                <h4>uPort Connect</h4>
                <p>Single sign-on and transaction signing for your client-side app</p>
                <div className={'code-block'}>
                  <p>npm -i uport-connect</p>
                </div>
              </div>
              <div>
                <h4>uPort JS</h4>
                <p>Rquest, sign, and issue credentials from your app server</p>
                <div className={'code-block'}>
                  <p>npm -i uport-js</p>
                </div>
              </div>
            </div>
            <div className={'building-blocks-right'}>
              <h3>Tools</h3>
              <div>
                <h4>uPort JavaScript Client</h4>
                <p>Single sign-on and transaction signing for your client-side app</p>
                <div className={'code-block'}>
                  <p>npm -i uport-js-client</p>
                </div>
              </div>
              <div>
                <h4 className={'alpha'}>uPort Identity CLI</h4>
                <p>Create and manage uPort identities from the command line</p>
                <div className={'code-block'}>
                  <p>npm -i uport-js-client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default BuildingBlocks
