import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Navigation from './Navigation'
import bannerImg from '../../images/Horizontal-Logo.svg'

class MainHeader extends React.Component {

  navHeadings () {
    const navHeadings = []
    this.props.categories.edges.forEach(cat => {
      if (!navHeadings.includes(cat.node.frontmatter.category)) {
        navHeadings.push(cat.node.frontmatter.category)
      }
    })
    return navHeadings
  }
  render () {
    return (
      <SiteContainer>
        <div className={'Grid Grid--gutters'}>
          <div className='Grid-cell'>
            <span className={`brand w-nav-brand`}>
              <Link to='/'>
                <img src={bannerImg} />
              </Link>
            </span>
          </div>
          <div className='Grid-cell'>
            <Navigation
              className={`w-nav`}
              sections={this.navHeadings()}
              data={this.props.categories.edges}
              activeCategory={this.props.activeCategory} />
          </div>
        </div>
      </SiteContainer>
    )
  }
}

const SiteContainer = styled.header`
  background: ${props => props.theme.brand};
  height: auto;

  .Grid {
    max-width: 90vw;
    margin: 0 auto;
    justify-content: space-between;
  }

  .Grid-cell {
    padding: 0;
  }

  img {
    padding-bottom: 20px;
  }
`

export default MainHeader
