<template>
    <b-row class="justify-content-center">
        <b-col cols="9" align-self="center">
            <b-card class="mb-3" >
                <b-row align-h="around" align-v="center">
                    <b-col md="3" lg="3" class="my-1">
                        <b-card-text><strong>Prénom : </strong></b-card-text>
                        <b-card-text>{{ firstName }} </b-card-text>
                    </b-col>
                    <b-col md="3" lg="3" class="my-1">
                        <b-card-text><strong>Nom : </strong></b-card-text>
                        <b-card-text>{{ lastName }}</b-card-text>
                    </b-col>
                    <b-col md="4" lg="4" class="my-1">
                        <b-card-text><strong>Email : </strong></b-card-text>
                        <b-card-text>{{ email }}</b-card-text>
                    </b-col>
                    <b-col md="2" lg="2" class="my-1">
                        <b-button 
                            @click="displayDeleteMessage(userId)"
                            variant="outline-danger">
                                <b-icon-trash></b-icon-trash>
                        </b-button>
                    </b-col>
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
        // Retrieve the user with their info
        currentUser() {
            return this.$store.state.auth.user;
        }
    }
}
</script>