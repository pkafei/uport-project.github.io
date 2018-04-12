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
  render () {
    return (
      <SiteContainer>
        <span className={`brand w-nav-brand`}>
          <Link to='/'>
            <img src={bannerImg} />
          </Link>
        </span>
        <a href='#0' className='cd-nav-trigger'>Menu<span /></a>
        <Navigation
          className={`w-nav`}
          sections={this.navHeadings()}
          data={this.props.categories.edges}
          activeCategory={this.props.activeCategory} />
      </SiteContainer>
    )
  }
}

const SiteContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.brand};
  height: auto;

  img {
    padding-left: 25px;
    padding-bottom: 20px;
  }
`

export default MainHeader
