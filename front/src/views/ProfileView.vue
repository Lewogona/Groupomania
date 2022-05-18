<template>
    <div>
        <ProfileInfo 
        :email="currentUser.email" 
        :isAdmin="currentUser.isAdmin" 
        :firstName="currentUser.firstName" 
        :lastName="currentUser.lastName" 
        :displayDeleteMessage="displayDeleteMessage"
        :userId="currentUser.id"/>
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
    data() {
        return {
            showDeleteMessage: false
        }
    },
    name: "ProfileView",
    components: {
        ProfileInfo,
    },
    methods: {
        displayDeleteMessage() {
            this.$refs["confirm"].toggle()
        },
        async deleteUser() {
            const res = await axios.delete("users/" + this.currentUser.id);
            console.log(res);
            this.$store.dispatch('auth/logout');
            this.$router.push("/signup");
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');
        }
    }
}
</script>
