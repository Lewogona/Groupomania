<template>
    <b-row class="justify-content-center">
        <b-col cols="8" align-self="center">
            <b-card class="mb-3" >
                <b-row align-h="around">
                    <b-card-text><strong>Prénom : </strong>{{ firstName }} </b-card-text>
                    <b-card-text><strong>Nom : </strong>{{ lastName }}</b-card-text>
                    <b-card-text><strong>Email : </strong>{{ email }}</b-card-text>
                    <b-button 
                        @click="displayDeleteMessage(userId)"
                        variant="outline-danger">
                            <b-icon-trash></b-icon-trash>
                    </b-button>
                </b-row>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>

export default {
    name: 'UsersInfo',
    props: {
        firstName: String,
        lastName: String,
        email: String,
        displayDeleteMessage: Function,
        userId: Number
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    }
}

</script>