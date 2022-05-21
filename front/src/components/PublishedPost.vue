<template> 
    <b-card 
        header-bg-variant="secondary"
        :header="`${title}`"
        class="mt-4"
        no-body>
        <b-row no-gutters class="m-2">
            <b-col md="3" lg="2" class="text-center border-profile">
                <avatar 
                    :username="`${firstName} ${lastName}`"
                    background-color="var(--blue)"
                    :size="150" 
                    :rounded="false" 
                    color="var(--info)"
                    class="mx-auto"></avatar>
                <div class="my-3">
                    <b-card-text>Posté par</b-card-text>
                    <b-card-text>{{ email || "Ancien utilisateur"}},</b-card-text>
                    <b-card-text>le {{ date }}.</b-card-text>
                </div>
            </b-col>
            <b-col md="9" lg="10">
                <b-card-body>
                    <b-card-text>
                        {{ content }}
                    </b-card-text>
                </b-card-body>
            </b-col>
        </b-row>
        <template #footer>
            <b-row align-h="between">
                <b-col cols="1" lg="2" class="col-footer my-auto">
                    <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up> {{ likes }}
                </b-col>
                <b-col cols="6" lg="3" class="text-center">
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
                </b-col>
                <b-col cols="5" lg="3" class="text-right">
                    <b-button 
                        pill
                        variant="info"
                        size="sm" 
                        @click="deletePost(id)"
                        v-if="currentUser.id === postUserId || currentUser.isAdmin">
                            <b-icon-trash></b-icon-trash> Supprimer
                    </b-button>
                </b-col>
            </b-row>
        </template>
    </b-card>
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
            return ["/allposts", "/lastparticipations"].includes(this.$router.currentRoute.path)
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