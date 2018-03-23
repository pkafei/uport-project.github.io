import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import SEO from "../components/SEO/SEO"
import config from "../../data/SiteConfig"
import CtaButton from '../components/CtaButton'
import Navigation from '../components/Layout/Navigation'

class Index extends React.Component {
    navHeadings() {
        const navHeadings = [];
        this.props.data.navCategories.edges.forEach(cat => {
            if (!navHeadings.includes(cat.node.frontmatter.category)){
                navHeadings.push(cat.node.frontmatter.category);
            }
        })
        return navHeadings
    }
    render() {
      const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <main>
          <IndexHeadContainer>
            <NavContainer>
              <Navigation sections={this.navHeadings()} data={this.props.data.navCategories.edges} />
            </NavContainer>
            <Hero className={`home-hero headline-wrapper`}>
              <img src={config.siteLogo} width='150px' />
              <h1>{config.siteTitle}</h1>
              <h4>{config.siteDescription}</h4>
            </Hero>
          </IndexHeadContainer>
          <BodyContainer>
            <h2>Simple and secure login for your Ethereum app</h2>
            <p> Uport ID makes blockchain easy on desktop and mobile </p>
            {/* <CtaButton to={'/lesson-one'}>See Your First Post</CtaButton> */}
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

const NavContainer = styled.div`
  padding-right: 20px;
  padding-top: 8px;
  margin-right: -8px;
  text-align: center;
`

const Hero = styled.div`
padding: 50px 0;
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
