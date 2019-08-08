<template>
  <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
    <div class="logo"></div>
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
      <a-menu-item key="1">
        <router-link to="/dashboard">
          <a-icon type="user" />
          <span class="nav-text">{{ $t("navigation.dashboard") }}</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/404">
          <a-icon type="video-camera" />
          <span class="nav-text">{{ $t("navigation.notFound") }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {}
})
export default class Navigation extends Vue {}
</script>