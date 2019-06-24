<template>
  <div>
    <div v-if="continents">
      <div v-for="continent in continents" v-bind:key="continent.code">
        <div>
          <h1>{{ continent.name }}</h1>
          <div>
            <ul class="list">
              <li
                class="list-item"
                v-for="countrie in continent.countries"
                v-bind:key="countrie.code"
              >
                <p class="list-item-text">{{ countrie.name }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Loading....</div>
  </div>
</template>

<style scoped>
.list {
  list-style: none;
  padding: 0px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.list-item {
  display: flex;
  text-align: left;
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;
  margin: 10px;
  box-shadow: 1px 4px 14px 2px rgba(0, 0, 255, 0.2);
}

.list-item-text {
  width: 150px;
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

<script lang="ts">
import Vue from "vue";
import gql from "graphql-tag";

const CONTINENTS_QUERY = gql`
  query {
    continents {
      name
      code
      countries {
        code
        name
      }
    }
  }
`;

export default {
  name: "Continents-Component",
  apollo: {
    continents: {
      query: CONTINENTS_QUERY
    }
  }
};
</script>
