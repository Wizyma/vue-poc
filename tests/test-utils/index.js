const { shallowMount, createLocalVue } = require("@vue/test-utils");
const VueApollo = require("vue-apollo");

function itRenderVueComponentCorrectly(component, variants = null) {
  if (!component)
    return new Error(
      `A Component to test must be passed to the function, instead got ${component}`
    );

  if (!variants)
    return new Error(`variant to tests must be passed, instead got ${variant}`);

  if (!Array.isArray(variants))
    return new Error(
      `variant to tests must be an array, instead got ${typeof variant}`
    );

  if (Array.isArray(variants)) {
    variants.forEach(({ props, name }) => {
      // Without this assign, component is undefined when the test, run, strange !
      const ToTest = component;
      it(`${component.name} ${name}should render correctly `, () => {
        const component = shallowMount(ToTest, {
          propsData: {
            ...props
          }
        });

        expect(component).toMatchSnapshot();
      });
    });
  }
}

function itRenderVueGraphQLComponentCorrectly(component, variants = null) {
  if (!component)
    return new Error(
      `A Component to test must be passed to the function, instead got ${component}`
    );

  if (!variants)
    return new Error(`variant to tests must be passed, instead got ${variant}`);

  if (!Array.isArray(variants))
    return new Error(
      `variant to tests must be an array, instead got ${typeof variant}`
    );

  if (Array.isArray(variants)) {
    variants.forEach(({ props, name }) => {
      // Without this assign, component is undefined when the test, run, strange !
      const ToTest = component;
      it(`${component.name} ${name}should render correctly `, () => {
        const Vue = createLocalVue();
        const component = shallowMount(ToTest, {
          localVue: Vue,
          mocks: {
            $apollo: {
              query: jest.fn(() =>
                Promise.resolve({
                  data: {
                    ...props
                  }
                })
              )
            }
          }
        });

        expect(component.element).toMatchSnapshot();
      });
    });
  }
}

module.exports = {
  itRenderVueGraphQLComponentCorrectly,
  itRenderVueComponentCorrectly
};
