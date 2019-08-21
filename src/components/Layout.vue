<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <Navigation :collapsed="collapsed"/>
    <a-layout>
      <Header :collapsed="collapsed" :actionTrigger="toggle"/>
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
class Layout extends Vue {
  collapsed = false;
  toggle() {
    this.collapsed = !this.collapsed;
  }
}

export default Layout;
</script>