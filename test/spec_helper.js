React = require("react")
chai = require("chai")
expect = require("chai").expect
sinon = require("sinon")
chaiEnzyme = require("chai-enzyme")

const enzyme = require("enzyme")
const Adapter = require("enzyme-adapter-react-16")
enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true
})

chai.use(chaiEnzyme())
