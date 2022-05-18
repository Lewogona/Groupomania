<template> 
    <b-container>
        <b-card  footer-tag="footer">
            <b-row no-gutters>
                <b-col md="3">
                    <b-avatar rounded size="96px"></b-avatar>
                    <b-card-text>Réponse de : {{ email || "Ancien utilisateur" }}</b-card-text>
                    <b-card-text>Le : {{ date }}</b-card-text>
                </b-col>
                <b-col md="9">
                    <b-card-body>
                        <b-row>
                            <b-card-text>
                                {{ content }}
                            </b-card-text>
                        </b-row>
                        <b-row align-h="end">
                            <b-button 
                                size="sm" 
                                @click="deleteComment(id)" 
                                v-if="currentUser.id === commentUserId || currentUser.isAdmin">
                                    <b-icon-trash></b-icon-trash> Supprimer
                            </b-button>
                        </b-row>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
    </b-container>
</template>

<script>

export default {
    name: "PublishedComment",
    props: {
        email: String,
        date: String,
        content: String,
        id: Number,
        deleteComment: Function,
        commentUserId: Number
    },    
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    }
}

</script>

<style scoped lang="scss">

.card-body {
    padding: 10px;
}
</style>