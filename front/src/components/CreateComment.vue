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
                                <b-button size="sm" @click="displayCreateComment" variant="danger" class="mr-3"><b-icon-trash></b-icon-trash> Annuler</b-button>
                            </b-row>
                        </b-form>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
    </b-container>
</template>

<script>

import axios from "../services/axios-service"

export default {
    name: 'CreateComment',
    props: {
        email: String,
        date: String,
        displayCreateComment: Function,
        displayNewComment: Function
    },
    data() {
        return {
            content: "",
        }
    },
    methods: {
        async sendComment() {
            const date = new Date();
            const res = await axios.post("comments/post/" + this.$route.params.id, {
                content: this.content,
                date
            });
            console.log(res);
            this.displayCreateComment()
            this.displayNewComment(res.data)
        }
    }
}

</script>

<style scoped lang="scss">

</style>