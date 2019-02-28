const theSource = {
  renderComponent: (component, elementId, props = {}) => {
    const Component = typeof component === 'string' ? app.components[component] : component
    const el = document.getElementById(elementId)
    if (!el || !Component) {
      return
    }
    const ProviderComponent = withProvider(Component)
    render(<ProviderComponent {...props} />, el)
  }
}

class TestComponent extends Component {
  render() {
    <div>Test Component</div>
  }
}

let subject, result, props, elem, providerSpy, renderSpy, getElementSpy, mockComponent, mockDiv = null

describe("app_setup", () => {
  beforeEach( () => {
    app.components = { testComponent: TestComponent }

    mockDiv = <div id="fake"></div>
    mockComponent = () => (<p>hola</p>)
    providerSpy = sinon.stub(withProvider, "default").returns( mockComponent )
    renderSpy = sinon.stub(ReactDom, "render")
    getElementSpy = sinon.stub(document, "getElementById").returns(mockDiv)
  })

  afterEach( () => {
    getElementSpy.restore()
    providerSpy.restore()
    renderSpy.restore()
  })

  it('should have a components obj', () => {
    expect(app.components).to.not.be.undefined
  })

  it('should have a libs obj', () => {
    expect(app.libs).to.eql({})
  })

  it('should have a pages obj', () => {
    expect(app.pages).to.eql({})
  })

  it('should have a images obj', () => {
    expect(app.images).to.eql({})
  })

  describe('renderComponent', () => {
    let elCall
    context('dom element and component are defined', () => {
      beforeEach( () => {
        elem = "test-elem"
        props = { sponge: "bob" }

        app.renderComponent("testComponent", elem, props)
        elCall = renderSpy.getCall(0)
      })

      it('should call getElementById with our id', () => {
        expect(getElementSpy.calledWith(elem)).to.be.true
      })

      it('should call the provider component with the correct component', () => {
        expect(providerSpy.calledWith(TestComponent)).to.be.true
      })

      it('should call render', () => {
        expect(renderSpy.called).to.be.true
      })

      it('render has provider component as first arg', () => {
        expect(elCall.args[0].type).to.eql(mockComponent)
      })

      it('render has element as second arg', () => {
        expect(elCall.args[1]).to.eql(mockDiv)
      })

      it('should have the props', () => {
        expect(elCall.args[0].props).to.eql(props)
      })
    })

    context('dom element is undefined', () => {
      beforeEach( () => {
        app.components = { testComponent: TestComponent }
      })

      it('should return undefined', () => {
        expect(app.renderComponent("testComponent", undefined)).to.be.undefined
      })
    })

    context('component is undefined', () => {
      beforeEach( () => {
        elem = "test-elem"
      })

      it('should return undefined', () => {
        expect(app.renderComponent(undefined, elem)).to.be.undefined
      })
    })

    context('component name is a string', () => {
      beforeEach( () => {
        app.renderComponent("testComponent", elem, props)
      })

      it('should call the provider component with the correct component', () => {
        expect(providerSpy.calledWith(TestComponent)).to.be.true
      })
    })

    context('component name is a component object', () => {
      beforeEach( () => {
        app.renderComponent(TestComponent, elem, props)
      })

      it('should call the provider component with the correct component', () => {
        expect(providerSpy.calledWith(TestComponent)).to.be.true
      })
    })
  })
})
