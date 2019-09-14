<template>
<a-layout id="components-layout-demo-custom-trigger">
    <Navigation v-show="isLoggedIn" :collapsed="collapsed" :key="keyId"/>
    <a-layout>
        <Header v-show="isLoggedIn" :key="keyId" :collapsed="collapsed" :actionTrigger="toggle" />
        <Content />
        <Footer v-show="isLoggedIn" :key="keyId" />
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
import { debuglog } from "util";

@Component({
    components: {
        Navigation,
        Header,
        Content,
        Footer
    }
})
class Layout extends Vue {
    isLoggedIn;
    keyId = 0;
    collapsed = false;

    beforeCreate() {
        this.isLoggedIn = this.$store.getters["auth/isLoggedIn"];
        this.$store.subscribe(config => {
            if (config.type === "auth/setLoggedIn") {
                this.isLoggedIn = this.$store.getters["auth/isLoggedIn"];
                this.updateKey();
            }
        })
    }

    toggle() {
        this.collapsed = !this.collapsed;
    }

    updateKey() {
      this.keyId++;
    }

}

export default Layout;
</script>
