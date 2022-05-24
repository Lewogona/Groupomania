<template>
    <div>
        <UsersInfo
            v-for="user in users"
            :email="user.email" 
            :firstName="user.firstName" 
            :lastName="user.lastName" 
            :displayDeleteMessage="displayDeleteMessage" 
            :userId="user.id"
            :key="user.id" />
        <b-modal 
            ref="confirm" 
            id="modal-1" 
            @ok="deleteUser()"
            title="Confirmer la suppression du compte ?">
            <p class="my-4">Attention : tout compte supprimé ne pourra pas être récupéré.</p>
        </b-modal>
    </div>
</template>

<script>
import axios from "../services/axios-service"

import UsersInfo from "@/components/UsersInfo.vue"

export default {
    name: "AllUsers",
    components: {
        UsersInfo,
    },
    data() {
        return {
            users: [],
            userIdToDelete: null
        }
    },    
    created() {
        // Get all users
        axios.get("users/")
            .then(response => {
                this.users.push(...response.data)
            })
    },
    mounted() {
        // The user has to be logged in to access this page
        if (!this.currentUser) {
            this.$router.push('/login');
        }
    },
    computed: {
        // Retrieve the user with their info
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        // Display the confirmation modal
        displayDeleteMessage(userId) {
            this.userIdToDelete = userId;
            this.$refs["confirm"].toggle()
        },
        // Delete a user using their id
        async deleteUser() {
            await axios.delete("users/" + this.userIdToDelete);
            this.users = this.users.filter((user) => {
                return user.id !== this.userIdToDelete;
            })
        }
    }
}
</script>
