import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import SEO from "../components/SEO/SEO"
import config from "../../data/SiteConfig"
import downloadUport from '../images/download-uport.svg'
import registerApp from '../images/register-app.svg'
import installSDK from '../images/install-sdk.svg'
import SiteHeader from '../components/Layout/Header'

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <main>
          <IndexHeadContainer>
            <SiteHeader
              activeCategory={""}
              location={this.props.location}
              categories={this.props.data.navCategories} />
            <Hero className={`home-hero`}>
              {/* <img src={config.siteLogo} width='150px' /> */}
              <div className={`headline-wrapper`}>
                <div className={`banner-left`}>
                  <div className={`banner-left-title`}>
                    {/* <h1>{config.siteTitle}</h1>
                        <h1>{config.siteDescription}</h1> */}
                    <h1>Self Sovereign</h1>
                    <h1>Privacy Preserving</h1>
                    <h1>Identity Network</h1>
                  </div>
                  <div className={`banner-left-buttons`}>
                    <a href=''>
                      <div className={`banner-platform-button`}>
                        PLATFORM OVERVIEW
                      </div>
                    </a>
                    <a href=''>
                      <div className={`banner-started-button`}>
                        GETTING STARTED
                      </div>
                    </a>
                  </div>
                </div>
                <div className={`banner-right`}>
                  <ul className={`banner-list`}>
                    <a href='' className={`banner-link`}>
                      <li className={`banner-steps`}>
                        <div className={`step-img smaller`}>
                          <img src={downloadUport} />
                        </div>
                        <div className={`step-wrap`}>
                          <div className={`step-title`}>
                            1. Download uPort Mobile
                          </div>
                          {/* <p className={`step-desc`}>
                              Download the uPort mobile app and create your identity on the blockchain.
                              </p> */}
                        </div>
                      </li>
                    </a>
                    <a href='' className={`banner-link`}>
                      <li className={`banner-steps`}>
                        <div className={`step-img`}>
                          <img src={registerApp} />
                        </div>
                        <div className={`step-wrap`}>
                          <div className={`step-title`}>
                            2. Configure Your App
                          </div>
                          {/* <p className={`step-desc`}>
                              Go to uPort AppManager, connect using uPort mobile and register your applicaton.
                              </p> */}
                        </div>
                      </li>
                    </a>
                    <a href='' className={`banner-link`}>
                      <li className={`banner-steps`}>
                        <div className={`step-img`}>
                          <img src={installSDK} />
                        </div>
                        <div className={`step-wrap`}>
                          <div className={`step-title`}>
                            3. Install the libraries & SDK's
                          </div>
                          {/* <p className={`step-desc`}>
                              Get started developing with uPort installing the required libraries and SDK's.
                              </p> */}
                        </div>
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
            </Hero>
          </IndexHeadContainer>
          <BodyContainer>

          </BodyContainer>
        </main>
      </div>
    );
  }
}

export default Index;

const IndexHeadContainer = styled.div`
  background: ${props => props.theme.brand};
`

const Hero = styled.div`
/* padding: 50px 0;*/
  & > h1 {
    font-weight: 600;
  }
`

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;
`

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { type: { eq: "content" }}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
          }
        }
      }
    }
    navCategories:
    allMarkdownRemark(
      filter: { frontmatter: { category: { ne: null }, index: { ne: null }}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          headings {
            value
            depth
          }
          frontmatter {
            category
            index
          }
        }
      }
    }
  }
`;
