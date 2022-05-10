<template> 
    <b-card 
            title="Profil d'utilisateur" 
            :img-src="require('../assets/pp.jpg')" 
            img-alt="Profile Photo" 
            img-left 
            class="mb-3"
        >
            <b-card-text>Prénom : {{ currentUser.firstName }}</b-card-text>
            <b-card-text>Nom : {{ currentUser.lastName }}</b-card-text>
            <b-card-text>Email : {{ currentUser.email }}</b-card-text>
            <b-card-text>Statut : {{ currentUser.status }}</b-card-text>
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
        status: String
    }
}

</script>

<style scoped lang="scss">

</style>