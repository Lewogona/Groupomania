<template>
    <b-container fluid="lg" id="app">
        <HeaderForPages v-if="showHeader"/>
        <router-view/>
    </b-container>
</template>

<script>
import HeaderForPages from "./components/HeaderForPages.vue"

export default {
    name: 'App',
    components: {
        HeaderForPages,
    },
    created() {
        const html = document.documentElement
        html.setAttribute('lang', 'fr')
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
$link-color: $danger;
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
    @include media-breakpoint-up(xl) {
        width: 1200px;
    }
}

.border-profile {
    border-right: 1px solid grey;
    @include media-breakpoint-down(sm) {
        border-right: none;
        border-bottom: 1px solid grey;
    }
}

.card-text {
    margin-bottom: 2px;
}

.col-footer {
    padding: 0px;
}

#not-on-phone {
    width: 300px;
    @include media-breakpoint-down(xs) {
        display: none;
    }
}

#only-on-phone {
    width: 50px;
    @include media-breakpoint-up(sm) {
        display: none;
    }
}

.hide-on-phone {
    @include media-breakpoint-down(xs) {
        display: none;
    }
}
</style>
