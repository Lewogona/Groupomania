<template> 
    <div>
        <b-row class="justify-content-center">
            <b-col cols="10" md="6" lg="4">
                <b-img :src="require('../assets/logo.png')" alt="Logo de Groupomania" fluid></b-img> 
            </b-col>
        </b-row>
        <b-row class="justify-content-center">
            <b-col cols="6" class="text-center">
                <b-form @submit.prevent="handleLogin">
                    <b-form-group label="Votre adresse mail" label-for="input-1" class="text-left">
                        <b-form-input id="input-1" v-model="user.email" type="email" required></b-form-input>
                    </b-form-group>
                    <b-form-group label="Votre mot de passe" label-for="input-2" class="text-left">
                        <b-form-input id="input-2" v-model="user.password" type="password" required></b-form-input>
                    </b-form-group>
                    <b-form-text text-variant="danger">{{ messageError }}</b-form-text>
                    <b-button class="my-3" type="submit" pill variant="info">Se connecter</b-button>
                    <p class="my-3">Vous n'avez pas de compte ? <b-link href="#/signup">Inscrivez-vous ici !</b-link></p>
                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import User from '../models/user';

export default {
    name: 'LoginPage',
    data() {
        return {
            user: new User('', ''),
            loading: false,
            messageError: ''
        };
    },
    created() {
        // if (this.loggedIn) {
        //      this.$router.push('/');
        // }
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        }
    },
    methods: {
        async handleLogin() {
            if (this.user.email && this.user.password) {
                try {
                    await this.$store.dispatch('auth/login', this.user);
                    this.$router.push('/');
                } catch (error) {
                    this.messageError = error.response.data.error;
                }
            } else this.messageError = "Email ou mot de passe manquant"
        }
    }
}
</script>