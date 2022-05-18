<template>
    <div>
        <UsersInfo
            v-for="user in users"
            :email="user.email" 
            :firstName="user.firstName" 
            :lastName="user.lastName" 
            :displayDeleteMessage="displayDeleteMessage" 
            :key="user.id" />
        <b-modal 
            ref="confirm" 
            id="modal-1" 
            title="Confirmer la suppression du compte ?"
            >
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
            users: []
        }
    },
    methods: {
        displayDeleteMessage() {
            this.$refs["confirm"].toggle()
        },
        // @ok="deleteUser()"
        // async deleteUser() {
        //     const res = await axios.delete("users/" + this.user.id);
        //     console.log(res);
        // }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    created() {
        axios.get("users/")
            .then(response => {
                this.users.push(...response.data)
            })
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');
        }
    }
}
</script>
