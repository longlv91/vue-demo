<template>
  <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
    <div :style="{ padding: '24px', background: '#fff'}">
      <router-view></router-view>
    </div>
  </a-layout-content>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {}
})
export default class Content extends Vue {
}
</script>