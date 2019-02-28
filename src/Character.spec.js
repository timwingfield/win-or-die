import { shallow, mount, render } from 'enzyme'
import Character from './Character'

let subject, instance, props, Component, result = null
const shallowed = () => {
  if(!subject) {
    subject = shallow(<Component {...props} />)
    instance = subject.instance()
  }
  return subject
}

describe("Character", () => {
  beforeEach( () => {
    Component = Character
    subject = null
    instance = null

    props = {
      id: 44,
      name: "Spongebob Squarepants",
      status: "alive",
      walker: false,
      handleCharacterUpdate: sinon.spy(),
    }
  })

  it("should exist", () => {
    expect(shallowed()).to.not.be.undefined
  })

  describe('#setCharacterAsDead', () => {
    beforeEach( () => {
      shallowed()
      instance.setCharacterAsDead()
    })

    it('should call the handler with id and dead status', () => {
      expect(props.handleCharacterUpdate.calledWith(
        { id: 44, status: "dead" }
      )).to.be.true
    })
  })

  describe('#setCharacterAsAlive', () => {
    beforeEach( () => {
      props.status = "dead"
      props.walker = true
      shallowed().instance().setCharacterAsAlive()
    })

    it('should call the handler with id, alive status, and reset walker', () => {
      expect(props.handleCharacterUpdate.calledWith(
        { id: 44, status: "alive", walker: false }
      )).to.be.true
    })
  })

  describe('#setCharacterAsWhiteWalker', () => {
    context('status is alive', () => {
      beforeEach( () => { shallowed().instance().toggleCharacterAsWhiteWalker() })

      it('should not call the handler with an update', () => {
        expect(props.handleCharacterUpdate.called).to.be.false
      })
    })

    context('status is dead', () => {
      beforeEach( () => {
        props.status = "dead"
        shallowed().instance().toggleCharacterAsWhiteWalker()
      })

      it('should call the handler to update the walker to be true', () => {
        expect(props.handleCharacterUpdate.calledWith(
          {id: 44, walker: true}
        )).to.be.true
      })
    })
  })
})
