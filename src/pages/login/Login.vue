<template>
<a-form id="login" :form="form" class="login-form" @submit="handleSubmit">
    <img alt="Vue logo" width="300" src="../../assets/images/vue.png" />
    <a-form-item>
        <a-input v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]" placeholder="Username">
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
    </a-form-item>
    <a-form-item>
        <a-input v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]" type="password" placeholder="Password">
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
    </a-form-item>
    <a-form-item>
        <a-checkbox v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]">Remember me</a-checkbox>
        <a class="login-form-forgot" href>Forgot password</a>
        <a-button type="primary" html-type="submit" class="login-form-button">Log in</a-button>Or
        <a href>register now!</a>
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
class Login extends Vue {
    beforeCreate() {
        this.form = this.$form.createForm(this);
        authenticationService.logout();
        this.$store.dispatch('auth/updateStateUser', false);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
            if (!err) {
                // console.log("Received values of form: ", values);
                authenticationService.login(values.userName, values.password).then(success => {
                    this.$store.dispatch('auth/updateStateUser', success);
                    let redirectPath = '/apps/dashboards/analytics';
                    if (this.$route && this.$route.query && this.$route.query.redirect) {
                        redirectPath = this.$route.query.redirect;
                    }
                    this.$router.push({
                        path: redirectPath
                    })
                });
            }
        });
    }
}

export default Login;
</script>

<style scoped>
.login-form {
    max-width: 300px;
    margin: 0 auto;
    position: fixed;
    top: calc(50% - 300px);
    left: calc(50% - 150px);
}

.login-form-forgot {
    float: right;
}

.login-form-button {
    width: 100%;
}
</style>
