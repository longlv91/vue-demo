<template>
  <a-layout-sider  class="sider-bar" :trigger="null" collapsible v-model="collapsed">
    <div class="logo"></div>
    <perfect-scrollbar>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <template v-for="(menu, index) in menus">
          <a-menu-item v-if="!menu.hasChild" :key="index">
            <router-link :to="menu.routerLink">
              <a-icon :type="menu.icon" />
              <span class="nav-text">{{menu.label}}</span>
            </router-link>
          </a-menu-item>
          <a-sub-menu v-if="menu.hasChild" :key="'sub' + index">
            <span slot="title">
              <a-icon :type="menu.icon" />
              <span>{{menu.label}}</span>
            </span>
            <a-menu-item v-for="(submenu, i) in menu.children" :key="'sub' + index + '-' + i">
              <router-link :to="submenu.routerLink">
                <span class="nav-text">{{submenu.label}}</span>
              </router-link>
            </a-menu-item>
          </a-sub-menu>
        </template>
      </a-menu>
    </perfect-scrollbar>
  </a-layout-sider>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

@Component({
  components: {},
  props: {
    collapsed: Boolean
  }
})
export default class Navigation extends Vue {
  menus = [];

  created() {
    axios
      .get("http://localhost:3333/api/menus")
      .then(response => {
        this.menus = response.data;
      })
      .catch(error => {
        this.menus = [];
      })
      .finally(function() {
        console.log("Done call API");
      });
  }
}
</script>

<style>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.sider-bar .ps {
  height: calc(100vh - 64px);
}
</style>