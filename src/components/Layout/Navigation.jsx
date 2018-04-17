import React from "react"
import Link from 'gatsby-link'
import styled from 'styled-components'
import Menu from 'react-burger-menu/lib/menus/slide'

const styles = {
  bmMenuWrap: {
    width: '220px',
    marginTop: '-30px'
  },
  bmBurgerButton: {
    position: 'fixed',
    width: '16px',
    height: '12px',
    right: '36px',
    top: '26px'
  },
  bmBurgerBars: {
    background: '#fff',
    borderRadius: '2px'
  },
  bmCrossButton: {
    height: '28px',
    width: '28px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#5c50ca',
    padding: '8px 10 8px 20px',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const NavContainer = styled.nav`
  

  #topNav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: ${props => props.theme.brand};
  }

  .bm-menu {
    padding-top: 20px;
    .menu-item {
      font-size: 16px;
      text-decoration: none;
      color: #efefef;
      padding: 10px 20px;
    }
  }

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    
    #topNav {
      display: none;
    }
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;

    #responsiveNavContainer {
      display: none;
    }

  }
`
const StyledLink = styled(Link)`
  &.active {
    font-weight: 400;
    color: ${props => props.theme.themedWhite};
  }
`

class Navigation extends React.Component {
  navListItems() {
    const navItems = []

    this.props.sections.forEach(section => {
      if(this.props.data){
        this.props.data.forEach(page => {
          if((page.node.frontmatter.index === 0) && (page.node.frontmatter.category === section)) {
            const link = (<StyledLink className={`w-nav-link nav-link menu-item ${this.props.activeCategory === section ? 'active' : ''}`} to={`${page.node.fields.slug}`} activeClassName={'active'} key={section}> {section.charAt(0).toUpperCase() + section.slice(1)} </StyledLink>);

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
        <section id='topNav'>
          {this.navListItems()}
          <a href='https://appmanager.uport.me' className={`nav-link w-nav-link`} target='_blank'> App Manager </a>
          <a href='https://gitter.im/uport-project/Lobby' className={`nav-link w-nav-link`} target='_blank'> Help </a>
          <a href='https://medium.com/uport' className={`nav-link w-nav-link`} target='_blank'> Blog </a>
        </section>
        <div id="responsiveNavContainer">
          <Menu right isOpen={false} styles={styles}>
            {this.navListItems()}
            <a href='https://appmanager.uport.me' className={`menu-item`} target='_blank'> App Manager </a>
            <a href='https://gitter.im/uport-project/Lobby' className={`menu-item`} target='_blank'> Help </a>
            <a href='https://medium.com/uport' className={`menu-item`} target='_blank'> Blog </a>
          </Menu>
        </div>
      </NavContainer>
    )
  }
}

export default Navigation
