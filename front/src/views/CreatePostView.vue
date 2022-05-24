<template>
    <CreatePost :email="currentUser.email" date="aujourd'hui"/>
</template>

<script>
import CreatePost from "@/components/CreatePost.vue"

export default {
    name: 'CreatePostView',
    components: {
        CreatePost
    },
    computed: {
        // Retrieve the user with their info
        currentUser() {
            return this.$store.state.auth.user;
        }
    }
}
</script>
