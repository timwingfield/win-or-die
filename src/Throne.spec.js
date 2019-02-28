import { shallow, mount, render } from 'enzyme'
import Throne from './Throne'

let subject, instance, props, Component, result, event = null
const shallowed = () => {
  if(!subject) {
    subject = shallow(<Component {...props} />)
    instance = subject.instance()
  }
  return subject
}

describe("Throne", () => {
  beforeEach( () => {
    Component = Throne
    subject = null
    instance = null

    props = {}

    event = {
      preventDefault: sinon.spy(),
      target: {
        value: "Spongebob"
      }
    }
  })

  it("should exist", () => {
    expect(shallowed()).to.not.be.undefined
  })

  describe('#updateCharacterName', () => {
    context('no character name prop', () => {
      beforeEach( () => {
        shallowed().instance().updateCharacterName(event)
      })

      it('should call prevent default', () => {
        expect(event.preventDefault.called).to.be.true
      })

      it('should set the state', () => {
        expect(instance.state.characterName).to.eql(event.target.value)
      })
    })

    context('character name prop provided', () => {
      beforeEach( () => {
        props = {
          characterName: "Eugene Krabs"
        }
      })

      it('should default the state to the prop value', () => {
        expect(shallowed().instance().state.characterName).to.eql(props.characterName)
      })

      it('should set the state', () => {
        shallowed().instance().updateCharacterName(event)
        expect(instance.state.characterName).to.eql(event.target.value)
      })
    })
  })
})
