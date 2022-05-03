<template>
  <div id="app">
    <LoginPage />
    <SignUp />
  </div>
</template>

<script>
import LoginPage from "./components/LoginPage.vue"
import SignUp from "./components/SignUp.vue"

export default {
  name: 'App',
  components: {
    LoginPage,
    SignUp
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
