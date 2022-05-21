<template> 
    <div>
        <b-row class="justify-content-center">
            <b-col cols="10" md="6" lg="4">
                <b-img :src="require('../assets/logo.png')" alt="Logo de Groupomania" fluid></b-img> 
            </b-col>
        </b-row>
        <b-row class="justify-content-center">
            <b-col cols="6" class="text-center">
                <b-form @submit.prevent="handleRegister">
                    <b-form-group label="Adresse email" label-for="input-1" class="text-left">
                        <b-form-input id="input-1" v-model="user.email" type="email" required></b-form-input>
                    </b-form-group>
                    <b-form-group label="Prénom" label-for="input-2" class="text-left">
                        <b-form-input id="input-2" v-model="user.firstName" type="text" required></b-form-input>
                    </b-form-group>
                    <b-form-group label="Nom" label-for="input-3" class="text-left">
                        <b-form-input id="input-3" v-model="user.lastName" type="text" required></b-form-input>
                    </b-form-group>
                    <b-form-group label="Mot de passe" label-for="input-4" class="text-left">
                        <b-form-input id="input-4" v-model="user.password" type="password" required></b-form-input>
                    </b-form-group>
                    <b-button class="my-3" type="submit" pill variant="info" >S'inscrire</b-button>
                    <p class="my-3">Déjà inscrit ? <b-link href="#/login">Connectez-vous ici !</b-link></p>
                </b-form>
            </b-col>
        </b-row>
        <b-row class="justify-content-center text-center">
            <b-col cols="4">
            </b-col>
        </b-row>
    </div>
</template>

<script>

import User from '../models/user';

export default {
    name: 'SignUp',
    data() {
        return {
            user: new User("", "", ""),
        }
    },
    mounted() {
        if (this.loggedIn) {
            this.$router.push('/');
        }
    },
    computed: {
        loggedIn() {
        return this.$store.state.auth.status.loggedIn;
        }
    },
    methods: {
        handleRegister() {
            this.message = '';
            this.submitted = true;
            this.$validator.validate().then(isValid => {
                if (isValid) {
                    this.$store.dispatch('auth/register', this.user).then(
                        data => {
                            this.message = data.message;
                            this.successful = true;
                            this.$router.push('/login');
                        },
                        error => {
                            this.message =
                                (error.response && error.response.data) ||
                                error.message ||
                                error.toString();
                            this.successful = false;
                        }
                    );
                }
            });
        }
    }
}
</script>

<style scoped lang="scss">

</style>