import React, {Component} from 'react'
import styled from 'styled-components'

const SearchWrap = styled.form`
    margin-top: 14px;
    form {
      padding: 0;
      margin: 0;
    }
    label {
      position: relative;
    }
    input {
      border-radius: 4px;
      -webkit-appearance: textfield;
      outline-offset: -2px;
      width: 7rem;
      border: 0;
      font-size: 14px;
      line-height: 26px;
      font-weight: 400;
      padding-top: 0.175rem;
      padding-right: 0.35rem;
      padding-bottom: 0.175rem;
      padding-left: 1.4rem;
    }
    svg {
      position: absolute;
      left: 5px;
      top: 25%;
      width: 16px;
      height: 16px;
      overflow: hidden;
    }
`

class Search extends Component {
  componentDidMount () {
    window.docsearch({
      apiKey: '64662e7ea02368c0980f941c85d28814',
      indexName: 'uport',
      inputSelector: '#searchInput',
      debug: false // Set debug to true if you want to inspect the dropdown
    })
  }
  render () {
    return (
      <SearchWrap className='search-wrap'>
        <label>
          <input id='searchInput' type='search' placeholder='Search docs' />
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="css-146ck20"><g><path d="m34.8 30.2c0.3 0.3 0.3 0.8 0 1.1l-3.4 3.5c-0.1 0.1-0.4 0.2-0.6 0.2s-0.4-0.1-0.6-0.2l-6.5-6.8c-2 1.2-4.1 1.8-6.3 1.8-6.8 0-12.4-5.5-12.4-12.4s5.6-12.4 12.4-12.4 12.4 5.5 12.4 12.4c0 2.1-0.6 4.2-1.7 6.1z m-17.4-20.4c-4.1 0-7.6 3.4-7.6 7.6s3.5 7.6 7.6 7.6 7.5-3.4 7.5-7.6-3.3-7.6-7.5-7.6z"></path></g></svg>
        </label>
      </SearchWrap>
    )
  }
}

export default Search
