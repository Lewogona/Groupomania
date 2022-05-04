<template>
  <div id="app">
    <HeaderForPages />
    <LoginPage />
    <SignUp />
    <ProfileInfo />
  </div>
</template>

<script>
import LoginPage from "./components/LoginPage.vue"
import SignUp from "./components/SignUp.vue"
import ProfileInfo from "./components/ProfileInfo.vue"
import HeaderForPages from "./components/HeaderForPages.vue"

export default {
  name: 'App',
  components: {
    LoginPage,
    SignUp,
    ProfileInfo,
    HeaderForPages,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
}
</style>
