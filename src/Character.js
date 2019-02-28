import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Character extends Component {
  constructor(props) {
    super(props)
    this.setCharacterAsDead = this.setCharacterAsDead.bind(this)
    this.setCharacterAsAlive = this.setCharacterAsAlive.bind(this)
    this.toggleCharacterAsWhiteWalker = this.toggleCharacterAsWhiteWalker.bind(this)
  }

  setCharacterAsDead() {
    const { id, handleCharacterUpdate } = this.props
    handleCharacterUpdate({ id, status: "dead" })
  }

  setCharacterAsAlive() {
    const { id, handleCharacterUpdate } = this.props
    handleCharacterUpdate({ id, status: "alive", walker: false })
  }

  toggleCharacterAsWhiteWalker() {
    const { id, walker, status, handleCharacterUpdate } = this.props
    if(status === "dead")
      handleCharacterUpdate({ id, walker: true })
  }

  render() {
    return (
      <tr>
        <td>{ this.props.name }</td>
        <td onClick={ this.setCharacterAsAlive }>{ this.props.status === "alive" ? "X" : "" }</td>
        <td onClick={ this.setCharacterAsDead }>{ this.props.status === "dead" ? "X" : "" }</td>
        <td onClick={ this.toggleCharacterAsWhiteWalker }>{ this.props.walker ? "X" : "" }</td>
      </tr>
    )
  }
}

Character.propTypes = {
  name: PropTypes.string,
}

export default Character
