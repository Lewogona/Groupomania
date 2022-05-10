<template> 
    <b-container>
        <b-navbar toggleable="lg" >
            <b-navbar-brand class="icon" href="#/">
                <img :src="require('../assets/icon-left-font.png')" alt="Logo de Groupomania">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                    <template #button-content>
                        <b-icon-newspaper></b-icon-newspaper> Les posts
                    </template>
                <b-dropdown-item href="#/allposts"><b-icon-eyeglasses></b-icon-eyeglasses> Consulter les publications</b-dropdown-item>
                <b-dropdown-item href="#/newpost"><b-icon-pencil-fill></b-icon-pencil-fill> Publier un nouveau post</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                    <template #button-content>
                        <b-icon-person-lines-fill></b-icon-person-lines-fill> Mon compte
                    </template>
                <b-dropdown-item href="#/profile"><b-icon-person-square></b-icon-person-square> Profil</b-dropdown-item>
                <b-dropdown-item @click="logOut"><b-icon-power></b-icon-power> Déconnexion</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </b-container>
</template>

<script>

export default {
    name: 'HeaderForPages',
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        }
    }
}

</script>

<style scoped lang="scss">
.icon {
    width: 300px;
}

.icon img {
    width: 100%;
}
</style>