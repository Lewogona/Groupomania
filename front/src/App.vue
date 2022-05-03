<template>
  <div id="app">
    <!-- <LoginPage /> -->
    <!-- <SignUp /> -->
    <ProfileInfo />
  </div>
</template>

<script>
// import LoginPage from "./components/LoginPage.vue"
// import SignUp from "./components/SignUp.vue"
import ProfileInfo from "./components/ProfileInfo.vue"

export default {
  name: 'App',
  components: {
    // LoginPage,
    // SignUp,
    ProfileInfo,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
