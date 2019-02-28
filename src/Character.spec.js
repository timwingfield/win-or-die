import { shallow, mount, render } from 'enzyme'
import Character from './Character'

let subject, result = null

describe("Character", () => {
  beforeEach( () => {
    subject = shallow(<Character />)
  })

  it("should exist", () => {
    expect(subject).to.not.be.undefined
  })
})
