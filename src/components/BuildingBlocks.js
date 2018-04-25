import React, {Component} from 'react'
import styled from 'styled-components'

const Container = styled.section`
    background-color: #fff;
    .building-blocks-wrapper {
      max-width: 70vw;
      margin: 0 auto;
      padding: 60px 0;
    }
    h2 {
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
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
    h4.alpha {
      position:relative;
      &::after {
        content: "ALPHA";
        margin-left: 20px;
        font-family: Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace;
        font-size: 12px;
        border: 1px solid #8380fc;
        border-radius: 10px;
        position: absolute;
        font-weight: normal;
        top: 7px;
        height: 19px;
        width: 70px;
        padding: 0px 15px 0px 16px;
        text-align: center;
        letter-spacing: 0.75px;
        line-height: 20px;
      }
    }
`

class BuildingBlocks extends Component {
  render () {
    return (
      <Container>
        <div className='building-blocks-wrapper'>
          <div className={'Grid Grid--gutters'}>
            <div className='Grid-cell'>
              <h2>Identity Building Blocks</h2>
            </div>
          </div>
          <div className={'Grid Grid--gutters'}>
            <div className='Grid-cell'>
              <div>
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
            </div>
            <div className='Grid-cell'>
              <div>
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
        </div>
      </Container>
    )
  }
}

export default BuildingBlocks
