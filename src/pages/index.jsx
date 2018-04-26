import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import SEO from '../components/SEO/SEO'
import SiteHeader from '../components/Layout/Header'
import SiteFooter from '../components/Layout/Footer'
import Demo from '../components/Demo'
import BuildingBlocks from '../components/BuildingBlocks'
import config from '../../data/SiteConfig'
/* import downloadUport from '../images/download-uport.svg'
 * import registerApp from '../images/register-app.svg'
 * import installSDK from '../images/install-sdk.svg'*/
import heroImg from '../images/hero-img.svg'

class Index extends React.Component {
  render () {
    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <main>
          <IndexHeadContainer>
            <SiteHeader
              activeCategory={''}
              location={this.props.location}
              categories={this.props.data.navCategories} />
            <Hero className={`home-hero`}>
              <div className={`hero-wrapper`}>
                <div className={'Grid Grid--gutters'}>
                  <div className='Grid-cell'>
                    <h1 className='hero-title'>Build with uPort</h1>
                    <p className='hero-subheading'>Bootstrap your app with single sign on, reusable credentials, mobile signing, and more.</p>
                    <div className={'Grid Grid--gutters hero-features'}>
                      <div className='Grid-cell'>
                        <h2>Privacy Preserving Single Sign-On</h2>
                        <p>Enable your ethereum or server app to securely authenticate users.</p>
                        <div className={`hero-button`}>
                          <a href='/platform' className={`banner-link`}>
                            Enable Single Sign-On
                          </a>
                        </div>
                      </div>
                      <div className='Grid-cell'>
                        <h2>Exchange Verifiable Credentials</h2>
                        <p>Issue, request, and verify reusable identity credentials to your users.</p>
                        <div className={`hero-button`}>
                          <a href='/gettingstarted' className={`banner-link`}>
                           Start Using Credentials
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='Grid-cell hero-img-wrap'>
                    <div className={`hero-img`}>
                      <img src={heroImg} />
                    </div>
                  </div>
                </div>
              </div>
            </Hero>
          </IndexHeadContainer>
          <BodyContainer className={`body-container`}>
            <Demo />
            <BuildingBlocks />
          </BodyContainer>
          <FooterContainer>
            <SiteFooter />
          </FooterContainer>
        </main>
      </div>
    );
  }
}

export default Index

const IndexHeadContainer = styled.div`
  background: ${props => props.theme.brand};
`

const Hero = styled.div`
  background-color: #fff;
  .hero-wrapper {
    width: 90vw;
    margin: 0 auto;
    padding: 60px 0;
  }
  .hero-img-wrap {
    flex: 0 0 42%
  }
`

const BodyContainer = styled.div`
  /* padding: ${props => props.theme.sitePadding};*/
  /* max-width: ${props => props.theme.contentWidthLaptop};*/
  background-color: #F9F9FA;
  margin: 0 auto;
`
const FooterContainer = styled.footer`
  background-color: #6c59cf;
  clear: all;
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
