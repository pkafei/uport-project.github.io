import React, {Component} from 'react'
import styled from 'styled-components'

const SearchWrap = styled.form`
    padding: 0;
    margin: 0;
    margin-top: 12px;
    padding-right: 20px;
    float: right;
    label {
      position: relative;
    }
    input {
      border-radius: 4px;
      -webkit-appearance: textfield;
      width:200px;
      height:34px;
      border: 0;
      border-radius:4px;
      font-size: 14px;
      line-height: 26px;
      font-weight: 400;
      padding-top: 0.175rem;
      padding-right: 0.35rem;
      padding-bottom: 0.175rem;
      padding-left: 2.0rem;
      background-color:#6960DF; 
      font-size:16px;
      color: #fff;
    }
    input::-webkit-input-placeholder {
      color: #817cff;
    }
    input:focus { 
      outline: none;
      border: 2px solid #6960df;
      background-color: #5754c3;
    }
    svg {
      position: absolute;
      left: 10px;
      top: 25%;
      width: 14px;
      height: 15px;
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
          <svg viewBox='0 0 14 15' version='1.1' xmlns='http://www.w3.org/2000/svg'>
            <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
              <path d='M13.7871392,13.2080294 L10.3358997,9.61856728 C11.223274,8.56369662 11.7094716,7.23645346 11.7094716,5.85473581 C11.7094716,2.6264854 9.08298623,0 5.85473581,0 C2.6264854,0 0,2.6264854 0,5.85473581 C0,9.08298623 2.6264854,11.7094716 5.85473581,11.7094716 C7.06666613,11.7094716 8.2215764,11.3439325 9.20899032,10.650019 L12.6864488,14.2667184 C12.831799,14.4176688 13.0272963,14.5009078 13.236794,14.5009078 C13.4350914,14.5009078 13.6232066,14.4253054 13.7660112,14.2878464 C14.0694393,13.9958732 14.0791123,13.511712 13.7871392,13.2080294 Z M5.85473581,1.52732239 C8.24092249,1.52732239 10.1821492,3.46854914 10.1821492,5.85473581 C10.1821492,8.24092249 8.24092249,10.1821492 5.85473581,10.1821492 C3.46854914,10.1821492 1.52732239,8.24092249 1.52732239,5.85473581 C1.52732239,3.46854914 3.46854914,1.52732239 5.85473581,1.52732239 Z' id='Shape' fill='#817CFF' fill-rule='nonzero' />
            </g>
          </svg>
        </label>
      </SearchWrap>
    )
  }
}

export default Search
