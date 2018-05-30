import React, {Component} from 'react'
import _ from 'lodash'
import { cleanDoubleByteChars } from '../../../helpers/cleanDoubleByteChars'

class SecondaryTitle extends Component {
  render () {
    const h2Text = this.props.children[1]
    const svgAnchor = this.props.children[0].props.children[0]
    return (
      <h2 id={cleanDoubleByteChars(_.kebabCase(h2Text))}>
        <a href={'#' + cleanDoubleByteChars(_.kebabCase(h2Text))} aria-hidden='true' className='anchor'>
          {svgAnchor}
        </a>
        {h2Text}
      </h2>
    )
  }
}

export default SecondaryTitle
