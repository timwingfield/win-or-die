import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Character extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <tr>
        <td>{ this.props.name }</td>
        <td>{ this.props.status === "alive" ? "X" : "" }</td>
        <td>{ this.props.status === "dead" ? "X" : "" }</td>
        <td>{ this.props.walker }</td>
      </tr>
    )
  }
}

Character.propTypes = {
  name: PropTypes.string,
}

export default Character
