<template> 
    <b-row align-h="center" class="mt-1">
        <b-col cols="11">
            <b-card no-body>
                    <b-row no-gutters class="m-2">
                        <b-col md="3" lg="2" class="text-center border-profile">
                            <avatar 
                                :username="`${currentUser.firstName} ${currentUser.lastName}`" 
                                background-color="var(--blue)" 
                                :size="100" 
                                :rounded="false" 
                                color="var(--info)"
                                class="mx-auto"></avatar>
                            <div class="my-1">
                                <b-card-text>Réponse de</b-card-text>
                                <b-card-text>{{ email }},</b-card-text>
                                <b-card-text>{{ date }}.</b-card-text>
                            </div>
                        </b-col>
                        <b-card-body>
                            <b-col>
                                <b-form @submit.prevent="sendComment">
                                    <b-form-textarea
                                        id="textarea"
                                        v-model="content"
                                        placeholder="Écrivez votre commentaire..."
                                        rows="4"
                                    ></b-form-textarea>
                                    <b-row align-h="end" class="mt-3">
                                        <b-button 
                                            size="sm" 
                                            type="submit" 
                                            variant="success" 
                                            class="mr-3">
                                                <b-icon-check></b-icon-check> Valider
                                        </b-button>
                                        <b-button 
                                            size="sm" 
                                            @click="displayCreateComment" 
                                            variant="danger" 
                                            class="mr-3">
                                                <b-icon-trash></b-icon-trash> Annuler
                                        </b-button>
                                    </b-row>
                                </b-form>
                            </b-col>
                        </b-card-body>
                    </b-row>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>

import axios from "../services/axios-service"
import Avatar from "vue-avatar"


export default {
    name: 'CreateComment',
    components: {
        Avatar
    },
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
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
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