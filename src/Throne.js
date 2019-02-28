import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Throne extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characterName: props.characterName || ""
    }

    this.updateCharacterName = this.updateCharacterName.bind(this)
  }

  updateCharacterName(e) {
    e.preventDefault()
    this.setState({ characterName: e.target.value })
  }

  render() {
    return (
      <div>
        <span>Who sits the Iron Throne at the end? </span>
        <input value={ this.state.characterName } onChange={ this.updateCharacterName } />
      </div>
    )
  }
}

Throne.propTypes = {
  characterName: PropTypes.string,
}

export default Throne
