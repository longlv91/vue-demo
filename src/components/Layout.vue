<template>
<a-layout id="vue-page">
    <Navigation v-show="isLoggedIn" :collapsed="collapsed" :key="updateKey('nav')"/>
    <a-layout>
        <Header v-show="isLoggedIn" :key="updateKey('header')" :collapsed="collapsed" :actionTrigger="toggle" />
        <Content />
        <Footer v-show="isLoggedIn" :key="updateKey('footer')" />
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
                this.keyId++;
            }
        })
    }

    toggle() {
        this.collapsed = !this.collapsed;
    }

    updateKey(ele) {
      return ele + "-" + this.keyId;
    }

}

export default Layout;
</script>
