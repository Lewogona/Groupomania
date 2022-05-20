<template>
    <div id="app">
        <HeaderForPages v-if="showHeader"/>
        <router-view/>
    </div>
</template>

<script>

import HeaderForPages from "./components/HeaderForPages.vue"

export default {
    name: 'App',
    components: {
        HeaderForPages,
    },
    computed: {
        showHeader() {
            return !(this.$route.path === "/login" || this.$route.path === "/signup")
        }
    }
}
</script>

<style lang="scss">

$primary: #FD2D01;
$secondary: #FFD7D7;
$danger: #B40000;
$info: #112341;
$blue: #c8dffc;
$body-bg: rgb(245, 245, 245);
$card-border-color: grey;

@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/src/index.scss';

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // color: #2c3e50;
    box-sizing: border-box;
    margin: auto;
    background-color: white;
    min-height: 100vh;
    width: 100%;
    @media (min-width: 1200px) {
        width: 1200px;
    }
}
</style>
