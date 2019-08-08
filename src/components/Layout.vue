<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <Navigation />
    <a-layout :style="{ marginLeft: '200px' }">
      <Header />
      <Content />
      <Footer />
    </a-layout>
  </a-layout>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import Navigation from "./navigation/Navigation";
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";

@Component({
  components: {
    Navigation,
    Header,
    Content,
    Footer
  }
})
export default class Layout extends Vue {}
</script>