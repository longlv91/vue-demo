<template>
    <a-layout-header style="background: #fff; padding: 0">
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="onClick"
      />
    </a-layout-header>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {},
  props: {
    collapsed: Boolean,
    actionTrigger: Function
  }
})
export default class Header extends Vue {
  onClick() {
    this.actionTrigger();
  }
}
</script>

<style>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

.trigger:hover {
  color: #1890ff;
}

</style>