<template>
    <div>
        <PublishedPost commentButton="Commenter"
            :date="post.date"
            :email="post.User.email"
            :title="post.title"
            :content="post.content"
            :likes="post.likes"
            :id="post.id"
            :displayCreateComment="displayCreateComment"
            />
        <CreateComment v-if="showCreateComment" email="lewogona@gmail.com" date="07/05/2022"/>
        <PublishedComment 
            v-for="publishedComment in publishedComments" 
            :date="publishedComment.date" 
            :email="publishedComment.email" 
            :comment="publishedComment.comment" 
            :key="publishedComment.comment"/>
    </div>
</template>

<script>
import axios from "axios"

import PublishedPost from "@/components/PublishedPost.vue"
import PublishedComment from '@/components/PublishedComment.vue'
import CreateComment from "@/components/CreateComment.vue"

import { getReadableDate } from '../services/date-service'

const API_URL = 'http://localhost:3000/posts/';


export default {
    data() {
        return {
            showCreateComment: false,
            post: {},
        }
    },
    name: 'PublishedCommentView',
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
        axios.get(API_URL + this.$route.params.id)
            .then(response => {
                this.post = response.data;
                this.post.date = getReadableDate(this.post.date)
            }).catch(e => {
                console.error(e);
            })
    }
}

        // publishedComments: [
        //     {
        //         date: "04/05/2022",
        //         email: "lewogona@gmail.com",
        //         comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        //             labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        //             nisi ut aliquip ex ea commodo consequat.`
        //     },
        //     {
        //         date: "05/05/2022",
        //         email: "keysim.fr@gmail.com",
        //         comment: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        //         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
        //         id est laborum.`
        //     }
        // ]
</script>
