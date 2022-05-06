<template>
  <div id="app">
    <HeaderForPages />
    <LoginPage />
    <SignUp />
    <ProfileInfo email="lewogona@gmail.com" status="admin" />
    <PublishedPost email="lewogona@gmail.com" date="04/05/2022"/>
    <PublishedComment email="lewogona@gmail.com" date="04/05/2022"/>
    <CreatePost email="lewogona@gmail.com" date="04/05/2022"/>
    <CreateComment email="lewogona@gmail.com" date="04/05/2022"/>
  </div>
</template>

<script>
import LoginPage from "./components/LoginPage.vue"
import SignUp from "./components/SignUp.vue"
import ProfileInfo from "./components/ProfileInfo.vue"
import HeaderForPages from "./components/HeaderForPages.vue"
import PublishedPost from "./components/PublishedPost.vue"
import PublishedComment from "./components/PublishedComment.vue"
import CreatePost from "./components/CreatePost.vue"
import CreateComment from "./components/CreateComment.vue"

export default {
  name: 'App',
  components: {
    LoginPage,
    SignUp,
    ProfileInfo,
    HeaderForPages,
    PublishedPost,
    PublishedComment,
    CreatePost,
    CreateComment,
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
