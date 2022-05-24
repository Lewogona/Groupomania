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
                        <b-form-text>{{ error.email }}</b-form-text>
                    </b-form-group>
                    <b-form-group label="Prénom" label-for="input-2" class="text-left">
                        <b-form-input id="input-2" v-model="user.firstName" type="text" required></b-form-input>
                        <b-form-text>{{ error.firstName }}</b-form-text>
                    </b-form-group>
                    <b-form-group label="Nom" label-for="input-3" class="text-left">
                        <b-form-input id="input-3" v-model="user.lastName" type="text" required></b-form-input>
                        <b-form-text>{{ error.lastName }}</b-form-text>
                    </b-form-group>
                    <b-form-group label="Mot de passe" label-for="input-4" class="text-left">
                        <b-form-input id="input-4" v-model="user.password" type="password" required></b-form-input>
                        <b-form-text>Votre mot de passe doit contenir au minimum 8 caractères dont un chiffre.</b-form-text>
                        <b-form-text>{{ error.password }}</b-form-text>
                    </b-form-group>
                    <b-form-text text-variant="danger">{{ messageError }}</b-form-text>
                    <b-button class="my-3" type="submit" pill variant="info" >S'inscrire</b-button>
                    <p class="my-3">Déjà inscrit ? <b-link href="#/login">Connectez-vous ici !</b-link></p>
                </b-form>
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
            error: {
                email: "",
                firstName: "",
                lastName: "",
                password: ""
            },
            messageError: ""
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
        validateForm() {
            const validateEmail = this.validateInput("email", /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Adresse email");
            const validateFirstName = this.validateInput("firstName", /^[A-zÀ-ú- ]+$/, "Prénom");
            const validateLastName = this.validateInput("lastName", /^[A-zÀ-ú- ]+$/, "Nom");
            const validatePassword = this.validateInput("password", /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Mot de passe");

            return validateEmail && validateFirstName && validateLastName && validatePassword
        },
        validateInput(element, regex, fieldName) {
            this.user[element] = this.user[element].trim();
            let match = this.user[element].match(regex)
            if (!match || this.user[element] !== match[0]) {
                this.error[element] = `${fieldName} non valide`;
                return false
            }

            this.error[element] = "";
            return true;
        },
        handleRegister() {
            if (this.validateForm()) {
                this.$store.dispatch('auth/register', this.user).then(
                    () => {
                        this.$router.push('/login');
                    },
                    error => {
                        this.messageError = error.response.data.error;
                    }
                );
            }
        }
    }
}
</script>