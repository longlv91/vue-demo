<template>
<a-layout id="vue-page">
    <Navigation v-show="isShow" :isLoggedIn="isShow" :collapsed="collapsed" :key="updateKey('nav')"/>
    <a-layout>
        <Header v-show="isShow" :key="updateKey('header')" :collapsed="collapsed" :actionTrigger="toggle" />
        <Content />
        <Footer v-show="isShow" :key="updateKey('footer')" />
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
    isShow;
    keyId = 0;
    collapsed = false;

    beforeCreate() {
        this.isShow = this.$store.getters["auth/isLoggedIn"] && !this.$store.getters["auth/isLockScreen"];
        this.$store.subscribe(config => {
            let isLockScreen =  !this.$store.getters["auth/isLockScreen"];
            if (config.type === "auth/setLoggedIn") {
                this.isShow = this.$store.getters["auth/isLoggedIn"] && isLockScreen;
                this.keyId++;
            }
            if (config.type === "auth/setLockScreen") {
                this.isShow = this.$store.getters["auth/isLoggedIn"] && isLockScreen;
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
