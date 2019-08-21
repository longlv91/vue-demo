<template>
  <a-layout-content class="main-content" :style="{ margin: '24px 16px', padding: '24px 0', background: '#fff', minHeight: '280px' }">
    <perfect-scrollbar>
    <div :style="{ padding: '24px', background: '#fff'}">
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