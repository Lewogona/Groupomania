<template> 
<b-container class="mt-5">
    <b-card 
        header-bg-variant="secondary"
        :header="`${title}`">
        <b-row no-gutters>
            <b-col md="3">
                <avatar 
                    :username="`${firstName} ${lastName}`"
                    background-color="var(--blue)"
                    :size="150" 
                    :rounded="false" 
                    color="var(--info)"></avatar>
                <b-card-text>Posté par : {{ email || "Ancien utilisateur"}}</b-card-text>
                <b-card-text>Le : {{ date }}</b-card-text>
            </b-col>
            <b-col md="9">
                <b-card-body>
                    <b-card-text>
                        {{ content }}
                    </b-card-text>
                </b-card-body>
            </b-col>
        </b-row>
        <template #footer>
            <b-row align-h="between">
                <div>
                    <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up> {{ likes }}
                </div>
                    <b-button
                        pill
                        variant="info" 
                        size="sm" 
                        v-if="displayPostButton" 
                        @click="displayPost">
                        <b-icon-keyboard></b-icon-keyboard> {{ commentButton }}
                    </b-button>
                    <b-button
                        pill
                        variant="info" 
                        size="sm" 
                        v-else 
                        @click="displayCreateComment">
                        <b-icon-keyboard></b-icon-keyboard> {{ commentButton }}
                    </b-button>
                    <b-button 
                        pill
                        variant="info"
                        size="sm" 
                        @click="deletePost(id)"
                        v-if="currentUser.id === postUserId || currentUser.isAdmin">
                            <b-icon-trash></b-icon-trash> Supprimer
                    </b-button>
            </b-row>
        </template>
    </b-card>
</b-container>
</template>

<script>
import Avatar from "vue-avatar"

export default {
    name: 'PublishedPost',
    components: {
        Avatar
    },
    props: {
        firstName: String,
        lastName: String,
        email: String,
        date: String,
        title: String,
        content: String,
        likes: Number,
        displayCreateComment: Function,
        commentButton: String,
        id: Number,
        deletePost: Function,
        postUserId: Number
    },
    computed: {
        displayPostButton() {
            return this.$router.currentRoute.path === "/allposts"
        },
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        displayPost() {
            this.$router.push(`/post/${this.id}`)
        }
    }
}

</script>

<style scoped lang="scss">

</style>