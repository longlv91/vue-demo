<template>
<div class="error-page">
    <img alt="403" src="../../assets/images/error/500.jpg" />
    <a-row>
        <router-link :to="'/'">
            <a-button type="primary">Back to home</a-button>
        </router-link>
    </a-row>
</div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    components: {}
})
class ServerError extends Vue {}

export default ServerError;
</script>

<style lang="scss">
.error-page {
    text-align: center;

    .ant-row {
        margin-top: 10px;
    }
}
</style>
