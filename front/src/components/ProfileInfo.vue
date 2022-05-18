<template> 
    <b-card 
        title="Profil d'utilisateur" 
        class="mb-3">
        <b-row>
            <b-col cols="4">
                <avatar 
                    :username="`${firstName} ${lastName}`" 
                    background-color="#FFD7D7" 
                    :size="200" 
                    :rounded="false" 
                    color="#FD2D01"></avatar>
            </b-col>
            <b-col cols="8">
                <b-card-text>Prénom : {{ firstName }}</b-card-text>
                <b-card-text>Nom : {{ lastName }}</b-card-text>
                <b-card-text>Email : {{ email }}</b-card-text>
                <b-card-text v-if="isAdmin">Statut : Admin </b-card-text>
                <b-card-text v-else>Statut : Employé(e) </b-card-text>
                <b-button 
                    @click="displayDeleteMessage" 
                    variant="outline-danger"
                    v-if="currentUser.id === userId || currentUser.isAdmin">
                        Supprimer le compte
                </b-button>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>

import Avatar from "vue-avatar"

export default {
    name: 'ProfileInfo',
    components: {
        Avatar
    },
    props: {
        firstName: String,
        lastName: String,
        email: String,
        isAdmin: Boolean,
        displayDeleteMessage: Function,
        userId: Number
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    }
}

</script>

<style scoped lang="scss">

</style>