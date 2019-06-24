import Home from "@/components/Home.vue";
import { itRenderVueComponentCorrectly } from "../test-utils";

const mutations = [
  {
    name: "with all props",
    props: {
      name: "Xin Zhao",
      age: 25
    }
  },
  {
    name: "without props",
    props: null
  }
];

describe(Home.name, () => {
  itRenderVueComponentCorrectly(Home, mutations);
});
