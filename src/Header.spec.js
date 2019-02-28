import { shallow } from 'enzyme'
import Header from './Header'

let subject, result = null

describe("Header", () => {
  beforeEach( () => {
    subject = shallow(<Header />)
  })

  it("should exist", () => {
    expect(subject).to.not.be.undefined
  })

  it('should have a title element', () => {
    expect(subject.find("#title")).to.have.lengthOf(1)
  })

  it('should have a rules element', () => {
    expect(subject.find("#rules")).to.have.lengthOf(1)
  })
})
