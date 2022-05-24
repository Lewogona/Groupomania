<template> 
    <b-row align-h="center" class="mt-1" id="comment-animation">
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
                                class="mx-auto"
                                :src="currentUser.imageUrl"></avatar>
                            <div class="my-1">
                                <b-card-text>Réponse de</b-card-text>
                                <b-card-text>
                                    <UserName :firstName="currentUser.firstName" :lastName="currentUser.lastName"/>,
                                </b-card-text>
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
                                        required>
                                    </b-form-textarea>
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
        Avatar,
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
        // Retrieve the user with their info
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        // Send new comment to the database with user content and new date
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
#comment-animation {
    position: relative;
    top: -10px;
    opacity: 0;
    animation: appearance-delay__card 250ms forwards ease-in-out;
}

@keyframes appearance-delay__card {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
        top: 0;
    }
}
</style>