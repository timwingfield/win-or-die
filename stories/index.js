import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import Header from '../src/Header'
import Characters from '../src/Characters'

const characters = [
  {
    name: "Jon Snow",
    status: "alive",
    walker: false,
  },
  {
    name: "Tyrion Lannister",
    status: "alive",
    walker: false,
  },
  {
    name: "Arya Stark",
    status: "alive",
    walker: false,
  },
  {
    name: "Hodor",
    status: "dead",
    walker: false,
  },
]

const props = { characters }

storiesOf('Game of Thrones', module)
  .add('index', () => (
    <div>
      <Header />
      <Characters {...props} />
    </div>
  ))

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));
