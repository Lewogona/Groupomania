<template>
    <div v-if="post.id">
        <PublishedPost commentButton="Commenter"
            :date="post.date"
            :email="post.User.email"
            :title="post.title"
            :content="post.content"
            :likes="post.likes"
            :id="post.id"
            :displayCreateComment="displayCreateComment"
            />
        <CreateComment v-if="showCreateComment" :email="currentUser.email" date="Aujourd'hui"/>
        <PublishedComment 
            v-for="comment in comments" 
            :date="comment.date" 
            :email="comment.User.email"
            :content="comment.content" 
            :key="comment.comment"/>
    </div>
</template>

<script>
import axios from "../services/axios-service"

import PublishedPost from "@/components/PublishedPost.vue"
import PublishedComment from '@/components/PublishedComment.vue'
import CreateComment from "@/components/CreateComment.vue"

import { getReadableDate } from '../services/date-service'

export default {
    data() {
        return {
            showCreateComment: false,
            post: {},
            comments: []
        }
    },
    name: 'PostView',
    components: {
        PublishedPost,
        PublishedComment,
        CreateComment
    },
    methods: {
        displayCreateComment() {
            this.showCreateComment = !this.showCreateComment;
        }
    },
    created() {
        axios.get("posts/" + this.$route.params.id)
            .then(response => {
                this.post = response.data;
                this.post.date = getReadableDate(this.post.date)
            }).catch(e => {
                console.error(e);
            })
        axios.get("comments/post/" + this.$route.params.id)
            .then(response => {
                this.comments.push(...response.data.map(comment => {
                    comment.date = getReadableDate(comment.date);
                    return comment
                }))
            }).catch(e => {
                console.error(e);
            });
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    }
}
</script>
