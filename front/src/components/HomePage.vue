<template>
<b-container fluid="lg">
    <b-card class="text-center"
        overlay
        :img-src="require('../assets/icon.png')"
        img-alt="Logo de Groupomania"
        text-variant="black"
        title="Bienvenue !"
        sub-title="Sur le forum de Groupomania"
    >
        <b-card-text>
        Communiquez, partagez, échangez...
        </b-card-text>
    </b-card>
</b-container>
</template>

<script>

export default {
    name: 'HomePage',
    props: {
    
    }
}
</script>

<style scoped lang="scss">

</style>
