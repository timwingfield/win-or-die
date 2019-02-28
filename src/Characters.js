import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Character from './Character'

class Characters extends Component {
  constructor(props) {
    super(props)
  }

  listCharacters() {
    return this.props.characters.map( (c) => {
      return <Character {...c} />
    })
  }

  render() {
    return (
      <div id="character-list">
        <table border="1" width="600">
          <tr>
            <th>Name</th>
            <th>Alive</th>
            <th>Dead</th>
            <th>White Walker</th>
          </tr>
          { this.listCharacters() }
        </table>
      </div>
    )
  }
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).required,
}

export default Characters
