import React from "react"
import styled from 'styled-components'
import Link from 'gatsby-link'
import Navigation from './Navigation'
import bannerImg from '../../images/Horizontal-Logo.svg'

class MainHeader extends React.Component {

    navHeadings() {
        const navHeadings = [];
        this.props.categories.edges.forEach(cat => {
            if (!navHeadings.includes(cat.node.frontmatter.category)){
                navHeadings.push(cat.node.frontmatter.category);
            }
        })
        return navHeadings
    }
  render() {
        return (
          <SiteContainer className={`w-nav-container`}>
            <span className={`brand w-nav-brand`}>
              <Link to='/'>
                <img src={bannerImg}></img>
              </Link>
            </span>
            <Navigation className={`w-nav`} sections={this.navHeadings()} data={this.props.categories.edges}/>
          </SiteContainer>
        )
  }
}

const SiteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.brand};
  height: 100%;
  padding:  25px;

  img {
    padding-left: 25px;
    padding-bottom: 20px;
  }
`

export default MainHeader
