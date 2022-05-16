<template> 
    <b-container>
        <b-card  footer-tag="footer">
            <b-row no-gutters>
                <b-col md="3">
                    <b-avatar rounded size="96px"></b-avatar>
                    <b-card-text>Réponse de : {{ email }}</b-card-text>
                    <b-card-text>Le : {{ date }}</b-card-text>
                </b-col>
                <b-col md="9">
                    <b-card-body>
                        <b-form @submit.prevent="sendComment">
                            <b-row>
                                <b-form-textarea
                                    id="textarea"
                                    v-model="content"
                                    placeholder="Écrivez votre texte..."
                                    rows="4"
                                ></b-form-textarea>
                            </b-row>
                            <b-row align-h="end">
                                <b-button size="sm" type="submit" variant="success" class="mr-3"><b-icon-check></b-icon-check> Valider</b-button>
                                <b-button size="sm" href="#/allposts" variant="danger" class="mr-3"><b-icon-trash></b-icon-trash> Annuler</b-button>
                            </b-row>
                        </b-form>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
    </b-container>
</template>

<script>

import axios from "axios"
import authHeader from '../services/auth-header'

const API_URL = 'http://localhost:3000/comments/';

export default {
    name: 'HeaderForPages',
    props: {
        email: String,
        date: String
    },
    methods: {
    async sendComment() {
        const date = new Date();
        const res = await axios.post(API_URL + "post/" + this.$route.params.id, {
            content: this.content,
            date
        }, {
            headers: authHeader()
        });
        console.log(res)
    }
}
}

</script>

<style scoped lang="scss">

</style>