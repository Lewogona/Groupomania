<template> 
    <b-row align-h="center">
        <b-col cols="10">
            <b-card 
                header-bg-variant="secondary"
                header="Profil d'utilisateur">
                <b-row>
                    <b-col md="5" lg="4" xl="3" class="my-3">
                        <avatar 
                            :username="`${firstName} ${lastName}`" 
                            background-color="var(--blue)" 
                            :size="200" 
                            :rounded="false" 
                            color="var(--info)"
                            class="mx-auto"></avatar>
                    </b-col>
                    <b-col md="7" lg="8" xl="9">
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
        </b-col>
    </b-row>
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