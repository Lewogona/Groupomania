<template>
    <div>
        <ProfileInfo 
            :email="user.email" 
            :isAdmin="user.isAdmin" 
            :firstName="user.firstName" 
            :lastName="user.lastName" 
            :displayDeleteMessage="displayDeleteMessage"
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
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        displayDeleteMessage() {
            this.$refs["confirm"].toggle()
        },
        async deleteUser() {
            const res = await axios.delete("users/" + this.$route.params.id);
            console.log(res);
            this.$store.dispatch('auth/logout');
            this.$router.push("/signup");
        }
    }
}
</script>
