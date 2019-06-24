import { itRenderVueGraphQLComponentCorrectly } from "../../../tests/test-utils";
import Continents from '../Continents.vue';

const mutations = [
  {
    name: "with response",
    props: {
      continents: [{
        name: "Africa",
        code: "AF",
        countries: [{
          name: "Algerie",
          code: "AL",
        }]
      }, {
        name: "Europe",
        code: "EU",
        countries: [{
          name: "France",
          code: "FR"
        }]
      }]
    }
  },
  {
    name: "without response",
    props: null
  }
];

describe(Continents.name, () => {
  itRenderVueGraphQLComponentCorrectly(Continents, mutations);
});
