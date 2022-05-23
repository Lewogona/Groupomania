<template> 
    <b-form @submit.prevent="sendPost" class="mt-3">
        <b-card 
            header-tag="header" 
            footer-tag="footer" 
            header-bg-variant="secondary" 
            footer-bg-variant="secondary"
            no-body>
                <template #header>
                    <b-form-input 
                        type="text" 
                        v-model="title" 
                        placeholder="Titre de la publication"
                        required>
                    </b-form-input>
                </template>
                <b-row no-gutters class="my-2">
                    <b-col md="3" lg="2" class="text-center border-profile">
                        <avatar 
                            :username="`${currentUser.firstName} ${currentUser.lastName}`" 
                            background-color="var(--blue)" 
                            :size="150" 
                            :rounded="false" 
                            color="var(--info)"
                            class="mx-auto"
                            :src="currentUser.imageUrl"></avatar>
                        <div class="my-3">
                            <b-card-text>Posté par</b-card-text>
                            <b-card-text>
                                    <UserName :firstName="currentUser.firstName" :lastName="currentUser.lastName"/>,
                                </b-card-text>
                            <b-card-text>{{ date }}.</b-card-text>
                        </div>
                    </b-col>
                    <b-col md="9" lg="10">
                        <b-card-body>
                            <b-card-text>
                                <b-form-textarea
                                    id="textarea"
                                    v-model="content"
                                    placeholder="Écrivez votre publication..."
                                    rows="9"
                                    required>
                                </b-form-textarea>
                            </b-card-text>
                            <b-form-file 
                                v-model="image" 
                                placeholder="Ajouter une image" 
                                class="mt-3"
                                :state="Boolean(image)"
                                drop-placeholder="Déposez votre image ici"
                                browse-text="Parcourir"
                                accept=".jpg, .jpeg, .png, .gif">
                            </b-form-file>
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
</template>

<script>
import axios from "../services/axios-service"
import Avatar from "vue-avatar"

export default {
    name: 'PublishedPost',
    components: {
        Avatar
    },    
    props: {
        email: String,
        date: String
    },
    data() {
        return {
            title: "",
            content: "",
            image: null
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        async sendPost() {
            const date = new Date();
            await axios.post("posts", {
                title: this.title,
                content: this.content,
                date,
                image: this.image
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            this.$router.push("/allposts");
        }
    }
}

</script>

<style scoped lang="scss">

</style>