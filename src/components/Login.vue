<template>
  <div id="login">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="main"></div>
          <div class="form">
            <h3 @click="showRegister">注册</h3>
            <transition name="slide">
              <div v-bind:class="{ show: isShowRegister }" class="register">
                <input
                  type="text"
                  v-model="register.username"
                  placeholder="用户名"
                />
                <input
                  type="password"
                  v-model="register.password"
                  @keyup.enter="onRegister"
                  placeholder="密码"
                />
                <p v-bind:class="{ error: register.isError }">
                  {{ register.notice }}
                </p>
                <div class="button" @click="onRegister">注册</div>
              </div>
            </transition>

            <h3 @click="showLogin">登录</h3>
            <transition name="slide">
              <div v-bind:class="{ show: isShowLogin }" class="login">
                <input
                  type="text"
                  v-model="login.username"
                  placeholder="输入用户名"
                />
                <input
                  type="password"
                  v-model="login.password"
                  @keyup.enter="onLogin"
                  placeholder="密码"
                />
                <p v-bind:class="{ error: login.isError }">
                  {{ login.notice }}
                </p>
                <div class="button" @click="onLogin">登录</div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { Message } from 'element-ui'

export default {
  data() {
    return {
      isShowLogin: true,
      isShowRegister: false,
      login: {
        username: "andrew",
        password: "andrew",
        notice: "输入用户名和密码(可用默认账号直接登录)",
        isError: false,
      },
      register: {
        username: "",
        password: "",
        notice: "创建账号后，请记住用户名和密码",
        isError: false,
      },
    };
  },
  methods: {
    ...mapActions({
      loginUser: "login",
      registerUser: "register",
    }),
    showLogin() {
      this.isShowLogin = true;
      this.isShowRegister = false;
    },
    showRegister() {
      this.isShowLogin = false;
      this.isShowRegister = true;
    },
    onRegister() {
      if (!/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.register.username)) {
        this.register.isError = true;
        this.register.notice = "用户名3~15个字符，仅限于字母数字下划线中文";
        return;
      }
      if (!/^.{6,16}$/.test(this.register.password)) {
        this.register.isError = true;
        this.register.notice = "密码长度为6~16个字符";
        return;
      }

      this.registerUser({
        username: this.register.username,
        password: this.register.password,
      })
        .then(() => {
          this.register.isError = false;
          this.register.notice = "";
          this.$router.push({ path: "notebooks" });
        })
        .catch((data) => {
          this.register.isError = true;
          this.register.notice = data.msg;
        });
    },
    onLogin() {
      if (!/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.login.username)) {
        this.login.isError = true;
        this.login.notice = "用户名3~15个字符，仅限于字母数字下划线中文";
        return;
      }
      if (!/^.{6,16}$/.test(this.login.password)) {
        this.login.isError = true;
        this.login.notice = "密码长度为6~16个字符";
        return;
      }

      this.loginUser({
        username: this.login.username,
        password: this.login.password,
      })
        .then(() => {
          this.login.isError = false;
          this.login.notice = "";
          this.$router.push({ path: "notebooks" });
        })
        .catch((data) => {
          this.login.isError = true;
          this.login.notice = data.msg;
        });
    },
  },
};
</script>
<style lang="less">
.modal-mask {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 800px;
  height: 500px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  background-color: #474747;

  .main {
    flex: 1;
    background: #00be84 url("../assets/login-bg.jpg") center center no-repeat;
    background-size: cover;
    border-top-left-radius: 5vw;
    border-bottom-left-radius: 5vw;
  }
  .form {
    width: 270px;
    border-left: 1px solid #ccc;
    background-color: #fff;
    border-bottom-right-radius: 10vw;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.9);
    overflow: hidden;

    h3 {
      padding: 10px 20px;
      margin-top: -1px;
      font-weight: normal;
      font-size: 16px;
      border-top: 1px solid #eee;
      cursor: pointer;
      &:nth-of-type(2) {
        border-bottom: 1px solid #eee;
      }
    }

    .button {
      background-color: #00be84;
      height: 36px;
      line-height: 36px;
      text-align: center;
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      margin-top: 18px;
      cursor: pointer;
    }

    .login,
    .register {
      padding: 0px 20px;
      border-top: 1px solid #eee;
      height: 0;
      overflow: hidden;
      transition: height 0.4s;
      &.show {
        height: 193px;
      }

      input {
        display: block;
        width: 100%;
        height: 35px;
        line-height: 35px;
        padding: 0 6px;
        border-radius: 4px;
        border: 1px solid #ccc;
        outline: none;
        font-size: 14px;
        margin-top: 10px;
      }
      input:focus {
        border: 3px solid #9dcaf8;
      }

      p {
        font-size: 12px;
        margin-top: 10px;
        color: #444;
      }
      .error {
        color: red;
      }
    }
    .login {
      border-top: 0;
    }
  }
}
</style>
