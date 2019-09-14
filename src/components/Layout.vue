<template>
<a-layout id="components-layout-demo-custom-trigger">
    <Navigation v-show="isLoggedIn" :collapsed="collapsed" />
    <a-layout>
        <Header v-show="isLoggedIn" :collapsed="collapsed" :actionTrigger="toggle" />
        <Content />
        <Footer v-show="isLoggedIn" />
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
    isLoggedIn = false;
    collapsed = false;

    beforeCreate() {
        this.isLoggedIn = this.$store.state.auth.loggedIn;
        this.$store.subscribe(config => {
          if (config.type === "auth/setLoggedIn") {
            this.isLoggedIn = config.payload;
          }
        })
    }

    toggle() {
        this.collapsed = !this.collapsed;
    }

}

export default Layout;
</script>
