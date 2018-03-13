import React from "react"
import styled from 'styled-components'
import Navigation from './Navigation'

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
            <SiteContainer>
              <Navigation sections={this.navHeadings()} data={this.props.categories.edges}/>
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
`

export default MainHeader
