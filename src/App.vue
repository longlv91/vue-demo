<template>
  <div id="app">
    <Layout/>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import Layout from './components/Layout';

@Component({
  components: {
    Layout
  }
})
// eslint-disable-next-line
export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>
