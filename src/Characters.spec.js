import { shallow } from 'enzyme'
import Characters from './Characters'
import Character from './Character'

let subject, result, props = null

describe("Characters", () => {
  beforeEach( () => {
    props = {
      characters: [
        {
          id: 44,
          name: "Spongebob",
          status: "alive",
          walker: false,
        },
        {
          id: 27,
          name: "Squidward",
          status: "dead",
          walker: false,
        },
      ],
      handleCharacterUpdate: sinon.spy()
    }

    subject = shallow(<Characters {...props} />)
  })

  it("should exist", () => {
    expect(subject).to.not.be.undefined
  })

  describe('#listCharacters', () => {
    beforeEach( () => {
      result = subject.instance().listCharacters()
    })

    it('should have two items', () => {
      expect(result.length).to.eq(2)
    })

    it('each item should be a Character', () => {
      result.forEach((item) => { expect(item.type).to.eql(Character) })
    })

    it('should pass the spongebob props', () => {
      const itemProps = Object.assign(
        props.characters[0],
        { handleCharacterUpdate: props.handleCharacterUpdate }
      )
      expect(result[0].props).to.eql(itemProps)
    })

    it('should pass the squidward props', () => {
      const itemProps = Object.assign(
        props.characters[1],
        { handleCharacterUpdate: props.handleCharacterUpdate }
      )
      expect(result[1].props).to.eql(itemProps)
    })
  })
})
