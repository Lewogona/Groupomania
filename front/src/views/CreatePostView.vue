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
        currentUser() {
            return this.$store.state.auth.user;
        }
    }
}
</script>
