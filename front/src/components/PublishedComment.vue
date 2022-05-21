<template> 
    <b-row align-h="center" class="mt-3">
        <b-col cols="11">
            <b-card no-body>
                <b-row no-gutters class="m-2">
                    <b-col md="3" lg="2" class="text-center border-profile">
                        <avatar 
                            :username="`${firstName} ${lastName}`"
                            background-color="var(--blue)" 
                            :size="100" 
                            :rounded="false" 
                            color="var(--info)"
                            class="mx-auto"></avatar>
                        <div class="my-1">
                            <b-card-text>Réponse de</b-card-text>
                            <b-card-text>
                                <UserName :firstName="firstName" :lastName="lastName"/>,
                            </b-card-text>
                            <b-card-text>le {{ date }}.</b-card-text>
                        </div>
                    </b-col>
                    <b-card-body id="relative">
                        <b-col md="9" lg="10">
                            <b-row id="minimum">
                                <b-card-text>
                                    {{ content }}
                                </b-card-text>
                            </b-row>
                        </b-col>
                        <b-button class="mx-3" id="absolute"
                            pill
                            variant="info" 
                            size="sm" 
                            @click="deleteComment(id)" 
                            v-if="currentUser.id === commentUserId || currentUser.isAdmin">
                                <b-icon-trash></b-icon-trash> Supprimer
                        </b-button>
                    </b-card-body>
                </b-row>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
import Avatar from "vue-avatar"

export default {
    name: "PublishedComment",
    components: {
        Avatar
    },
    props: {
        firstName: String,
        lastName: String,
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

#relative {
    position: relative;
}

#absolute {
    position: absolute;
    right: 0;
    bottom: 5px;
}

#minimum {
    min-height: 50px;
}

</style>