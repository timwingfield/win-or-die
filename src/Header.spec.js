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
})
