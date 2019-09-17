<template>
<a-form id="lock-screen" :form="form" class="lock-form" @submit="handleSubmit">
    <a-form-item>
        <a-input v-show="false" v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]" placeholder="Username">
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
        <a-avatar :size="128" src="https://avatars1.githubusercontent.com/u/7886175?s=460&v=4" />
        <h3>{{currentUser.username}}</h3>
    </a-form-item>
    <a-form-item>
        <a-input v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }], initialValue: '' }
        ]" type="password" placeholder="Password">
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
    </a-form-item>
    <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button"><a-icon type="unlock" /> Unlock</a-button>
    </a-form-item>
</a-form>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import {
    authenticationService
} from "../../services";

@Component({
    components: {}
})
class LockScreen extends Vue {
    beforeCreate() {
        this.form = this.$form.createForm(this);
        this.currentUser = authenticationService.currentUserValue.userInfo;
        if (!document.body.classList.contains("lock-screen")) {
            document.body.classList.add("lock-screen");
        }
        this.$store.dispatch('auth/updateLockApp', true);
    }

    created() {
        console.log(this.form.resetFields())
        this.form.resetFields();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
            if (!err) {
                // console.log("Received values of form: ", values);
                let password = authenticationService.deEncryptedPassword(this.currentUser.password);
                if (this.currentUser.username === values.userName && values.password === password) {
                    this.$router.back();
                }
            }
        });
    }

    destroyed() {
        if (document.body.classList.contains("lock-screen")) {
            document.body.classList.remove("lock-screen");
        }
        this.$store.dispatch('auth/updateLockApp', false);
    }
}

export default LockScreen;
</script>

<style lang="scss" scoped>
.lock-form {
    width: 250px;
    margin: 0 auto;
    position: fixed;
    top: calc(50% - 150px);
    left: calc(50% - 150px);
    text-align: center;
    h3 {
        color: #fff;
    }
}
</style>
