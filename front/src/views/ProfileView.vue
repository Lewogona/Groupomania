<template>
    <div>
        <ProfileInfo 
            :email="user.email" 
            :isAdmin="user.isAdmin" 
            :firstName="user.firstName" 
            :imageUrl="user.imageUrl" 
            :lastName="user.lastName" 
            :displayDeleteMessage="displayDeleteMessage"
            :updateImageUrl="updateImageUrl"
            :userId="user.id"/>
        <b-modal 
            ref="confirm" 
            id="modal-1" 
            title="Confirmer la suppression du compte ?"
            @ok="deleteUser">
            <p class="my-4">Attention : tout compte supprimé ne pourra pas être récupéré.</p>
        </b-modal>
    </div>
</template>

<script>
import axios from "../services/axios-service"

import ProfileInfo from "@/components/ProfileInfo.vue"

export default {
    name: "ProfileView",
    components: {
        ProfileInfo,
    },
    data() {
        return {
            user: {}
        }
    },    
    created() {
        // Get a user using its id
        axios.get("users/" + this.$route.params.id)
            .then(response => {
                this.user = response.data;
            })
    },
    mounted() {
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
        // update the user imageUrl and refresh
        updateImageUrl(imageUrl) {
            this.$store.state.auth.user.imageUrl = imageUrl;
            this.$router.go()
        },
        // Display the confirmation modal
        displayDeleteMessage() {
            this.$refs["confirm"].toggle()
        },
        // Delete a user using their id and redirect to signup page after clearing the localStorage
        async deleteUser() {
            await axios.delete("users/" + this.$route.params.id);
            this.$store.dispatch('auth/logout');
            this.$router.push("/signup");
        }
    }
}
</script>
