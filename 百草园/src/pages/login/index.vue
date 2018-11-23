<template>
  <Form ref="formInline" :model="formInline" :rules="ruleInline" class="login">
    <h1>后台登录</h1>
    <FormItem prop="user">
      <Input type="text" v-model="formInline.user" placeholder="用户名">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password"  v-model="formInline.password" placeholder="密码" @keyup.enter.native="handleSubmit('formInline')">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem>
      <Button type="primary" long @click="handleSubmit('formInline')">Login</Button>
    </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'login',

  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$router.push('/admin/home/index')
        } else {
          this.$Message.error('请输入用户名或密码!')
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.login{
  width: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -175px;
  margin-top: -150px;
  h1{
    text-align: center;
    padding: 20px 0;
  }
}
</style>
