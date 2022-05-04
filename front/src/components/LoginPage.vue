<template> 
    <b-container fluid>
        <b-row class="justify-content-center">
            <b-col cols="4">
                <b-img :src="require('../assets/logo.png')" alt="Logo de Groupomania" fluid></b-img> 
            </b-col>
        </b-row>
        <b-row class="justify-content-center">
            <b-col cols="6">
                <label class="my-3">Adresse email</label>
                <b-form-input v-model="email" type="email" placeholder="Votre adresse email"></b-form-input>
                <label class="my-3">Mot de passe</label>
                <b-form-input v-model="password" type="password" placeholder="Votre mot de passe"></b-form-input>
            </b-col>
        </b-row>
        <b-row class="justify-content-center text-center">
            <b-col cols="4">
                <b-button class="my-3">Se connecter</b-button>
                <p class="my-3">Vous n'avez pas de compte ? <b-link href="#">Inscrivez-vous ici !</b-link></p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

export default {
    name: 'LoginPage',
    data() {
        return {
            email: "",
            password: "",
        }
    },
  props: {
    
  }
}

</script>

<style scoped lang="scss">

</style>