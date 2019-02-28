import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import Header from '../src/Header'
import Characters from '../src/Characters'

const characters = [
  {
    id: 1,
    name: "Jon Snow",
    status: "alive",
    walker: false,
  },
  {
    id: 2,
    name: "Tyrion Lannister",
    status: "alive",
    walker: false,
  },
  {
    id: 3,
    name: "Arya Stark",
    status: "alive",
    walker: false,
  },
  {
    id: 4,
    name: "Hodor",
    status: "dead",
    walker: false,
  },
  {
    id: 5,
    name: "Samwell Tarly",
    status: "alive",
    walker: false,
  },
  {
    id: 6,
    name: "The Hound",
    status: "alive",
    walker: false,
  },
]


class GameWithState extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters
    }

    this.handleCharacterUpdate = this.handleCharacterUpdate.bind(this)
  }

  handleCharacterUpdate(character) {
    let newCharacters = this.state.characters.map((c) => {
      if(c.id === character.id) return Object.assign(c, character)
      return c
    })

    this.setState({ characters: newCharacters })
  }

  render() {
    return (
      <div>
        <Header />
        <Characters
          {...this.state}
          handleCharacterUpdate={ this.handleCharacterUpdate }
        />
      </div>
    )
  }
}

storiesOf('Game of Thrones', module)
  .add('index', () => (
    <GameWithState />
  ))

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));
