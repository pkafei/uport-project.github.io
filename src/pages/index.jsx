import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import SEO from "../components/SEO/SEO"
import SiteHeader from '../components/Layout/Header'
import SiteFooter from '../components/Layout/Footer'
import Demo from '../components/Demo'
import config from "../../data/SiteConfig"
import downloadUport from '../images/download-uport.svg'
import registerApp from '../images/register-app.svg'
import installSDK from '../images/install-sdk.svg'


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
              <div className={`headline-wrapper`}>
                <div className={`banner-left`}>
                  <div className={`banner-left-title`}>
                    <h1>Self Sovereign</h1>
                    <h1>Privacy Preserving</h1>
                    <h1>Identity Network</h1>
                  </div>
                  <div className={`banner-left-buttons`}>
                    <a href='/platform' className={`banner-link`}>
                      <div className={`banner-platform-button`}>
                        PLATFORM OVERVIEW
                      </div>
                    </a>
                    <a href='/gettingstarted' className={`banner-link`}>
                      <div className={`banner-started-button`}>
                        GETTING STARTED
                      </div>
                    </a>
                  </div>
                </div>
                <div className={`banner-right`}>
                  <ul className={`banner-list`}>
                    <a href='/gettingstarted#download-the-mobile-app' className={`banner-link`}>
                      <li className={`banner-steps`}>
                        <div className={`step-img smaller`}>
                          <img src={downloadUport} />
                        </div>
                        <div className={`step-wrap`}>
                          <div className={`step-title`}>
                            1. Download uPort Mobile
                          </div>
                        </div>
                      </li>
                    </a>
                    <a href='/gettingstarted#register-your-app' className={`banner-link`}>
                      <li className={`banner-steps`}>
                        <div className={`step-img`}>
                          <img src={registerApp} />
                        </div>
                        <div className={`step-wrap`}>
                          <div className={`step-title`}>
                            2. Configure Your App
                          </div>
                        </div>
                      </li>
                    </a>
                    <a href='/gettingstarted#install-the-librarysdk' className={`banner-link`}>
                      <li className={`banner-steps`}>
                        <div className={`step-img`}>
                          <img src={installSDK} />
                        </div>
                        <div className={`step-wrap`}>
                          <div className={`step-title`}>
                            3. Install the libraries & SDK's
                          </div>
                        </div>
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
            </Hero>
          </IndexHeadContainer>
          <BodyContainer>
            <Demo />
          </BodyContainer>
          <FooterContainer>
            <SiteFooter />
          </FooterContainer>
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
  & > h1 {
    font-weight: 600;
  }
`

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  /* max-width: ${props => props.theme.contentWidthLaptop};*/
  margin: 0 auto;
`
const FooterContainer = styled.footer`
  background-color: #6c59cf;
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
