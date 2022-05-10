<template>
    <ProfileInfo :email="currentUser.email" :isAdmin="currentUser.isAdmin" :firstName="currentUser.firstName" :lastName="currentUser.lastName"/>
</template>

<script>

import ProfileInfo from "@/components/ProfileInfo.vue"

export default {
    name: "ProfileView",
    components: {
        ProfileInfo,
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
