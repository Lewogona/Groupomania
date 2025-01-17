<template>
    <div v-if="post.id">
        <PublishedPost 
            commentButton="Commenter"
            :date="post.date"
            :email="post.User && post.User.email"
            :firstName="post.User && post.User.firstName"
            :lastName="post.User && post.User.lastName"
            :title="post.title"
            :content="post.content"
            :likes="post.likes"
            :id="post.id"
            :displayCreateComment="displayCreateComment"
            :deletePost="deletePost"
            :postUserId="post.User && post.User.id"
            :imageUrl="post.imageUrl"
            :profileImageUrl="post.User && post.User.imageUrl"/>
        <CreateComment 
            v-if="showCreateComment" 
            :email="currentUser.email" 
            date="aujourd'hui" 
            :displayCreateComment="displayCreateComment"
            :displayNewComment="displayNewComment"/>
        <PublishedComment 
            v-for="comment in comments" 
            :date="comment.date" 
            :email="comment.User && comment.User.email"
            :imageUrl="comment.User && comment.User.imageUrl"
            :content="comment.content"
            :id="comment.id"
            :firstName="comment.User && comment.User.firstName"
            :lastName="comment.User && comment.User.lastName"
            :key="comment.id"
            :deleteComment="deleteComment"
            :commentUserId="comment.User && comment.User.id"/>
    </div>
</template>

<script>
import axios from "../services/axios-service"
import { getReadableDate } from '../services/date-service'

import PublishedPost from "@/components/PublishedPost.vue"
import PublishedComment from '@/components/PublishedComment.vue'
import CreateComment from "@/components/CreateComment.vue"

export default {
    name: 'PostView',
    components: {
        PublishedPost,
        PublishedComment,
        CreateComment
    },
    data() {
        return {
            showCreateComment: false,
            post: {},
            comments: []
        }
    },
    created() {
        // Get all posts and change the date format
        axios.get("posts/" + this.$route.params.id)
            .then(response => {
                this.post = response.data;
                this.post.date = getReadableDate(this.post.date)
            }).catch(e => {
                console.error(e);
            })
        // Get all comments of this post and change the date format
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
        // Retrieve the user with their info
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        // Show the component Create Comment
        displayCreateComment() {
            this.showCreateComment = !this.showCreateComment;
        },
        // Delete a comment using its id
        async deleteComment(id) {
            const res = await axios.delete("comments/" + id);
            console.log(res);
            this.comments = this.comments.filter((comment) => {
                return comment.id !== id;
            })
        },
        // Delete a post using its id
        async deletePost(id) {
            const res = await axios.delete("posts/" + id);
            console.log(res);
            this.$router.push("/allposts");
        },
        // Show the new comment when created without refreshing the page
        displayNewComment(comment) {
            this.comments.unshift({ 
                ...comment,
                User: this.currentUser,
                userId: this.currentUser.id,
                date: getReadableDate(comment.date)
            });
        }
    }
}
</script>
