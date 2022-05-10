<template> 
    <b-card 
            title="Profil d'utilisateur" 
            :img-src="require('../assets/pp.jpg')" 
            img-alt="Profile Photo" 
            img-left 
            class="mb-3"
        >
            <b-card-text>Prénom : {{ firstName }}</b-card-text>
            <b-card-text>Nom : {{ lastName }}</b-card-text>
            <b-card-text>Email : {{ email }}</b-card-text>
            <b-card-text v-if="isAdmin">Statut : Admin </b-card-text>
            <b-card-text v-else>Statut : Employé(e) </b-card-text>
            <b-button variant="danger">Supprimer le compte</b-button>
    </b-card>
</template>

<script>

export default {
    name: 'ProfileInfo',
    props: {
        firstName: String,
        lastName: String,
        email: String,
        isAdmin: Boolean
    }
}

</script>

<style scoped lang="scss">

</style>