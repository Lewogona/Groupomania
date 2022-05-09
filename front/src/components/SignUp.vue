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
                <label class="my-3">Prénom</label>
                <b-form-input v-model="firstName" type="email" placeholder="Votre adresse email"></b-form-input>
                <label class="my-3">Nom</label>
                <b-form-input v-model="lastName" type="email" placeholder="Votre adresse email"></b-form-input>
                <label class="my-3">Mot de passe</label>
                <b-form-input v-model="password" type="password" placeholder="Votre mot de passe"></b-form-input>
            </b-col>
        </b-row>
        <b-row class="justify-content-center text-center">
            <b-col cols="4">
                <b-button class="my-3" @click="signUp">S'inscrire</b-button>
                <p class="my-3">Déjà inscrit ? <b-link href="#/login">Connectez-vous ici !</b-link></p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import axios from "axios";

export default {
    name: 'SignUp',
    data() {
        return {
            email: "",
            firstName: "",
            lastName: "",
            password: ""
        }
    },
    methods: {
        async signUp() {
            try {
                const response = await axios.post("http://localhost:3000/users/signup", {
                    email: this.email,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    password: this.password
                })
                console.log(response)
            } catch (e) {
                console.log(e)
            }
        }
    }
}

</script>

<style scoped lang="scss">

</style>