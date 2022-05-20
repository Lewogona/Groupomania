<template> 
    <b-container>
        <b-card  footer-tag="footer" no-body>
            <b-row no-gutters>
                <b-col cols="2">
                    <avatar 
                        :username="`${currentUser.firstName} ${currentUser.lastName}`" 
                        background-color="var(--blue)" 
                        :size="100" 
                        :rounded="false" 
                        color="var(--info)"
                        class="mx-auto mt-4"></avatar>
                </b-col>
                <b-col cols="10">
                    <b-form @submit.prevent="sendComment">
                        <b-col class="my-4">
                            <b-row>
                                <b-form-textarea
                                    id="textarea"
                                    v-model="content"
                                    placeholder="Écrivez votre commentaire..."
                                    rows="4"
                                ></b-form-textarea>
                            </b-row>
                            <b-row align-h="end" class="mt-3">
                                <b-button size="sm" type="submit" variant="success" class="mr-3"><b-icon-check></b-icon-check> Valider</b-button>
                                <b-button size="sm" @click="displayCreateComment" variant="danger" class="mr-3"><b-icon-trash></b-icon-trash> Annuler</b-button>
                            </b-row>
                        </b-col>
                    </b-form>
                </b-col>
            </b-row>
        </b-card>
    </b-container>
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