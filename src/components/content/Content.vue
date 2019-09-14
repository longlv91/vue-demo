<template>
  <a-layout-content class="main-content">
    <perfect-scrollbar>
    <div class="router-content">
      <router-view></router-view>
    </div>
    </perfect-scrollbar>
  </a-layout-content>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {}
})
class Content extends Vue {
}

export default Content;
</script>

<style>
.main-content > .ps {
  height: calc(100vh - 229px);
}
</style>