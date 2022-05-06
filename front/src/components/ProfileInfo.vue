<template> 
    <b-card 
            title="Profil d'utilisateur" 
            :img-src="require('../assets/pp.jpg')" 
            img-alt="Profile Photo" 
            img-left 
            class="mb-3"
        >
            <b-card-text>Email : {{ email }}</b-card-text>
            <b-card-text>Statut : {{ status }}</b-card-text>
            <b-button variant="danger">Supprimer le compte</b-button>
    </b-card>
</template>

<script>

export default {
    name: 'ProfileInfo',
    props: ["email", "status"]
}

</script>

<style scoped lang="scss">

</style>