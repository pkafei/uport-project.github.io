import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import _ from 'lodash'

export default class TableOfContents extends React.Component {
  render () {
    let urlHash = ''
    let pathName = ''
    if (typeof window !== 'undefined') {
      urlHash = window.location.hash.replace('#', '')
      pathName = window.location.pathname
    }
    const {category} = this.props
    const {categories} = this.props
    const type = this.props.contentsType
    const postNodes = []
    categories.forEach(post => {
      if (((post.node.frontmatter.category === category) && (post.node.frontmatter.type === type))) {
        const postNode = {
          title: post.node.frontmatter.title,
          path: post.node.fields.slug,
          indexNumber: post.node.frontmatter.index,
          category: post.node.frontmatter.category,
          headings: post.node.headings
        }
        postNodes.push(postNode)
      }
    })
    const listItems = []
    postNodes.sort((a, b) => a.indexNumber - b.indexNumber).forEach((cat) => {
      const chapterContents = []
      if (cat.headings) {
        cat.headings.forEach(node => {
          if (node.depth === 2) {
            chapterContents.push(
              <ContentContainer key={`${node.value}`}>
                <Link to={`${cat.path}#${_.kebabCase(node.value)}`}>
                  <li>
                    <span>
                      {_.kebabCase(node.value) === urlHash
                        ? <h6 className='active'>{node.value}</h6>
                        : <h6>{node.value}</h6>
                      }
                    </span>
                  </li>
                </Link>
              </ContentContainer>
            )
          }
        })
      }
      listItems.push(
        <li className='chapter' key={`${cat.path}`}>
          <Link to={`${cat.path}`}>
            <span>
              {<h5 className={`tocHeading ${(pathName === cat.path) ? 'active' : ''}`}>{cat.title.charAt(0).toUpperCase() + cat.title.slice(1)}</h5>}
            </span>
          </Link>
          <ul className='chapterItems'>
            {chapterContents}
          </ul>
        </li>
      )
    })
    return (
      <TableOfContentsContainer>
        <ul>
          {listItems}
        </ul>
      </TableOfContentsContainer>
    )
  }
}

const TableOfContentsContainer = styled.div`
  padding: ${props => props.theme.sitePadding};

 & > ul, .chapterItems {
   list-style: none;
   padding: 0;
   margin-left: 30px;
 }

 a {
   text-decoration: none;
 }

 p, h6 {
   display: inline-block;
   font-weight: 400;
   font-size: 14px;
   margin-bottom: 8px;
 }

 h5.active {
   color: ${props => props.theme.brandHighlight};
 }

 h5:hover {
   color: ${props => props.theme.brandHighlight};
 }

 h6.active {
   color: ${props => props.theme.secondaryBrand};
 }

 .tocHeading {
   font-weight: 400;
   color: ${props => props.theme.darkGrey};
   margin-top: 25px;
   font-size: 16px;
 }
`

const ContentContainer = styled.div`
   h6, p {
   color: ${props => props.theme.darkGrey};
 }
 li {
   margin-left:-10px;
 }

 &:hover {
   li {
     span {
       border-bottom: 1px solid ${props => props.theme.tocAccent};
     }
   }
 }
`
