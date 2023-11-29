<template>
  <div class="login">
    <el-form ref="form" :model="query" label-width="40px" class="form">
      <el-row>
        <el-col>
          <el-form-item label="账号">
            <el-input v-model="query.account" placeholder="请输入账号"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="账号">
            <el-input v-model="query.password" placeholder="请输入密码" type="password"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item>
            <el-button @click="login()">登录</el-button>
            <el-button @click="cancel()">取消</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import router from '@/router';

// @ is an alias to /src
export default {
  data() {
    return {
      query: {
        account: undefined,
        password: undefined
      }
    }
  },
  methods: {
    login() {
      let act = sessionStorage.getItem("account");
      let password = sessionStorage.getItem("password");
      if (!act) {
        sessionStorage.setItem("account", this.query.account);
        sessionStorage.setItem("password", this.query.password);
        new Promise((resolve, reject) => {
          this.$message({
            message: "创建成功",
            type: 'success'
          })
          resolve('success')
        }).then(() => {
          router.push('/')
        })
      }
      else if (act != this.query.account) {
        this.$message({
          message: "账号或密码错误",
          type: 'error'
        })
      }
      else if (password != this.query.password) {
        this.$message({
          message: "密码错误",
          type: 'error'
        })
      }
      else {
        new Promise((resolve, reject) => {
          this.$message({
            message: "登录成功",
            type: 'success'
          })
          resolve('success')
        }).then(() => {
          router.push('/')
        })
      }
    },
    cancel() {

    }
  }
}
</script>

<style lang="less">
.login {
  width: 40%;
  height: 50%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(31, 167, 194);
  border-radius: 10%;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
}

.form {
  width: 80%;
  height: 30%;
}

body {
  background-image: url('../assets/loginwall.png');
}
</style>