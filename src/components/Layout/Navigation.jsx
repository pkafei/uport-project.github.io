import React from "react"
import Link from 'gatsby-link'
import styled from 'styled-components'
import UserLinks from '../UserLinks'

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${props => props.theme.brand};

  .nav-link {
    font-size: 1.6rem;
    margin-right: 10px;
    font-weight: 200;
    color: ${props => props.theme.themedWhite};
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
      margin-bottom: 20px;
    }

    span {
      display: none;
    }

  }
`

class Navigation extends React.Component {
  navListItems() {
    const navItems = []

    this.props.sections.forEach(section => {
      if(this.props.data){
        this.props.data.forEach(page => {
          if((page.node.frontmatter.index === 0) && (page.node.frontmatter.category === section)) {
            const link = (<Link className='nav-link' to={`${page.node.fields.slug}`} key={section}> {section.charAt(0).toUpperCase() + section.slice(1)} </Link>);
            switch(section){
              case "overview":
                navItems[0] = link;
                break;
              case "guides":
                navItems[1] = link;
                break;
              case "reference":
                navItems[2] = link;
                break;
              default:
                // keep adding links at index 3 (the first available)
                const idx = navItems.length - 1;
                if(idx >= 2){
                  navItems.push = (link);  // push at will if the first 3 index's are filled
                } else {
                  navItems.splice(3, 0, link);  // shift entries already assigned to index 3 to the right.
                };
            }
          }
        })
      }
    })
    return navItems
  }

  render() {
    return (
      <NavContainer>
        <section>
          <Link className='nav-link' to='/'> uPort | Developers </Link>
        </section>
        <section>
          {this.navListItems()}
          <a href="https://appmanager.uport.me" className='nav-link' target='_blank'> App Manager </a>
          <a href="https://gitter.im/uport-project/Lobby" className='nav-link' target='_blank'> Help </a>
          <a href="https://medium.com/uport" className='nav-link' target='_blank'> Blog </a>
          {/* <a href="https://github.com/uport-project" className='nav-link' target='_blank'> GitHub </a> */}
        </section>
        <span><UserLinks /></span>
      </NavContainer>
    )
  }
}

export default Navigation
