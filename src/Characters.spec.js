import { shallow } from 'enzyme'
import Characters from './Characters'

let subject, result = null

describe("Characters", () => {
  beforeEach( () => {
    subject = shallow(<Characters />)
  })

  it("should exist", () => {
    expect(subject).to.not.be.undefined
  })
})
