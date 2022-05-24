<template> 
    <b-navbar toggleable="lg" >
        <b-navbar-brand class="icon" href="#/">
            <img id="not-on-phone" :src="require('../assets/icon-left-font.png')" alt="Logo de Groupomania">
            <img id="only-on-phone" :src="require('../assets/icon.png')" alt="Logo de Groupomania">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
                <template #button-content>
                    <b-icon-newspaper></b-icon-newspaper> Les posts
                </template>
            <b-dropdown-item href="#/lastparticipations"><b-icon-chat-square-dots></b-icon-chat-square-dots> Les dernières participations</b-dropdown-item>
            <b-dropdown-item href="#/allposts"><b-icon-book></b-icon-book> Consulter toutes les publications</b-dropdown-item>
            <b-dropdown-item href="#/newpost"><b-icon-pencil-fill></b-icon-pencil-fill> Publier un nouveau post</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
                <template #button-content>
                    <b-icon-person-lines-fill></b-icon-person-lines-fill> Mon compte
                </template>
            <b-dropdown-item :href="`#/profile/${currentUser.id}`"><b-icon-person-square></b-icon-person-square> Profil</b-dropdown-item>
            <b-dropdown-item v-if="currentUser.isAdmin" href="#/allusers"><b-icon-view-list></b-icon-view-list> Tous les profils</b-dropdown-item>
            <b-dropdown-item @click="logOut"><b-icon-power></b-icon-power> Déconnexion</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: 'HeaderForPages',
    props: {
        isAdmin: Boolean
    },
    computed: {
        // Retrieve the user with their info
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        // log out and redirect to the login page
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped lang="scss">
.icon img {
    width: 100%;
}

.navbar-brand {
    padding: 0px;
}
</style>