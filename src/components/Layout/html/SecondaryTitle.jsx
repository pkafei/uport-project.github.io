import React, {Component} from 'react'

class SecondaryTitle extends Component {
  render () {
    return (
      <h2 id={this.props.id}>
        {this.props.children}
      </h2>
    )
  }
}

export default SecondaryTitle
