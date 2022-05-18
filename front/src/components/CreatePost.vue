<template> 
<b-container>
    <b-form @submit.prevent="sendPost">
        <b-card header-tag="header" footer-tag="footer">
            <template #header>
                <b-form-input type="text" v-model="title" placeholder="Titre de la publication"></b-form-input>
            </template>
            <b-row no-gutters>
                <b-col md="3">
                    <b-card-img :src="require('../assets/pp.jpg')" img-alt="Profile Photo" ></b-card-img>
                    <b-card-text>Posté par : {{ email }}</b-card-text>
                    <b-card-text>Le : {{ date }}</b-card-text>
                </b-col>
                <b-col md="9">
                    <b-card-body>
                        <b-card-text>
                            <b-form-textarea
                                id="textarea"
                                v-model="content"
                                placeholder="Écrivez votre texte..."
                                rows="12"
                            ></b-form-textarea>
                        </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
            <template #footer>
                <b-row align-h="end">
                        <b-button size="sm" type="submit" variant="success" class="mr-3"><b-icon-check></b-icon-check> Valider</b-button>
                        <b-button size="sm" href="#/allposts" variant="danger" class="mr-3"><b-icon-trash></b-icon-trash> Annuler</b-button>
                </b-row>
            </template>
        </b-card>
    </b-form>
</b-container>
</template>

<script>
import axios from "../services/axios-service"

export default {
    name: 'PublishedPost',
    data() {
        return {
            title: "",
            content: "",
        }
    },
    props: {
        email: String,
        date: String
    },
    methods: {
        async sendPost() {
            const date = new Date();
            const res = await axios.post("posts", {
                title: this.title,
                content: this.content,
                date
            });
            console.log(res)
            this.$router.push("/allposts");
        }
    }
}

</script>

<style scoped lang="scss">

</style>